import NavigationBar from '../../components/NavigationBar';
import ProjectContent from '../../components/ProjectContent';
import styles from './styles.module.scss';

type ProjectType = {
    name: string;
    desc: string;
    team: string;
    imgSrc: string;
};

const PROJECTS_S21: ProjectType[] = [
    {
        name: 'project name 1',
        desc: 'project description 1',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'J Gis, X Ed'
    },
    {
        name: 'project name 2',
        desc: 'project description 2',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'J Gis, X Ed'
    },
    {
        name: 'project name 3',
        desc: 'project description 3',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'J Gis, X Ed'
    },
    {
        name: 'project name 4',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'J Gis, X Ed'
    }
];

const PROJECTS_S22: ProjectType[] = [
    {
        name: 'project name 1',
        desc: 'project description 1',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'J Gis, X Ed'
    },
    {
        name: 'project name 2',
        desc: 'project description 2',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'J Gis, X Ed'
    },
    {
        name: 'project name 3',
        desc: 'project description 3',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'J Gis, X Ed'
    },
    {
        name: 'project name 4',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'J Gis, X Ed'
    }
];

const Projects = () => {
    return (
        <div className={styles['page-container']}>
            <NavigationBar />
            <div className={styles['content-container']}>
                <h1>Projects</h1>
                <div style={{ marginBottom: '30px' }}></div>
                <h2>Fall 2022</h2>
                <hr
                    style={{
                        background: 'black',
                        color: 'black',
                        height: '1px',
                        width: '100%',
                        marginBottom: '20px'
                    }}
                />
                TBA
                <h2>Spring 2022</h2>
                <hr
                    style={{
                        background: 'black',
                        color: 'black',
                        height: '1px',
                        width: '100%',
                        marginBottom: '20px'
                    }}
                />
                {PROJECTS_S22.map(({ name, desc, team, imgSrc }) => (
                    <ProjectContent
                        key={name}
                        projectName={name}
                        projectDesc={desc}
                        projectTeam={team}
                        projectImgSrc={imgSrc}
                    />
                ))}
                <h2>Spring 2021</h2>
                <hr
                    style={{
                        background: 'black',
                        color: 'black',
                        height: '1px',
                        width: '100%',
                        marginBottom: '20px'
                    }}
                />
                {PROJECTS_S21.map(({ name, desc, team, imgSrc }) => (
                    <ProjectContent
                        key={name}
                        projectName={name}
                        projectDesc={desc}
                        projectTeam={team}
                        projectImgSrc={imgSrc}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
