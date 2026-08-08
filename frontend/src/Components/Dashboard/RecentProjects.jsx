const RecentProjects = ({ projects, onEdit, onDelete }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-slate-900">
        Recent Projects
      </h2>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0"
          >
            <div>
              <h3 className="font-medium text-slate-900">
                {project.title}
              </h3>

              <p className="text-sm text-slate-500">
                Due: {project.due_date}
              </p>
            </div>

            <div className="flex items-center gap-2">
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

              <button
                onClick={() => onEdit(project)}
                className="rounded-lg border border-slate-200 px-3 py-1 text-sm text-slate-600 hover:bg-slate-100"
              >
                Edit
              </button>

              <button
                onClick={() => onDelete(project.id)}
                className="rounded-lg bg-red-50 px-3 py-1 text-sm text-red-600 hover:bg-red-100"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;