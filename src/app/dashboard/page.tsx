import SalesChart from '@/components/Charts/SalesChart';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="mb-8 text-lg text-gray-700">
        This is your dashboard page.
      </p>
      <SalesChart />
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go to Home
      </a>
    </div>
  );
}