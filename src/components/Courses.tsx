'use client';

import React, { useState } from 'react';
import PaymentModal from './PaymentModal';
import {
  ChevronDown,
  BookOpen,
  Users,
  Clock,
  Award,
  Star,
  Play,
  FileText,
  Code,
  Download,
  MessageCircle,
  CheckCircle,
  Lock,
  Video,
  FileCode,
  Zap,
  Target,
  TrendingUp,
  Calendar,
  User,
  Lightbulb,
} from 'lucide-react';

// Dummy course data
const coursesData = [
  {
    id: 1,
    title: 'Web Development Fundamentals',
    instructor: {
      name: 'Sarah Johnson',
      avatar: '👩‍🏫',
      bio: 'Senior Full Stack Developer with 8+ years experience',
    },
    description: 'Learn the basics of web development including HTML, CSS, and JavaScript fundamentals.',
    thumbnail: '🌐',
    price: 49.99,
    originalPrice: 99.99,
    students: 1240,
    rating: 4.8,
    reviews: 342,
    duration: '8 weeks',
    level: 'Beginner',
    category: 'Web Development',
    language: 'English',
    certificate: true,
    progress: 45,
    enrolled: true,
    modules: [
      {
        id: 1,
        title: 'Introduction to Web Development',
        duration: '2 hours',
        lessons: [
          {
            id: 1,
            title: 'What is Web Development?',
            type: 'video',
            duration: '15 min',
            completed: true,
            resources: [
              { type: 'pdf', name: 'Introduction Guide.pdf', size: '2.5 MB' },
              { type: 'code', name: 'starter-files.zip', size: '1.2 MB' },
            ],
            description: 'Understanding the basics and career paths in web development',
          },
          {
            id: 2,
            title: 'Setting Up Your Development Environment',
            type: 'video',
            duration: '20 min',
            completed: true,
            resources: [
              { type: 'pdf', name: 'Setup Guide.pdf', size: '1.8 MB' },
              { type: 'code', name: 'config-files.zip', size: '800 KB' },
            ],
            description: 'Installing necessary tools and software',
          },
          {
            id: 3,
            title: 'HTML Basics',
            type: 'video',
            duration: '25 min',
            completed: false,
            resources: [
              { type: 'pdf', name: 'HTML Cheatsheet.pdf', size: '3.2 MB' },
              { type: 'code', name: 'html-examples.zip', size: '2.1 MB' },
            ],
            description: 'Learn the structure of HTML and semantic markup',
          },
        ],
      },
      {
        id: 2,
        title: 'CSS Styling and Layouts',
        duration: '3 hours',
        lessons: [
          {
            id: 4,
            title: 'CSS Fundamentals',
            type: 'video',
            duration: '30 min',
            completed: false,
            resources: [
              { type: 'pdf', name: 'CSS Guide.pdf', size: '2.8 MB' },
              { type: 'code', name: 'css-files.zip', size: '1.5 MB' },
            ],
            description: 'Understanding selectors, properties, and values',
          },
          {
            id: 5,
            title: 'Flexbox and Grid',
            type: 'video',
            duration: '35 min',
            completed: false,
            resources: [
              { type: 'pdf', name: 'Layouts Guide.pdf', size: '2.2 MB' },
              { type: 'code', name: 'layout-examples.zip', size: '1.8 MB' },
            ],
            description: 'Modern CSS layout techniques',
          },
          {
            id: 6,
            title: 'Responsive Design',
            type: 'video',
            duration: '28 min',
            completed: false,
            resources: [
              { type: 'pdf', name: 'Responsive Design.pdf', size: '3.1 MB' },
              { type: 'code', name: 'responsive-templates.zip', size: '2.3 MB' },
            ],
            description: 'Building mobile-friendly websites',
          },
        ],
      },
      {
        id: 3,
        title: 'JavaScript Essentials',
        duration: '4 hours',
        lessons: [
          {
            id: 7,
            title: 'JavaScript Basics',
            type: 'video',
            duration: '40 min',
            completed: false,
            resources: [
              { type: 'pdf', name: 'JS Fundamentals.pdf', size: '2.6 MB' },
              { type: 'code', name: 'js-basics.zip', size: '1.3 MB' },
            ],
            description: 'Variables, operators, and data types',
          },
          {
            id: 8,
            title: 'Functions and Scope',
            type: 'video',
            duration: '35 min',
            completed: false,
            resources: [
              { type: 'pdf', name: 'Functions Guide.pdf', size: '2.4 MB' },
              { type: 'code', name: 'function-examples.zip', size: '1.1 MB' },
            ],
            description: 'Understanding functions and variable scope',
          },
          {
            id: 9,
            title: 'DOM Manipulation',
            type: 'video',
            duration: '42 min',
            completed: false,
            resources: [
              { type: 'pdf', name: 'DOM Guide.pdf', size: '2.9 MB' },
              { type: 'code', name: 'dom-projects.zip', size: '1.7 MB' },
            ],
            description: 'Interacting with the Document Object Model',
          },
        ],
      },
    ],
    requirements: [
      'A computer with internet connection',
      'Basic knowledge of operating system',
      'Text editor (VS Code recommended)',
      'Enthusiasm to learn',
    ],
    learningOutcomes: [
      'Build responsive websites from scratch',
      'Understand HTML, CSS, and JavaScript',
      'Deploy websites to the web',
      'Best practices and coding standards',
    ],
  },
  {
    id: 2,
    title: 'Advanced React & Next.js Mastery',
    instructor: {
      name: 'Mike Chen',
      avatar: '👨‍💻',
      bio: 'React Expert and Full Stack Developer',
    },
    description: 'Master React hooks, state management, and build production-ready applications with Next.js.',
    thumbnail: '⚛️',
    price: 79.99,
    originalPrice: 149.99,
    students: 856,
    rating: 4.9,
    reviews: 198,
    duration: '12 weeks',
    level: 'Intermediate',
    category: 'React',
    language: 'English',
    certificate: true,
    progress: 0,
    enrolled: false,
    modules: [
      {
        id: 1,
        title: 'React Fundamentals Review',
        duration: '2 hours',
        lessons: [
          {
            id: 1,
            title: 'Components and Props',
            type: 'video',
            duration: '25 min',
            completed: false,
            resources: [
              { type: 'pdf', name: 'Components.pdf', size: '2.1 MB' },
              { type: 'code', name: 'component-examples.zip', size: '1.4 MB' },
            ],
            description: 'Creating and using React components',
          },
          {
            id: 2,
            title: 'State and Lifecycle',
            type: 'video',
            duration: '30 min',
            completed: false,
            resources: [
              { type: 'pdf', name: 'State Guide.pdf', size: '2.3 MB' },
              { type: 'code', name: 'state-examples.zip', size: '1.2 MB' },
            ],
            description: 'Managing component state and lifecycle methods',
          },
        ],
      },
      {
        id: 2,
        title: 'Advanced Hooks and Patterns',
        duration: '3 hours',
        lessons: [
          {
            id: 3,
            title: 'Custom Hooks',
            type: 'video',
            duration: '35 min',
            completed: false,
            resources: [
              { type: 'pdf', name: 'Hooks Guide.pdf', size: '2.8 MB' },
              { type: 'code', name: 'hooks-library.zip', size: '1.9 MB' },
            ],
            description: 'Creating reusable custom hooks',
          },
          {
            id: 4,
            title: 'Context API and Redux',
            type: 'video',
            duration: '40 min',
            completed: false,
            resources: [
              { type: 'pdf', name: 'State Management.pdf', size: '3.2 MB' },
              { type: 'code', name: 'redux-setup.zip', size: '2.1 MB' },
            ],
            description: 'Global state management solutions',
          },
        ],
      },
      {
        id: 3,
        title: 'Next.js Framework',
        duration: '4 hours',
        lessons: [
          {
            id: 5,
            title: 'Getting Started with Next.js',
            type: 'video',
            duration: '30 min',
            completed: false,
            resources: [
              { type: 'pdf', name: 'Next.js Guide.pdf', size: '2.5 MB' },
              { type: 'code', name: 'nextjs-starter.zip', size: '1.8 MB' },
            ],
            description: 'Setting up Next.js projects',
          },
          {
            id: 6,
            title: 'API Routes and Deployment',
            type: 'video',
            duration: '38 min',
            completed: false,
            resources: [
              { type: 'pdf', name: 'Deployment.pdf', size: '2.7 MB' },
              { type: 'code', name: 'api-examples.zip', size: '1.5 MB' },
            ],
            description: 'Creating backend APIs and deploying applications',
          },
        ],
      },
    ],
    requirements: [
      'Strong JavaScript knowledge',
      'Familiarity with React basics',
      'Node.js installed',
      'Git version control basics',
    ],
    learningOutcomes: [
      'Master React hooks and custom hooks',
      'Implement global state management',
      'Build production-ready Next.js apps',
      'Deploy to production servers',
    ],
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    instructor: {
      name: 'Emma Davis',
      avatar: '👩‍🎨',
      bio: 'Award-winning UX Designer with 10+ years experience',
    },
    description: 'Learn design principles, user research, and create beautiful, user-centered interfaces.',
    thumbnail: '🎨',
    price: 59.99,
    originalPrice: 119.99,
    students: 934,
    rating: 4.7,
    reviews: 267,
    duration: '10 weeks',
    level: 'Beginner',
    category: 'Design',
    language: 'English',
    certificate: true,
    progress: 0,
    enrolled: false,
    modules: [
      {
        id: 1,
        title: 'Design Principles',
        duration: '2 hours',
        lessons: [
          {
            id: 1,
            title: 'Introduction to Design',
            type: 'video',
            duration: '20 min',
            completed: false,
            resources: [
              { type: 'pdf', name: 'Design Principles.pdf', size: '3.1 MB' },
              { type: 'code', name: 'design-assets.zip', size: '5.2 MB' },
            ],
            description: 'Understanding core design principles',
          },
          {
            id: 2,
            title: 'Color Theory and Typography',
            type: 'video',
            duration: '28 min',
            completed: false,
            resources: [
              { type: 'pdf', name: 'Color Guide.pdf', size: '4.2 MB' },
              { type: 'code', name: 'typography-kit.zip', size: '2.8 MB' },
            ],
            description: 'Colors, fonts, and visual hierarchy',
          },
        ],
      },
      {
        id: 2,
        title: 'User Research and Personas',
        duration: '3 hours',
        lessons: [
          {
            id: 3,
            title: 'User Research Methods',
            type: 'video',
            duration: '35 min',
            completed: false,
            resources: [
              { type: 'pdf', name: 'Research Guide.pdf', size: '2.9 MB' },
              { type: 'code', name: 'research-templates.zip', size: '1.6 MB' },
            ],
            description: 'Conducting effective user research',
          },
          {
            id: 4,
            title: 'Creating User Personas',
            type: 'video',
            duration: '32 min',
            completed: false,
            resources: [
              { type: 'pdf', name: 'Personas Guide.pdf', size: '2.4 MB' },
              { type: 'code', name: 'persona-templates.zip', size: '1.3 MB' },
            ],
            description: 'Building detailed user personas',
          },
        ],
      },
    ],
    requirements: [
      'Design software (Figma preferred - free)',
      'Basic understanding of design',
      'Computer with design tools',
      'Creative mindset',
    ],
    learningOutcomes: [
      'Understand core design principles',
      'Conduct user research',
      'Create effective design systems',
      'Build wireframes and prototypes',
    ],
  },
  {
    id: 4,
    title: 'Python for Data Science',
    instructor: {
      name: 'Alex Rodriguez',
      avatar: '👨‍🔬',
      bio: 'Data Science Expert and ML Engineer',
    },
    description: 'Learn Python programming for data analysis, visualization, and machine learning.',
    thumbnail: '🐍',
    price: 69.99,
    originalPrice: 139.99,
    students: 1567,
    rating: 4.8,
    reviews: 412,
    duration: '14 weeks',
    level: 'Intermediate',
    category: 'Data Science',
    language: 'English',
    certificate: true,
    progress: 0,
    enrolled: false,
    modules: [
      {
        id: 1,
        title: 'Python Basics',
        duration: '2 hours',
        lessons: [
          {
            id: 1,
            title: 'Python Setup and Basics',
            type: 'video',
            duration: '25 min',
            completed: false,
            resources: [
              { type: 'pdf', name: 'Python Setup.pdf', size: '1.9 MB' },
              { type: 'code', name: 'python-basics.zip', size: '1.1 MB' },
            ],
            description: 'Setting up Python and learning basics',
          },
          {
            id: 2,
            title: 'Data Types and Variables',
            type: 'video',
            duration: '30 min',
            completed: false,
            resources: [
              { type: 'pdf', name: 'Data Types.pdf', size: '2.2 MB' },
              { type: 'code', name: 'data-examples.zip', size: '1.4 MB' },
            ],
            description: 'Working with Python data types',
          },
        ],
      },
      {
        id: 2,
        title: 'Data Analysis with Pandas',
        duration: '3 hours',
        lessons: [
          {
            id: 3,
            title: 'Introduction to Pandas',
            type: 'video',
            duration: '35 min',
            completed: false,
            resources: [
              { type: 'pdf', name: 'Pandas Guide.pdf', size: '2.8 MB' },
              { type: 'code', name: 'pandas-notebooks.zip', size: '2.1 MB' },
            ],
            description: 'Working with data frames and series',
          },
        ],
      },
    ],
    requirements: [
      'Python 3.8 or higher',
      'Jupyter Notebook',
      'Basic programming knowledge',
      'Math fundamentals',
    ],
    learningOutcomes: [
      'Master Python for data analysis',
      'Use Pandas and NumPy libraries',
      'Create data visualizations',
      'Build machine learning models',
    ],
  },
];

