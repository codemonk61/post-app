import type { CardPropsType } from "./types"

const Card : React.FC<CardPropsType>  = ({children, className=''}) => {
  return (
    <div className={`mb-3.5 max-w-7xl mx-auto p-4 md:p-8 bg-white dark:bg-gray-900 rounded-xl shadow-sm ${className}`}>
      {children}
    </div>
  )
}

export default Card
