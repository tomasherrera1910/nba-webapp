import {toggle} from '../../utils/toggle'
import styles from './Navbar.module.css'
const {navbar, nav, toggleButton, navActive} = styles
export function Navbar(){
    const NBAlogoURL = 'https://assets.stickpng.com/images/58428defa6515b1e0ad75ab4.png'
    return(
        <header className={navbar}>
            <picture>
            <img src={NBAlogoURL} alt="NBA LOGO"/>
            </picture>
            <button className={toggleButton} onClick={() => toggle('nav-id', navActive)}>
                Toogle
            </button>
            <nav className={nav} id="nav-id">
                <ul>
                    <li>
                        Ranking
                    </li>
                    <li>
                        Standings
                    </li>
                    <li>
                        Players
                    </li>
                </ul>
            </nav>
        </header>
    )
}