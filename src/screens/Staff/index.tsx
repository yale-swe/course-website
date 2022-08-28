import NavigationBar from '../../components/NavigationBar';
import styles from './styles.module.scss';

const Staff = () => {
    return (
        <div className={styles['page-container']}>
            <NavigationBar />
            <div className={styles['content-container']}>
                {/* <h1>About</h1> */}
                <div style={{ marginBottom: '30px' }}></div>
                <div className={styles['faces-container']}>
                    {/* <div className={styles['face']} style={{position: 'absolute', left: '0px', backgroundImage: 'url("https://cpsc.yale.edu/sites/default/files/styles/people_thumbnail/public/pictures/picture-4252-1632336188.jpg?itok=xl_y10tU")'}}></div> */}
                    {/* <div className={styles['face']} style={{position: 'absolute', left: '300px', backgroundImage: 'url("https://cpsc.yale.edu/sites/default/files/styles/people_thumbnail/public/pictures/picture-4245-1630092933.jpg?itok=4j836-ec")'}}></div> */}
                </div>
            </div>
        </div>
    );
};

export default Staff;
