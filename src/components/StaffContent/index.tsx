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

function StaffOH(props: { staffOH: { [key: string]: string } }) {
    const staffOH = props.staffOH;

    if (staffOH.when) {
        let zoom = <></>;
        let room = <></>;
        let con = <></>;
        if (staffOH.zoom) {
            // zoom = <><a href={staffOH.zoom}> on Zoom</a></>
            zoom = <> on Zoom</>;
        }
        if (staffOH.room) {
            room = <> at {staffOH.room}</>;
        }
        if (staffOH.zoom && staffOH.room) {
            con = <> and </>;
        }
        const when = (
            <div className={styles['staff-OH']}>
                <u>Office hours:</u> {staffOH.when}
                {room}
                {con}
                {zoom}
            </div>
        );
        return <>{when}</>;
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
    staffOH: { [key: string]: string };
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
