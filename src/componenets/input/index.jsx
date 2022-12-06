import {InputConteiner} from'./style'

function Input({value,onChange}){
    return(
        <InputConteiner>
            <input value={value} onChange={onChange} />
        </InputConteiner>
    )
}

export default Input