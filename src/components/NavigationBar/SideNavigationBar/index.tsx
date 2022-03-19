import { CSSProperties, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import Logo from '../../../assets/images/logo.png';
import DarkModeToggle from '../../DarkModeToggle';
import TEXT_ROUTES from '../TextRoutes';
import styles from './styles.module.scss';

const duration = 300;

const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out`
};

const transitionStyles: { [id: string]: CSSProperties } = {
    entering: { transform: 'translate(0%, 0%)' },
    entered: { transform: 'translate(0%, 0%)' },
    exiting: { transform: 'translate(100%, 0%)' },
    exited: { transform: 'translate(100%, 0%)' }
};

const SideBar = ({
    setIsOpen,
    style
}: {
    setIsOpen: (isOpen: boolean) => void;
    style?: CSSProperties;
}) => {
    const navigate = useNavigate();
    return (
        <div className={styles['sidebar']} style={style}>
            <i
                className={`fa-solid fa-bars ${styles['burger']}`}
                onClick={() => setIsOpen(false)}
            />
            <div className={styles['text-routes']}>
                {TEXT_ROUTES.map(({ route, label }) => (
                    <h1 onClick={() => navigate(route)} key={label}>
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

const SideNavigationBar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <div className={styles['container']}>
                <img
                    className={styles['logo']}
                    src={Logo}
                    alt="yale-swe-logo"
                    onClick={() => navigate('/')}
                />
                <i
                    className={`fa-solid fa-bars ${styles['burger']}`}
                    onClick={() => setIsOpen(true)}
                />
            </div>
            <Transition in={isOpen} timeout={duration}>
                {(state: string) => (
                    <SideBar
                        setIsOpen={setIsOpen}
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                    />
                )}
            </Transition>
        </>
    );
};

export default SideNavigationBar;
