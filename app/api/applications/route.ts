import { NextResponse } from 'next/server';
import { Pool } from 'pg';

let pool: Pool | null = null;

function getPool() {
  if (!pool && process.env.DATABASE_URL) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    });
  }
  return pool;
}

export async function POST(request: Request) {
  const currentPool = getPool();
  if (!currentPool) {
    return NextResponse.json(
      { error: 'Database configuration not available' },
      { status: 503 }
    );
  }

  let client;
  try {
    client = await currentPool.connect();
    const data = await request.json();
    
    // Create table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS applications (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        personal_info JSONB NOT NULL,
        research_preferences JSONB NOT NULL,
        commitments JSONB NOT NULL,
        essay TEXT NOT NULL,
        metadata JSONB NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Insert the application data
    const result = await client.query(
      'INSERT INTO applications (personal_info, research_preferences, commitments, essay, metadata) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      [
        data.personal_info,
        data.research_preferences,
        data.commitments,
        data.essay,
        data.metadata
      ]
    );

    return NextResponse.json({ success: true, id: result.rows[0].id });
  } catch (error: any) {
    console.error('Database Error:', error);
    
    let errorMessage = 'An unexpected error occurred';
    if (error.code === '28P01') {
      errorMessage = 'Database authentication failed';
    } else if (error.code === '3D000') {
      errorMessage = 'Database does not exist';
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  } finally {
    if (client) {
      client.release();
    }
  }
}