import NavigationBar from '../../components/NavigationBar';
import styles from './styles.module.scss';

const Home = () => {
    return (
        <div className={styles['page-container']}>
            <NavigationBar />
        </div>
    );
};

export default Home;
