import styles from './styles.module.scss';

function StaffImage(props: { imgUrl: string | undefined }) {
    const imgUrl = props.imgUrl;

    if (imgUrl != undefined) {
        return (
            <div
                className={styles['staff-image']}
                style={{ backgroundImage: 'url("' + imgUrl + '")' }}
            ></div>
        );
    } else {
        return <div></div>;
    }
}

function StaffName(props: { staffName: string }) {
    const staffName = props.staffName;

    return <div className={styles['staff-name']}>{staffName}</div>;
}

function StaffDesc(props: { staffDesc: string }) {
    const staffDesc = props.staffDesc;

    return <div className={styles['staff-description']}>{staffDesc}</div>;
}

function StaffOH(props: { staffOH: string | undefined }) {
    const staffOH = props.staffOH;

    if (staffOH) {
        return (
            <div className={styles['staff-OH']}>
                <u>Office hours:</u> {staffOH}
            </div>
        );
    } else {
        return <div></div>;
    }
}

export const StaffContent = ({
    staffName,
    staffDesc,
    staffImgSrc,
    staffOH,
    staffWebpage
}: {
    staffName: string;
    staffDesc: string;
    staffImgSrc: string | undefined;
    staffOH: string | undefined;
    staffWebpage: string | undefined;
}) => {
    return (
        <div className={styles['staff-container']}>
            <StaffImage imgUrl={staffImgSrc}></StaffImage>
            <div className={styles['staff-text']}>
                <StaffName staffName={staffName}></StaffName>
                <StaffDesc staffDesc={staffDesc}></StaffDesc>
                <StaffOH staffOH={staffOH}></StaffOH>
                {staffWebpage}
            </div>
        </div>
    );
};

export default StaffContent;