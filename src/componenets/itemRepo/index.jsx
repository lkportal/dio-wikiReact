import {ItemConteiner} from './style'
function Itemrepo({repo}) {
    return(
        <ItemConteiner>
            <h3>{repo}</h3>
            <p>{repo}</p>
            <a href='#'>Ver Repositorio</a>

            <a href='#' className='remove'>Remove</a>
            <hr />

        </ItemConteiner>
    )
}
export default Itemrepo