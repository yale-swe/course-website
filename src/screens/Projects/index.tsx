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
    height: string | undefined;
};

const PROJECTS_S21: ProjectType[] = [
    {
        name: 'Bulletin',
        desc: 'A cross-source personalized news board, giving people the ability to easily get information from different sources like social media platforms, news websites, and so on.',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Trehan, Ip, Schwab, Shatry, Omonije',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '220px'
    },
    {
        name: 'Calyco',
        desc: 'A calendar-based social media mobile app designed to take the trouble out of coordinating events between college students in different time zones while also serving as an all-in-one digital diary for students to cherish and share their day-to-day with others.',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Li, Jong, Rhee, Choi, Kawamura',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: undefined
    },
    {
        name: 'EasyStart',
        desc: 'A web app called EasyStart that bridges the connection for people to find like-minded individuals to work on projects together. The app enables users to connect with like-minded individuals, foster meaningful connections, and stimulate creativity to design and build their dream projects.',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Shen, Zhang, Wu, Wei, Cheng',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: undefined
    },
    {
        name: 'Garagio',
        desc: 'Garagio is a web based application enabling auto service customers to easily find and compare the best auto service deals around them, and book services with various providers. Booking are automatically fed into the Garagio shop management system for the auto service provider.',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Burbano, Palmer, Kavaliauskas, Viyar',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: undefined
    },
    {
        name: 'Mos',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Rono, Hague, Cheng, Danchenko, Goncalves Cardoso, Ashenafi',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: undefined
    },
    {
        name: 'Next',
        desc: 'Next is an interactive music streaming platform that focuses on group listening. Users can join rooms where they can suggest and vote on the next song to add to the playlist.',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Chousal Cantu, Blank, Adbaru, Li, Alonso Bilfinger, Wu',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '220px'
    },
    {
        name: 'Research For All',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Ortega, Miranda, Sage-Martinson, Villarreal Cavazos, Hussain',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: undefined
    },
    {
        name: 'Standup Master',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Lopez, Yang, Joseph, Cai, Sun, Li',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: undefined
    },
    {
        name: 'The Suite Life',
        desc: 'Chen, Eggleston, Pan, Rudder, Shan, Thompson',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Chen, Eggleston, Pan, Rudder, Shan, Thompson',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: undefined
    },
    {
        name: 'YPool',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Arcia, Mensah, Sanchez, Ababio, Truong',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: undefined
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
        presentation:
            'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8890b0b1-d83f-4d93-aa1c-aef90049a263',
        height: undefined
    },
    {
        name: 'Campaign Wallet',
        desc: 'A Chrome extension that allows users to hover over the names of Members of Congress on any website, and provides a popup providing campaign finance statistics (% of small donors, top industry donations, etc.) and other relevant details (record of misconduct, Tweets, etc.). Additional features include allowing the user to search a politician by their name and to look up politicians who are funded by a particular donor.',
        imgSrc: 'https://raw.githubusercontent.com/yale-swe/s22-campaign-finance/main/dist/img/campaign_finance_logo.png?token=GHSAT0AAAAAABT5KYM6K5ZKO47UGBFC3EX6YX32VFA',
        team: 'Chen, Hsu, Macri, Mehrotra, Mitra, Selin',
        repoSrc: 'https://github.com/yale-swe/s22-campaign-finance',
        website: undefined,
        presentation:
            'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3a8e08ae-ea72-4220-896a-aef90049a19d',
        height: '300px'
    },
    {
        name: 'HouseMe',
        desc: 'project description 3',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Callanan, Grady, Kaur, Qu, Romero, Sharma, Tang',
        repoSrc: 'https://github.com/yale-swe/s22-college-sublet',
        website: 'http://housemestudent.com/',
        presentation:
            'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d4bbe676-fbda-4cbe-9349-aef90047f13b',
        height: '170px'
    },
    {
        name: 'DownToTruck',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Orr, Salinas-Arreola, Slaughter, Sultan, Wang, Yin',
        repoSrc: 'https://github.com/yale-swe/s22-downtotruck',
        website: undefined,
        presentation:
            'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3a8e08ae-ea72-4220-896a-aef90049a19d',
        height: undefined
    },
    {
        name: 'Eloit',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: "Hou, Jain, Kantamneni, Milkessa, O'Connor, Wu",
        repoSrc: 'https://github.com/yale-swe/s22-eloit',
        website: undefined,
        presentation:
            'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3d266e51-eae9-4641-ad84-aef90049a175',
        height: undefined
    },
    {
        name: 'Jumble',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Hodeta, Lazzaretti, Liu, Qu, Tang, Tigistu, Zhang',
        repoSrc: 'https://github.com/yale-swe/s22-entertainment-archives',
        website: undefined,
        presentation: undefined,
        height: undefined
    },
    {
        name: 'Morphic',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Hu, Kopits, Luo, Reichenbach, Sheth',
        repoSrc: 'https://github.com/yale-swe/s22-datasethub',
        website: undefined,
        presentation:
            'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3a8e08ae-ea72-4220-896a-aef90049a19d',
        height: undefined
    },
    {
        name: 'TravelPlanner',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Carroll, Chen, Liang, Valencia, Wang, Zhao, Zou',
        repoSrc: 'https://github.com/yale-swe/s22-travelplanner',
        website: undefined,
        presentation: undefined,
        height: undefined
    },
    {
        name: 'Yale Daily News Mobile App',
        desc: 'project description 4',
        imgSrc: 'https://source.unsplash.com/random',
        team: 'Gedi, Gondal, Kim, Lauriette, Oluwadairo, Rahman, Reiner',
        repoSrc: 'https://github.com/yale-swe/s22-ydn-mobile',
        website: undefined,
        presentation:
            'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a26e9773-3bda-42cd-82ae-aef90047f0e5',
        height: undefined
    },
    {
        name: 'YMarket',
        desc: 'A one-stop marketplace app that serves the buying and selling needs of Yale affliates.',
        imgSrc: '',
        team: 'Chen, Goh, Liu, Qian, Sharma, Zhang',
        repoSrc: 'https://github.com/yale-swe/s22-ymarket',
        website: undefined,
        presentation:
            'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=292ee4d2-2e1d-418f-aad9-aef90047f193',
        height: undefined
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
                TBA
                <div style={{ height: '50px' }}></div>
                <h3>Spring 2022</h3>
                {PROJECTS_S22.map(
                    ({
                        name,
                        desc,
                        team,
                        imgSrc,
                        repoSrc,
                        website,
                        presentation,
                        height
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
                            projectCardHeight={height}
                        />
                    )
                )}
                <div style={{ height: '50px' }}></div>
                <h3>Spring 2021</h3>
                {PROJECTS_S21.map(
                    ({
                        name,
                        desc,
                        team,
                        imgSrc,
                        repoSrc,
                        website,
                        presentation,
                        height
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
                            projectCardHeight={height}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default Projects;
