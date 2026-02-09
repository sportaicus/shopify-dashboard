"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TrendingUp, DollarSign, ShoppingCart, Users, Package, Search, Bell, ChevronDown, Home, FileText, BarChart3, Settings } from 'lucide-react'

// Données simulées pour une boutique Shopify très performante sur 3 ans
const revenueData = [
  { month: 'Jan 2023', revenue: 245000, orders: 1250 },
  { month: 'Fév 2023', revenue: 268000, orders: 1340 },
  { month: 'Mar 2023', revenue: 312000, orders: 1560 },
  { month: 'Avr 2023', revenue: 298000, orders: 1490 },
  { month: 'Mai 2023', revenue: 334000, orders: 1670 },
  { month: 'Juin 2023', revenue: 356000, orders: 1780 },
  { month: 'Juil 2023', revenue: 389000, orders: 1945 },
  { month: 'Août 2023', revenue: 412000, orders: 2060 },
  { month: 'Sep 2023', revenue: 445000, orders: 2225 },
  { month: 'Oct 2023', revenue: 478000, orders: 2390 },
  { month: 'Nov 2023', revenue: 512000, orders: 2560 },
  { month: 'Déc 2023', revenue: 589000, orders: 2945 },
  { month: 'Jan 2024', revenue: 534000, orders: 2670 },
  { month: 'Fév 2024', revenue: 567000, orders: 2835 },
  { month: 'Mar 2024', revenue: 612000, orders: 3060 },
  { month: 'Avr 2024', revenue: 589000, orders: 2945 },
  { month: 'Mai 2024', revenue: 645000, orders: 3225 },
  { month: 'Juin 2024', revenue: 678000, orders: 3390 },
  { month: 'Juil 2024', revenue: 723000, orders: 3615 },
  { month: 'Août 2024', revenue: 756000, orders: 3780 },
  { month: 'Sep 2024', revenue: 801000, orders: 4005 },
  { month: 'Oct 2024', revenue: 845000, orders: 4225 },
  { month: 'Nov 2024', revenue: 912000, orders: 4560 },
  { month: 'Déc 2024', revenue: 1045000, orders: 5225 },
  { month: 'Jan 2025', revenue: 923000, orders: 4615 },
  { month: 'Fév 2025', revenue: 978000, orders: 4890 },
  { month: 'Mar 2025', revenue: 1067000, orders: 5335 },
  { month: 'Avr 2025', revenue: 1023000, orders: 5115 },
  { month: 'Mai 2025', revenue: 1124000, orders: 5620 },
  { month: 'Juin 2025', revenue: 1189000, orders: 5945 },
  { month: 'Juil 2025', revenue: 1267000, orders: 6335 },
  { month: 'Août 2025', revenue: 1334000, orders: 6670 },
  { month: 'Sep 2025', revenue: 1423000, orders: 7115 },
  { month: 'Oct 2025', revenue: 1501000, orders: 7505 },
  { month: 'Nov 2025', revenue: 1623000, orders: 8115 },
  { month: 'Déc 2025', revenue: 1856000, orders: 9280 },
]

