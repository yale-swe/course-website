import NavigationBar from '../../components/NavigationBar';
import ProjectContent from '../../components/ProjectContent';
import styles from './styles.module.scss';

type ProjectType = {
    name: string;
    desc: string;
    team: string;
    imgSrc: string | undefined;
    repoSrc: string | undefined;
    website: string | undefined;
    presentation: string | undefined;
    height: string | undefined;
};

const PROJECTS_S21: ProjectType[] = [
    {
        name: 'Bulletin',
        desc: 'A cross-source personalized news board, giving people the ability to easily get information from different sources like social media platforms, news websites, and so on.',
        imgSrc: undefined,
        team: 'J. Ip, S. Omonije, C. Schwab, M. Shatry, N. Trehan',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '200px'
    },
    {
        name: 'Calyco',
        desc: 'A calendar-based social media mobile app designed to take the trouble out of coordinating events between college students in different time zones while also serving as an all-in-one digital diary for students to cherish and share their day-to-day with others.',
        imgSrc: undefined,
        team: 'J. Choi, Y. Jong, R. Kawamura, D. Li, B. Rhee, S. Wong',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '220px'
    },
    {
        name: 'EasyStart',
        desc: 'A web app called EasyStart that bridges the connection for people to find like-minded individuals to work on projects together. The app enables users to connect with like-minded individuals, foster meaningful connections, and stimulate creativity to design and build their dream projects.',
        imgSrc: undefined,
        team: 'P. Cheng, Q. Shen, Y. Wei, Y. Wu, Y. Zhang',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '220px'
    },
    {
        name: 'Garagio',
        desc: 'Garagio is a web based application enabling auto service customers to easily find and compare the best auto service deals around them, and book services with various providers. Booking are automatically fed into the Garagio shop management system for the auto service provider.',
        imgSrc: undefined,
        team: 'N. Burbano, J. Kavaliauskas, C. Palmer, C. Viyar',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '220px'
    },
    {
        name: 'Mos',
        desc: 'Mos is an app for digital self-care by using a "habit redirection" method: the user isn\'t burdened with the pressure of abruptly changing their life or schedule, but is instead gently offered to redirect existing phone usage habits into new healthier ones outside their phones.',
        imgSrc: undefined,
        team: 'B. Ashenafi, J. Cheng, E. Danchenko, J. Goncalves Cardoso, T. Hague, K. Rono',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '220px'
    },
    {
        name: 'Next',
        desc: 'Next is an interactive music streaming platform that focuses on group listening. Users can join rooms where they can suggest and vote on the next song to add to the playlist.',
        imgSrc: undefined,
        team: 'H. Adbaru, F. Alonso Bilfinger, M. Blank, R. Chousal Cantu, H. Li, J. Wu',
        repoSrc: undefined,
        website: 'https://next-music.github.io/website/',
        presentation: undefined,
        height: '200px'
    },
    {
        name: 'Research For All',
        desc: '',
        imgSrc: undefined,
        team: 'S. Hussain, R. Miranda, D. Ortega, C. Poston, E. Sage-Martinson, D. Villarreal Cavazos',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: undefined
    },
    {
        name: 'Standup Master',
        desc: '',
        imgSrc: undefined,
        team: 'L. Cai, D. Joseph, K. Li, R. Lopez, S. Sun, J. Yang',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: undefined
    },
    {
        name: 'The Suite Life',
        desc: '',
        imgSrc: undefined,
        team: 'L. Chen, L. Eggleston, J. Pan, K. Rudder, J. Shan, S. Thompson',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: undefined
    },
    {
        name: 'YPool',
        desc: '',
        imgSrc: undefined,
        team: 'O. Ababio, A. Arcia, A. Mensah, D. Sanchez, J. Truong',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: undefined
    }
];

