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
import type { SalesPoint } from "../lib/data";

interface Props {
  data: SalesPoint[];
  dark?: boolean;
}

export default function SalesLineChart({ data, dark }: Props) {
  const tickColor = dark ? "#6b7280" : "#9ca3af";
  const gridColor = dark ? "#1f2937" : "#f3f4f6";

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm hover:shadow-md dark:hover:shadow-gray-900 transition-shadow duration-200">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center">
          <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-100 leading-none">Ventas</h2>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Evolución en el periodo</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 16, right: 16, left: -10, bottom: 4 }}>
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
            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
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
            formatter={(value) => [`$${Number(value).toLocaleString()}`, "Ventas"]}
          />
          <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "8px", color: dark ? "#9ca3af" : "#6b7280" }} />
          <Line
            type="monotone"
            dataKey="ventas"
            name="Ventas"
            stroke="#6366f1"
            strokeWidth={2.5}
            dot={{ r: 4, fill: "#6366f1", strokeWidth: 0 }}
            activeDot={{ r: 6, stroke: "#6366f1", strokeWidth: 2, fill: "#fff" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
