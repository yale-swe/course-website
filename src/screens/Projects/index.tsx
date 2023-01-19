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
        presentation:
            'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=28ad46dd-9d05-42c4-a6d9-af00001bc2a9',
        height: '200px'
    },
    {
        name: 'Research For All',
        desc: "This project is a web application designed to allow users to comment their thoughts/reviews on research papers so that other users can benefit from them. The web application also provides a platform for researchers to document their currently reading/wish-to-read papers and allows them to find papers of their interest from other users' lists.",
        imgSrc: undefined,
        team: 'S. Hussain, R. Miranda, D. Ortega, C. Poston, E. Sage-Martinson, D. Villarreal Cavazos',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: undefined
    },
    {
        name: 'Standup Master',
        desc: 'The Standup Master app aims at helping users easily manage their daily standup meetings. With the presentation card prepared before the meeting, users can easily deliver a concise and clear presentation in a short period of time while keeping others updated.',
        imgSrc: undefined,
        team: 'L. Cai, D. Joseph, K. Li, R. Lopez, S. Sun, J. Yang',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '220px'
    },
    {
        name: 'The Suite Life',
        desc: 'This app helps new college undergraduates and young adults that are rooming within groups, by helping them organize and adress common primary pain points assocaited with rooming, so that suitemates may avoid potential confrontations about chores, payments, and suite rules.',
        imgSrc: undefined,
        team: 'L. Chen, L. Eggleston, J. Pan, K. Rudder, J. Shan, S. Thompson',
        repoSrc: undefined,
        website: undefined,
        presentation:
            'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e578045e-8d1b-4d95-aa82-af00001bc23f',
        height: '220px'
    },
    {
        name: 'YPool',
        desc: 'YPool presents a safe and affordable means of splitting rides among members of the Yale community, where students are matched with others based on their travel arrangements and preferences.',
        imgSrc: undefined,
        team: 'O. Ababio, A. Arcia, A. Mensah, D. Sanchez, J. Truong',
        repoSrc: undefined,
        website: undefined,
        presentation:
            'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=02d472ec-bf0b-451a-916b-af00001bc1e7',
        height: '200px'
    }
];

const PROJECTS_S22: ProjectType[] = [
    {
        name: 'Appily',
        desc: 'Appily aims to make the job application process for software engineering roles easier and more organized. It is an app with a simple, intuitive interface that helps users track multiple job applications and stay on schedule with deadlines. Core features for application tracking allow users to add submitted applications to a worksheet, where they can track progress and create reminders for each application.',
        // imgSrc: '/assets/appily-logo.png',
        imgSrc: undefined,
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
        // imgSrc: '/assets/campaign-wallet-logo.png',
        imgSrc: undefined,
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
        // imgSrc: '/assets/down-to-truck-logo.png',
        imgSrc: undefined,
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
        // imgSrc: '/assets/eloit-logo.png',
        imgSrc: undefined,
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
        // imgSrc: '/assets/jumble-logo.png',
        imgSrc: undefined,
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
        // imgSrc: '/assets/ydn-logo.png',
        imgSrc: undefined,
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
        // imgSrc: '/assets/ymarket-logo.png',
        imgSrc: undefined,
        team: 'A. Chen, M. Goh, B. Liu, E. Qian, V. Sharma, M. Zhang',
        repoSrc: 'https://github.com/yale-swe/s22-ymarket',
        website: undefined,
        presentation:
            'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=292ee4d2-2e1d-418f-aad9-aef90047f193',
        height: '180px'
    }
];

