import { useState, type ChangeEvent } from "react";

export default function Search() {
  const [value, setValue] = useState("");

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form action={`/search/${value}`} method="POST" className="flex justify-center items-center mt-10 z-20 mb-5">
      <input
        type="search"
        className="w-56 h-10 p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white bg-black placeholder-gray-500"
        value={value}
        onChange={search}
        placeholder="search tools"
        style={{ color: "white" }}
      />
    </form>
  );
}