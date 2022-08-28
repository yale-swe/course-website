import NavigationBar from '../../components/NavigationBar';
import styles from './styles.module.scss';

const About = () => {
    return (
        <div className={styles['page-container']}>
            <NavigationBar />
            <div className={styles['content-container']}>
                {/* <h1>About</h1> */}
                <div style={{ marginBottom: '30px' }}></div>
                <p style={{ marginBottom: '0px' }}>
                    <span className={styles['highlight-text']}>When:</span>{' '}
                    Mondays and Wednesdays: 1:00pm-2:15pm
                </p>
                <div
                    style={{
                        textAlign: 'left',
                        width: '90%',
                        marginTop: '0px',
                        left: '20%',
                        fontSize: '18px'
                    }}
                >
                    <a href="/assets/calendar.pdf">Link to PDF Calendar</a>{' '}
                </div>
                <p style={{ marginBottom: '0px', marginTop: '20px' }}>
                    <span className={styles['highlight-text']}>Where:</span> WTS
                    A51
                </p>
                <div
                    style={{
                        textAlign: 'left',
                        width: '90%',
                        marginTop: '0px',
                        left: '20%',
                        fontSize: '18px'
                    }}
                >
                    <a href="https://map.yale.edu/?id=1910#!m/559919">
                        Watson Center
                    </a>{' '}
                </div>
                <div
                    style={{
                        textAlign: 'left',
                        width: '90%',
                        marginTop: '0px',
                        left: '20%',
                        fontSize: '18px'
                    }}
                >
                    <a href="https://duckduckgo.com/?q=60+sachem+street+new+haven&ia=web&va=j&t=hc&iaxm=maps">
                        60 Sachem Street
                    </a>{' '}
                </div>
                <div
                    style={{
                        textAlign: 'left',
                        width: '90%',
                        marginTop: '0px',
                        left: '20%',
                        fontSize: '18px'
                    }}
                >
                    <a href="https://classrooms.yale.edu/classrooms?field_max_capacity_value_1=All&field_name_value=23&field_feature_name_value=All&page=2#classrooms-page-6">
                        A51
                    </a>{' '}
                </div>
                {/* <p style={{marginTop: "20px"}}>
                    <span className={styles['highlight-text']}>
                        Office Hours:
                    </span>
                </p> */}
                <hr
                    style={{
                        background: 'black',
                        color: 'black',
                        height: '1px',
                        width: '100%',
                        marginTop: '20px'
                    }}
                />
                <div className={styles['content-description']}>
                    <p>
                        The aim of this course is to teach concepts that are
                        valuable for a successful career as a software engineer.
                        The single most important part of the course is applying
                        these concepts while building a large scale software
                        project. The students are working in groups to build a
                        real life application, and in the process, they are
                        sharpening their skills in developing software
                        collaboratively, in communicating concepts clearly to
                        both their team members and prospective users of their
                        software and in learning how to incorporate feedback.
                        The aim of the course is to create maintainable
                        software.
                    </p>
                    <p>
                        At the end of the course, the teams present their work
                        and demo their software in a project fair.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
