"use client";

import { useMemo, useState } from "react";

const conversations = [
  { id: 1, name: "Sarah Smith", initials: "SS", role: "Computer Science", time: "10:32 AM", preview: "Your calculator project looks great!", unread: 2, color: "from-indigo-500 to-blue-400", online: true },
  { id: 2, name: "Michael Chen", initials: "MC", role: "Web Development", time: "9:18 AM", preview: "The next lesson is now available.", unread: 0, color: "from-orange-500 to-amber-400", online: true },
  { id: 3, name: "Emma Wilson", initials: "EW", role: "Study Group", time: "Yesterday", preview: "Did everyone finish the worksheet?", unread: 1, color: "from-pink-500 to-rose-400", online: false },
  { id: 4, name: "Olivia Davis", initials: "OD", role: "Mathematics", time: "Yesterday", preview: "Thanks for sharing those notes.", unread: 0, color: "from-emerald-500 to-teal-400", online: false },
  { id: 5, name: "Hamza Khan", initials: "HK", role: "Administration", time: "Oct 28", preview: "Your schedule has been updated.", unread: 0, color: "from-violet-500 to-purple-400", online: false },
];

const initialMessages = [
  { id: 1, from: "them", text: "Hi John! I reviewed your calculator project.", time: "10:28 AM" },
  { id: 2, from: "them", text: "Your calculator project looks great! The design is clean and your functions work really well.", time: "10:32 AM" },
  { id: 3, from: "me", text: "Thank you, Sarah! I also added keyboard support and decimal handling.", time: "10:35 AM" },
  { id: 4, from: "them", text: "That is impressive. Keep those improvements in mind for the next assignment too.", time: "10:38 AM" },
];

export default function MessagesPage() {
  const [selectedId, setSelectedId] = useState(1);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const selected = conversations.find((conversation) => conversation.id === selectedId) ?? conversations[0];
  const filtered = useMemo(() => conversations.filter((conversation) => `${conversation.name} ${conversation.preview}`.toLowerCase().includes(search.toLowerCase())), [search]);

  const sendMessage = () => {
    const text = message.trim();
    if (!text) return;
    setMessages((current) => [...current, { id: Date.now(), from: "me", text, time: "Now" }]);
    setMessage("");
  };

  return (
    <main className="min-h-screen bg-[#f7f8fc] px-3 pb-3 pt-20 sm:px-6 sm:pb-6 xl:px-8 xl:pt-8">
      <div className="mb-5">
        <p className="text-sm font-semibold text-indigo-600">Inbox</p>
        <h1 className="text-3xl font-bold">Messages</h1>
      </div>
      <section className="mx-auto grid max-h-[calc(100vh-160px)] min-h-[560px] max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:grid-cols-[320px_minmax(0,1fr)] xl:min-h-[650px]">
        <aside className="min-h-0 border-b border-slate-200 md:border-b-0 md:border-r">
          <div className="p-4">
            <label className="relative block">
              <span className="sr-only">Search messages</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search conversations" className="h-11 w-full rounded-xl bg-slate-100 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500"/>
            </label>
          </div>
          <div className="max-h-[240px] overflow-y-auto px-2 pb-3 md:max-h-[calc(100%-76px)]">
            {filtered.map((conversation) => (
              <button key={conversation.id} onClick={() => setSelectedId(conversation.id)} className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition ${selectedId === conversation.id ? "bg-indigo-50" : "hover:bg-slate-50"}`}>
                <div className={`relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br ${conversation.color} text-sm font-bold text-white`}>
                  {conversation.initials}
                  {conversation.online && <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500"/>}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2"><p className="truncate text-sm font-bold">{conversation.name}</p><span className="shrink-0 text-[10px] text-slate-400">{conversation.time}</span></div>
                  <div className="mt-1 flex items-center gap-2"><p className="truncate text-xs text-slate-500">{conversation.preview}</p>{conversation.unread > 0 && <span className="ml-auto grid h-5 w-5 shrink-0 place-items-center rounded-full bg-indigo-600 text-[10px] text-white">{conversation.unread}</span>}</div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        <div className="flex min-h-0 flex-col">
          <header className="flex h-[72px] items-center border-b border-slate-200 px-4 sm:px-5">
            <div className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${selected.color} text-xs font-bold text-white`}>{selected.initials}</div>
            <div className="ml-3"><p className="font-bold">{selected.name}</p><p className="text-xs text-emerald-500">{selected.online ? "Online" : selected.role}</p></div>
            <button aria-label="More options" className="ml-auto grid h-9 w-9 place-items-center rounded-xl text-slate-400 hover:bg-slate-100">•••</button>
          </header>
          <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50/40 p-4 sm:p-5">
            <div className="mx-auto w-fit rounded-full bg-slate-100 px-3 py-1 text-[10px] font-medium text-slate-400">Today</div>
            {messages.map((item) => (
              <div key={item.id} className={`flex ${item.from === "me" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] sm:max-w-[70%] ${item.from === "me" ? "rounded-2xl rounded-br-md bg-indigo-600 text-white" : "rounded-2xl rounded-bl-md bg-white shadow-sm ring-1 ring-slate-200"} px-4 py-3`}>
                  <p className="text-sm leading-6">{item.text}</p>
                  <p className={`mt-1 text-right text-[10px] ${item.from === "me" ? "text-indigo-100" : "text-slate-400"}`}>{item.time}</p>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={(event) => { event.preventDefault(); sendMessage(); }} className="flex gap-2 border-t border-slate-200 p-3 sm:p-4">
            <input value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Type a message..." className="h-11 min-w-0 flex-1 rounded-xl bg-slate-100 px-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500"/>
            <button type="submit" className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700" aria-label="Send message">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5"><path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4Z"/></svg>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