export default function Dashboard() {
  const totalRevenue = 27553000
  const totalOrders = 138000
  const totalCustomers = 93700
  const avgOrderValue = 200

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <header className="bg-card border-b border-border">
        <div className="flex items-center justify-between px-6 h-14">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-semibold text-foreground">Premium Store</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-1 text-sm">
              <a href="#" className="px-3 py-2 text-foreground font-medium hover:bg-muted rounded-md transition-colors">
                Accueil
              </a>
              <a href="#" className="px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">
                Commandes
              </a>
              <a href="#" className="px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">
                Produits
              </a>
              <a href="#" className="px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">
                Clients
              </a>
              <a href="#" className="px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">
                Analytiques
              </a>
              <a href="#" className="px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">
                Rapports
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Rechercher..."
                className="pl-9 pr-4 py-1.5 w-64 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            
            <button className="p-1.5 hover:bg-muted rounded-md transition-colors relative">
              <Bell className="h-5 w-5 text-foreground" />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-destructive rounded-full"></span>
            </button>
            
            <div className="flex items-center gap-2 px-2 py-1 hover:bg-muted rounded-md cursor-pointer transition-colors">
              <div className="w-7 h-7 bg-muted rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-foreground">AD</span>
              </div>
              <span className="text-sm font-medium text-foreground hidden sm:inline">Admin</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-foreground mb-1">Tableau de bord</h1>
          <p className="text-sm text-muted-foreground">Vue d'ensemble de vos performances sur 3 ans (2023-2025)</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="border border-border shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Ventes totales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-foreground mb-1">
                {(totalRevenue / 1000000).toFixed(2)}M €
              </div>
              <div className="flex items-center gap-1 text-xs text-primary">
                <TrendingUp className="h-3 w-3" />
                <span>+156% sur 3 ans</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Commandes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-foreground mb-1">
                {(totalOrders / 1000).toFixed(0)}K
              </div>
              <div className="flex items-center gap-1 text-xs text-primary">
                <TrendingUp className="h-3 w-3" />
                <span>+208% croissance</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Clients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-foreground mb-1">
                {(totalCustomers / 1000).toFixed(1)}K
              </div>
              <div className="flex items-center gap-1 text-xs text-primary">
                <TrendingUp className="h-3 w-3" />
                <span>+197% base client</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Panier moyen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-foreground mb-1">
                {avgOrderValue} €
              </div>
              <div className="text-xs text-muted-foreground">
                Taux conversion: 3.8%
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Chart */}
        <Card className="mb-8 border border-border shadow-none">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-foreground">Évolution des ventes</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">Revenus mensuels sur 36 mois</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke="hsl(var(--border))" 
                  vertical={false}
                  strokeOpacity={0.5}
                />
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                  tickLine={false}
                  axisLine={false}
                  interval={5}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}K €`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: '6px',
                    fontSize: '12px',
                    padding: '8px 12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                  formatter={(value: number) => [`${value.toLocaleString()} €`, 'Revenus']}
                  labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 500 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(var(--chart-1))" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bottom Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Orders Chart */}
          <Card className="border border-border shadow-none">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-foreground">Volume de commandes</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">Nombre de commandes mensuelles</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke="hsl(var(--border))" 
                    vertical={false}
                    strokeOpacity={0.5}
                  />
                  <XAxis 
                    dataKey="month" 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                    tickLine={false}
                    axisLine={false}
                    interval={5}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      borderColor: 'hsl(var(--border))',
                      borderRadius: '6px',
                      fontSize: '12px',
                      padding: '8px 12px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                    formatter={(value: number) => [value.toLocaleString(), 'Commandes']}
                    labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 500 }}
                    cursor={{ fill: 'hsl(var(--muted))' }}
                  />
                  <Bar 
                    dataKey="orders" 
                    fill="hsl(var(--chart-2))" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Stats Summary */}
          <Card className="border border-border shadow-none">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-foreground">Résumé des performances</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">Métriques clés sur 3 ans</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Revenu moyen/mois</p>
                    <p className="text-xs text-muted-foreground">Sur 36 mois</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-foreground">765K €</p>
                  <p className="text-xs text-primary">+156%</p>
                </div>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-chart-2/10 flex items-center justify-center">
                    <ShoppingCart className="h-5 w-5 text-chart-2" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Commandes/mois</p>
                    <p className="text-xs text-muted-foreground">Moyenne mensuelle</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-foreground">3.8K</p>
                  <p className="text-xs text-primary">+208%</p>
                </div>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-chart-3/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-chart-3" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Nouveaux clients/mois</p>
                    <p className="text-xs text-muted-foreground">Croissance moyenne</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-foreground">2.6K</p>
                  <p className="text-xs text-primary">+197%</p>
                </div>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-chart-4/10 flex items-center justify-center">
                    <Package className="h-5 w-5 text-chart-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Taux de conversion</p>
                    <p className="text-xs text-muted-foreground">Moyenne sur 3 ans</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-foreground">3.8%</p>
                  <p className="text-xs text-primary">+45%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Navigation Links */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex items-center justify-between text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Paramètres
            </a>
            <span className="text-muted-foreground">Premium Store © 2025</span>
          </div>
        </div>
      </main>
    </div>
  )
}
