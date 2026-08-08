import { useState } from "react";

const AddProjectForm = ({ onProjectAdded }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Pending");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          status,
          dueDate,
        }),
      });

      const data = await response.json();

      console.log(data);
      onProjectAdded();
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-slate-900">
        Add Project
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Project Title"
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

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProjectForm;