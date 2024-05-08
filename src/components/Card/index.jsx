import Code from './assets/code.svg'
import Share from './assets/share.svg'
import Chat from './assets/chat.svg'
import './styles.css'

const Card = (props) => {
    return (
        <article className="card">
            <div className="card__imagem">
                <img src={props.imagemUrl} alt="Imagem do post" />
            </div>
            <div className='card__conteudo'>
                <div className='conteudo__texto'>
                    <h3>{props.titulo}</h3>
                    <p>{props.resumo}</p>
                </div>
                <div className='conteudo__rodape'>
                    <ul>
                        <li>
                            <img src={Code} alt="Ícone de códigos" />
                            {props.linhasDeCodigo}
                        </li>
                        <li>
                            <img src={Share} alt="Ícone de compartilhamentos" />
                            {props.compartilhamentos}
                        </li>
                        <li>
                            <img src={Chat} alt="Ícone de comentários" />
                            {props.comentarios}
                        </li>
                    </ul>  
                    <div className='rodape__usuario'>
                        <img src={props.usuario.imagem} alt="Imagem do usuário" />
                        {props.usuario.nome}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card;