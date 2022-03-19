import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';
import DarkModeToggle from '../DarkModeToggle';
import styles from './styles.module.scss';

const NavigationBar = () => {
    const navigate = useNavigate();
    return (
        <div className={styles['container']}>
            <img className={styles['logo']} src={Logo} alt="yale-swe-logo" />
            <div className={styles['text-routes']}>
                <h1 onClick={() => navigate('/about')}>about us</h1>
                <h1 onClick={() => navigate('/staff')}>staff</h1>
                <h1 onClick={() => navigate('/projects')}>projects</h1>
                <h1 onClick={() => navigate('/docs')}>docs</h1>
                <h1 onClick={() => navigate('/contact')}>contact us</h1>
                <div className={styles['toggle-container']}>
                    <DarkModeToggle />
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
