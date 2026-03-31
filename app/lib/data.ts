export type Period = "month" | "quarter" | "semester" | "year";

export interface KPI {
  label: string;
  value: string;
  change: string;
  up: boolean;
}

export interface SalesPoint {
  label: string;
  ventas: number;
}

export interface UsersPoint {
  label: string;
  activos: number;
  nuevos: number;
}

export interface TrafficPoint {
  name: string;
  value: number;
}

export interface RevenuePoint {
  label: string;
  ingresos: number;
  gastos: number;
}

export interface PeriodData {
  kpis: KPI[];
  sales: SalesPoint[];
  users: UsersPoint[];
  traffic: TrafficPoint[];
  revenue: RevenuePoint[];
  subtitle: string;
}

export const PERIOD_LABELS: Record<Period, string> = {
  month: "Último mes",
  quarter: "Último trimestre",
  semester: "Último semestre",
  year: "Año completo",
};

export const periodData: Record<Period, PeriodData> = {
  // ── ÚLTIMO MES (4 semanas de Diciembre 2025) ──────────────────────────────
  month: {
    subtitle: "Diciembre 2025 · por semana",
    kpis: [
      { label: "Ventas totales", value: "$13,200", change: "+14.8%", up: true },
      { label: "Usuarios activos", value: "2,310", change: "+9.3%", up: true },
      { label: "Tasa de conversión", value: "4.12%", change: "+0.6%", up: true },
      { label: "Ingresos netos", value: "$28,300", change: "+22.1%", up: true },
    ],
    sales: [
      { label: "Sem 1", ventas: 2800 },
      { label: "Sem 2", ventas: 3100 },
      { label: "Sem 3", ventas: 3450 },
      { label: "Sem 4", ventas: 3850 },
    ],
    users: [
      { label: "Sem 1", activos: 510, nuevos: 160 },
      { label: "Sem 2", activos: 560, nuevos: 175 },
      { label: "Sem 3", activos: 600, nuevos: 190 },
      { label: "Sem 4", activos: 640, nuevos: 210 },
    ],
    traffic: [
      { name: "Búsqueda orgánica", value: 35 },
      { name: "Directo", value: 28 },
      { name: "Redes sociales", value: 22 },
      { name: "Email", value: 9 },
      { name: "Referidos", value: 6 },
    ],
    revenue: [
      { label: "Sem 1", ingresos: 6200, gastos: 4100 },
      { label: "Sem 2", ingresos: 7100, gastos: 4500 },
      { label: "Sem 3", ingresos: 7600, gastos: 4800 },
      { label: "Sem 4", ingresos: 7400, gastos: 5100 },
    ],
  },

  // ── ÚLTIMO TRIMESTRE (Oct–Dic 2025) ───────────────────────────────────────
  quarter: {
    subtitle: "Oct – Dic 2025 · por mes",
    kpis: [
      { label: "Ventas totales", value: "$34,800", change: "+16.2%", up: true },
      { label: "Usuarios activos", value: "6,540", change: "+11.4%", up: true },
      { label: "Tasa de conversión", value: "3.89%", change: "+0.3%", up: true },
      { label: "Ingresos netos", value: "$81,700", change: "+19.5%", up: true },
    ],
    sales: [
      { label: "Oct", ventas: 10100 },
      { label: "Nov", ventas: 11500 },
      { label: "Dic", ventas: 13200 },
    ],
    users: [
      { label: "Oct", activos: 1930, nuevos: 580 },
      { label: "Nov", activos: 2010, nuevos: 620 },
      { label: "Dic", activos: 2310, nuevos: 710 },
    ],
    traffic: [
      { name: "Búsqueda orgánica", value: 36 },
      { name: "Directo", value: 27 },
      { name: "Redes sociales", value: 21 },
      { name: "Email", value: 10 },
      { name: "Referidos", value: 6 },
    ],
    revenue: [
      { label: "Oct", ingresos: 38400, gastos: 18500 },
      { label: "Nov", ingresos: 42700, gastos: 19000 },
      { label: "Dic", ingresos: 49300, gastos: 21000 },
    ],
  },

  // ── ÚLTIMO SEMESTRE (Jul–Dic 2025) ────────────────────────────────────────
  semester: {
    subtitle: "Jul – Dic 2025 · por mes",
    kpis: [
      { label: "Ventas totales", value: "$60,300", change: "+18.9%", up: true },
      { label: "Usuarios activos", value: "11,640", change: "+14.7%", up: true },
      { label: "Tasa de conversión", value: "3.74%", change: "-0.1%", up: false },
      { label: "Ingresos netos", value: "$154,200", change: "+21.3%", up: true },
    ],
    sales: [
      { label: "Jul", ventas: 7800 },
      { label: "Ago", ventas: 9200 },
      { label: "Sep", ventas: 8600 },
      { label: "Oct", ventas: 10100 },
      { label: "Nov", ventas: 11500 },
      { label: "Dic", ventas: 13200 },
    ],
    users: [
      { label: "Jul", activos: 1590, nuevos: 460 },
      { label: "Ago", activos: 1720, nuevos: 510 },
      { label: "Sep", activos: 1850, nuevos: 540 },
      { label: "Oct", activos: 1930, nuevos: 580 },
      { label: "Nov", activos: 2010, nuevos: 620 },
      { label: "Dic", activos: 2310, nuevos: 710 },
    ],
    traffic: [
      { name: "Búsqueda orgánica", value: 37 },
      { name: "Directo", value: 26 },
      { name: "Redes sociales", value: 21 },
      { name: "Email", value: 10 },
      { name: "Referidos", value: 6 },
    ],
    revenue: [
      { label: "Jul", ingresos: 29500, gastos: 15700 },
      { label: "Ago", ingresos: 34800, gastos: 17200 },
      { label: "Sep", ingresos: 32100, gastos: 16800 },
      { label: "Oct", ingresos: 38400, gastos: 18500 },
      { label: "Nov", ingresos: 42700, gastos: 19000 },
      { label: "Dic", ingresos: 49300, gastos: 21000 },
    ],
  },

  // ── AÑO COMPLETO (Ene–Dic 2025) ───────────────────────────────────────────
  year: {
    subtitle: "Ene – Dic 2025 · por mes",
    kpis: [
      { label: "Ventas totales", value: "$98,420", change: "+12.5%", up: true },
      { label: "Usuarios activos", value: "14,830", change: "+8.2%", up: true },
      { label: "Tasa de conversión", value: "3.64%", change: "-0.4%", up: false },
      { label: "Ingresos netos", value: "$62,150", change: "+18.7%", up: true },
    ],
    sales: [
      { label: "Ene", ventas: 4200 },
      { label: "Feb", ventas: 5800 },
      { label: "Mar", ventas: 5100 },
      { label: "Abr", ventas: 7300 },
      { label: "May", ventas: 6900 },
      { label: "Jun", ventas: 8400 },
      { label: "Jul", ventas: 7800 },
      { label: "Ago", ventas: 9200 },
      { label: "Sep", ventas: 8600 },
      { label: "Oct", ventas: 10100 },
      { label: "Nov", ventas: 11500 },
      { label: "Dic", ventas: 13200 },
    ],
    users: [
      { label: "Ene", activos: 1240, nuevos: 380 },
      { label: "Feb", activos: 1360, nuevos: 310 },
      { label: "Mar", activos: 1480, nuevos: 420 },
      { label: "Abr", activos: 1590, nuevos: 460 },
      { label: "May", activos: 1720, nuevos: 510 },
      { label: "Jun", activos: 1850, nuevos: 540 },
      { label: "Jul", activos: 1930, nuevos: 580 },
      { label: "Ago", activos: 2010, nuevos: 620 },
      { label: "Sep", activos: 2100, nuevos: 640 },
      { label: "Oct", activos: 2200, nuevos: 670 },
      { label: "Nov", activos: 2280, nuevos: 690 },
      { label: "Dic", activos: 2310, nuevos: 710 },
    ],
    traffic: [
      { name: "Búsqueda orgánica", value: 38 },
      { name: "Directo", value: 25 },
      { name: "Redes sociales", value: 20 },
      { name: "Email", value: 10 },
      { name: "Referidos", value: 7 },
    ],
    revenue: [
      { label: "Ene", ingresos: 18500, gastos: 12000 },
      { label: "Feb", ingresos: 22300, gastos: 13500 },
      { label: "Mar", ingresos: 20800, gastos: 14200 },
      { label: "Abr", ingresos: 27600, gastos: 15000 },
      { label: "May", ingresos: 25900, gastos: 14800 },
      { label: "Jun", ingresos: 31200, gastos: 16100 },
      { label: "Jul", ingresos: 29500, gastos: 15700 },
      { label: "Ago", ingresos: 34800, gastos: 17200 },
      { label: "Sep", ingresos: 32100, gastos: 16800 },
      { label: "Oct", ingresos: 38400, gastos: 18500 },
      { label: "Nov", ingresos: 42700, gastos: 19000 },
      { label: "Dic", ingresos: 49300, gastos: 21000 },
    ],
  },
};
