import { useNavigate } from 'react-router-dom';

import Logo from '../../../assets/images/logo.png';
import DarkModeToggle from '../../DarkModeToggle';
import TEXT_ROUTES from '../TextRoutes';
import styles from './styles.module.scss';

const FullNavigationBar = () => {
    const navigate = useNavigate();
    return (
        <div className={styles['container']}>
            <img className={styles['logo']} src={Logo} alt="yale-swe-logo" />
            <div className={styles['text-routes']}>
                {TEXT_ROUTES.map(({ route, label }) => (
                    <h1 onClick={() => navigate(route)} key={route}>
                        {label}
                    </h1>
                ))}
                <div className={styles['toggle-container']}>
                    <DarkModeToggle />
                </div>
            </div>
        </div>
    );
};

export default FullNavigationBar;
