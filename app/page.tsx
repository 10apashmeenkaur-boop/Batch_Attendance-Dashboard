import StudentTable from "@/components/StudentTable";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-8 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
          Student Attendance Dashboard
        </h1>

        <p className="mt-2 mb-10 text-lg text-slate-500">
          Manage attendance using a simple interactive dashboard.
        </p>

        <StudentTable />
      </div>
    </main>
  );
}