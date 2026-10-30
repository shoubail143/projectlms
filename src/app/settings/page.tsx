"use client";

import { useEffect, useState } from "react";

function ThemeIcon({ dark }: { dark: boolean }) {
  return dark ? (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5a8.5 8.5 0 1 0 10.6 10.6Z" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
    </svg>
  );
}

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setDarkMode(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const setTheme = (nextMode: boolean) => {
    setDarkMode(nextMode);
    document.documentElement.classList.toggle("dark", nextMode);
    localStorage.setItem("theme", nextMode ? "dark" : "light");
  };

  return (
    <main className="settings-page min-h-screen bg-[#f7f8fc] px-4 pb-10 pt-20 transition-colors sm:px-6 xl:px-8 xl:pt-8">
      <div className="mx-auto max-w-4xl">
        <div>
          <p className="text-sm font-semibold text-indigo-600">Account</p>
          <h1 className="mt-1 text-3xl font-bold text-gray-900">Settings</h1>
          <p className="settings-muted mt-2 text-sm text-slate-500">
            Manage your profile, appearance, and learning preferences.
          </p>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="space-y-5">
            <section className="settings-card rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="font-bold text-blue-500">Profile information</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-600">
                  Full name
                  <input
                    defaultValue="John Doe"
                    className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-transparent px-3 outline-none focus:border-indigo-500"
                  />
                </label>
                <label className="text-sm font-medium text-slate-600">
                  Email address
                  <input
                    type="email"
                    defaultValue="john@school.com"
                    className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-transparent px-3 outline-none focus:border-indigo-500"
                  />
                </label>
              </div>
              <button className="mt-5 h-10 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700">
                Save changes
              </button>
            </section>

            <section className="settings-card rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="font-bold text-gray-900">Notifications</h2>
              <div className="mt-5 space-y-5">
                {[
                  {
                    label: "Assignment reminders",
                    description: "Get notified before assignments are due.",
                    value: notifications,
                    setValue: setNotifications,
                  },
                  {
                    label: "Email updates",
                    description: "Receive course news and learning summaries.",
                    value: emailUpdates,
                    setValue: setEmailUpdates,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4"
                  >
                    <div>
                      <p className="text-sm font-semibold">{item.label}</p>
                      <p className="settings-muted mt-1 text-xs text-slate-500">
                        {item.description}
                      </p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={item.value}
                      onClick={() => item.setValue(!item.value)}
                      className={`relative h-6 w-11 shrink-0 rounded-full transition ${item.value ? "bg-indigo-600" : "bg-slate-300"}`}
                    >
                      <span
                        className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition ${item.value ? "left-6" : "left-1"}`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-5">
            <section className="settings-card rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="font-bold text-gray-900">Appearance</h2>
              <p className="settings-muted mt-1 text-xs text-slate-500">
                Choose your preferred theme.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
                <button
                  type="button"
                  onClick={() => setTheme(false)}
                  aria-pressed={!darkMode}
                  className={`flex h-10 items-center justify-center gap-2 rounded-lg text-xs font-semibold transition ${!darkMode ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500"}`}
                >
                  <ThemeIcon dark={false} /> Light
                </button>
                <button
                  type="button"
                  onClick={() => setTheme(true)}
                  aria-pressed={darkMode}
                  className={`flex h-10 items-center justify-center gap-2 rounded-lg text-xs font-semibold transition ${darkMode ? "bg-slate-700 text-white shadow-sm" : "text-slate-500"}`}
                >
                  <ThemeIcon dark={true} /> Dark
                </button>
              </div>
            </section>

            <section className="rounded-2xl bg-indigo-600 p-5 text-white shadow-lg shadow-indigo-200">
              <p className="text-xs font-semibold text-indigo-100">
                Learning tip!
              </p>
              <p className="mt-2 text-sm font-bold">
                Consistency beats intensity.
              </p>
              <p className="mt-2 text-xs leading-5 text-indigo-100">
                Set aside 20 minutes each day to keep your progress moving.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
