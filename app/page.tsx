"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TrendingUp, DollarSign, ShoppingCart, Users, Package, Globe, ArrowUpRight, Home, BarChart3, FileText, Settings, Menu, Search, Bell, ChevronDown } from 'lucide-react'
import { useState } from 'react'

// Données simulées pour une boutique Shopify très performante sur 3 ans
const revenueData = [
  { month: 'Jan 2023', revenue: 245000, orders: 1250, customers: 890 },
  { month: 'Fév 2023', revenue: 268000, orders: 1340, customers: 920 },
  { month: 'Mar 2023', revenue: 312000, orders: 1560, customers: 1100 },
  { month: 'Avr 2023', revenue: 298000, orders: 1490, customers: 1050 },
  { month: 'Mai 2023', revenue: 334000, orders: 1670, customers: 1180 },
  { month: 'Juin 2023', revenue: 356000, orders: 1780, customers: 1250 },
  { month: 'Juil 2023', revenue: 389000, orders: 1945, customers: 1350 },
  { month: 'Août 2023', revenue: 412000, orders: 2060, customers: 1420 },
  { month: 'Sep 2023', revenue: 445000, orders: 2225, customers: 1540 },
  { month: 'Oct 2023', revenue: 478000, orders: 2390, customers: 1650 },
  { month: 'Nov 2023', revenue: 512000, orders: 2560, customers: 1780 },
  { month: 'Déc 2023', revenue: 589000, orders: 2945, customers: 2050 },
  { month: 'Jan 2024', revenue: 534000, orders: 2670, customers: 1850 },
  { month: 'Fév 2024', revenue: 567000, orders: 2835, customers: 1950 },
  { month: 'Mar 2024', revenue: 612000, orders: 3060, customers: 2100 },
  { month: 'Avr 2024', revenue: 589000, orders: 2945, customers: 2020 },
  { month: 'Mai 2024', revenue: 645000, orders: 3225, customers: 2200 },
  { month: 'Juin 2024', revenue: 678000, orders: 3390, customers: 2300 },
  { month: 'Juil 2024', revenue: 723000, orders: 3615, customers: 2450 },
  { month: 'Août 2024', revenue: 756000, orders: 3780, customers: 2550 },
  { month: 'Sep 2024', revenue: 801000, orders: 4005, customers: 2700 },
  { month: 'Oct 2024', revenue: 845000, orders: 4225, customers: 2850 },
  { month: 'Nov 2024', revenue: 912000, orders: 4560, customers: 3050 },
  { month: 'Déc 2024', revenue: 1045000, orders: 5225, customers: 3500 },
  { month: 'Jan 2025', revenue: 923000, orders: 4615, customers: 3100 },
  { month: 'Fév 2025', revenue: 978000, orders: 4890, customers: 3250 },
  { month: 'Mar 2025', revenue: 1067000, orders: 5335, customers: 3550 },
  { month: 'Avr 2025', revenue: 1023000, orders: 5115, customers: 3400 },
  { month: 'Mai 2025', revenue: 1124000, orders: 5620, customers: 3700 },
  { month: 'Juin 2025', revenue: 1189000, orders: 5945, customers: 3900 },
  { month: 'Juil 2025', revenue: 1267000, orders: 6335, customers: 4150 },
  { month: 'Août 2025', revenue: 1334000, orders: 6670, customers: 4350 },
  { month: 'Sep 2025', revenue: 1423000, orders: 7115, customers: 4600 },
  { month: 'Oct 2025', revenue: 1501000, orders: 7505, customers: 4850 },
  { month: 'Nov 2025', revenue: 1623000, orders: 8115, customers: 5200 },
  { month: 'Déc 2025', revenue: 1856000, orders: 9280, customers: 5950 },
]

const topProducts = [
  { name: 'Wireless Headphones Pro', sales: 15420, revenue: 3084000, trend: '+24%', image: '🎧' },
  { name: 'Smart Watch Elite', sales: 12850, revenue: 2570000, trend: '+18%', image: '⌚' },
  { name: 'Laptop Stand Premium', sales: 11200, revenue: 1680000, trend: '+31%', image: '💻' },
  { name: 'USB-C Hub Deluxe', sales: 9870, revenue: 986900, trend: '+15%', image: '🔌' },
  { name: 'Ergonomic Mouse X', sales: 8450, revenue: 675000, trend: '+22%', image: '🖱️' },
]

