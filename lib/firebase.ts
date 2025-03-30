'use client';

import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB-903BlNS_FJICx_CZEN0pWLIPTKPi1R8",
  authDomain: "ebhath-form.firebaseapp.com",
  projectId: "ebhath-form",
  storageBucket: "ebhath-form.firebasestorage.app",
  messagingSenderId: "455807039717",
  appId: "1:455807039717:web:f1c532786c9c9d86a67c0c",
  measurementId: "G-09YH28QSGM"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics only on client side
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { db };