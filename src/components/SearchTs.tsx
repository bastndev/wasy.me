import { useState, type ChangeEvent } from "react";
import { Icon } from "@/icons/Ui";

export default function Search() {
  const [value, setValue] = useState("");

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form
      action={`/search/${value}`}
      method="POST"
      className="flex justify-center items-center mt-7 mb-10"
    >
      <div className="relative w-full max-w-lg mx-auto flex items-center border border-[#2c2c2c] rounded-lg p-1 focus-within:ring-2 focus-within:ring-[#101010] transition-all">
        <input
          type="search"
          className="flex-1 p-3 rounded-l-lg bg-black text-white placeholder-gray-500 focus:outline-none transition-all"
          value={value}
          onChange={search}
          placeholder="Search tools"
        />
        <button
          type="submit"
          className="bg-black p-3 rounded-r-lg flex items-center justify-center text-gray-400 hover:text-gray-200 transition-all"
          aria-label="Search"
        >
          <Icon.Flare />
        </button>
      </div>
    </form>
  );
}
