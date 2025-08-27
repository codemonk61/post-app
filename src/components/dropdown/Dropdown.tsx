import type { DropdownPropsType } from "./types";

const Dropdown: React.FC<DropdownPropsType> = ({title, options, onChange}) => {
  return (
    <div className="w-full">
     
        <span className="text-gray-500 "> {title}</span>
        
     
      <select onChange={onChange}
        id="options"
        name="options"
        className="mt-2 mb-3 block w-full rounded-md border border-gray-300  bg-white px-4 py-2.5 pr-10 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
      >
        {/* <option value="">Select</option>
        <option value="option1">User</option>
        <option value="option2">Admin</option>
        <option value="option3">Supder Admin</option> */}
        {
            options.map((option)=> {
                return  <option value={option.key}>{option.label}</option>
            })
        }
      </select>
    </div>
  );
};

export default Dropdown;
