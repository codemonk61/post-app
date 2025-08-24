

export type InputPropsType = {
    handleInput: (e: React.ChangeEvent<HTMLInputElement>)=> void, 
    value: string | number, 
    placeholder: string, 
    title: string,
    required?: boolean
}