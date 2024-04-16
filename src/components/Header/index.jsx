import styles from './Header.module.css';
import Navibar from '../Nav/Navibar';

const Header = () => {
    return (
        <header className={styles.header}>
            <h2>Titulo</h2>
            <Navibar />
        </header>
    );
};

export default Header;