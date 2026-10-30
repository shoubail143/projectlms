"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mockUsers } from "@/lib/mockData";

const navItems = [
  { label: "Dashboard", href: "/", icon: "grid" },
  { label: "My Courses", href: "/courses", icon: "book" },
  { label: "Assignments", href: "/assignments", icon: "clipboard" },
  { label: "Calendar", href: "/calendar", icon: "calendar" },
  { label: "Messages", href: "/messages", icon: "message" },
];

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
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06-2.83 2.83-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.52V21h-4v-.16a1.65 1.65 0 0 0-1-1.52 1.65 1.65 0 0 0-1.82.33l-.06.06-2.83-2.83.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.52-1H3v-4h.08A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06L7.04 4.3l.06.06A1.65 1.65 0 0 0 8.92 4a1.65 1.65 0 0 0 1-1.52V2h4v.48A1.65 1.65 0 0 0 15 4a1.65 1.65 0 0 0 1.82-.33l.06-.06 2.83 2.83-.06.06A1.65 1.65 0 0 0 19 8.32a1.65 1.65 0 0 0 1.52 1H21v4h-.48A1.65 1.65 0 0 0 19.4 15Z" />
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

export default function Sidebar() {
  const pathname = usePathname();
  const currentUser =
    mockUsers.find((user) => user.id === "u3") ?? mockUsers[0];
  const initials = currentUser.name
    .split(" ")
    .map((name) => name[0])
    .join("");
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <aside className="fixed inset-y-0 left-0 z-50 flex w-[72px] flex-col border-r border-slate-200/80 bg-gradient-to-b from-white to-blue-300 px-2 py-5 xl:w-[240px] xl:px-5">
      <Link
        href="/"
        className="flex items-center justify-center xl:justify-start xl:px-2"
      >
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 text-xl font-bold text-white shadow-lg shadow-indigo-200">
          🌟
        </div>
        <span className="hidden text-xl font-bold tracking-tight xl:ml-3 xl:block">
          <span className="text-indigo-600">Learn</span>ly
        </span>
      </Link>

      <nav className="mt-8 space-y-1.5">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            title={item.label}
            className={`relative flex items-center justify-center rounded-xl px-3 py-3 text-sm font-medium transition xl:justify-start ${isActive(item.href) ? "bg-indigo-50 text-indigo-600 shadow-sm shadow-indigo-100" : "text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-sm"}`}
          >
            <Icon name={item.icon} />
            <span className="ml-3 hidden xl:inline">{item.label}</span>
            {item.label === "Messages" && (
              <span className="hidden xl:ml-auto xl:block rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] text-white">
                3
              </span>
            )}
          </Link>
        ))}
      </nav>

      <div className="mt-auto space-y-2">
        <Link
          href="/settings"
          title="Settings"
          className={`flex items-center justify-center rounded-xl px-3 py-3 text-sm font-medium transition xl:justify-start ${isActive("/settings") ? "bg-indigo-50 text-indigo-600" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}
        >
          <Icon name="settings" />
          <span className="ml-3 hidden xl:inline">Settings</span>
        </Link>
        <div className="flex justify-center border-t border-slate-100 pt-4 xl:justify-start xl:px-2">
          <Link
            href="/login"
            aria-label={`Log out ${currentUser.name}`}
            title="Log out"
          >
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-400 text-sm font-bold text-white">
              {initials}
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
}
