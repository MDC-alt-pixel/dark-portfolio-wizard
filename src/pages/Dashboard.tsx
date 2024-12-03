import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, Users, CreditCard, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";

// Sample data for the chart
const chartData = [
  { month: 'Jan', amount: 1500 },
  { month: 'Feb', amount: 2300 },
  { month: 'Mar', amount: 3200 },
  { month: 'Apr', amount: 2800 },
  { month: 'May', amount: 3800 },
  { month: 'Jun', amount: 4300 },
];

// Sample data for recent transactions
const recentTransactions = [
  { id: 1, description: "Store Purchase", amount: 120.50, status: "completed", date: "2024-03-10" },
  { id: 2, description: "Online Payment", amount: 850.00, status: "pending", date: "2024-03-09" },
  { id: 3, description: "Subscription", amount: 15.99, status: "completed", date: "2024-03-08" },
  { id: 4, description: "Transfer", amount: 500.00, status: "completed", date: "2024-03-07" },
];

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6 space-y-6 bg-background min-h-screen">
      {/* Header Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-white/5 backdrop-blur-lg border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">$27,350</div>
            <div className="flex items-center space-x-2 text-xs text-green-500">
              <ArrowUpRight className="h-4 w-4" />
              <span>20.1% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/5 backdrop-blur-lg border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">3,205</div>
            <div className="flex items-center space-x-2 text-xs text-green-500">
              <ArrowUpRight className="h-4 w-4" />
              <span>+180 new users</span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/5 backdrop-blur-lg border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Sales</CardTitle>
            <CreditCard className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">$4,750</div>
            <div className="flex items-center space-x-2 text-xs text-red-500">
              <ArrowDownRight className="h-4 w-4" />
              <span>-7% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/5 backdrop-blur-lg border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Now</CardTitle>
            <Activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">573</div>
            <div className="flex items-center space-x-2 text-xs text-green-500">
              <ArrowUpRight className="h-4 w-4" />
              <span>+201 since last hour</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chart Section */}
      <Card className="col-span-4 bg-white/5 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Revenue Overview</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <div className="h-[300px] md:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#9b87f5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
                <XAxis 
                  dataKey="month" 
                  className="text-xs md:text-sm" 
                  stroke="#666"
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  className="text-xs md:text-sm" 
                  stroke="#666"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1A1F2C',
                    border: '1px solid #7E69AB',
                    borderRadius: '8px'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="amount"
                  stroke="#9b87f5"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card className="bg-white/5 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-white/5 space-y-2 sm:space-y-0"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium">{transaction.description}</p>
                  <p className="text-xs text-muted-foreground">{transaction.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    transaction.status === 'completed' 
                      ? 'bg-green-500/20 text-green-500' 
                      : 'bg-yellow-500/20 text-yellow-500'
                  }`}>
                    {transaction.status}
                  </span>
                  <span className="text-sm font-medium">
                    ${transaction.amount.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;