

export type InputPropsType = {
    handleInput: (e: React.ChangeEvent<HTMLInputElement>)=>viod, 
    value: string | number, 
    placeholder: string, 
    title: string,
    required?: boolean
}