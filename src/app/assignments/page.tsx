import { mockAssignments } from "@/lib/mockData";

export default function AssignmentsPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fc] px-4 pb-8 pt-20 sm:px-6 xl:px-8 xl:pt-8">
      <h1 className="text-3xl font-bold text-blue-500">Assignments</h1>
      <div className="mt-6 space-y-3">
        {mockAssignments.map((assignment) => (
          <article
            key={assignment.id}
            className="rounded-xl border border-slate-200 bg-white p-4"
          >
            <h2 className="font-semibold text-blue-500">{assignment.title}</h2>
            <p className="mt-1 text-sm capitalize text-slate-500">
              Due {assignment.dueDate} · {assignment.status}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