const PROJECTS_S22: ProjectType[] = [
    {
        name: 'Appily',
        desc: 'Appily aims to make the job application process for software engineering roles easier and more organized. It is an app with a simple, intuitive interface that helps users track multiple job applications and stay on schedule with deadlines. Core features for application tracking allow users to add submitted applications to a worksheet, where they can track progress and create reminders for each application.',
        imgSrc: '/assets/appily-logo.png',
        team: 'A. Craven, A. Dang, B. Feng, D. Fernandez de Lara, D. Katko, C. Martinez, D.S. Ong',
        repoSrc: 'https://github.com/yale-swe/s22-internship-tracker',
        website: undefined,
        presentation:
            'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8890b0b1-d83f-4d93-aa1c-aef90049a263',
        height: '300px'
    },
    {
        name: 'Campaign Wallet',
        desc: 'A Chrome extension that allows users to hover over the names of Members of Congress on any website, and provides a popup providing campaign finance statistics (% of small donors, top industry donations, etc.) and other relevant details (record of misconduct, Tweets, etc.). Additional features include allowing the user to search a politician by their name and to look up politicians who are funded by a particular donor.',
        imgSrc: '/assets/campaign-wallet-logo.png',
        team: 'A. Chen, J. Hsu, J. Macri, A. Mehrotra, S. Mitra, L. Selin',
        repoSrc: 'https://github.com/yale-swe/s22-campaign-finance',
        website: undefined,
        presentation:
            'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3a8e08ae-ea72-4220-896a-aef90049a19d',
        height: '300px'
    },
    {
        name: 'HouseMe',
        desc: 'HouseMe is a consolidated and targeted service for college students to find and list sublets to lessen the stress of finding housing and/or finding someone to take over rent.',
        imgSrc: undefined,
        team: 'M. Callanan, J. Grady, A. Kaur, C. Qu, J. Romero, A. Sharma, L. Tang',
        repoSrc: 'https://github.com/yale-swe/s22-college-sublet',
        website: 'http://housemestudent.com/',
        presentation:
            'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d4bbe676-fbda-4cbe-9349-aef90047f13b',
        height: '220px'
    },
    {
        name: 'DownToTruck',
        desc: 'DownToTruck is a mobile app that gives "diners" the ability to observe the food truck landscape in any city, as food trucks easily broadcast information about their hours, inventory, and location in real time. The app is directed towards College Students, capturing a reliable user base.',
        imgSrc: '/assets/down-to-truck-logo.png',
        team: 'C. Orr, F. Salinas-Arreola, E. Slaughter, S. Sultan, A. Wang, S. Yin',
        repoSrc: 'https://github.com/yale-swe/s22-downtotruck',
        website: undefined,
        presentation:
            'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3a8e08ae-ea72-4220-896a-aef90049a19d',
        height: undefined
    },
    {
        name: 'Eloit',
        desc: "Eloit is a platform to rate and compare things in a whole new way. One can easily pick two items, vote for the one they like more, and see others' opinions on the rivalry. Every vote affects the rating and ranking of the compared items dynamically.",
        imgSrc: '/assets/eloit-logo.png',
        team: "X. Hou, H. Jain, R. Kantamneni, Y. Milkessa, J. O'Connor, K. Wu",
        repoSrc: 'https://github.com/yale-swe/s22-eloit',
        website: undefined,
        presentation:
            'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3d266e51-eae9-4641-ad84-aef90049a175',
        height: undefined
    },
    {
        name: 'Jumble',
        desc: "Jumble is a website that combines social networking with media entertainment. For media entertainment database purposes, it is a place where users can view the information and users' evaluation of all kinds of media entertainment (TV shows, movies, books, games and podcasts); for social networking purposes, users can keep track of everything they have seen or are about to see, and follow other people to get their recent updates.",
        imgSrc: '/assets/jumble-logo.png',
        team: 'D. Hodeta, A. Lazzaretti, Y. Liu, J. Qu, Z. Tang, S. Tigistu, A. Zhang',
        repoSrc: 'https://github.com/yale-swe/s22-entertainment-archives',
        website: undefined,
        presentation: undefined,
        height: '320px'
    },
    {
        name: 'Morphic',
        desc: 'Morphic is a federated learning platform for connecting researchers seeking to develop models and providers of confidential data. The system facilitates the training of complex models across distributed cohorts while offering the guarantee that sensitive information will not be shared between the two parties.',
        imgSrc: undefined,
        team: 'K. Hu, L. Kopits, R. Luo, A. Reichenbach, H. Sheth',
        repoSrc: 'https://github.com/yale-swe/s22-datasethub',
        website: undefined,
        presentation:
            'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3a8e08ae-ea72-4220-896a-aef90049a19d',
        height: '220px'
    },
    {
        name: 'TravelPlanner',
        desc: 'TravelPlanner is an app that helps users create a travel itinerary and plan everything necessary for traveling, including finding hotels, restaurants, entertainment, and other social activities.',
        imgSrc: undefined,
        team: 'P. Carroll, J. Chen, Z. Liang, E. Valencia, R. Wang, B. Zhao, W. Zou',
        repoSrc: 'https://github.com/yale-swe/s22-travelplanner',
        website: undefined,
        presentation: undefined,
        height: '200px'
    },
    {
        name: 'Yale Daily News Mobile App',
        desc: 'YDN Mobile is an app for the Yaily Daily News that provides all existing YDN functionality in an elegant mobile application; adds user engagement features such as creating user accounts, upvoting, commenting, and sharing; and adds user personalization features such as saved posts and a recommendation-driven "For You" newsfeed. Overall, YDN Mobile aims to provide an intuitive, accessible experience to increase user engagement and facilitate dialogue around the stories, issues, and topics affecting the Yale community.',
        imgSrc: '/assets/ydn-logo.png',
        team: 'Z. Gedi, A. Gondal, Y. Kim, T. Lauriette, F. Oluwadairo, F. Rahman, C. Reiner',
        repoSrc: 'https://github.com/yale-swe/s22-ydn-mobile',
        website: undefined,
        presentation:
            'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a26e9773-3bda-42cd-82ae-aef90047f0e5',
        height: '340px'
    },
    {
        name: 'YMarket',
        desc: 'A one-stop marketplace app that serves the buying and selling needs of Yale affliates.',
        imgSrc: '/assets/ymarket-logo.png',
        team: 'A. Chen, M. Goh, B. Liu, E. Qian, V. Sharma, M. Zhang',
        repoSrc: 'https://github.com/yale-swe/s22-ymarket',
        website: undefined,
        presentation:
            'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=292ee4d2-2e1d-418f-aad9-aef90047f193',
        height: '180px'
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
