// import { useWindowWidth } from '@react-hook/window-size';
import styles from './styles.module.scss';

// import { Link } from 'react-router-dom';

function DocImage(props: { imgUrl: string | undefined }) {
    const imgUrl = props.imgUrl;

    if (imgUrl != undefined) {
        return (
            <div className={styles['doc-img']}>
                <img
                    height="100%"
                    src={imgUrl}
                    className={styles['doc-img']}
                ></img>
            </div>
        );
    } else {
        return <div></div>;
    }
}

function DocName(props: { docName: string; docUrl: string | undefined }) {
    const docName = props.docName;
    const docUrl = props.docUrl;

    if (docUrl != undefined) {
        return (
            <div className={styles['doc-name']}>
                <a href={docUrl}>{docName}</a>
            </div>
        );
    } else {
        return <div className={styles['doc-name']}>{docName}</div>;
    }
}

function DocDesc(props: { docDesc: string; docImgSrc: string | undefined }) {
    const docDesc = props.docDesc;
    const docImgSrc = props.docImgSrc;

    if (docImgSrc != undefined) {
        return <div className={styles['doc-description-short']}>{docDesc}</div>;
    } else {
        return <div className={styles['doc-description']}>{docDesc}</div>;
    }
}

export const DocContent = ({
    docName,
    docDesc,
    docImgSrc,
    docUrl
}: {
    docName: string;
    docDesc: string;
    docImgSrc: string | undefined;
    docUrl: string;
}) => {
    return (
        <div className={styles['doc-container']}>
            <div className={styles['doc-image']}>
                <DocImage imgUrl={docImgSrc}></DocImage>
            </div>
            <DocName docName={docName} docUrl={docUrl}></DocName>
            <DocDesc docDesc={docDesc} docImgSrc={docImgSrc}></DocDesc>
            {/* <div className={styles['doc-description']}>{docDesc}</div> */}
        </div>
    );
};

export default DocContent;
