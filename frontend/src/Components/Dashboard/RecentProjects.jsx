const RecentProjects = ({ projects }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-slate-900">
        Recent Projects
      </h2>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0"
          >
            <div>
              <h3 className="font-medium text-slate-900">
                {project.name}
              </h3>

              <p className="text-sm text-slate-500">
                {project.client}
              </p>
            </div>

            <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
                project.status === "Completed"
                ? "bg-green-100 text-green-700"
                : project.status === "In Progress"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-blue-100 text-blue-700"
            }`}
            >
            {project.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;