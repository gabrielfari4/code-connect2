import Logo from './assets/Logo.svg';
import Feed from './assets/feed.svg';
import Avatar from './assets/account_circle.svg';
import Info from './assets/info.svg';
import Logout from './assets/logout.svg';

export default function Sidebar() {
    return (
        <aside>
            <img src={Logo} alt="Logo do CodeConnect" />
            <nav>
                <ul>
                    <li>
                        <a href="#">Publicar</a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Feed} alt="" />
                            <span>Feed</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Avatar} alt="" />
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Info} alt="" />
                            <span>Sobre nós</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Logout} alt="" />
                            <span>Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}