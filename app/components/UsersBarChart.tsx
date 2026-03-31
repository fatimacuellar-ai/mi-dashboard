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
import type { UsersPoint } from "../lib/data";

interface Props {
  data: UsersPoint[];
  dark?: boolean;
}

export default function UsersBarChart({ data, dark }: Props) {
  const tickColor = dark ? "#6b7280" : "#9ca3af";
  const gridColor = dark ? "#1f2937" : "#f3f4f6";

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm hover:shadow-md dark:hover:shadow-gray-900 transition-shadow duration-200">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center">
          <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-100 leading-none">Usuarios Activos</h2>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Activos y nuevos en el periodo</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 16, right: 16, left: -10, bottom: 4 }} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
          <XAxis
            dataKey="label"
            tick={{ fontSize: 11, fill: tickColor }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: tickColor }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
              background: dark ? "#1f2937" : "#fff",
              padding: "10px 14px",
            }}
            labelStyle={{ color: dark ? "#9ca3af" : "#6b7280", fontWeight: 600, fontSize: 12, marginBottom: 4 }}
            itemStyle={{ color: dark ? "#e5e7eb" : "#374151", fontSize: 13 }}
            cursor={{ fill: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)" }}
          />
          <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "8px", color: dark ? "#9ca3af" : "#6b7280" }} />
          <Bar dataKey="activos" name="Activos" fill="#10b981" radius={[6, 6, 0, 0]} />
          <Bar dataKey="nuevos" name="Nuevos" fill="#6ee7b7" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