const PROJECTS_F22: ProjectType[] = [
    {
        name: 'WalkHome',
        desc: 'WalkHome is an app designed to bolster individual safety in potentially dangerous public or semi-public situations. WalkHome provides its users a discreet way to de-escalate an uncomfortable situation by streamlining and masking the process of calling for help.',
        // imgSrc: '/assets/appily-logo.png',
        imgSrc: undefined,
        team: 'T. Dai, M. Keyes, S. Magruder, J. Malouf, P. Miller-Schmidt, S. Yankovskaya',
        repoSrc: 'https://github.com/yale-swe/f22-backup',
        website: undefined,
        presentation: undefined,
        height: '230px'
    },
    {
        name: 'ClubHub',
        desc: 'ClubHub will make club management easy. We want to enable Yale students (and eventually students from other universities) to run their clubs smoothly from one place.',
        // imgSrc: '/assets/appily-logo.png',
        imgSrc: undefined,
        team: 'D. Beckmen, J. Lee, G. Stodolski, N. Weinberger, K. Yip',
        repoSrc: 'https://github.com/yale-swe/f22-club-management',
        website: 'https://dashboard.yaleclubhub.app/',
        presentation: undefined,
        height: '200px'
    },
    {
        name: 'Parkit',
        desc: 'Parkit is a platform for people to rent out parking spaces for temporary or long term use.',
        // imgSrc: '/assets/appily-logo.png',
        imgSrc: undefined,
        team: 'M. Ge, D. Mertus, W. Owens, S. Seager, Y. Shimizu, D. Vroon',
        repoSrc: 'https://github.com/yale-swe/f22-parkit',
        website: undefined,
        presentation: undefined,
        height: '170px'
    },
    {
        name: 'Shovel',
        desc: 'Shovel is a chrome-extension that takes a highlighted snippet of text on a webpage and provides extra context and data from a variety of news sources.',
        // imgSrc: '/assets/appily-logo.png',
        imgSrc: undefined,
        team: 'R. Ahluwalia, S. Feng, A. Landsbergen, A. Li, E. Peng, B. Wu',
        repoSrc: 'https://github.com/yale-swe/f22-fact-analysis-tool',
        website: undefined,
        presentation: undefined,
        height: '220px'
    },
    {
        name: 'YaleNav',
        desc: 'YaleNav is the mobile app helping students explore and navigate campus seamlessly.',
        // imgSrc: '/assets/appily-logo.png',
        imgSrc: undefined,
        team: 'A. Hafez, G. Hardcastle, P. Neagu, V. Schaffer, J. Yu, K. Zawadzki',
        repoSrc: 'https://github.com/yale-swe/f22-yalenav',
        website: undefined,
        presentation: undefined,
        height: '170px'
    },
    {
        name: 'Yalk',
        desc: 'Yalk is a mobile application that allows users to organize, share and track walks so as to enable people to socially connect with others while staying active and improving their personal health.',
        // imgSrc: '/assets/appily-logo.png',
        imgSrc: undefined,
        team: 'A. Chen, R. E. Lim, D. Mekuriaw, A. Yuan, C. Zheng',
        repoSrc: 'https://github.com/yale-swe/f22-yalk',
        website: undefined,
        presentation: undefined,
        height: '200px'
    },
    {
        name: 'YArXiver',
        desc: 'YArXiver is a literature management system helping Yale students collect, organize, search, recommend, cite, and share arXiv papers.',
        // imgSrc: '/assets/appily-logo.png',
        imgSrc: undefined,
        team: 'J. Chen, T. Huang, W. Qiu, X. Tang, W. Wang, X. Zhang, Y. Zhao',
        repoSrc: 'https://github.com/yale-swe/f22-yarxiver',
        website: undefined,
        presentation: undefined,
        height: '200px'
    }
];

const Projects = () => {
    return (
        <div className={styles['page-container']}>
            <NavigationBar />
            <div className={styles['content-container']}>
                <h1>Projects</h1>
                <div style={{ marginBottom: '30px' }}></div>
                <h2>Spring 2023</h2>
                <span style={{ fontSize: '40px' }}>TBD</span>
                <div style={{ height: '50px' }}></div>
                <h3>Fall 2022</h3>
                {PROJECTS_F22.map(
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
