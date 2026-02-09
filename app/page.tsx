"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { TrendingUp, DollarSign, ShoppingCart, Users, Package, Globe, ArrowUpRight } from 'lucide-react'

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
  { name: 'Wireless Headphones Pro', sales: 15420, revenue: 3084000, trend: '+24%' },
  { name: 'Smart Watch Elite', sales: 12850, revenue: 2570000, trend: '+18%' },
  { name: 'Laptop Stand Premium', sales: 11200, revenue: 1680000, trend: '+31%' },
  { name: 'USB-C Hub Deluxe', sales: 9870, revenue: 986900, trend: '+15%' },
  { name: 'Ergonomic Mouse X', sales: 8450, revenue: 675000, trend: '+22%' },
]

const geoData = [
  { country: 'États-Unis', orders: 45320, revenue: 9064000, percentage: '42%' },
  { country: 'Canada', orders: 18940, revenue: 3788000, percentage: '18%' },
  { country: 'Royaume-Uni', orders: 15680, revenue: 3136000, percentage: '15%' },
  { country: 'Allemagne', orders: 12450, revenue: 2490000, percentage: '12%' },
  { country: 'France', orders: 8920, revenue: 1784000, percentage: '8%' },
  { country: 'Australie', orders: 5470, revenue: 1094000, percentage: '5%' },
]

const yearlyComparison = [
  { metric: 'Revenus', '2023': 4638000, '2024': 8607000, '2025': 14308000 },
  { metric: 'Commandes', '2023': 23195, '2024': 43035, '2025': 71540 },
  { metric: 'Clients', '2023': 16180, '2024': 29520, '2025': 48000 },
]

export default function Dashboard() {
  const totalRevenue = 27553000
  const totalOrders = 137770
  const totalCustomers = 93700
  const avgOrderValue = 200
  const conversionRate = 3.8
  const growthRate = 156

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard Analytics</h1>
        <p className="text-muted-foreground">Performance exceptionnelle sur 3 ans (2023-2025)</p>
      </div>

      {/* KPIs principaux */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">Revenus Totaux</CardTitle>
            <DollarSign className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{(totalRevenue / 1000000).toFixed(1)}M €</div>
            <div className="flex items-center gap-1 text-xs text-accent mt-1">
              <TrendingUp className="h-3 w-3" />
              <span>+{growthRate}% sur 3 ans</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-accent/20 to-accent/5 border-accent/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">Commandes Totales</CardTitle>
            <ShoppingCart className="h-5 w-5 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{(totalOrders / 1000).toFixed(0)}K</div>
            <div className="flex items-center gap-1 text-xs text-accent mt-1">
              <TrendingUp className="h-3 w-3" />
              <span>+208% croissance</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-chart-3/20 to-chart-3/5 border-chart-3/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">Clients Actifs</CardTitle>
            <Users className="h-5 w-5 text-chart-3" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{(totalCustomers / 1000).toFixed(1)}K</div>
            <div className="flex items-center gap-1 text-xs text-accent mt-1">
              <TrendingUp className="h-3 w-3" />
              <span>+197% base client</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-chart-4/20 to-chart-4/5 border-chart-4/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">Valeur Moy. Commande</CardTitle>
            <Package className="h-5 w-5 text-chart-4" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{avgOrderValue} €</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              <span>Taux conversion: {conversionRate}%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Graphiques principaux */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenus mensuels */}
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Évolution des Revenus (36 mois)</CardTitle>
            <CardDescription>Progression mensuelle sur 3 ans</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fontSize: 10 }}
                  interval={5}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
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
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Volume de Commandes</CardTitle>
            <CardDescription>Nombre de commandes mensuelles</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fontSize: 10 }}
                  interval={5}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
                  }}
                  formatter={(value: number) => [value.toLocaleString(), 'Commandes']}
                />
                <Bar dataKey="orders" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Croissance clients */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-foreground">Croissance de la Base Clients</CardTitle>
          <CardDescription>Accumulation de clients actifs sur 36 mois</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 10 }}
                interval={5}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `${(value / 1000).toFixed(1)}K`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  color: 'hsl(var(--foreground))'
                }}
                formatter={(value: number) => [value.toLocaleString(), 'Clients']}
              />
              <Line 
                type="monotone" 
                dataKey="customers" 
                stroke="hsl(var(--chart-3))" 
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Sections secondaires */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Top produits */}
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <Package className="h-5 w-5" />
              Top 5 Produits
            </CardTitle>
            <CardDescription>Meilleurs vendeurs sur 3 ans</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, idx) => (
                <div key={idx} className="flex items-center justify-between pb-3 border-b border-border last:border-0">
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.sales.toLocaleString()} ventes</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{(product.revenue / 1000000).toFixed(2)}M €</p>
                    <div className="flex items-center gap-1 text-xs text-accent">
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
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Répartition Géographique
            </CardTitle>
            <CardDescription>Ventes par pays</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {geoData.map((geo, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{geo.country}</span>
                    <span className="text-sm font-semibold text-foreground">{geo.percentage}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: geo.percentage }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground min-w-[80px] text-right">
                      {(geo.revenue / 1000000).toFixed(2)}M €
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Comparaison annuelle */}
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Comparaison Année par Année</CardTitle>
          <CardDescription>Performance agrégée par année</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={yearlyComparison}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="metric" 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => {
                  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`
                  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`
                  return value
                }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  color: 'hsl(var(--foreground))'
                }}
                formatter={(value: number) => value.toLocaleString()}
              />
              <Legend />
              <Bar dataKey="2023" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="2024" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="2025" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>Dashboard Analytics Premium • Données simulées pour démonstration</p>
      </div>
    </div>
  )
}
