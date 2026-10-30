// data/mockdata.ts

export type Role = "admin" | "teacher" | "student";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  teacherId: string;
  teacherName: string;
  studentsEnrolled: number;
  color: string; // For UI styling
  category: string;
  progress: number;
  lessons: number;
  duration: string;
  accent: string;
}

export interface Assignment {
  id: string;
  courseId: string;
  title: string;
  dueDate: string;
  status: "pending" | "submitted" | "graded";
  grade?: number;
}

// --- THE MOCK DATA ---

export const mockUsers: User[] = [
  {
    id: "u1",
    name: "Hamza Khan",
    email: "hamza@school.com",
    role: "admin",
    avatar: "/avatars/hamza.jpg",
  },
  {
    id: "u2",
    name: "Sarah Smith",
    email: "sarah@school.com",
    role: "teacher",
    avatar: "/avatars/sarah.jpg",
  },
  {
    id: "u3",
    name: "John Doe",
    email: "john@school.com",
    role: "student",
    avatar: "/avatars/john.jpg",
  },
  {
    id: "u4",
    name: "Emma Wilson",
    email: "emma@school.com",
    role: "student",
    avatar: "/avatars/emma.jpg",
  },
  {
    id: "u5",
    name: "Michael Chen",
    email: "michael@school.com",
    role: "teacher",
    avatar: "/avatars/michael.jpg",
  },
  {
    id: "u6",
    name: "Olivia Davis",
    email: "olivia@school.com",
    role: "student",
    avatar: "/avatars/olivia.jpg",
  },
];

export const mockCourses: Course[] = [
  {
    id: "c1",
    title: "Introduction to Computer Science",
    description: "Learn the basics of programming and algorithms.",
    teacherId: "u2",
    teacherName: "Sarah Smith",
    studentsEnrolled: 34,
    color: "bg-blue-500",
    category: "Computer Science",
    progress: 68,
    lessons: 24,
    duration: "18h 40m",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    id: "c2",
    title: "Advanced Mathematics",
    description: "Calculus, algebra, and geometry for advanced students.",
    teacherId: "u2",
    teacherName: "Sarah Smith",
    studentsEnrolled: 22,
    color: "bg-purple-500",
    category: "Mathematics",
    progress: 42,
    lessons: 18,
    duration: "14h 20m",
    accent: "from-violet-500 to-fuchsia-400",
  },
  {
    id: "c3",
    title: "Modern Web Development",
    description: "Build fast, accessible websites with modern web technologies.",
    teacherId: "u5",
    teacherName: "Michael Chen",
    studentsEnrolled: 41,
    color: "bg-orange-500",
    category: "Development",
    progress: 76,
    lessons: 32,
    duration: "26h 15m",
    accent: "from-orange-500 to-amber-400",
  },
  {
    id: "c4",
    title: "Digital Design Fundamentals",
    description: "Explore visual hierarchy, typography, color, and UX principles.",
    teacherId: "u2",
    teacherName: "Sarah Smith",
    studentsEnrolled: 28,
    color: "bg-pink-500",
    category: "Design",
    progress: 55,
    lessons: 20,
    duration: "16h 30m",
    accent: "from-pink-500 to-rose-400",
  },
  {
    id: "c5",
    title: "English Literature",
    description: "Study influential writers, literary movements, and close reading.",
    teacherId: "u5",
    teacherName: "Michael Chen",
    studentsEnrolled: 31,
    color: "bg-emerald-500",
    category: "Humanities",
    progress: 31,
    lessons: 16,
    duration: "12h 45m",
    accent: "from-emerald-500 to-teal-400",
  },
  {
    id: "c6",
    title: "Business & Entrepreneurship",
    description: "Turn ideas into viable products with practical business skills.",
    teacherId: "u2",
    teacherName: "Sarah Smith",
    studentsEnrolled: 37,
    color: "bg-indigo-500",
    category: "Business",
    progress: 64,
    lessons: 22,
    duration: "20h 10m",
    accent: "from-indigo-500 to-blue-400",
  },
];

export const mockAssignments: Assignment[] = [
  {
    id: "a1",
    courseId: "c1",
    title: "Build a Calculator",
    dueDate: "2026-11-05",
    status: "pending",
  },
  {
    id: "a2",
    courseId: "c2",
    title: "Calculus Worksheet 1",
    dueDate: "2026-11-02",
    status: "submitted",
  },
  {
    id: "a3",
    courseId: "c3",
    title: "Responsive Portfolio Website",
    dueDate: "2026-11-08",
    status: "pending",
  },
  {
    id: "a4",
    courseId: "c4",
    title: "Design a Mobile App Screen",
    dueDate: "2026-11-10",
    status: "submitted",
  },
  {
    id: "a5",
    courseId: "c5",
    title: "Literary Analysis Essay",
    dueDate: "2026-11-12",
    status: "pending",
  },
  {
    id: "a6",
    courseId: "c1",
    title: "Algorithms Quiz",
    dueDate: "2026-10-28",
    status: "graded",
    grade: 92,
  },
];
