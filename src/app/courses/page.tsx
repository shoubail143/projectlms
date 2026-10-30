"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { mockCourses } from "@/lib/mockData";

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(mockCourses.map((course) => course.category)))];
  const filteredCourses = useMemo(() => mockCourses.filter((course) => {
    const matchesCategory = category === "All" || course.category === category;
    const matchesSearch = `${course.title} ${course.description} ${course.teacherName}`.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  }), [category, search]);

  return (
    <main className="min-h-screen bg-[#f7f8fc] px-3 pb-8 pt-20 sm:px-6 xl:px-8 xl:pt-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-indigo-600">Learning library</p>
            <h1 className="mt-1 text-3xl font-bold">My Courses</h1>
            <p className="mt-2 text-sm text-slate-500">Continue learning and discover new skills.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:flex">
            <div className="rounded-xl bg-white px-4 py-2 text-center shadow-sm ring-1 ring-slate-200"><p className="text-lg font-bold text-indigo-600">{mockCourses.length}</p><p className="text-[10px] text-slate-500">Courses</p></div>
            <div className="rounded-xl bg-white px-4 py-2 text-center shadow-sm ring-1 ring-slate-200"><p className="text-lg font-bold text-emerald-600">58%</p><p className="text-[10px] text-slate-500">Avg. progress</p></div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search courses..." className="h-11 w-full rounded-xl bg-slate-100 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500"/>
          </div>
          <button onClick={() => { setSearch(""); setCategory("All"); }} className="h-11 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-500 hover:bg-slate-50">Reset</button>
        </div>

        <div className="scrollbar-none mt-4 flex gap-2 overflow-x-auto pb-1">
          {categories.map((item) => (
            <button key={item} onClick={() => setCategory(item)} className={`h-9 shrink-0 rounded-full px-4 text-xs font-semibold transition ${category === item ? "bg-indigo-600 text-white shadow-md shadow-indigo-200" : "border border-slate-200 bg-white text-slate-500 hover:border-indigo-300 hover:text-indigo-600"}`}>{item}</button>
          ))}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filteredCourses.map((course) => (
          <article
            key={course.id}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              className={`relative h-32 bg-gradient-to-br ${course.accent}`}
            >
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
              <span className="absolute bottom-3 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-700">{course.category}</span>
            </div>
            <div className="p-5">
            <h2 className="text-lg font-bold">
              {course.title}
            </h2>
            <p className="mt-2 text-sm text-slate-500">{course.description}</p>
            <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">{course.teacherName.split(" ").map((name) => name[0]).join("")}</div>
              <div className="min-w-0"><p className="truncate text-xs font-semibold">{course.teacherName}</p><p className="text-[10px] text-slate-400">{course.lessons} lessons · {course.duration}</p></div>
            </div>
            <div className="mt-4">
              <div className="mb-2 flex justify-between text-xs"><span className="text-slate-400">Progress</span><span className="font-bold text-indigo-600">{course.progress}%</span></div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-indigo-500" style={{ width: `${course.progress}%` }}/></div>
            </div>
            <Link href={`/courses/${course.id}`} className="mt-5 flex h-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white transition hover:bg-indigo-600 dark:bg-indigo-600">Continue course</Link>
            </div>
          </article>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white py-14 text-center">
            <p className="font-bold">No courses found</p>
            <p className="mt-1 text-sm text-slate-500">Try another search or category.</p>
          </div>
        )}
      </div>
    </main>
  );
}
