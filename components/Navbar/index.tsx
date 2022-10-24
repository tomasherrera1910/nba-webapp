import { useState } from 'react'
import {darkTheme, lightTheme} from '../../utils/theme'
import {toggle} from '../../utils/toggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './Navbar.module.css'
const {navbar, nav, toggleButton, navActive, rightSection} = styles
const NBAlogoURL = 'https://assets.stickpng.com/images/58428defa6515b1e0ad75ab4.png'
export function Navbar(){
    const [darkThemeActive, setDarkTheme] = useState<boolean>(true)
    const handleTheme = () => {
        if(darkThemeActive){
            lightTheme()
        }else{
            darkTheme()
        }
        setDarkTheme(prevState => !prevState)
    }
    return(
        <header className={navbar}>
            <picture>
            <img src={NBAlogoURL} alt="NBA LOGO"/>
            </picture>
            <section className={rightSection}>
            <button onClick={handleTheme}>
                ChangeTheme
            </button>
            <button className={toggleButton} onClick={() => toggle('nav-id', navActive)}>
                <FontAwesomeIcon icon={faBars}/>
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
            </section>
        </header>
    )
}