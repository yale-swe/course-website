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

                <StaffContent
                    staffName="Talley Amir"
                    staffDesc="Teaching Assistant (TA)"
                    staffImgSrc="https://cpsc.yale.edu/sites/default/files/styles/people_thumbnail/public/pictures/picture-2981-1580307163.jpg?itok=xM8a8-ov"
                    staffOH="Friday 12:00 noon"
                    staffWebpage={undefined}
                ></StaffContent>
                <StaffContent
                    staffName="Matt Elacqua"
                    staffDesc="Teaching Assistant (TA)"
                    staffImgSrc="https://cpsc.yale.edu/sites/default/files/styles/people_thumbnail/public/pictures/picture-4252-1632336188.jpg?itok=xl_y10tU"
                    staffOH="Thursday 12:00 noon"
                    staffWebpage={undefined}
                ></StaffContent>
                <StaffContent
                    staffName="Timos Antonopoulos"
                    staffDesc="Instructor"
                    staffImgSrc="https://cpsc.yale.edu/sites/default/files/styles/people_thumbnail/public/pictures/picture-572-1502217188.jpg?itok=b_5MX8fK"
                    staffOH="Tuesday 1:00 pm"
                    staffWebpage={undefined}
                ></StaffContent>

                <div style={{ marginBottom: '120px' }}></div>
                <h2>Past members</h2>
                <div style={{ marginBottom: '20px' }}></div>
                <StaffContent
                    staffName="Jason Wu"
                    staffDesc="Undergraduate Learning Assistant (ULA)"
                    staffImgSrc="/assets/jason.jpg"
                    staffOH=""
                    staffWebpage={undefined}
                ></StaffContent>
                <StaffContent
                    staffName="Seun Omonije"
                    staffDesc="Undergraduate Learning Assistant (ULA)"
                    staffImgSrc="/assets/seun.jpg"
                    staffOH="Wednesday 7:00 pm"
                    staffWebpage={undefined}
                ></StaffContent>
                <StaffContent
                    staffName="Ning Luo"
                    staffDesc="Teaching Assistant (TA)"
                    staffImgSrc="/assets/ning.jpg"
                    staffOH="Friday 4:00 pm"
                    staffWebpage={undefined}
                ></StaffContent>
            </div>
        </div>
    );
};

export default Staff;
