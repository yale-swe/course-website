import NavigationBar from '../../components/NavigationBar';
import styles from './styles.module.scss';

const About = () => {
    return (
        <div className={styles['page-container']}>
            <NavigationBar />
            <div className={styles['content-container']}>
                {/* <h1>About</h1> */}
                <div style={{ marginBottom: '30px' }}></div>
                {/* <hr
                    style={{
                        background: 'black',
                        color: 'black',
                        height: '1px',
                        width: '100%',
                        marginTop: '30px'
                    }}
                /> */}
                {/* <h2>Class</h2> */}
                <p>
                    <span className={styles['highlight-text']}>When:</span>{' '}
                    Mondays and Wednesdays: 1:00pm-2:15pm
                </p>
                <p>
                    <span className={styles['highlight-text']}>Where:</span> WLH{' '}
                </p>
                <p>
                    <span className={styles['highlight-text']}>
                        Office Hours:
                    </span>
                </p>
                <hr
                    style={{
                        background: 'black',
                        color: 'black',
                        height: '1px',
                        width: '100%',
                        marginTop: '20px'
                    }}
                />
            </div>
        </div>
    );
};

export default About;
