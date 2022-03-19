import Logo from '../../assets/images/logo.png';
import styles from './styles.module.scss';

const NavigationBar = () => {
    return (
        <div className={styles['container']}>
            <img className={styles['logo']} src={Logo} alt="yale-swe-logo" />
            <div className={styles['text-routes']}>
                <h1>about us</h1>
                <h1>staff</h1>
                <h1>projects</h1>
                <h1>docs</h1>
                <h1>contact us</h1>
            </div>
        </div>
    );
};

export default NavigationBar;
