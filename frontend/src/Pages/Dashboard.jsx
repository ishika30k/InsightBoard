import StatCard from "../Components/Dashboard/Statcard"
import RecentProjects from "../Components/Dashboard/RecentProjects";
import ActivityFeed from "../Components/Dashboard/ActivityFeed";
import AddProjectForm from "../Components/Dashboard/AddProjectForm";
import EditProjectForm from "../Components/Dashboard/EditProjectForm";
import { useEffect, useState } from "react";
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

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingProject, setEditingProject] = useState(null);

const handleDelete = async (projectId) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this project?"
  );

  if (!confirmed) {
    return;
  }

  try {
    const response = await fetch(
      `http://127.0.0.1:5000/api/projects/${projectId}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    console.log(data);

    fetchProjects();
  } catch (error) {
    console.error("Error deleting project:", error);
  }
};

const handleEdit = (project) => {
  setEditingProject(project);
};

  const fetchProjects = () => {
    fetch("http://127.0.0.1:5000/api/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to load projects.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

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
        <div className="mt-8">
          {editingProject ? (
            <EditProjectForm
              project={editingProject}
              onProjectUpdated={() => {
                setEditingProject(null);
                fetchProjects();
              }}
              onCancel={() => setEditingProject(null)}
            />
          ) : (
            <AddProjectForm onProjectAdded={fetchProjects} />
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentProjects
              projects={projects}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>

          <ActivityFeed activities={activities} />
        </div>
    </div>
  );
};

export default Dashboard;