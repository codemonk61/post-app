import type { TextPropsType } from "./types"

const Text:React.FC<TextPropsType> = ({title, className}) => {
  return (
    <p className={className}>
      {title}
    </p>
  )
}

export default Text
