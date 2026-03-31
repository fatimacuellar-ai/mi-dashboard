"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { mes: "Ene", ventas: 4200 },
  { mes: "Feb", ventas: 5800 },
  { mes: "Mar", ventas: 5100 },
  { mes: "Abr", ventas: 7300 },
  { mes: "May", ventas: 6900 },
  { mes: "Jun", ventas: 8400 },
  { mes: "Jul", ventas: 7800 },
  { mes: "Ago", ventas: 9200 },
  { mes: "Sep", ventas: 8600 },
  { mes: "Oct", ventas: 10100 },
  { mes: "Nov", ventas: 11500 },
  { mes: "Dic", ventas: 13200 },
];

export default function SalesLineChart() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">Ventas Mensuales</h2>
      <p className="text-sm text-gray-500 mb-5">Evolución de ventas durante el año</p>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="mes" tick={{ fontSize: 12, fill: "#6b7280" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
          <Tooltip
            contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, "Ventas"]}
          />
          <Legend wrapperStyle={{ fontSize: "13px" }} />
          <Line
            type="monotone"
            dataKey="ventas"
            name="Ventas"
            stroke="#6366f1"
            strokeWidth={2.5}
            dot={{ r: 4, fill: "#6366f1" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
