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
import type { RevenuePoint } from "../lib/data";

interface Props {
  data: RevenuePoint[];
  dark?: boolean;
}

export default function RevenueAreaChart({ data, dark }: Props) {
  const tickColor = dark ? "#6b7280" : "#9ca3af";
  const gridColor = dark ? "#1f2937" : "#f3f4f6";

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm hover:shadow-md dark:hover:shadow-gray-900 transition-shadow duration-200">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-8 h-8 rounded-lg bg-violet-50 dark:bg-violet-950 flex items-center justify-center">
          <svg className="w-4 h-4 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-100 leading-none">Ingresos vs Gastos</h2>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Comparativa en el periodo</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data} margin={{ top: 16, right: 16, left: -10, bottom: 4 }}>
          <defs>
            <linearGradient id="gradIngresos" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={dark ? 0.3 : 0.2} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradGastos" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f43f5e" stopOpacity={dark ? 0.3 : 0.2} />
              <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
            </linearGradient>
          </defs>
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
            formatter={(value, name) => [`$${Number(value).toLocaleString()}`, name]}
          />
          <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "8px", color: dark ? "#9ca3af" : "#6b7280" }} />
          <Area
            type="monotone"
            dataKey="ingresos"
            name="Ingresos"
            stroke="#6366f1"
            strokeWidth={2.5}
            fill="url(#gradIngresos)"
          />
          <Area
            type="monotone"
            dataKey="gastos"
            name="Gastos"
            stroke="#f43f5e"
            strokeWidth={2.5}
            fill="url(#gradGastos)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
