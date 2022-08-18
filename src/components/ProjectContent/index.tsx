// import { useWindowWidth } from '@react-hook/window-size';
import styles from './styles.module.scss';

// import { Link } from 'react-router-dom';

function ProjectLink(props: { name: string; link: string | undefined }) {
    const name = props.name;
    const link = props.link;

    if (link != undefined) {
        return (
            <div className={styles['project-repo']}>
                <a href={link}>{name}</a>
            </div>
        );
    } else {
        return <div></div>;
    }
}

function ProjectLinks(props: {
    repoLink: string | undefined;
    websiteLink: string | undefined;
}) {
    const repoLink = props.repoLink;
    const websiteLink = props.websiteLink;

    return (
        <div>
            <ProjectLink link={repoLink} name="Repository"></ProjectLink>
            <ProjectLink link={websiteLink} name="Website"></ProjectLink>
        </div>
    );
}

export const ProjectContent = ({
    projectName,
    projectDesc,
    projectTeam,
    projectImgSrc,
    projectRepoSrc,
    projectWebsite
}: {
    projectName: string;
    projectDesc: string;
    projectTeam: string;
    projectImgSrc: string;
    projectRepoSrc: string | undefined;
    projectWebsite: string | undefined;
}) => {
    return (
        <div className={styles['project-container']}>
            <div className={styles['project-image']}>
                <img src={projectImgSrc}></img>
            </div>
            <div className={styles['project-name']}>{projectName}</div>
            <div className={styles['project-description']}>{projectDesc}</div>
            <ProjectLinks
                repoLink={projectRepoSrc}
                websiteLink={projectWebsite}
            ></ProjectLinks>
            <div className={styles['project-team']}>
                Built by: {projectTeam}
            </div>
        </div>
    );
};

export default ProjectContent;
