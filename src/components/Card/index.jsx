import Capa from './assets/capa.png'
import Code from './assets/code.svg'
import Share from './assets/share.svg'
import Chat from './assets/chat.svg'
import User from './assets/usuario.png'

const Card = () => {
    return (
        <article className="card">
            <div className="card__imagem">
                <img src={Capa} alt="Imagem do post" />
            </div>
            <div className='card__conteudo'>
                <div className='conteudo__texto'>
                    <h3>Título do post</h3>
                    <p>Resumo do post</p>
                </div>
                <div className='conteudo__rodape'>
                    <ul>
                        <li>
                            <img src={Code} alt="Ícone de códigos" />
                            100
                        </li>
                        <li>
                            <img src={Share} alt="Ícone de compartilhamentos" />
                            12
                        </li>
                        <li>
                            <img src={Chat} alt="Ícone de comentários" />
                            10
                        </li>
                    </ul>  
                    <div className='rodape__usuario'>
                        <img src={User} alt="Imagem do usuário" />
                        @jão
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card;