import Link from "next/link";
import { mockCourses } from "@/lib/mockData";

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = mockCourses.find((item) => item.id === id);

  if (!course) {
    return (
      <main className="min-h-screen bg-[#f7f8fc] px-4 pt-20 sm:px-6 xl:px-8 xl:pt-8">
        <h1 className="text-2xl font-bold">Course not found</h1>
        <Link href="/courses" className="mt-4 inline-block text-indigo-600">Back to courses</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f8fc] px-4 py-20 sm:px-6 xl:px-8 xl:py-8">
      <Link href="/courses" className="text-sm font-semibold text-indigo-600">← Back to courses</Link>
      <div className={`mt-5 rounded-3xl bg-gradient-to-br ${course.accent} p-6 text-white sm:p-8`}>
        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">{course.category}</span>
        <h1 className="mt-5 text-3xl font-bold">{course.title}</h1>
        <p className="mt-3 max-w-2xl text-white/90">{course.description}</p>
      </div>
      <section className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">Instructor</p><p className="mt-1 font-bold">{course.teacherName}</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">Progress</p><p className="mt-1 font-bold">{course.progress}%</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">Lessons</p><p className="mt-1 font-bold">{course.lessons}</p></div>
      </section>
      <button className="mt-6 h-11 rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-200">Continue learning</button>
    </main>
  );
}
