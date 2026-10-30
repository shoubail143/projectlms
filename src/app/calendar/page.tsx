"use client";

import { useEffect, useMemo, useState } from "react";

type CalendarEvent = {
  id: string;
  date: string;
  title: string;
  type: "assignment" | "class" | "study";
  time: string;
};

const initialEvents: CalendarEvent[] = [
  {
    id: "e1",
    date: "2026-11-02",
    title: "Calculus Worksheet",
    type: "assignment",
    time: "9:00 AM",
  },
  {
    id: "e2",
    date: "2026-11-05",
    title: "Build a Calculator",
    type: "assignment",
    time: "11:30 AM",
  },
  {
    id: "e3",
    date: "2026-11-08",
    title: "Web Development Class",
    type: "class",
    time: "2:00 PM",
  },
  {
    id: "e4",
    date: "2026-11-10",
    title: "Design Critique",
    type: "class",
    time: "10:00 AM",
  },
  {
    id: "e5",
    date: "2026-11-12",
    title: "Literature Study Group",
    type: "study",
    time: "4:30 PM",
  },
  {
    id: "e6",
    date: "2026-10-30",
    title: "Weekly Study Session",
    type: "study",
    time: "3:00 PM",
  },
];

const typeStyle = {
  assignment:
    "border-rose-400 bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-300",
  class:
    "border-indigo-400 bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-300",
  study:
    "border-emerald-400 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300",
};

const toDateKey = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

const startOfToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