export default function Courses() {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);
  const [expandedModule, setExpandedModule] = useState<{ courseId: number; moduleId: number } | null>(null);
  const [expandedLesson, setExpandedLesson] = useState<number | null>(null);
  const [selectedCourseForPayment, setSelectedCourseForPayment] = useState<typeof coursesData[0] | null>(null);

  const toggleCourse = (courseId: number) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
    setExpandedModule(null);
    setExpandedLesson(null);
  };

  const toggleModule = (courseId: number, moduleId: number) => {
    setExpandedModule(
      expandedModule?.courseId === courseId && expandedModule?.moduleId === moduleId
        ? null
        : { courseId, moduleId }
    );
  };

  const toggleLesson = (lessonId: number) => {
    setExpandedLesson(expandedLesson === lessonId ? null : lessonId);
  };

  const calculateModuleProgress = (lessons: typeof coursesData[0]['modules'][0]['lessons']) => {
    const completed = lessons.filter((l) => l.completed).length;
    return Math.round((completed / lessons.length) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Payment Modal */}
      {selectedCourseForPayment && (
        <PaymentModal
          isOpen={!!selectedCourseForPayment}
          onClose={() => setSelectedCourseForPayment(null)}
          course={selectedCourseForPayment}
        />
      )}
      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-white flex items-center gap-3">
              <BookOpen className="w-10 h-10 text-blue-500" />
              My Courses
            </h1>
            <p className="text-slate-400">
              {coursesData.filter(c => c.enrolled).length} course{coursesData.filter(c => c.enrolled).length !== 1 ? 's' : ''} in progress • {coursesData.length} total courses
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-gradient-to-r from-slate-800 to-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition"
            >
              {/* Course Header - Always Visible */}
              <div
                onClick={() => toggleCourse(course.id)}
                className="p-6 cursor-pointer hover:bg-slate-700/30 transition"
              >
                <div className="flex items-start justify-between gap-6">
                  {/* Left Content */}
                  <div className="flex-1 flex gap-6">
                    {/* Thumbnail */}
                    <div className="hidden sm:flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg text-4xl flex-shrink-0">
                      {course.thumbnail}
                    </div>

                    {/* Course Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h2 className="text-xl font-bold text-white">{course.title}</h2>
                        {course.certificate && (
                          <span className="inline-flex items-center gap-1 bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs font-medium">
                            <Award className="w-3 h-3" />
                            Certificate
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1 bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs font-medium">
                          {course.level}
                        </span>
                      </div>

                      <p className="text-slate-400 text-sm mb-3 line-clamp-1">{course.description}</p>

                      {/* Quick Stats */}
                      <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          {course.rating} ({course.reviews} reviews)
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {course.students.toLocaleString()} students
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {course.instructor.name}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Progress & Enroll Button */}
                  <div className="flex flex-col items-end gap-3 flex-shrink-0">
                    {course.enrolled ? (
                      <div className="w-32">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-slate-400">Progress</span>
                          <span className="text-sm font-semibold text-blue-400">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">${course.price}</div>
                        <div className="text-xs text-slate-400 line-through">${course.originalPrice}</div>
                      </div>
                    )}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!course.enrolled) {
                          setSelectedCourseForPayment(course);
                        }
                      }}
                      className={`px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${
                      course.enrolled
                        ? 'bg-blue-600/20 text-blue-300 hover:bg-blue-600/30'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}>
                      {course.enrolled ? 'Continue' : 'Enroll'}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          expandedCourse === course.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedCourse === course.id && (
                <div className="border-t border-slate-700 bg-slate-900/50">
                  {/* Course Overview Section */}
                  <div className="p-6 border-b border-slate-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">About This Course</h3>
                        <p className="text-slate-300 mb-6">{course.description}</p>

                        <h4 className="text-base font-semibold text-white mb-3">What You'll Learn</h4>
                        <ul className="space-y-2">
                          {course.learningOutcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Column */}
                      <div>
                        <h4 className="text-base font-semibold text-white mb-3">Requirements</h4>
                        <ul className="space-y-2 mb-6">
                          {course.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                              <Target className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>

                        <div className="bg-slate-800/50 rounded-lg p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Instructor</span>
                            <span className="text-white font-medium">{course.instructor.avatar} {course.instructor.name}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Language</span>
                            <span className="text-white font-medium">{course.language}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Category</span>
                            <span className="text-white font-medium">{course.category}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Modules Section */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      <BookOpen className="w-5 h-5 inline mr-2" />
                      Course Content ({course.modules.length} modules)
                    </h3>

                    <div className="space-y-3">
                      {course.modules.map((module) => (
                        <div
                          key={module.id}
                          className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden"
                        >
                          {/* Module Header */}
                          <div
                            onClick={() => toggleModule(course.id, module.id)}
                            className="p-4 cursor-pointer hover:bg-slate-700/30 transition flex items-center justify-between"
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Zap className="w-5 h-5 text-yellow-400" />
                                <h4 className="font-semibold text-white">{module.title}</h4>
                              </div>
                              <div className="flex items-center gap-4 text-xs text-slate-400">
                                <span>{module.lessons.length} lessons</span>
                                <span>{module.duration}</span>
                                <span>{calculateModuleProgress(module.lessons)}% complete</span>
                              </div>
                            </div>
                            <ChevronDown
                              className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${
                                expandedModule?.courseId === course.id &&
                                expandedModule?.moduleId === module.id
                                  ? 'rotate-180'
                                  : ''
                              }`}
                            />
                          </div>

                          {/* Module Progress Bar */}
                          <div className="px-4 pb-3">
                            <div className="w-full bg-slate-700 rounded-full h-1.5">
                              <div
                                className="bg-gradient-to-r from-green-500 to-green-600 h-1.5 rounded-full transition-all"
                                style={{ width: `${calculateModuleProgress(module.lessons)}%` }}
                              />
                            </div>
                          </div>

                          {/* Module Lessons - Expanded */}
                          {expandedModule?.courseId === course.id &&
                            expandedModule?.moduleId === module.id && (
                              <div className="border-t border-slate-700 bg-slate-900/30 divide-y divide-slate-700">
                                {module.lessons.map((lesson) => (
                                  <div key={lesson.id} className="overflow-hidden">
                                    {/* Lesson Header */}
                                    <div
                                      onClick={() => toggleLesson(lesson.id)}
                                      className="p-4 cursor-pointer hover:bg-slate-700/30 transition flex items-center gap-3"
                                    >
                                      <div className="flex-shrink-0">
                                        {lesson.completed ? (
                                          <CheckCircle className="w-5 h-5 text-green-500" />
                                        ) : (
                                          <Lock className="w-5 h-5 text-slate-500" />
                                        )}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                          {lesson.type === 'video' ? (
                                            <Play className="w-4 h-4 text-blue-400" />
                                          ) : (
                                            <FileText className="w-4 h-4 text-purple-400" />
                                          )}
                                          <h5 className="font-medium text-white truncate">{lesson.title}</h5>
                                        </div>
                                        <p className="text-xs text-slate-400 mt-1">{lesson.description}</p>
                                      </div>
                                      <span className="text-xs text-slate-400 flex-shrink-0">{lesson.duration}</span>
                                      <ChevronDown
                                        className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${
                                          expandedLesson === lesson.id ? 'rotate-180' : ''
                                        }`}
                                      />
                                    </div>

                                    {/* Lesson Details - Expanded */}
                                    {expandedLesson === lesson.id && (
                                      <div className="p-4 bg-slate-800/50 border-t border-slate-700 space-y-4">
                                        {/* Lesson Video/Content */}
                                        <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 flex flex-col items-center justify-center min-h-64">
                                          {lesson.type === 'video' ? (
                                            <>
                                              <Video className="w-16 h-16 text-blue-400 mb-3" />
                                              <p className="text-slate-400 mb-4">Video Content</p>
                                              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition">
                                                <Play className="w-4 h-4" />
                                                {lesson.completed ? 'Replay Video' : 'Play Video'}
                                              </button>
                                            </>
                                          ) : (
                                            <>
                                              <FileCode className="w-16 h-16 text-purple-400 mb-3" />
                                              <p className="text-slate-400">Code Lesson</p>
                                            </>
                                          )}
                                        </div>

                                        {/* Resources */}
                                        {lesson.resources.length > 0 && (
                                          <div>
                                            <h6 className="font-semibold text-white mb-3 flex items-center gap-2">
                                              <Download className="w-4 h-4" />
                                              Resources & Materials
                                            </h6>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                              {lesson.resources.map((resource, idx) => (
                                                <button
                                                  key={idx}
                                                  className="bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-lg p-3 text-left transition group"
                                                >
                                                  <div className="flex items-center gap-2 mb-1">
                                                    {resource.type === 'pdf' ? (
                                                      <FileText className="w-4 h-4 text-red-400" />
                                                    ) : (
                                                      <Code className="w-4 h-4 text-green-400" />
                                                    )}
                                                    <span className="text-sm font-medium text-white group-hover:text-blue-400 transition truncate">
                                                      {resource.name}
                                                    </span>
                                                  </div>
                                                  <span className="text-xs text-slate-400">{resource.size}</span>
                                                </button>
                                              ))}
                                            </div>
                                          </div>
                                        )}

                                        {/* Lesson Actions */}
                                        <div className="flex gap-3 pt-4 border-t border-slate-700">
                                          {!lesson.completed && (
                                            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition flex items-center justify-center gap-2">
                                              <CheckCircle className="w-4 h-4" />
                                              Mark as Complete
                                            </button>
                                          )}
                                          <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 rounded-lg transition flex items-center justify-center gap-2">
                                            <MessageCircle className="w-4 h-4" />
                                            Discussions
                                          </button>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
