export type DropdownPropsType = {
    title : string,
    options : option[],
    onChange : (e:React.ChangeEvent<HTMLSelectElement>)=> void

}

type option = {
    key : string,
    label : string
}