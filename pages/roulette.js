import Head from 'next/head'
import 'bulma/css/bulma.css'
import styles from '../styles/roulette.module.css'

export default function Roulette () {
    return (
        <div className={styles.main}>
            <Head>
                <title>Roulette App</title>
                <meta name="description" content="Roulette test app" />
            </Head>
            <nav className="navbar">
                <div className="navbar-brand">
                    <h1>Roulette</h1>
                </div> 
                <div className="navbar-end">
                    <button className="button is-primary">Connect Wallet</button>
                </div>
            </nav>

        </div>

    )
}