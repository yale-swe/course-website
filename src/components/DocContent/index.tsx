// import { useWindowWidth } from '@react-hook/window-size';
import styles from './styles.module.scss';

// import { Link } from 'react-router-dom';

function DocImage(props: { imgUrl: string | undefined }) {
    const imgUrl = props.imgUrl;

    if (imgUrl != undefined) {
        return (
            <div className={styles['doc-url']}>
                <img src={imgUrl}></img>
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
            <div className={styles['doc-description']}>{docDesc}</div>
        </div>
    );
};

export default DocContent;
