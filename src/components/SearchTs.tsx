import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { Icon } from "@/icons/Ui";

export default function Search() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputType, setInputType] = useState("text");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setInputType("search");
      } else {
        setInputType("text");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      window.location.href = `/search/${value}`;
    }, 1322);
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="flex justify-center items-center mt-7 mb-10"
    >
      <div className="relative w-full max-w-lg mx-auto flex items-center border border-[#2c2c2c] rounded-lg p-1 focus-within:ring-2 focus-within:ring-[#101010] transition-all">
        <input
          type={inputType}
          className="flex-1 p-3 rounded-l-lg bg-black text-white placeholder-gray-500 focus:outline-none transition-all"
          value={value}
          onChange={search}
          placeholder="Search BETA"
        />
        <button
          type="submit"
          className="bg-black p-3 rounded-r-lg flex items-center justify-center text-gray-400 hover:text-gray-200 transition-all"
          aria-label="Search"
          disabled={loading}
        >
          {loading ? (
            <img
              className="w-[14px]"
              src="/assets/gif/loading.gif"
              alt="Loading"
            />
          ) : (
            <Icon.Flare />
          )}
        </button>
      </div>
    </form>
  );
}