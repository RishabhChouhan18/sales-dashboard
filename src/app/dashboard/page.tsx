import SalesChart from '@/components/Charts/SalesChart';

export default function DashboardPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Sales Dashboard</h1>
      <p>Welcome to your sales dashboard for 2022–2024.</p>
      
      <SalesChart />
    </div>
  );
}
