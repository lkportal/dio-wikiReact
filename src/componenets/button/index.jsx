import {ButtonConteiner} from'./style'

function Button({onClick}){
    return(
        <ButtonConteiner onclick={onClick}>
            Buscar
        </ButtonConteiner>
    )
}

export default Button