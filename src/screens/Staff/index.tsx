import NavigationBar from '../../components/NavigationBar';
import StaffContent from '../../components/StaffContent';
import styles from './styles.module.scss';

const Staff = () => {
    return (
        <div className={styles['page-container']}>
            <NavigationBar />
            <div className={styles['content-container']}>
                {/* <h1>About</h1> */}
                <div style={{ marginBottom: '30px' }}></div>

                <h2>Fall 2022 members</h2>
                <div style={{ marginBottom: '30px' }}></div>
                <StaffContent
                    staffName="Dylan Fernandez de Lara"
                    staffDesc="Undergraduate Learning Assistant (ULA)"
                    staffImgSrc="/assets/dylan.jpg"
                    staffOH={{}}
                    staffWebpage={undefined}
                ></StaffContent>
                <StaffContent
                    staffName="Talley Amir"
                    staffDesc="Teaching Assistant (TA)"
                    staffImgSrc="/assets/talley.jpg"
                    staffOH={{ when: 'Thursdays 5-7pm', room: 'AKW 403' }}
                    staffWebpage={undefined}
                ></StaffContent>
                <StaffContent
                    staffName="Matt Elacqua"
                    staffDesc="Teaching Assistant (TA)"
                    staffImgSrc="/assets/matt.jpg"
                    staffOH={{
                        when: 'Mondays 3-5pm',
                        zoom: 'https://us04web.zoom.us/j/8844956036?pwd=dnhQU0R5aFc5Q2JHditEVEs4Q0VrQT09',
                        room: 'AKW 203'
                    }}
                    staffWebpage={undefined}
                ></StaffContent>
                <StaffContent
                    staffName="Timos Antonopoulos"
                    staffDesc="Instructor"
                    staffImgSrc="https://www.cs.yale.edu/homes/antonopoulos-timos/personal-s-sq.jpg"
                    staffOH={{
                        when: 'Tuesdays 2-3pm',
                        zoom: 'https://yale.zoom.us/my/timos'
                    }}
                    staffWebpage={undefined}
                ></StaffContent>

                <div style={{ marginBottom: '120px' }}></div>
                <h2>Past members</h2>
                <div style={{ marginBottom: '20px' }}></div>
                <StaffContent
                    staffName="Jason Wu"
                    staffDesc="Undergraduate Learning Assistant (ULA)"
                    staffImgSrc="/assets/jason.jpg"
                    staffOH={{}}
                    staffWebpage={undefined}
                ></StaffContent>
                <StaffContent
                    staffName="Seun Omonije"
                    staffDesc="Undergraduate Learning Assistant (ULA)"
                    staffImgSrc="/assets/seun.jpg"
                    staffOH={{}}
                    staffWebpage={undefined}
                ></StaffContent>
                <StaffContent
                    staffName="Ning Luo"
                    staffDesc="Teaching Assistant (TA)"
                    staffImgSrc="/assets/ning.jpg"
                    staffOH={{}}
                    staffWebpage={undefined}
                ></StaffContent>
            </div>
        </div>
    );
};

export default Staff;
