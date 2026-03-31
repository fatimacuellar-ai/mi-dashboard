import SalesLineChart from "./components/SalesLineChart";
import UsersBarChart from "./components/UsersBarChart";
import TrafficPieChart from "./components/TrafficPieChart";
import RevenueAreaChart from "./components/RevenueAreaChart";

const stats = [
  { label: "Ventas totales", value: "$98,420", change: "+12.5%", up: true },
  { label: "Usuarios activos", value: "14,830", change: "+8.2%", up: true },
  { label: "Tasa de conversión", value: "3.64%", change: "-0.4%", up: false },
  { label: "Ingresos netos", value: "$62,150", change: "+18.7%", up: true },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <span className="text-lg font-bold text-gray-900">Mi Dashboard</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Año 2025
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Resumen General</h1>
          <p className="text-gray-500 mt-1">Métricas clave de rendimiento del negocio</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
              <div className={`flex items-center gap-1 mt-2 text-sm font-medium ${stat.up ? "text-green-600" : "text-red-500"}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.up ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                </svg>
                {stat.change} vs mes anterior
              </div>
            </div>
          ))}
        </div>

        {/* Charts grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SalesLineChart />
          <UsersBarChart />
          <TrafficPieChart />
          <RevenueAreaChart />
        </div>
      </main>
    </div>
  );
}
