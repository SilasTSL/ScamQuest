'use client'

import styles from "./nav.module.css";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


export default function Nav() {

  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
        <div className={styles.navbarTopContainer}>
            <Link className={styles.logoContainer} href="/">
                <Image 
                    src="/images/ScamQuest.webp"
                    width={200}
                    height={200}
                    className="logo"
                />
            </Link>
            <Link className={`${styles.navLinkContainer} ${pathname === '/' ? styles.active : styles.inactive}`} href="/">
                <svg className={styles.navLinkIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>
                Home
            </Link>

            <Link className={`${styles.navLinkContainer} ${pathname === '/latest' ? styles.active : styles.inactive}`} href="/latest">
                <svg className={styles.navLinkIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>
                Latest
            </Link>
        </div>
    </nav>  
  );
}
