import UndrawGraphic from '../../assets/images/undraw-under-construction.svg';
import NavigationBar from '../../components/NavigationBar';
import styles from './styles.module.scss';

const UnderConstruction = () => {
    return (
        <div className={styles['page-container']}>
            <NavigationBar />
            <div className={styles['content-container']}>
                <img src={UndrawGraphic} />
                <h1>This page is under construction</h1>
                <h2>
                    We are working on this page, and it will be available soon!
                </h2>
            </div>
        </div>
    );
};

export default UnderConstruction;
