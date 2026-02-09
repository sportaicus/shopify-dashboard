"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { TrendingUp, ShoppingCart, Users, Package, ArrowUpRight, ChevronDown, Search, Bell, Menu } from 'lucide-react'

// Données de revenus mensuels sur 3 ans
const revenueData = [
  { month: 'Jan 23', revenue: 285000, orders: 1250 },
  { month: 'Fév 23', revenue: 320000, orders: 1420 },
  { month: 'Mar 23', revenue: 295000, orders: 1310 },
  { month: 'Avr 23', revenue: 385000, orders: 1680 },
  { month: 'Mai 23', revenue: 420000, orders: 1850 },
  { month: 'Jun 23', revenue: 465000, orders: 2050 },
  { month: 'Jul 23', revenue: 510000, orders: 2240 },
  { month: 'Aoû 23', revenue: 545000, orders: 2390 },
  { month: 'Sep 23', revenue: 590000, orders: 2580 },
  { month: 'Oct 23', revenue: 625000, orders: 2740 },
  { month: 'Nov 23', revenue: 710000, orders: 3120 },
  { month: 'Déc 23', revenue: 890000, orders: 3910 },
  { month: 'Jan 24', revenue: 720000, orders: 3160 },
  { month: 'Fév 24', revenue: 765000, orders: 3360 },
  { month: 'Mar 24', revenue: 810000, orders: 3560 },
  { month: 'Avr 24', revenue: 855000, orders: 3750 },
  { month: 'Mai 24', revenue: 920000, orders: 4040 },
  { month: 'Jun 24', revenue: 985000, orders: 4320 },
  { month: 'Jul 24', revenue: 1050000, orders: 4610 },
  { month: 'Aoû 24', revenue: 1125000, orders: 4940 },
  { month: 'Sep 24', revenue: 1190000, orders: 5220 },
  { month: 'Oct 24', revenue: 1265000, orders: 5550 },
  { month: 'Nov 24', revenue: 1380000, orders: 6060 },
  { month: 'Déc 24', revenue: 1650000, orders: 7250 },
  { month: 'Jan 25', revenue: 1420000, orders: 6230 },
  { month: 'Fév 25', revenue: 1510000, orders: 6630 },
  { month: 'Mar 25', revenue: 1605000, orders: 7050 },
  { month: 'Avr 25', revenue: 1710000, orders: 7510 },
  { month: 'Mai 25', revenue: 1825000, orders: 8020 },
  { month: 'Jun 25', revenue: 1945000, orders: 8540 },
  { month: 'Jul 25', revenue: 2070000, orders: 9090 },
  { month: 'Aoû 25', revenue: 2210000, orders: 9710 },
  { month: 'Sep 25', revenue: 2360000, orders: 10370 },
  { month: 'Oct 25', revenue: 2525000, orders: 11090 },
  { month: 'Nov 25', revenue: 2750000, orders: 12080 },
  { month: 'Déc 25', revenue: 3280000, orders: 14410 },
]

// Top produits
const topProducts = [
  { name: 'Casque Audio Pro', sales: 12450, revenue: 2489000, growth: 28 },
  { name: 'Montre Connectée Elite', sales: 9850, revenue: 1970000, growth: 35 },
  { name: 'Écouteurs Sans Fil', sales: 18720, revenue: 1872000, growth: 42 },
  { name: 'Chargeur Rapide USB-C', sales: 15630, revenue: 937800, growth: 19 },
  { name: 'Coque Protection Premium', sales: 24180, revenue: 725400, growth: 15 },
]

