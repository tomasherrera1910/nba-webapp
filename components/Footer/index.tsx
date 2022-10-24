import styles from './Footer.module.css'
const { footer } = styles
export function Footer(){
    const sportsdataLogoURL = 'https://sicscore.com/static/media/logo-partner-6.0d083292c182883a9d47.png'
    return(
        <footer className={footer}>
            <section>
                <p>Design by NBA fan and junior developer: <span>Tomás Herrera</span></p>
            </section>
            <section>
                <p>All data comes from the NBA API:</p>
                <a href='https://sportsdata.io/developers/api-documentation/nba' target="_blank" rel="noreferrer">
                        <picture><img src={sportsdataLogoURL} alt="sportsdata logo"/></picture>
                </a>
            </section>
        </footer>
    )
}