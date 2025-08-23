import type { InputPropsType } from "./types"

const Input:React.FC<InputPropsType>  = ({handleInput, value, placeholder, title, required}) => {
  return (
    <div>
        <span className="text-gray-500"> {title}</span>{required && <span className="text-red-500">{'*'}</span>}
        <input
         className=" mt-2 mb-3 w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 pr-10 text-gray-900 placeholder:text-gray-400
           shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
           disabled:cursor-not-allowed disabled:opacity-60
           dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 dark:placeholder:text-gray-500 dark:focus:ring-indigo-500"
         onChange={handleInput}
         value={value}
         placeholder={placeholder}
        />
    </div>
  )
}

export default Input