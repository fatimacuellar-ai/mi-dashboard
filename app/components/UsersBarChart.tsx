"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { semana: "S1", activos: 1240, nuevos: 380 },
  { semana: "S2", activos: 1480, nuevos: 420 },
  { semana: "S3", activos: 1360, nuevos: 310 },
  { semana: "S4", activos: 1720, nuevos: 510 },
  { semana: "S5", activos: 1590, nuevos: 460 },
  { semana: "S6", activos: 1850, nuevos: 540 },
  { semana: "S7", activos: 2010, nuevos: 620 },
  { semana: "S8", activos: 1930, nuevos: 580 },
];

export default function UsersBarChart() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">Usuarios Activos</h2>
      <p className="text-sm text-gray-500 mb-5">Usuarios activos y nuevos por semana</p>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis dataKey="semana" tick={{ fontSize: 12, fill: "#6b7280" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
            cursor={{ fill: "#f9fafb" }}
          />
          <Legend wrapperStyle={{ fontSize: "13px" }} />
          <Bar dataKey="activos" name="Activos" fill="#22c55e" radius={[4, 4, 0, 0]} />
          <Bar dataKey="nuevos" name="Nuevos" fill="#86efac" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
