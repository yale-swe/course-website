import NavigationBar from '../../components/NavigationBar';
import ProjectContent from '../../components/ProjectContent';
import styles from './styles.module.scss';

type ProjectType = {
    name: string;
    desc: string;
    team: string;
    imgSrc: string;
    repoSrc: string | undefined;
    website: string | undefined;
    presentation: string | undefined;
};

const PROJECTS_S21: ProjectType[] = [
    {
        name: 'Bulletin',
        desc: 'A cross-source personalized news board, giving people the ability to easily get information from different sources like social media platforms, news websites, and so on.',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'J Gis, X Ed',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined
    },
    {
        name: 'Calyco',
        desc: 'A calendar-based social media mobile app designed to take the trouble out of coordinating events between college students in different time zones while also serving as an all-in-one digital diary for students to cherish and share their day-to-day with others.',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'J Gis, X Ed',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined
    },
    {
        name: 'EasyStart',
        desc: 'A web app called EasyStart that bridges the connection for people to find like-minded individuals to work on projects together. The app enables users to connect with like-minded individuals, foster meaningful connections, and stimulate creativity to design and build their dream projects.',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'J Gis, X Ed',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined
    },
    {
        name: 'Garagio',
        desc: 'Garagio is a web based application enabling auto service customers to easily find and compare the best auto service deals around them, and book services with various providers. Booking are automatically fed into the Garagio shop management system for the auto service provider.',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'J Gis, X Ed',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined
    },
    {
        name: 'Mos',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'J Gis, X Ed',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined
    },
    {
        name: 'Next',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'J Gis, X Ed',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined
    },
    {
        name: 'Research For All',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'J Gis, X Ed',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined
    },
    {
        name: 'Standup Master',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'J Gis, X Ed',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined
    },
    {
        name: 'The Suite Life',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'J Gis, X Ed',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined
    },
    {
        name: 'YPool',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'J Gis, X Ed',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined
    }
];

const PROJECTS_S22: ProjectType[] = [
    {
        name: 'Appily',
        desc: 'project description 1',
        imgSrc: '/assets/appily-logo.png',
        team: 'Craven, Dang, Feng, Fernandez de Lara, Katko, Martinez, Ong',
        repoSrc: 'https://github.com/yale-swe/s22-internship-tracker',
        website: undefined,
        presentation: undefined
    },
    {
        name: 'Campaign Wallet',
        desc: 'project description 2',
        imgSrc: 'https://raw.githubusercontent.com/yale-swe/s22-campaign-finance/main/dist/img/campaign_finance_logo.png?token=GHSAT0AAAAAABT5KYM6K5ZKO47UGBFC3EX6YX32VFA',
        team: 'Chen, Hsu, Macri, Mehrotra, Mitra, Selin',
        repoSrc: 'https://github.com/yale-swe/s22-campaign-finance',
        website: undefined,
        presentation: undefined
    },
    {
        name: 'HouseMe',
        desc: 'project description 3',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Callanan, Grady, Kaur, Qu, Romero, Sharma, Tang',
        repoSrc: 'https://github.com/yale-swe/s22-college-sublet',
        website: 'http://housemestudent.com/',
        presentation: undefined
    },
    {
        name: 'DownToTruck',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Orr, Salinas-Arreola, Slaughter, Sultan, Wang, Yin',
        repoSrc: 'https://github.com/yale-swe/s22-downtotruck',
        website: undefined,
        presentation: undefined
    },
    {
        name: 'Eloit',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: "Hou, Jain, Kantamneni, Milkessa, O'Connor, Wu",
        repoSrc: 'https://github.com/yale-swe/s22-eloit',
        website: undefined,
        presentation: undefined
    },
    {
        name: 'Jumble',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Hodeta, Lazzaretti, Liu, Qu, Tang, Tigistu, Zhang',
        repoSrc: 'https://github.com/yale-swe/s22-entertainment-archives',
        website: undefined,
        presentation: undefined
    },
    {
        name: 'Morphic',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Hu, Kopits, Luo, Reichenbach, Sheth',
        repoSrc: 'https://github.com/yale-swe/s22-datasethub',
        website: undefined,
        presentation: undefined
    },
    {
        name: 'TravelPlanner',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Carroll, Chen, Liang, Valencia, Wang, Zhao, Zou',
        repoSrc: 'https://github.com/yale-swe/s22-travelplanner',
        website: undefined,
        presentation: undefined
    },
    {
        name: 'Yale Daily News Mobile App',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Gedi, Gondal, Kim, Lauriette, Oluwadairo, Rahman, Reiner',
        repoSrc: 'https://github.com/yale-swe/s22-ydn-mobile',
        website: undefined,
        presentation: undefined
    },
    {
        name: 'YMarket',
        desc: 'A one-stop marketplace app that serves the buying and selling needs of Yale affliates.',
        imgSrc: '',
        team: 'Chen, Goh, Liu, Qian, Sharma, Zhang',
        repoSrc: 'https://github.com/yale-swe/s22-ymarket',
        website: undefined,
        presentation: undefined
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
                <div style={{ height: '50px' }}></div>
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
                {PROJECTS_S22.map(
                    ({
                        name,
                        desc,
                        team,
                        imgSrc,
                        repoSrc,
                        website,
                        presentation
                    }) => (
                        <ProjectContent
                            key={name}
                            projectName={name}
                            projectDesc={desc}
                            projectTeam={team}
                            projectImgSrc={imgSrc}
                            projectRepoSrc={repoSrc}
                            projectWebsite={website}
                            projectPresentation={presentation}
                        />
                    )
                )}
                <div style={{ height: '50px' }}></div>
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
                {PROJECTS_S21.map(
                    ({
                        name,
                        desc,
                        team,
                        imgSrc,
                        repoSrc,
                        website,
                        presentation
                    }) => (
                        <ProjectContent
                            key={name}
                            projectName={name}
                            projectDesc={desc}
                            projectTeam={team}
                            projectImgSrc={imgSrc}
                            projectRepoSrc={repoSrc}
                            projectWebsite={website}
                            projectPresentation={presentation}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default Projects;
