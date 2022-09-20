import {FaFacebook, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer>
            <ul className={styles.socialList}>
                <li>
                    <FaFacebook />
                </li>

                <li>
                    <FaInstagram />
                </li>
                
                <li>
                    <FaLinkedinIn />
                </li>
            </ul>
        </footer>
    )
}

export default Footer