const geoData = [
  { country: 'États-Unis', orders: 45320, revenue: 9064000, percentage: 42 },
  { country: 'Canada', orders: 18940, revenue: 3788000, percentage: 18 },
  { country: 'Royaume-Uni', orders: 15680, revenue: 3136000, percentage: 15 },
  { country: 'Allemagne', orders: 12450, revenue: 2490000, percentage: 12 },
  { country: 'France', orders: 8920, revenue: 1784000, percentage: 8 },
  { country: 'Australie', orders: 5470, revenue: 1094000, percentage: 5 },
]

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  
  const totalRevenue = 27553000
  const totalOrders = 137770
  const totalCustomers = 93700
  const avgOrderValue = 200

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 bg-sidebar-background border-r border-sidebar-border flex-shrink-0`}>
        <div className={`${sidebarOpen ? 'block' : 'hidden'} h-full`}>
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b border-sidebar-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-sm">
                S
              </div>
              <span className="font-semibold text-lg text-sidebar-foreground">Premium Store</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium">
              <Home className="h-5 w-5" />
              <span>Accueil</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground hover:bg-muted">
              <ShoppingCart className="h-5 w-5" />
              <span>Commandes</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground hover:bg-muted">
              <Package className="h-5 w-5" />
              <span>Produits</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground hover:bg-muted">
              <Users className="h-5 w-5" />
              <span>Clients</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground hover:bg-muted">
              <BarChart3 className="h-5 w-5" />
              <span>Analytiques</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground hover:bg-muted">
              <FileText className="h-5 w-5" />
              <span>Rapports</span>
            </a>
          </nav>

          {/* Bottom Section */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border">
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground hover:bg-muted">
              <Settings className="h-5 w-5" />
              <span>Paramètres</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navigation Bar */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-muted rounded-lg"
            >
              <Menu className="h-5 w-5 text-foreground" />
            </button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Rechercher..."
                className="pl-10 pr-4 py-2 w-80 bg-muted border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-lg relative">
              <Bell className="h-5 w-5 text-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
            </button>
            <div className="flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-lg cursor-pointer">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                AD
              </div>
              <span className="text-sm font-medium text-foreground">Admin</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground mb-1">Tableau de bord</h1>
            <p className="text-muted-foreground text-sm">Vue d'ensemble de vos performances sur 3 ans (2023-2025)</p>
          </div>

          {/* KPIs principaux */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Ventes totales</CardTitle>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{(totalRevenue / 1000000).toFixed(2)}M €</div>
                <div className="flex items-center gap-1 text-xs text-primary mt-1 font-medium">
                  <TrendingUp className="h-3 w-3" />
                  <span>+156% sur 3 ans</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Commandes</CardTitle>
                <div className="w-10 h-10 rounded-lg bg-chart-2/10 flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 text-chart-2" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{(totalOrders / 1000).toFixed(0)}K</div>
                <div className="flex items-center gap-1 text-xs text-primary mt-1 font-medium">
                  <TrendingUp className="h-3 w-3" />
                  <span>+208% croissance</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Clients</CardTitle>
                <div className="w-10 h-10 rounded-lg bg-chart-3/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-chart-3" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{(totalCustomers / 1000).toFixed(1)}K</div>
                <div className="flex items-center gap-1 text-xs text-primary mt-1 font-medium">
                  <TrendingUp className="h-3 w-3" />
                  <span>+197% base client</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Panier moyen</CardTitle>
                <div className="w-10 h-10 rounded-lg bg-chart-4/10 flex items-center justify-center">
                  <Package className="h-5 w-5 text-chart-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{avgOrderValue} €</div>
                <div className="text-xs text-muted-foreground mt-1">
                  <span>Taux conversion: 3.8%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Graphiques principaux */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Revenus mensuels */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-foreground text-base">Évolution des ventes</CardTitle>
                <CardDescription className="text-xs">Revenus mensuels sur 36 mois</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis 
                      dataKey="month" 
                      stroke="hsl(var(--muted-foreground))"
                      tick={{ fontSize: 11 }}
                      interval={5}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      tick={{ fontSize: 11 }}
                      tickFormatter={(value) => `${(value / 1000).toFixed(0)}K €`}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        fontSize: '12px'
                      }}
                      formatter={(value: number) => [`${value.toLocaleString()} €`, 'Revenus']}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorRevenue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Commandes */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-foreground text-base">Volume de commandes</CardTitle>
                <CardDescription className="text-xs">Nombre de commandes mensuelles</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis 
                      dataKey="month" 
                      stroke="hsl(var(--muted-foreground))"
                      tick={{ fontSize: 11 }}
                      interval={5}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      tick={{ fontSize: 11 }}
                      tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        fontSize: '12px'
                      }}
                      formatter={(value: number) => [value.toLocaleString(), 'Commandes']}
                    />
                    <Bar dataKey="orders" fill="hsl(var(--chart-2))" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Croissance clients */}
          <Card className="mb-6 hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-foreground text-base">Croissance de la base clients</CardTitle>
              <CardDescription className="text-xs">Nombre cumulé de clients actifs</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis 
                    dataKey="month" 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fontSize: 11 }}
                    interval={5}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fontSize: 11 }}
                    tickFormatter={(value) => `${(value / 1000).toFixed(1)}K`}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                    formatter={(value: number) => [value.toLocaleString(), 'Clients']}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="customers" 
                    stroke="hsl(var(--chart-3))" 
                    strokeWidth={2.5}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Sections secondaires */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top produits */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-foreground text-base flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Produits les plus vendus
                </CardTitle>
                <CardDescription className="text-xs">Top 5 sur les 3 dernières années</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topProducts.map((product, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-3 hover:bg-muted rounded-lg transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-xl flex-shrink-0">
                        {product.image}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground text-sm truncate">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.sales.toLocaleString()} unités vendues</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="font-semibold text-foreground text-sm">{(product.revenue / 1000000).toFixed(2)}M €</p>
                        <div className="flex items-center gap-1 text-xs text-primary font-medium">
                          <ArrowUpRight className="h-3 w-3" />
                          <span>{product.trend}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Distribution géographique */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-foreground text-base flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Ventes par région
                </CardTitle>
                <CardDescription className="text-xs">Répartition géographique des revenus</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {geoData.map((geo, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">{geo.country}</span>
                        <span className="text-sm font-semibold text-foreground">{geo.percentage}%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${geo.percentage}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground min-w-[70px] text-right font-medium">
                          {(geo.revenue / 1000000).toFixed(2)}M €
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
    </div>
  )
}