export default function CalendarPage() {
  const [month, setMonth] = useState(() => {
    const today = startOfToday();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });
  const [selectedDate, setSelectedDate] = useState(() =>
    toDateKey(startOfToday()),
  );
  const [events, setEvents] = useState(initialEvents);
  const [showForm, setShowForm] = useState(false);
  const [eventTitle, setEventTitle] = useState("");

  useEffect(() => {
    try {
      const savedEvents = localStorage.getItem("learnly-calendar-events");
      if (savedEvents)
        setEvents([
          ...initialEvents,
          ...(JSON.parse(savedEvents) as CalendarEvent[]),
        ]);
    } catch {
      localStorage.removeItem("learnly-calendar-events");
    }
  }, []);

  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const monthName = month.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const calendarCells = useMemo(() => {
    const previousMonthDays = new Date(year, monthIndex, 0).getDate();
    const cells = [];
    for (let index = 0; index < 42; index += 1) {
      if (index < firstDay) {
        cells.push({
          date: new Date(
            year,
            monthIndex - 1,
            previousMonthDays - firstDay + index + 1,
          ),
          current: false,
        });
      } else if (index >= firstDay + daysInMonth) {
        cells.push({
          date: new Date(
            year,
            monthIndex + 1,
            index - firstDay - daysInMonth + 1,
          ),
          current: false,
        });
      } else {
        cells.push({
          date: new Date(year, monthIndex, index - firstDay + 1),
          current: true,
        });
      }
    }
    return cells;
  }, [daysInMonth, firstDay, monthIndex, year]);

  const selectedEvents = events.filter((event) => event.date === selectedDate);
  const todayKey = toDateKey(startOfToday());
  const upcomingEvents = [...events]
    .filter((event) => event.date >= todayKey)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 4);

  const changeMonth = (amount: number) =>
    setMonth(new Date(year, monthIndex + amount, 1));
  const addEvent = () => {
    if (!eventTitle.trim()) return;
    const newEvent = {
      id: `custom-${Date.now()}`,
      date: selectedDate,
      title: eventTitle.trim(),
      type: "study" as const,
      time: "Any time",
    };
    setEvents((current) => {
      const nextEvents = [...current, newEvent];
      localStorage.setItem(
        "learnly-calendar-events",
        JSON.stringify(
          nextEvents.filter((event) => event.id.startsWith("custom-")),
        ),
      );
      return nextEvents;
    });
    setEventTitle("");
    setShowForm(false);
  };

  const removeEvent = (id: string) => {
    setEvents((current) => {
      const nextEvents = current.filter((event) => event.id !== id);
      localStorage.setItem(
        "learnly-calendar-events",
        JSON.stringify(
          nextEvents.filter((event) => event.id.startsWith("custom-")),
        ),
      );
      return nextEvents;
    });
  };

  const goToToday = () => {
    const today = startOfToday();
    setMonth(new Date(today.getFullYear(), today.getMonth(), 1));
    setSelectedDate(toDateKey(today));
  };

  return (
    <main className="min-h-screen bg-[#f7f8fc] px-3 pb-8 pt-20 sm:px-6 xl:px-8 xl:pt-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-indigo-600">Schedule</p>
            <h1 className="text-3xl font-bold">Calendar</h1>
          </div>
          <button
            onClick={() => setShowForm((visible) => !visible)}
            className="h-11 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
          >
            + Add event
          </button>
        </div>

        {showForm && (
          <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
            <div className="sm:flex-1">
              <p className="text-xs font-semibold text-slate-400">
                Selected date
              </p>
              <p className="mt-1 text-sm font-bold">
                {new Date(`${selectedDate}T12:00:00`).toLocaleDateString(
                  "en-US",
                  { weekday: "long", month: "long", day: "numeric" },
                )}
              </p>
            </div>
            <input
              value={eventTitle}
              onChange={(event) => setEventTitle(event.target.value)}
              placeholder="Event title"
              className="h-11 rounded-xl border border-slate-200 bg-transparent px-4 text-sm outline-none focus:border-indigo-500 sm:w-72"
            />
            <button
              onClick={addEvent}
              className="h-11 rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white dark:bg-indigo-600"
            >
              Save
            </button>
          </div>
        )}

        <div className="mt-6 grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(620px,760px)_280px]">
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 p-4 sm:px-5">
              <h2 className="font-bold sm:text-lg">{monthName}</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => changeMonth(-1)}
                  aria-label="Previous month"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 hover:bg-slate-50"
                >
                  ‹
                </button>
                <button
                  onClick={goToToday}
                  className="h-9 rounded-lg border border-slate-200 px-3 text-xs font-semibold hover:bg-slate-50"
                >
                  Month
                </button>
                <button
                  onClick={() => changeMonth(1)}
                  aria-label="Next month"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 hover:bg-slate-50"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50 text-center text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="py-3">
                  {day.slice(0, 1)}
                  <span className="hidden sm:inline">{day.slice(1)}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-px bg-slate-100 dark:bg-slate-700">
              {calendarCells.map((cell, index) => {
                const key = toDateKey(cell.date);
                const dayEvents = events.filter((event) => event.date === key);
                return (
                  <button
                    key={`${key}-${index}`}
                    onClick={() => {
                      setSelectedDate(key);
                      if (!cell.current)
                        setMonth(
                          new Date(
                            cell.date.getFullYear(),
                            cell.date.getMonth(),
                            1,
                          ),
                        );
                    }}
                    className={`min-h-[62px] bg-white p-1 text-left transition hover:bg-indigo-50 active:bg-indigo-100 sm:min-h-[82px] sm:p-2 dark:bg-slate-900 dark:hover:bg-indigo-950/50 ${cell.current ? "" : "bg-slate-50 text-slate-300 dark:bg-slate-950/50"}`}
                  >
                    <span
                      className={`grid h-7 w-7 place-items-center rounded-full text-xs font-semibold transition sm:h-8 sm:w-8 ${selectedDate === key ? "bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-300" : ""} ${key === todayKey && selectedDate !== key ? "ring-2 ring-indigo-500 ring-offset-1" : ""} hover:bg-slate-100 dark:hover:bg-slate-800`}
                    >
                      {cell.date.getDate()}
                    </span>
                    <div className="mt-1 space-y-1">
                      {dayEvents.slice(0, 2).map((event) => (
                        <span
                          key={event.id}
                          className={`block truncate rounded border-l-2 px-1 py-0.5 text-[8px] font-semibold sm:text-[10px] ${typeStyle[event.type]}`}
                        >
                          {event.title}
                        </span>
                      ))}
                      {dayEvents.length > 2 && (
                        <span className="hidden text-[10px] text-slate-400 sm:block">
                          +{dayEvents.length - 2} more
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          <aside className="space-y-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-bold">Selected day</h2>
                <span className="text-xs text-slate-400">
                  {new Date(`${selectedDate}T12:00:00`).toLocaleDateString(
                    "en-US",
                    { month: "short", day: "numeric" },
                  )}
                </span>
              </div>
              <div className="mt-4 space-y-3">
                {selectedEvents.length ? (
                  selectedEvents.map((event) => (
                    <div
                      key={event.id}
                      className={`rounded-xl border-l-2 p-3 ${typeStyle[event.type]}`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm font-bold">{event.title}</p>
                          <p className="mt-1 text-xs opacity-75">
                            {event.time}
                          </p>
                        </div>
                        {event.id.startsWith("custom-") && (
                          <button
                            onClick={() => removeEvent(event.id)}
                            aria-label={`Delete ${event.title}`}
                            className="text-xs font-bold opacity-60 hover:opacity-100"
                          >
                            ×
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="rounded-xl bg-slate-50 py-6 text-center text-sm text-slate-400">
                    No events scheduled
                  </p>
                )}
              </div>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="font-bold">Upcoming</h2>
              <div className="mt-4 space-y-3">
                {upcomingEvents.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => {
                      setSelectedDate(event.date);
                      const date = new Date(`${event.date}T12:00:00`);
                      setMonth(
                        new Date(date.getFullYear(), date.getMonth(), 1),
                      );
                    }}
                    className="flex w-full items-center gap-3 text-left"
                  >
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40">
                      <span className="text-xs font-bold">
                        {new Date(`${event.date}T12:00:00`).getDate()}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">
                        {event.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        {event.time}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
