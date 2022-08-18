// import { useWindowWidth } from '@react-hook/window-size';
import styles from './styles.module.scss';

// import { Link } from 'react-router-dom';

function ProjectLink(props: {
    name: string;
    link: string | undefined;
    left: string;
}) {
    const name = props.name;
    const link = props.link;
    const leftPos = props.left;

    if (link != undefined) {
        return (
            <div className={styles['project-repo']} style={{ left: leftPos }}>
                <a href={link}>{name}</a>
            </div>
        );
    } else {
        return (
            <div className={styles['project-repo']} style={{ left: leftPos }}>
                {name}
            </div>
        );
    }
}

function ProjectLinks(props: {
    repoLink: string | undefined;
    websiteLink: string | undefined;
    presentationLink: string | undefined;
}) {
    const repoLink = props.repoLink;
    const websiteLink = props.websiteLink;
    const presentationLink = props.presentationLink;

    return (
        <div className={styles['project-links']}>
            <ProjectLink
                link={repoLink}
                name="Repository"
                left="0px"
            ></ProjectLink>
            <ProjectLink
                link={websiteLink}
                name="Website"
                left="80px"
            ></ProjectLink>
            <ProjectLink
                link={presentationLink}
                name="Presentation"
                left="160px"
            ></ProjectLink>
        </div>
    );
}

export const ProjectContent = ({
    projectName,
    projectDesc,
    projectTeam,
    projectImgSrc,
    projectRepoSrc,
    projectWebsite,
    projectPresentation
}: {
    projectName: string;
    projectDesc: string;
    projectTeam: string;
    projectImgSrc: string;
    projectRepoSrc: string | undefined;
    projectWebsite: string | undefined;
    projectPresentation: string | undefined;
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
                presentationLink={projectPresentation}
            ></ProjectLinks>
            <div className={styles['project-team']}>
                Built by: {projectTeam}
            </div>
        </div>
    );
};

export default ProjectContent;
