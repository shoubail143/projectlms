"use client";

import Link from "next/link";
import { useState } from "react";
import { mockAssignments, mockCourses, mockUsers } from "@/lib/mockData";

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: string;
  className?: string;
}) {
  const paths: Record<string, React.ReactNode> = {
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </>
    ),
    clipboard: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4V2h6v2" />
        <path d="M9 10h6M9 14h6" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    message: (
      <>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    arrow: (
      <>
        <path d="m9 18 6-6-6-6" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
      </>
    ),
    menu: (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" />
      </>
    ),
    logout: (
      <>
        <path d="M10 17l5-5-5-5M15 12H3" />
        <path d="M14 3h7v18h-7" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const currentUser =
    mockUsers.find((user) => user.id === "u3") ?? mockUsers[0];
  const pendingAssignments = mockAssignments
    .filter((assignment) => assignment.status !== "graded")
    .slice(0, 3);
  const averageProgress = Math.round(
    mockCourses.reduce((sum, course) => sum + course.progress, 0) /
      mockCourses.length,
  );
  const filteredCourses = mockCourses.filter((course) =>
    `${course.title} ${course.category} ${course.teacherName}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const showCourses = () => {
    document.getElementById("my-courses")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-900">
      <main className="w-full">
        <header className="sticky top-0 z-20 flex h-[72px] items-center gap-3 border-b border-slate-200/70 bg-white px-4 sm:px-6 lg:px-8 xl:px-8">
          <div className="relative hidden max-w-md flex-1 sm:block">
            <Icon
              name="search"
              className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            />
            <input
              aria-label="Search courses"
              placeholder="Search courses, assignments..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="h-11 w-full rounded-xl bg-slate-100 pl-10 pr-4 text-sm outline-none ring-indigo-500 transition focus:bg-white focus:ring-2"
            />
            {search && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400">
                {filteredCourses.length} found
              </span>
            )}
          </div>
          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <button
              className="relative grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-500"
              aria-label="Notifications"
              onClick={() => setShowNotifications((visible) => !visible)}
            >
              <Icon name="bell" className="h-[19px] w-[19px]" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
            </button>
            {showNotifications && (
              <div className="absolute right-16 top-[60px] w-72 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                <p className="px-2 py-1 text-sm font-bold">Notifications</p>
                <p className="mt-1 rounded-xl bg-indigo-50 px-3 py-3 text-xs text-slate-600">
                  Your Algorithms Quiz was graded: 92%.
                </p>
                <Link href="/assignments" className="block px-3 py-2 text-center text-xs font-semibold text-indigo-600">
                  View assignments
                </Link>
              </div>
            )}
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-400 text-xs font-bold text-white">
              {currentUser.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <section className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-1 text-sm font-medium text-indigo-600">
                Friday, October 30
              </p>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Welcome back, {currentUser.name.split(" ")[0]}!
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Keep learning and reach your goals.
              </p>
            </div>
            <button onClick={showCourses} className="h-11 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700 active:translate-y-0">
              Explore courses
            </button>
          </section>

          <section className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              [
                "Enrolled courses",
                mockCourses.length,
                "bg-indigo-50 text-indigo-600",
                "book",
              ],
              ["Completed", 12, "bg-emerald-50 text-emerald-600", "grid"],
              [
                "Assignments",
                mockAssignments.length,
                "bg-amber-50 text-amber-600",
                "clipboard",
              ],
              [
                "Avg. progress",
                `${averageProgress}%`,
                "bg-sky-50 text-sky-600",
                "arrow",
              ],
            ].map(([label, value, style, icon]) => (
              <div
                key={String(label)}
                className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm sm:p-5"
              >
                <div
                  className={`grid h-10 w-10 place-items-center rounded-xl ${style}`}
                >
                  <Icon name={String(icon)} className="h-5 w-5" />
                </div>
                <p className="mt-5 text-2xl font-bold sm:text-3xl">{value}</p>
                <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </section>

          <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
            <section id="my-courses" className="min-w-0 scroll-mt-24">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold sm:text-xl">My courses</h2>
                <Link href="/courses" className="flex items-center gap-1 text-sm font-semibold text-indigo-600">
                  View all <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {filteredCourses.map((course) => (
                  <article
                    key={course.id}
                    className="group overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"
                  >
                    <div
                      className={`relative h-28 bg-gradient-to-br ${course.accent}`}
                    >
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 20% 20%, white 0 3px, transparent 4px), radial-gradient(circle at 80% 70%, white 0 2px, transparent 3px)",
                          backgroundSize: "38px 38px",
                        }}
                      />
                      <span className="absolute bottom-3 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-700">
                        {course.category}
                      </span>
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="line-clamp-2 font-bold leading-snug">
                            {course.title}
                          </h3>
                          <p className="mt-1 text-xs text-slate-400">
                            {course.teacherName}
                          </p>
                        </div>
                        <Link
                          href={`/courses/${course.id}`}
                          className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-slate-400 hover:bg-slate-100"
                          aria-label={`Open ${course.title}`}
                        >
                          <Icon name="arrow" className="h-4 w-4" />
                        </Link>
                      </div>
                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                        {course.description}
                      </p>
                      <div className="mt-5">
                        <div className="mb-2 flex justify-between text-xs">
                          <span className="font-medium text-slate-500">
                            {course.lessons} lessons
                          </span>
                          <span className="font-bold text-indigo-600">
                            {course.progress}%
                          </span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-indigo-500 transition-all"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              {filteredCourses.length === 0 && (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-12 text-center">
                  <p className="font-semibold">No courses found</p>
                  <button onClick={() => setSearch("")} className="mt-2 text-sm font-semibold text-indigo-600">Clear search</button>
                </div>
              )}
            </section>

            <aside className="space-y-6">
              <section className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="font-bold">Upcoming</h2>
                  <Link href="/assignments" className="text-xs font-semibold text-indigo-600">
                    See all
                  </Link>
                </div>
                <div className="mt-4 space-y-1">
                  {pendingAssignments.map((assignment) => {
                    const course = mockCourses.find(
                      (item) => item.id === assignment.courseId,
                    );
                    return (
                      <div
                        key={assignment.id}
                        className="flex gap-3 border-b border-slate-100 py-3 last:border-0"
                      >
                        <div
                          className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-xs font-bold text-white ${course?.color ?? "bg-slate-500"}`}
                        >
                          <Icon name="clipboard" className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold">
                            {assignment.title}
                          </p>
                          <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                            <Icon name="clock" className="h-3.5 w-3.5" />
                            {new Date(
                              `${assignment.dueDate}T00:00:00`,
                            ).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="overflow-hidden rounded-2xl bg-slate-900 p-5 text-white shadow-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium text-indigo-300">
                      Weekly goal
                    </p>
                    <p className="mt-1 text-lg font-bold">Almost there!</p>
                  </div>
                  <div className="relative grid h-14 w-14 place-items-center rounded-full bg-slate-800 text-sm font-bold">
                    <span className="absolute inset-0 rounded-full border-[4px] border-indigo-500 border-r-slate-700" />
                  </div>
                </div>
                <div className="mt-5 h-2 rounded-full bg-slate-700">
                  <div className="h-full w-[78%] rounded-full bg-indigo-400" />
                </div>
                <p className="mt-3 text-xs text-slate-400">
                  4 of 5 learning hours completed
                </p>
              </section>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
