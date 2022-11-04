import { useState } from 'react'
import Link from 'next/link'
import {darkTheme, lightTheme} from '../../utils/theme'
import {toggle} from '../../utils/toggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSun, faMoon} from '@fortawesome/free-solid-svg-icons'
import styles from './Navbar.module.css'
const {navbar, nav, toggleButton, themeButton, navActive, leftSection, rightSection, on, off, darkSide, lightSide} = styles

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
    const handleToggleClick = () => {
        toggle('nav-id', navActive)
    }
    return(
        <header className={navbar}>
            <section className={leftSection}>
                <Link href="/"><a>
                    <picture>
                        <img src='/NBAlogo.png' alt="NBA LOGO"/>
                    </picture>
                </a></Link>
                <button onClick={handleTheme} className={themeButton}>
                    <span className={darkThemeActive ? darkSide : lightSide}>
                        {
                            darkThemeActive ? <FontAwesomeIcon icon={faMoon} className={off}/>
                                            : <FontAwesomeIcon icon={faSun} className={on}/>
                        }
                    </span>
                </button>
            </section>
            <section className={rightSection}>
                <button className={toggleButton} onClick={handleToggleClick}>
                    <FontAwesomeIcon icon={faBars}/>
                </button>
                <nav className={nav} id="nav-id">
                    <ul>
                        <Link href={'/'}>
                        <a onClick={handleToggleClick}>
                                <li>Home</li>
                            </a>
                        </Link>
                        <Link href={'/stats'}>
                            <a onClick={handleToggleClick}>
                                <li>Players Stats</li>
                            </a>
                        </Link>
                    </ul>
                </nav>
            </section>
        </header>
    )
}