export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Sales Dashboard</h1>
      <p className="mb-8 text-lg text-gray-700">
        Track your sales performance for 2022–2024.
      </p>
      <a
        href="/dashboard"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go to Dashboard
      </a>
    </div>
  );
}