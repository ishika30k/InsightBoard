import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Counter component mounted!");
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">{count}</h1>

        <div className="mt-5 flex gap-3">
            <button
                onClick={() => setCount(count + 1)}
                className="rounded-lg bg-blue-600 px-5 py-2 text-white"
            >
                +
            </button>

            <button
                onClick={() => setCount(count - 1)}
                className="rounded-lg bg-red-600 px-5 py-2 text-white"
            >
                -
            </button>

            <button
                onClick={() => setCount(0)}
                className="rounded-lg bg-slate-600 px-5 py-2 text-white"
            >
                Reset
            </button>
        </div>
    </div>
  );
};

export default Counter;