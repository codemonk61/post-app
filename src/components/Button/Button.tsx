import type { ButtonPropsType } from "./types";

const Button: React.FC<ButtonPropsType> = ({ onClick, cta = "submit" }) => {
  return (
    <div>
      <button
        className="mt-2 inline-flex items-center gap-2 rounded-md border border-transparent bg-indigo-600 px-4 py-2.5
         text-sm font-medium text-white shadow-sm
         hover:bg-indigo-700 active:bg-indigo-800
         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
         disabled:opacity-60 cursor-pointer
         dark:focus:ring-offset-gray-900"
        onClick={onClick}
      >
        {cta}
      </button>
    </div>
  );
};

export default Button;
