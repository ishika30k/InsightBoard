import { useState } from "react";

const EditProjectForm = ({ project, onProjectUpdated, onCancel }) => {
  const [title, setTitle] = useState(project.title);
  const [status, setStatus] = useState(project.status);
  const [dueDate, setDueDate] = useState(project.due_date);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/projects/${project.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            status,
            dueDate,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      onProjectUpdated();
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-slate-900">
        Edit Project
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg border p-2"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full rounded-lg border p-2"
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full rounded-lg border p-2"
        />

        <div className="flex gap-3">
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border px-4 py-2 text-slate-600 hover:bg-slate-100"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProjectForm;