'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2022', sales: 4000 },
  { year: '2023', sales: 5000 },
  { year: '2024', sales: 6000 },
];

export default function SalesChart() {
  return (
    <div className="mt-6 w-full max-w-xl">
      <h2 className="text-xl font-semibold mb-2">Sales Chart (2022–2024)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}