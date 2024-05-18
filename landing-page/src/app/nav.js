import React from 'react'
import styles from "./nav.module.css";
import Link from 'next/link';


export default function Nav() {
  return (
    <nav className={styles.navbar}>
        <Link className={styles.logoContainer} href="/">
            <img className={styles.logoImg} src="./images/logo.png"></img>
        </Link>

        <div className={styles.linksContainer}>
            <Link className={styles.linkContainer} href="/">
                <h4 className={styles.linkText}>Features</h4>
            </Link>
            <Link className={styles.linkContainer} href="/">
                <h4 className={styles.linkText}>Pricing</h4>
            </Link>
            <Link className={styles.linkContainer} href="/">
                <h4 className={styles.linkText}>Contact</h4>
            </Link>
        </div>

        <Link className={styles.loginButtonContainer} href="/">
            <svg className={styles.loginIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M16 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-5.405 16.4l-1.472 1.6h-3.123v2h-2v2h-2v-2.179l5.903-5.976c-.404-.559-.754-1.158-1.038-1.795l-6.865 6.95v5h6v-2h2v-2h2l2.451-2.663c-.655-.249-1.276-.562-1.856-.937zm7.405-11.4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm0-1c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"/></svg>
            <h4 className={styles.loginText}>Login</h4>
        </Link>
    </nav>
  )
}