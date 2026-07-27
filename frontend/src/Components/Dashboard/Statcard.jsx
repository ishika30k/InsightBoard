const StatCard = ({ title, value, growth, icon: Icon}) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-200">
      <h3 className="text-sm font-medium text-slate-500">
        {title}
      </h3>
      <Icon className="h-6 w-6 text-slate-500" />

      <h2 className="mt-3 text-3xl font-bold text-slate-800">
        {value}
      </h2>

      <p className="mt-2 text-sm font-medium text-green-600">
        {growth} this month
      </p>
    </div>
  );
};

export default StatCard;