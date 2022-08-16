// import { useWindowWidth } from '@react-hook/window-size';
import styles from './styles.module.scss';

export const ProjectContent = ({
    projectName,
    projectDesc,
    projectTeam,
    projectImgSrc
}: {
    projectName: string;
    projectDesc: string;
    projectTeam: string;
    projectImgSrc: string;
}) => {
    return (
        <div className={styles['project-container']}>
            <div className={styles['project-image']}>
                <img src={projectImgSrc}></img>
            </div>
            <div className={styles['project-name']}>{projectName}</div>
            <div className={styles['project-description']}>{projectDesc}</div>
            <div className={styles['project-team']}>
                Built by: {projectTeam}
            </div>
        </div>
    );
};

export default ProjectContent;
