"use client";

import { useState } from "react";
import { periodData, PERIOD_LABELS, type Period } from "../lib/data";
import SalesLineChart from "./SalesLineChart";
import UsersBarChart from "./UsersBarChart";
import TrafficPieChart from "./TrafficPieChart";
import RevenueAreaChart from "./RevenueAreaChart";

const PERIODS: Period[] = ["month", "quarter", "semester", "year"];

type Category = "sales" | "users" | "traffic" | "revenue" | null;

const KPI_CONFIG = [
  {
    gradient: "from-indigo-500 to-violet-600",
    iconPath:
      "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 7H4l1-7z",
  },
  {
    gradient: "from-emerald-500 to-teal-600",
    iconPath:
      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    gradient: "from-amber-500 to-orange-500",
    iconPath:
      "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
  },
  {
    gradient: "from-violet-500 to-purple-600",
    iconPath:
      "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const CATEGORY_FILTERS: { key: Category; label: string }[] = [
  { key: "sales", label: "Ventas" },
  { key: "users", label: "Usuarios" },
  { key: "traffic", label: "Tráfico" },
  { key: "revenue", label: "Ingresos" },
];

export default function DashboardClient() {
  const [period, setPeriod] = useState<Period>("year");
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const data = periodData[period];

  const isVisible = (cat: Category) => activeCategory === null || activeCategory === cat;

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex transition-colors duration-300">

        {/* ── Sidebar ───────────────────────────────────── */}
        <aside
          className={`${sidebarOpen ? "w-56" : "w-16"} flex-shrink-0 transition-all duration-300 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 flex flex-col h-screen sticky top-0 z-20`}
          onMouseEnter={() => setSidebarOpen(true)}
          onMouseLeave={() => setSidebarOpen(false)}
        >
          {/* Logo */}
          <div className="h-16 flex items-center px-4 gap-3 border-b border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="w-9 h-9 flex-shrink-0 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-md shadow-indigo-200 dark:shadow-indigo-900">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            {sidebarOpen && (
              <span className="font-bold text-gray-900 dark:text-white text-sm whitespace-nowrap">Mi Dashboard</span>
            )}
          </div>

          {/* Nav */}
          <nav className="flex-1 py-4 px-2 flex flex-col gap-1 overflow-hidden">
            {[
              {
                label: "Dashboard",
                active: true,
                path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
              },
              {
                label: "Analíticas",
                active: false,
                path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
              },
              {
                label: "Reportes",
                active: false,
                path: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
              {
                label: "Configuración",
                active: false,
                path: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
              },
            ].map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium w-full text-left transition-colors duration-150 overflow-hidden ${
                  item.active
                    ? "bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400"
                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.path} />
                </svg>
                {sidebarOpen && <span className="whitespace-nowrap">{item.label}</span>}
              </button>
            ))}
          </nav>

        </aside>

        {/* ── Main area ─────────────────────────────────── */}
        <div className="flex-1 flex flex-col min-w-0">

          {/* Header */}
          <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-5 flex items-center justify-between sticky top-0 z-10 gap-4">
            {/* Search bar */}
            <div className="relative hidden sm:flex items-center">
              <svg className="absolute left-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar métricas..."
                readOnly
                className="pl-9 pr-4 py-2 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl w-56 text-gray-400 dark:text-gray-500 focus:outline-none cursor-default placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2 ml-auto">
              {/* Dark mode toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                title={darkMode ? "Modo claro" : "Modo oscuro"}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Notifications */}
              <button className="relative w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-gray-900" />
              </button>

              {/* Avatar */}
              <div className="flex items-center gap-2.5 pl-3 border-l border-gray-100 dark:border-gray-800 ml-1">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  FC
                </div>
                <div className="hidden md:block leading-tight">
                  <p className="text-xs font-semibold text-gray-900 dark:text-white">Fatima C.</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">Admin</p>
                </div>
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 p-5 md:p-6">

            {/* Title row */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Resumen General</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{data.subtitle}</p>
              </div>

              {/* Period pill buttons */}
              <div className="flex flex-wrap gap-2">
                {PERIODS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      period === p
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900/50"
                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400"
                    }`}
                  >
                    {PERIOD_LABELS[p]}
                  </button>
                ))}
              </div>
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mr-1">
                Categoría:
              </span>
              {CATEGORY_FILTERS.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(activeCategory === cat.key ? null : cat.key)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    activeCategory === cat.key
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
              {activeCategory && (
                <button
                  onClick={() => setActiveCategory(null)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors underline-offset-2 hover:underline"
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
              {data.kpis.map((stat, i) => (
                <div
                  key={stat.label}
                  className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 overflow-hidden shadow-sm hover:shadow-lg dark:hover:shadow-gray-900 transition-all duration-300 hover:-translate-y-1 cursor-default group"
                >
                  {/* Gradient blob */}
                  <div
                    className={`absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br ${KPI_CONFIG[i].gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${KPI_CONFIG[i].gradient} flex items-center justify-center mb-4 shadow-sm`}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={KPI_CONFIG[i].iconPath} />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
                  <div
                    className={`flex items-center gap-1 mt-2 text-xs font-semibold ${
                      stat.up
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-red-500 dark:text-red-400"
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d={stat.up ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                      />
                    </svg>
                    {stat.change} vs periodo anterior
                  </div>
                </div>
              ))}
            </div>

            {/* Charts grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {(
                [
                  { key: "sales" as Category, Component: SalesLineChart, chartData: data.sales },
                  { key: "users" as Category, Component: UsersBarChart, chartData: data.users },
                  { key: "traffic" as Category, Component: TrafficPieChart, chartData: data.traffic },
                  { key: "revenue" as Category, Component: RevenueAreaChart, chartData: data.revenue },
                ] as const
              ).map(({ key, Component, chartData }) => (
                <div
                  key={key}
                  className={`transition-all duration-300 ${
                    isVisible(key)
                      ? "opacity-100 scale-100"
                      : "opacity-25 scale-[0.97] pointer-events-none"
                  }`}
                >
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  <Component data={chartData as any} dark={darkMode} />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
