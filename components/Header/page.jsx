import Link from 'next/link';
import styles from './page.module.css'

const Header = () => {
    return(
        <>
            <div className={styles.header}>
                <div className={styles.productName}>
                DevZone
                </div>
                <div style={{ paddingRight:'10px' }}>
                <Link href={`/login`} style={{ fontFamily: 'monospace', fontSize: '20px', textDecoration: 'none' }}>Login &nbsp;</Link>
                <Link href={`/signup`} style={{ fontFamily: 'monospace', fontSize: '20px', textDecoration: 'none'  }}>Sign-Up</Link>
                </div>
            </div>
        </>
    )
}

export default Header;