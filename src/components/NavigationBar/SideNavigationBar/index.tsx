import { CSSProperties, useState } from 'react';
import { Transition } from 'react-transition-group';

// import { useNavigate } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
// import DarkModeToggle from '../../DarkModeToggle';
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
}) => (
    <div className={styles['sidebar']} style={style}>
        <i
            className={`fa-solid fa-bars ${styles['burger']}`}
            onClick={() => setIsOpen(false)}
        />
    </div>
);

const SideNavigationBar = () => {
    // const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <div className={styles['container']}>
                <img
                    className={styles['logo']}
                    src={Logo}
                    alt="yale-swe-logo"
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
