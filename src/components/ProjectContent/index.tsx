// import { useWindowWidth } from '@react-hook/window-size';
import styles from './styles.module.scss';

// import { Link } from 'react-router-dom';

function ProjectLink(props: {
    name: string;
    link: string | undefined;
    linkPrv: boolean;
    left: string;
}) {
    const name = props.name;
    const link = props.link;
    const leftPos = props.left;

    if (link != undefined) {
        if (props.linkPrv) {
            return (
                <div
                    className={styles['project-repo']}
                    style={{ left: leftPos }}
                >
                    <a href={link}>{name}🔒</a>
                </div>
            );
        } else {
            return (
                <div
                    className={styles['project-repo']}
                    style={{ left: leftPos }}
                >
                    <a href={link}>{name}</a>
                </div>
            );
        }
    } else {
        return (
            <div
                className={styles['project-repo-inactive']}
                style={{ left: leftPos }}
            >
                {name}
            </div>
        );
    }
}

function ProjectLinks(props: {
    repoLink: string | undefined;
    websiteLink: string | undefined;
    presentationLink: string | undefined;
    presentationLinkPrv: boolean;
    withImage: boolean;
}) {
    const repoLink = props.repoLink;
    const websiteLink = props.websiteLink;
    const presentationLink = props.presentationLink;
    const withImage = props.withImage;

    let styleGen;
    if (withImage) {
        styleGen = {};
    } else {
        styleGen = { marginLeft: '20px', width: 'calc(100% - 20px)' };
    }

    return (
        <div className={styles['project-links']} style={styleGen}>
            <ProjectLink
                link={repoLink}
                name="Repository"
                left="0px"
                linkPrv={false}
            ></ProjectLink>
            <ProjectLink
                link={websiteLink}
                name="Website"
                left="85px"
                linkPrv={false}
            ></ProjectLink>
            <ProjectLink
                link={presentationLink}
                name="Presentation"
                left="180px"
                linkPrv={props.presentationLinkPrv}
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
    projectPresentation,
    projectCardHeight
}: {
    projectName: string;
    projectDesc: string;
    projectTeam: string;
    projectImgSrc: string | undefined;
    projectRepoSrc: string | undefined;
    projectWebsite: string | undefined;
    projectPresentation: string | undefined;
    projectCardHeight: string | undefined;
}) => {
    let styleGen;
    let image;
    if (projectImgSrc) {
        image = (
            <div
                className={styles['project-image']}
                style={{ height: projectCardHeight }}
            >
                <img src={projectImgSrc}></img>
            </div>
        );
        styleGen = {};
    } else {
        image = <div></div>;
        styleGen = { marginLeft: '20px', width: 'calc(100% - 20px)' };
    }
    return (
        <div
            className={styles['project-container']}
            style={{ height: projectCardHeight }}
        >
            {image}
            <div className={styles['project-name']} style={styleGen}>
                {projectName}
            </div>
            <div className={styles['project-description']} style={styleGen}>
                {projectDesc}
            </div>
            <ProjectLinks
                repoLink={projectRepoSrc}
                websiteLink={projectWebsite}
                presentationLink={projectPresentation}
                presentationLinkPrv={true}
                withImage={projectImgSrc != undefined}
            ></ProjectLinks>
            <div className={styles['project-team']} style={styleGen}>
                <b>Team</b>: {projectTeam}
            </div>
        </div>
    );
};

export default ProjectContent;
