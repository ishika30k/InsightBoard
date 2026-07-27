const ActivityFeed = ({ activities }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-slate-900">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="border-b border-slate-100 pb-3 last:border-0">
            <p className="text-sm text-slate-900">
              {activity.message}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {activity.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;