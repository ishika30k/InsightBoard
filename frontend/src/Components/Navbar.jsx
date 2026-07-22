const Navbar = () => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm">
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          Welcome back, Ishika 👋
        </p>
      </div>

      <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
        I
      </div>
    </header>
  );
};

export default Navbar;