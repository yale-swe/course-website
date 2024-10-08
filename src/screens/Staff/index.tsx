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

                <h2>Fall 2024 members</h2>
                <div style={{ marginBottom: '30px' }}></div>
                <StaffContent
                    staffName="Zhongjie Wu"
                    staffDesc="Teaching Assistant (TA)"
                    staffImgSrc="/assets/zhongjie.jpg"
                    staffOH={{
                        when: 'Mondays 3-5pm',
                        room: 'AKW 2nd Floor Atrium'
                    }}
                    staffWebpage={undefined}
                    small={false}
                ></StaffContent>
                <StaffContent
                    staffName="Weijie Wang"
                    staffDesc="Teaching Assistant (TA)"
                    staffImgSrc="/assets/weijie.png"
                    staffOH={{
                        when: 'Wednesdays 5-6pm',
                        room: 'L04 in Bass Library'
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
                        room: 'DL 404',
                        zoom: 'on Zoom'
                    }}
                    staffWebpage={undefined}
                    small={false}
                ></StaffContent>

                <div style={{ marginBottom: '120px' }}></div>
                <h2>Past members</h2>
                <div style={{ marginBottom: '20px' }}></div>
                <StaffContent
                    staffName="Sebastian Jin"
                    staffDesc="Teaching Assistant (TA)"
                    staffImgSrc="/assets/sebastian.jpg"
                    staffOH={{}}
                    staffWebpage={undefined}
                    small={true}
                ></StaffContent>
                <StaffContent
                    staffName="Bienn Viquiera"
                    staffDesc="Undergraduate Learning Assistant (ULA)"
                    staffImgSrc="/assets/bienn.jpg"
                    staffOH={{}}
                    staffWebpage={undefined}
                    small={true}
                ></StaffContent>
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
                    staffName="Yuyang Sang"
                    staffDesc="Teaching Assistant (TA)"
                    staffImgSrc="/assets/yuyang.jpg"
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
