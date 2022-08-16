// import { useWindowWidth } from '@react-hook/window-size';
import styles from './styles.module.scss';

// import { Link } from 'react-router-dom';

function ProjectRepoLink(props: { repoLink: string | undefined }) {
    const repoLink = props.repoLink;

    if (repoLink != undefined) {
        return (
            <div className={styles['project-repo']}>
                {/* <Link to={projectRepoSrc}>Repo</Link> */}
                <a href={repoLink}>Repository</a>
                {/* {projectRepoSrc} */}
            </div>
        );
    } else {
        return <div></div>;
    }
}

export const ProjectContent = ({
    projectName,
    projectDesc,
    projectTeam,
    projectImgSrc,
    projectRepoSrc
}: {
    projectName: string;
    projectDesc: string;
    projectTeam: string;
    projectImgSrc: string;
    projectRepoSrc: string | undefined;
}) => {
    return (
        <div className={styles['project-container']}>
            <div className={styles['project-image']}>
                <img src={projectImgSrc}></img>
            </div>
            <div className={styles['project-name']}>{projectName}</div>
            <div className={styles['project-description']}>{projectDesc}</div>
            <ProjectRepoLink repoLink={projectRepoSrc}></ProjectRepoLink>
            <div className={styles['project-team']}>
                Built by: {projectTeam}
            </div>
        </div>
    );
};

export default ProjectContent;
