import StatCard from "../Components/Dashboard/Statcard"
import RecentProjects from "../Components/Dashboard/RecentProjects";
import ActivityFeed from "../Components/Dashboard/ActivityFeed";
import {
  DollarSign,
  Users,
  FolderKanban,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Revenue",
    value: "₹2,45,000",
    growth: "+12%",
    icon: DollarSign,
  },
  {
    title: "Customers",
    value: "1,284",
    growth: "+5%",
    icon: Users,
  },
  {
    title: "Projects",
    value: "42",
    growth: "+8%",
    icon: FolderKanban,
  },
  {
    title: "Conversion Rate",
    value: "18.2%",
    growth: "+2%",
    icon: TrendingUp,
  },
];

const projects = [
  {
    name: "Portfolio Website",
    client: "John Smith",
    status: "Completed",
  },
  {
    name: "E-commerce Store",
    client: "ABC Fashion",
    status: "In Progress",
  },
  {
    name: "CRM Dashboard",
    client: "Tech Solutions",
    status: "Pending",
  },
  {
    name: "Restaurant App",
    client: "Foodies",
    status: "Completed",
  },
];

const activities = [
  {
    message: "New customer registered",
    time: "2 minutes ago",
  },
  {
    message: "Portfolio Website marked as completed",
    time: "20 minutes ago",
  },
  {
    message: "New project created",
    time: "1 hour ago",
  },
  {
    message: "Monthly report generated",
    time: "Yesterday",
  },
];

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800">
        Dashboard
      </h1>

      <p className="mt-2 text-slate-500">
        Welcome back! Here's an overview of your business.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
            <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            growth={stat.growth}
            icon={stat.icon}
            />
        ))}
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
                <RecentProjects projects={projects} />
            </div>

            <ActivityFeed activities={activities} />
        </div>
    </div>
  );
};

export default Dashboard;