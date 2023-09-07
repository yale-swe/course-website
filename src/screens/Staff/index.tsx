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

                <h2>Fall 2023 members</h2>
                <div style={{ marginBottom: '30px' }}></div>
                <StaffContent
                    staffName="Bienn Viquiera"
                    staffDesc="Undergraduate Learning Assistant (ULA)"
                    staffImgSrc="/assets/bienn.jpg"
                    staffOH={{}}
                    staffWebpage={undefined}
                    small={false}
                ></StaffContent>
                <StaffContent
                    staffName="Sebastian Jin"
                    staffDesc="Teaching Assistant (TA)"
                    staffImgSrc="/assets/sebastian.jpg"
                    staffOH={{}}
                    staffWebpage={undefined}
                    small={false}
                ></StaffContent>
                <StaffContent
                    staffName="Yuyang Sang"
                    staffDesc="Teaching Assistant (TA)"
                    staffImgSrc="/assets/yuyang.jpg"
                    staffOH={{
                        when: 'Tuesdays 4-6pm',
                        room: 'AKW 304'
                    }}
                    staffWebpage={undefined}
                    small={false}
                ></StaffContent>
                <StaffContent
                    staffName="Timos Antonopoulos"
                    staffDesc="Instructor"
                    staffImgSrc="https://www.cs.yale.edu/homes/antonopoulos-timos/personal-s-sq.jpg"
                    staffOH={{
                        when: 'Tuesdays 1-2pm',
                        room: 'DL 404'
                    }}
                    staffWebpage={undefined}
                    small={false}
                ></StaffContent>

                <div style={{ marginBottom: '120px' }}></div>
                <h2>Past members</h2>
                <div style={{ marginBottom: '20px' }}></div>
                <StaffContent
                    staffName="Jack Li"
                    staffDesc="Undergraduate Learning Assistant (ULA)"
                    staffImgSrc="/assets/jack.jpg"
                    staffOH={{}}
                    staffWebpage={undefined}
                    small={true}
                ></StaffContent>
                <StaffContent
                    staffName="Talley Amir"
                    staffDesc="Teaching Assistant (TA)"
                    staffImgSrc="/assets/talley.jpg"
                    staffOH={{}}
                    staffWebpage={undefined}
                    small={true}
                ></StaffContent>
                <StaffContent
                    staffName="Weijie Wang"
                    staffDesc="Teaching Assistant (TA)"
                    staffImgSrc="/assets/weijie.png"
                    staffOH={{}}
                    staffWebpage={undefined}
                    small={true}
                ></StaffContent>
                <StaffContent
                    staffName="Dylan Fernandez de Lara"
                    staffDesc="Undergraduate Learning Assistant (ULA)"
                    staffImgSrc="/assets/dylan.jpg"
                    staffOH={{}}
                    staffWebpage={undefined}
                    small={true}
                ></StaffContent>
                <StaffContent
                    staffName="Matt Elacqua"
                    staffDesc="Teaching Assistant (TA)"
                    staffImgSrc="/assets/matt.jpg"
                    staffOH={{}}
                    staffWebpage={undefined}
                    small={true}
                ></StaffContent>
                <StaffContent
                    staffName="Jason Wu"
                    staffDesc="Undergraduate Learning Assistant (ULA)"
                    staffImgSrc="/assets/jason.jpg"
                    staffOH={{}}
                    staffWebpage={undefined}
                    small={true}
                ></StaffContent>
                <StaffContent
                    staffName="Seun Omonije"
                    staffDesc="Undergraduate Learning Assistant (ULA)"
                    staffImgSrc="/assets/seun.jpg"
                    staffOH={{}}
                    staffWebpage={undefined}
                    small={true}
                ></StaffContent>
                <StaffContent
                    staffName="Ning Luo"
                    staffDesc="Teaching Assistant (TA)"
                    staffImgSrc="/assets/ning.jpg"
                    staffOH={{}}
                    staffWebpage={undefined}
                    small={true}
                ></StaffContent>
            </div>
        </div>
    );
};

export default Staff;
