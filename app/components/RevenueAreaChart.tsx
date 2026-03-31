"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { mes: "Ene", ingresos: 18500, gastos: 12000 },
  { mes: "Feb", ingresos: 22300, gastos: 13500 },
  { mes: "Mar", ingresos: 20800, gastos: 14200 },
  { mes: "Abr", ingresos: 27600, gastos: 15000 },
  { mes: "May", ingresos: 25900, gastos: 14800 },
  { mes: "Jun", ingresos: 31200, gastos: 16100 },
  { mes: "Jul", ingresos: 29500, gastos: 15700 },
  { mes: "Ago", ingresos: 34800, gastos: 17200 },
  { mes: "Sep", ingresos: 32100, gastos: 16800 },
  { mes: "Oct", ingresos: 38400, gastos: 18500 },
  { mes: "Nov", ingresos: 42700, gastos: 19000 },
  { mes: "Dic", ingresos: 49300, gastos: 21000 },
];

export default function RevenueAreaChart() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">Ingresos vs Gastos</h2>
      <p className="text-sm text-gray-500 mb-5">Comparativa mensual de ingresos y gastos</p>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="colorIngresos" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorGastos" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="mes" tick={{ fontSize: 12, fill: "#6b7280" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
          <Tooltip
            contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
            formatter={(value) => [`$${Number(value).toLocaleString()}`, ""]}
          />
          <Legend wrapperStyle={{ fontSize: "13px" }} />
          <Area type="monotone" dataKey="ingresos" name="Ingresos" stroke="#6366f1" strokeWidth={2} fill="url(#colorIngresos)" />
          <Area type="monotone" dataKey="gastos" name="Gastos" stroke="#f43f5e" strokeWidth={2} fill="url(#colorGastos)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
