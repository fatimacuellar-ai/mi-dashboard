"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import type { PieLabelRenderProps } from "recharts";
import type { TrafficPoint } from "../lib/data";

const COLORS = ["#6366f1", "#f59e0b", "#10b981", "#ec4899", "#14b8a6"];

interface Props {
  data: TrafficPoint[];
  dark?: boolean;
}

const renderCustomLabel = (props: PieLabelRenderProps) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  const cxNum = Number(cx ?? 0);
  const cyNum = Number(cy ?? 0);
  const midAngleNum = Number(midAngle ?? 0);
  const innerRadiusNum = Number(innerRadius ?? 0);
  const outerRadiusNum = Number(outerRadius ?? 0);
  const percentNum = Number(percent ?? 0);

  if (percentNum < 0.08) return null;

  const RADIAN = Math.PI / 180;
  const radius = innerRadiusNum + (outerRadiusNum - innerRadiusNum) * 0.5;
  const x = cxNum + radius * Math.cos(-midAngleNum * RADIAN);
  const y = cyNum + radius * Math.sin(-midAngleNum * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={700}>
      {`${(percentNum * 100).toFixed(0)}%`}
    </text>
  );
};

export default function TrafficPieChart({ data, dark }: Props) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm hover:shadow-md dark:hover:shadow-gray-900 transition-shadow duration-200">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950 flex items-center justify-center">
          <svg className="w-4 h-4 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          </svg>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-100 leading-none">Distribución de Tráfico</h2>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Fuentes de tráfico al sitio</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="44%"
            outerRadius={88}
            dataKey="value"
            labelLine={false}
            label={renderCustomLabel}
            strokeWidth={2}
            stroke={dark ? "#111827" : "#fff"}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
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
            formatter={(value, name) => [`${value}%`, name]}
          />
          <Legend
            wrapperStyle={{ fontSize: "12px", paddingTop: "6px", color: dark ? "#9ca3af" : "#6b7280" }}
            iconType="circle"
            iconSize={8}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
