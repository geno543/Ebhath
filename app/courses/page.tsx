import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGraduationCap, FaClock, FaUsers, FaStar, FaGlobe, FaBook, FaChalkboardTeacher } from 'react-icons/fa';

interface Course {
  id: number;
  title: string;
  description: string;
  language: string;
  duration: string;
  level: string;
  students: number;
  category: string;
  image: string;
  available: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Arabic course",
    description: "By Mohammed Mashhour",
    language: "Arabic",
    duration: "8 weeks",
    level: "Beginner",
    students: 1500,
    category: "Coming Soon"
   , image:"https://plus.unsplash.com/premium_photo-1675623429538-d1d00076c925?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFyYWJpYyUyMGxhbmd1YWdlfGVufDB8fDB8fHww",
  available:'Available'
  },
  {
    id: 2,
    title: "Filipino course",
    description: "By Jake Yap",
    language: "Filipino",
    duration: "8 weeks",
    level: "Beginner",
    students: 200,
    image: "https://www.divinalaw.com/wp-content/uploads/2020/05/Naturalization-1024x707.jpg",
    category: "Coming Soon"
    ,available:'Coming Soon'
  },
  {
    id: 3,
    title: "Swahili course",
    description: "By Olive Stanely",
    language: "Swahili",
    duration: "8 weeks",
    level: "Beginner",
    students: 150,
    image: "https://www.soas.ac.uk/sites/default/files/styles/narrow_large/public/2022-10/shutterstock_668318569.jpg?h=dc68203d&itok=JXgTzRpH",
    category: "Methodology"
    ,available:'Coming Soon'
  },
  // {
  //   id: 4,
  //   title: "Research Paper Writing",
  //   description: "Learn how to write and structure academic research papers effectively.",
  //   language: "Arabic",
  //   duration: "8 weeks",
  //   level: "Intermediate",
  //   students: 1500,
  //   rating: 4.9,
  //   image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop",
  //   category: "Writing"
  // },
  // {
  //   id: 5,
  //   title: "Data Analysis with R",
  //   description: "Master data analysis techniques using R programming language.",
  //   language: "Filipino",
  //   duration: "12 weeks",
  //   level: "Advanced",
  //   students: 750,
  //   rating: 4.8,
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  //   category: "Statistics"
  // },
  // {
  //   id: 6,
  //   title: "Research Ethics",
  //   description: "Understanding ethical considerations in research methodology.",
  //   language: "Swahili",
  //   duration: "4 weeks",
  //   level: "Beginner",
  //   students: 1100,
  //   rating: 4.6,
  //   image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
  //   category: "Ethics"
  // }
];

const categories = ["All"];
const languages = ["All", "Arabic", "Filipino", "Swahili"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const sortCourses = (coursesToSort: Course[]) => {
    switch (sortBy) {
      case "popular":
        return [...coursesToSort].sort((a, b) => b.students - a.students);
      case "rating":
        return [...coursesToSort].sort((a, b) => b.rating - a.rating);
      case "newest":
        return [...coursesToSort]; // Assuming the array is already in chronological order
      default:
        return coursesToSort;
    }
  };

  const filteredCourses = sortCourses(courses.filter(course => {
    return (
      (selectedCategory === "All" || course.category === selectedCategory) &&
      (selectedLanguage === "All" || course.language === selectedLanguage) &&
      (selectedLevel === "All" || course.level === selectedLevel) &&
      (course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       course.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <main className="min-h-screen bg-[#0B1221] pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a365d2e_1px,transparent_1px),linear-gradient(to_bottom,#1a365d2e_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Explore Our Courses
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover research methodology courses in your native language
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-[#1E293B]/80 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <FaBook className="text-gray-400 w-5 h-5" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Sort Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-[#1E293B] text-gray-300 border border-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer pr-10"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-400 flex items-center"
              >
                <span className="mr-2">{filteredCourses.length}</span>
                {filteredCourses.length === 1 ? 'course' : 'courses'} found
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h3 className="text-white font-semibold mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-blue-500 text-white'
                          : 'bg-[#1E293B] text-gray-300 hover:bg-blue-500/20'
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Language Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-white font-semibold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <button
                      key={language}
                      onClick={() => setSelectedLanguage(language)}
                      className={px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedLanguage === language
                          ? 'bg-purple-500 text-white'
                          : 'bg-[#1E293B] text-gray-300 hover:bg-purple-500/20'
                      }}
                    >
                      {language}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Level Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                <h3 className="text-white font-semibold mb-4">Level</h3>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedLevel === level
                          ? 'bg-green-500 text-white'
                          : 'bg-[#1E293B] text-gray-300 hover:bg-green-500/20'
                      }}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-[#1E293B] rounded-2xl overflow-hidden border border-blue-500/20 group-hover:border-blue-400 transition-all duration-300">
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] to-transparent" />
                    </div>
                    <div className="absolute top-4 right-4 bg-blue-500/90 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                      {course.language}
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-white">{course.title}</h3>
                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                        {course.category}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4 line-clamp-2">{course.description}</p>

                    {/* Course Meta */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-gray-400 group">
                        <FaClock className="w-4 h-4 mr-2 group-hover:text-blue-400 transition-colors duration-300" />
                        <span className="group-hover:text-blue-400 transition-colors duration-300">{course.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-400 group">
                        <FaUsers className="w-4 h-4 mr-2 group-hover:text-purple-400 transition-colors duration-300" />
                        <span className="group-hover:text-purple-400 transition-colors duration-300">{course.students}+ students</span>
                      </div>
                      <div className="flex items-center text-gray-400 group">
                        <FaGraduationCap className="w-4 h-4 mr-2 group-hover:text-green-400 transition-colors duration-300" />
                        <span className="group-hover:text-green-400 transition-colors duration-300">{course.level}</span>
                      </div>
                      {/* <div className="flex items-center text-yellow-400">
                        <FaStar className="w-4 h-4 mr-2" />
                        <span>{course.rating}</span>
                      </div> */}
                    </div>

                    {/* Action Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
                    >
                      <span>{course.available}</span>
                      <svg 
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <FaBook className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">No Courses Found</h3>
              <p className="text-gray-400">Try adjusting your search or filters</p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