// Données par pays
const countryData = [
  { country: 'France', sales: 8540000, percentage: 31, color: '#5B8DEF' },
  { country: 'États-Unis', sales: 6890000, percentage: 25, color: '#00B67A' },
  { country: 'Allemagne', sales: 4825000, percentage: 18, color: '#8B5CF6' },
  { country: 'Royaume-Uni', sales: 4140000, percentage: 15, color: '#F59E0B' },
  { country: 'Autres', sales: 3105000, percentage: 11, color: '#94A3B8' },
]

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export default function Dashboard() {
  const totalRevenue = 27550000
  const totalOrders = 138020
  const totalCustomers = 93720
  const avgOrderValue = 200

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-card">
        <div className="flex h-16 items-center gap-4 px-6">
          <button className="lg:hidden">
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[#95BF47] text-white font-bold text-sm">
              S
            </div>
            <span className="font-semibold text-lg hidden sm:inline">Premium Store</span>
          </div>
          
          <div className="flex-1 flex items-center gap-4 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full h-9 pl-9 pr-4 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="h-9 w-9 flex items-center justify-center rounded-lg hover:bg-muted">
              <Bell className="h-5 w-5" />
            </button>
            <button className="flex items-center gap-2 h-9 px-3 rounded-lg hover:bg-muted">
              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                AD
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 max-w-[1600px] mx-auto">
        {/* Page Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-foreground">Tableau de bord</h1>
          <p className="text-sm text-muted-foreground mt-1">Vue d'ensemble de vos performances (2023-2025)</p>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">Ventes totales</CardTitle>
              <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(totalRevenue)}</div>
              <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                <ArrowUpRight className="h-3 w-3" />
                <span>+156% sur 3 ans</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">Commandes</CardTitle>
              <div className="h-8 w-8 rounded-full bg-green-50 flex items-center justify-center">
                <ShoppingCart className="h-4 w-4 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalOrders.toLocaleString('fr-FR')}</div>
              <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                <ArrowUpRight className="h-3 w-3" />
                <span>+208% croissance</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">Clients actifs</CardTitle>
              <div className="h-8 w-8 rounded-full bg-purple-50 flex items-center justify-center">
                <Users className="h-4 w-4 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalCustomers.toLocaleString('fr-FR')}</div>
              <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                <ArrowUpRight className="h-3 w-3" />
                <span>+197% base client</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">Panier moyen</CardTitle>
              <div className="h-8 w-8 rounded-full bg-amber-50 flex items-center justify-center">
                <Package className="h-4 w-4 text-amber-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(avgOrderValue)}</div>
              <p className="text-xs text-muted-foreground mt-1">Taux conversion: 3.8%</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 lg:grid-cols-2 mb-6">
          {/* Revenue Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-semibold">Évolution des revenus</CardTitle>
              <p className="text-sm text-muted-foreground">Progression mensuelle sur 36 mois</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#5B8DEF" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#5B8DEF" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fontSize: 11, fill: '#6B7280' }}
                    tickLine={false}
                    axisLine={{ stroke: '#E5E7EB' }}
                    interval={5}
                  />
                  <YAxis 
                    tick={{ fontSize: 11, fill: '#6B7280' }}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${(value / 1000)}k€`}
                  />
                  <Tooltip 
                    formatter={(value: number) => formatCurrency(value)}
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#5B8DEF" 
                    strokeWidth={2}
                    fill="url(#colorRevenue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Orders Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-semibold">Volume de commandes</CardTitle>
              <p className="text-sm text-muted-foreground">Nombre de commandes mensuelles</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData.slice(-12)} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fontSize: 11, fill: '#6B7280' }}
                    tickLine={false}
                    axisLine={{ stroke: '#E5E7EB' }}
                  />
                  <YAxis 
                    tick={{ fontSize: 11, fill: '#6B7280' }}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${(value / 1000)}k`}
                  />
                  <Tooltip 
                    formatter={(value: number) => [`${value.toLocaleString('fr-FR')} commandes`, 'Commandes']}
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Bar dataKey="orders" radius={[6, 6, 0, 0]}>
                    {revenueData.slice(-12).map((entry, index) => (
                      <Cell key={`cell-${index}`} fill="#00B67A" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Top Products */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-semibold">Produits les plus vendus</CardTitle>
              <p className="text-sm text-muted-foreground">Top 5 de vos produits</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between pb-4 border-b last:border-0 last:pb-0">
                    <div className="flex-1">
                      <div className="font-medium text-sm mb-1">{product.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {product.sales.toLocaleString('fr-FR')} ventes
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-sm">{formatCurrency(product.revenue)}</div>
                      <div className="text-xs text-green-600 flex items-center justify-end gap-1">
                        <ArrowUpRight className="h-3 w-3" />
                        +{product.growth}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sales by Country */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-semibold">Ventes par pays</CardTitle>
              <p className="text-sm text-muted-foreground">Répartition géographique</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {countryData.map((country, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{country.country}</span>
                      <span className="text-muted-foreground">{country.percentage}%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all" 
                          style={{ 
                            width: `${country.percentage}%`,
                            backgroundColor: country.color
                          }}
                        />
                      </div>
                      <span className="text-sm font-semibold min-w-[100px] text-right">
                        {formatCurrency(country.sales)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
