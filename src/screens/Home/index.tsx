import UndrawGraphic from '../../assets/images/undraw-code-thinking.svg';
import NavigationBar from '../../components/NavigationBar';
import styles from './styles.module.scss';

const Home = () => {
    return (
        <div className={styles['page-container']}>
            <NavigationBar />
            <div className={styles['content-container']}>
                <div className={styles['text-container']}>
                    <h1>software engineering at yale</h1>
                    <h3>
                        CPSC 439/539 at Yale University. We help students learn
                        by creating real software projects.
                    </h3>
                </div>
                <div className={styles['graphic-container']}>
                    <img src={UndrawGraphic} />
                </div>
            </div>
        </div>
    );
};

export default Home;
