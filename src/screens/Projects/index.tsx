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

const PROJECTS_F26: ProjectType[] = [
    // {
    //     name: '',
    //     desc: '',
    //     imgSrc: undefined,
    //     team: '',
    //     repoSrc: undefined,
    //     website: undefined,
    //     presentation: undefined,
    //     height: '210px'
    // },
];

const PROJECTS_F25: ProjectType[] = [
    {
        name: 'ClubHub',
        desc: 'ClubHub is a centralized platform for student organizations to manage events, preserve institutional knowledge, and ensure leadership continuity across years. It helps clubs streamline planning, share resources, and analyze trends, all in one secure and accessible interface.',
        imgSrc: undefined,
        team: 'A. Ephraim, L. Ivy, M. Isabelle, O. Kaitlyn, O. Irine Juliet, S. Nicholas',
        repoSrc: undefined,
        website: 'https://clubhub-ufv7.onrender.com',
        presentation: undefined,
        height: '210px'
    },
    {
        name: 'Course Sidekick',
        desc: 'A tool that centralizes scattered course resources into one searchable hub, so students can find critical information and answers in seconds. It replaces manual digging across PDFs, LMS pages, and emails with fast, unified search and simple Q&A.',
        imgSrc: undefined,
        team: 'A. Murad, A. Abel, C. Meghana, H. Adham, M. Ronald, N. David',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '210px'
    },
    {
        name: 'Fantasy Finance League',
        desc: 'Fantasy Finance League is a gamified investing platform that uses the structure of fantasy football to teach financial literacy. Players build "teams" of assets like stocks and cryptocurrencies, compete in leagues, and learn portfolio management in a fun, accessible way.',
        imgSrc: undefined,
        team: 'A. Ndiana, K. Tarun, M. Jordan, M. Haroon, O. Kemi, S. Elizabeth, T. Jorge',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '210px'
    },
    {
        name: 'inki',
        desc: 'inki is the first AI-powered collaborative annotation platform.',
        imgSrc: undefined,
        team: 'S. Emmett, Y. Grady, Z. Eva, Z. Henry',
        repoSrc: undefined,
        website: 'https://f25-inki-murex.vercel.app',
        presentation: undefined,
        height: '160px'
    },
    {
        name: 'Jukebox',
        desc: 'Jukebox is a social portfolio for music lovers: a platform designed to help you engage more deeply with the music you care about. It lets you share both quick takes and longform reviews, rate content, respond to music news, and build a multimedia journal of your personal associations with the art you love.',
        imgSrc: undefined,
        team: 'C. Danielle, C. Isabella, D. Ariana, M. Cindy, Q. Zixin, W. Thomas',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '210px'
    },
    {
        name: 'MedSafe+',
        desc: 'MedSafe+ is a patient-friendly platform that helps users check for medication, supplement, and diet interactions, offering clear safety alerts and personalized guidance to improve health management. It integrates drug–drug, drug–diet, and drug–supplement checks into one accessible tool for patients and caregivers.',
        imgSrc: undefined,
        team: 'C. Peng, G. Siyi, H. Angie, L. Peiwen, L. Tina, W. Xinyu, Z. Shiyang',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '240px'
    },
    {
        name: 'Questify',
        desc: 'Everyone wants to get better at something, but sticking with the process is hard when tools like to-do lists and journals feel like chores and leave progress invisible. Questify turns self-improvement into a game: users log real-world actions that earn skill XP, making everyday effort visible, rewarding, and social.',
        imgSrc: undefined,
        team: 'C. Xien, F. Qiang, G. Tamara, S. Noah, S. Uma, v. Celeste, W. Peter',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '240px'
    },
    {
        name: 'SeatCheck',
        desc: 'SeatCheck is a mobile application designed to help Yale students quickly identify the best available study spots across campus through real-time, crowdsourced updates. Acting like a "Waze for studying," it visualizes libraries, cafes, and lounges as an interactive heatmap that reflects seat availability, noise conditions, and amenities.',
        imgSrc: undefined,
        team: 'B. Snikitha, C. David, E. Barsbold, H. Adrian, P. Kashvi, S. Cody',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '240px'
    },
    {
        name: 'SnackTrack',
        desc: 'SnackTrack is a mobile iOS application that helps college students reduce food waste by tracking groceries, monitoring expiration dates, and suggesting recipes based on ingredients they already have at home',
        imgSrc: undefined,
        team: 'C. Peidong, K. Puiyee, L. Eric, M. Matthew, R. Sumanth, X. Jarvis, Z. William',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '210px'
    },
    {
        name: 'SpotlightU',
        desc: 'SpotlightU is a campus talent marketplace where students can showcase their skills and connect with peers seeking collaborators for creative projects, performances, and events.',
        imgSrc: undefined,
        team: 'A. Francisca, G. Kevin, K. Aya, O. Manaka, O. Sebastian, P. Angelica, T. Briley',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '190px'
    },
    {
        name: 'SynKennik',
        desc: 'SynKennik is an AI-powered education platform that creates structured and motivating learning experiences. It solves the chaos of conventional AI learning approaches by providing clear progression, quality content, and dynamic, gamified learning paths.',
        imgSrc: undefined,
        team: 'M. Ethan, R. Lazuli',
        repoSrc: undefined,
        website: 'https://synkennik.com',
        presentation: undefined,
        height: '210px'
    },
    {
        name: 'Tasteful',
        desc: 'Tasteful provides a central hub for ratings, reviews, and curation for media of multiple types: movies, books, music, and more. Users can select their favorite media, share this info with others, and socialize.',
        imgSrc: undefined,
        team: 'B. Arnav, C. Jennifer, H. Jerry, L. Nicholas, L. Byron, S. Brianna-Alexandra, Z. Rose',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '190px'
    },
    {
        name: 'Yale Daily News',
        desc: 'A complete revamp of the Yale Daily News tech stack; this includes its backend infrastructure, content management system, frontend web interface, and mobile application.',
        imgSrc: undefined,
        team: 'G. Seth, H. Raymond, N. Matthew, S. Midhun, S. Bohan, S. Kenneth, X. Ben',
        repoSrc: undefined,
        website: 'https://yaledailynews.com',
        presentation: undefined,
        height: '190px'
    },
    {
        name: 'Yorkie',
        desc: 'Yorkie is the one-stop marketplace for Yale students to sublet their housing and find short-term rentals in the New Haven area',
        imgSrc: undefined,
        team: 'A. Sivan, J. David, M. Nava, P. Elle, T. Joey, W. Natsume, Z. Felicia',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '190px'
    }
];

const PROJECTS_F24: ProjectType[] = [
    {
        name: 'ASP',
        desc: 'An all-in-one platform that automates the design and optimization of mRNA sequences to enhance protein production and experimental efficiency.',
        imgSrc: undefined,
        team: 'A. Seth',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '180px'
    },
    {
        name: 'Bulldog Carpool',
        desc: 'Bulldog Carpool aims to provide a platform that allows Yale students to connect with each other to set up carpooling arrangements when they are traveling to the airport.',
        imgSrc: undefined,
        team: 'C. Hamilton, D. Nanda, M. Nardini, M. Ofodile, O. Zhang',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '180px'
    },
    {
        name: 'Calinzard',
        desc: "Calinzard is an AI-powered system that automatically extracts calendar events from emails and syncs them with users' Google Calendars. It addresses the time-consuming task of manually inputting event details from emails into calendars, particularly for students who receive numerous event-related emails.",
        imgSrc: undefined,
        team: 'S. Lee, S. Li, C. Stephenson, T. Wang, B. Wong',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '210px'
    },
    {
        name: 'Decoherence Labs',
        desc: 'Decoherence Labs is developing an easy-to-use interface for visualizing and simulating quantum circuits, bridging the gap between theoretical quantum computing and practical applications.',
        imgSrc: undefined,
        team: 'B. Foxman, R. Kumar, J. Levy, Z. Pinker, R. Tan',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '190px'
    },
    {
        name: 'Dwello',
        desc: 'A simple, no-fuss home comparison tool to streamline your next renting/buying decision!',
        imgSrc: undefined,
        team: 'N. Dee, A. Deng, A. Mishra, Z. Naveed, A. Purushottam, P. Sharma, Z. Zeng',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '170px'
    },
    {
        name: 'ImagineMe',
        desc: "ImagineMe is a personalized storybook creation platform that sparks children's interest in reading by making them the main characters in AI-generated, visually immersive stories.",
        imgSrc: undefined,
        team: 'H. Chambers, V. Ezhov, A. Huang, O. Li, L. Raveendran, B. Todi',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '190px'
    },
    {
        name: 'Jogger Jam',
        desc: 'Jogger Jam is a new, exciting exercise game featuring turn-based RPG elements.',
        imgSrc: undefined,
        team: 'A. Kumar, N. Mathew, C. Sun, N. Tareque, A. Umer, D. Zhang, M. Zhang',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '170px'
    },
    {
        name: 'MarketMind AI',
        desc: 'MarketMind AI is an AI-driven platform that helps individual investors optimize their stock portfolios by providing personalized, data-driven rebalancing strategies. By integrating market news, trends, charts, and user goals, it simplifies portfolio management, enabling informed decisions without the need for extensive expertise.',
        imgSrc: undefined,
        team: 'Z. Jiang, B. Phipathananunth, J. Putta, S. Rizvi, I. Singh, H. Zeilberger',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '240px'
    },
    {
        name: 'Munch',
        desc: 'Munch is a social media platform where users share recipes with friends and the world, show off recent food creations, and compete with others to produce the best dish.',
        imgSrc: undefined,
        team: 'I. Deng, D. Lilly, A. Sharma, M. Willen, H. Wimsatt',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '190px'
    },
    {
        name: 'Tabbr',
        desc: 'Tabbr is a platform designed to facilitate expense tracking, dues management and budgeting for organizations. It helps treasurers efficiently manage the group’s finances and maintain transparency with group members.',
        imgSrc: undefined,
        team: 'J. Carroll, M. Garchitorena, M. Lisman, S. Pierce, J. Pachêco, M. Velasco, C. Waxman',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '210px'
    },
    {
        name: 'Time Capsule',
        desc: 'The Time Capsule project allows users to create and share virtual time capsules that contain photos, videos, text, and more. These capsules can be buried at specific locations on a map, with customizable visibility and temporal settings for when and who can see them.',
        imgSrc: undefined,
        team: 'K. Akduman, J. Baehring, B. Du, R. Klein-Seetharaman, T. Li, T. Tan, P. Ye',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '220px'
    },
    {
        name: 'Whisk',
        desc: "Whish aims to optimize users' cooking experience as much as possible by displaying instructions for one or more dishes in real-time without the need to scroll (as in written recipes) or rewind (as in recipe videos).",
        imgSrc: undefined,
        team: 'M. Aral, D. Bikmaz, C. Kupeli, T. Kurumisawa, M. Masamvu',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '210px'
    },
    {
        name: 'Yale CourseMap',
        desc: 'Yale Course Planner helps students create a semester plan by aligning their course selections with their career goals using a personalized course registry and calendar for this semester.',
        imgSrc: undefined,
        team: 'B. Bao, K. Lau, J. Serrano, X. Sun, Y. Zhang, Y. Zhou',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '190px'
    },
    {
        name: 'YaliePlan',
        desc: 'YaliePlan is a web application that generates personalized academic, extracurricular, and social life plans with paragraphs, links, and time management templates for Yale students based on a survey reflecting their priorities and interests. It recommends specific clubs, courses, and events tailored to each student’s preferences and goals.',
        imgSrc: undefined,
        team: 'V. Basvi, L. Muita, A. Siele, S. Usherwood, K. Williams',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '240px'
    }
];

const PROJECTS_S24: ProjectType[] = [
    {
        name: 'Astrarium',
        desc: 'Astrarium provides astronomers with a simple tool for discovering new celestial objects, while simultaneously motivating their continued observations. Point your telescope to the sky in order to complete challenges, share findings with fellow stargazers, and build your own astronomy aquarium!',
        imgSrc: undefined,
        team: 'M. Mao, A. Pearce, M. Qiu, C. Sheng, J. Yoo, H. Zhou',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '240px'
    },
    {
        name: 'BluebookAI',
        desc: 'BluebookAI aims to create a natural language interface to provide customized Yale course recommendations in response to student queries.',
        imgSrc: undefined,
        team: 'B. Chen, A. Johnson, M. Lewkowicz, P. Lin, K. Liu, S. Ulammandakh, V. Zhou',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '220px'
    },
    {
        name: 'BRB',
        desc: 'BRB provides a platform on which users can create “communities” or groups within their local communities to facilitate buying/renting/borrowing the goods that users already have.',
        imgSrc: undefined,
        team: 'M. Chu, D. Raskin, M. Russo, S. Skoler, L. Sun, N. Sung',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '220px'
    },
    {
        name: 'DocuBot',
        desc: 'DocuBot is a documentation-retrieving, fine-tuned AI assistant that helps developers learn SAP Business Technology Platform.',
        imgSrc: undefined,
        team: 'S. Godilla, S. Nalabothu',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '220px'
    },
    {
        name: 'Fair Poker',
        desc: 'An online poker game that every participant can be sure that it is fair.',
        imgSrc: undefined,
        team: 'Z. Deng, Z. Liu, W. Wang, S. Zhu',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '200px'
    },
    {
        name: 'Handsome Habits',
        desc: 'Handsome Habits makes personal wellness fun by linking your habits to the well-being of our very own Handsome Dan.',
        imgSrc: undefined,
        team: 'W. Aboyure, T. Norsworthy, A. Sakho, J. Tweneboa Kodua',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '240px'
    },
    {
        name: 'Meal?',
        desc: 'Meal? is an iOS app designed to facilitate social dining experiences among coworkers, friends, and family.',
        imgSrc: undefined,
        team: 'C. Gong, H. Keenan, V. Lacombe, B. Lorsch, Z. Wu',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '220px'
    },
    {
        name: 'Quill',
        desc: 'Quill is a text editor designed to help writers supercharge their writing with AI. Users can get real-time feedback and utilize LLMs to enhance their writing in the way they feel is most useful to them.',
        imgSrc: undefined,
        team: 'A. Buffi, N. Hamilton, N. Ravinand, A. Tramer, S. Van Der Weide, A. Xie',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '220px'
    },
    {
        name: 'ReadMuse',
        desc: 'Readmuse is a web platform for writers to share story ideas and edit scripts and a communication tool between investors and authors.',
        imgSrc: undefined,
        team: 'M. Chen, B. Duanmu, K. Guan, F. He, Z. Zhou',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '220px'
    },
    {
        name: 'Unify',
        desc: 'Unify will offer Spotify users a visually appealing platform to explore their listening history and compare habits with others. By ‘unifying’ their data, users will be able to learn how much they match, get join song suggestions, custom playlists, and Y2K-style graphics to share.',
        imgSrc: undefined,
        team: 'R. Cheng, D. Crair, B. Gonzalez, H. Picar, S. Teng, S. Thakrar, B. Yee',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '240px'
    },
    {
        name: 'Y Office Hours',
        desc: 'Y Office Hours is inspired by the csofficehours.org website, a platform that provides virtual office hours sessions for Computer Science classes at Yale. The goal of Y Office Hours, however, is to solve some of the inconveniences and lack of major features that exist within the office hours platform at the moment.',
        imgSrc: undefined,
        team: 'D. Dong, A. Khan, B. Lewis, A. Shin, J. Zhang',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '240px'
    }
];

const PROJECTS_F23: ProjectType[] = [
    {
        name: 'Adventurista',
        desc: 'Adventurista is a social connectivity app designed to tackle the challenges of travel coordination, planning, and meeting new people. The platform allows users to post upcoming adventure plans and join other people’s events within their travel location – fostering seamless friendships, expanding their global network, and making memorable travel experiences.',
        imgSrc: undefined,
        team: 'N. Ismail, A. Khunte, P. SebaRaj, V. Tran, E. Wilford',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '240px'
    },
    {
        name: 'Yale AppHub',
        desc: 'A marketplace for Yalies to go to when looking for applications that address issues in the campus community. This marketplace will not only host apps that are good for the community, but will be hosting apps that are made BY the community.',
        imgSrc: undefined,
        team: 'R. Acharya, G. Broome, A. Frey, Y. Mikhaylov, A. Potter, H. Qi',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '220px'
    },
    {
        name: 'CampusClicks',
        desc: 'CampusClicks is a centralized platform connecting Yale students with freelance student services like photographers, DJs, and more.',
        imgSrc: undefined,
        team: 'E. Belay, B. Chen, A. Chun, A. Ding, J. Dominic, L. Huang, M. Yuan',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '200px'
    },
    {
        name: 'Cell Segmentation Benchmark',
        desc: 'A system for researchers in the biomedical field to fairly evaluate their methods with publicly available cell segmentation datasets.',
        imgSrc: undefined,
        team: 'N. Bui, V. Kher, Y. Li, C. Liu, X. Sun, S. Viswanath',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '200px'
    },
    {
        name: 'FromTheArea',
        desc: 'FromTheArea is a web-application designed for Yale students to have a centralized location where they can learn about the best restaurants and bars in New Haven.',
        imgSrc: undefined,
        team: 'K. Collignon, E. Dong, E. Gerritz, V. Gorrepati, C. Kang, A. Tauhert, W. Zhu',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '200px'
    },
    {
        name: 'HandEdit Pro',
        desc: 'HandEdit Pro is a video editor that allows the user to use hand gestures to cut videos',
        imgSrc: undefined,
        team: 'S. Fang, R. Hausman, N. He, H. Liu, D. Ma, Z. Wang, Q. Zhang',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '180px'
    },
    {
        name: 'Harmony',
        desc: 'Harmony is a UX research platform that provides users with an end-to-end pipeline to store, manage, organize, and share their research, serving as the single source of truth for organizations.',
        imgSrc: undefined,
        team: 'C. Hernandez, A. Nijhawan, S. Sivakumar, B. Xiong',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '200px'
    },
    {
        name: 'Here',
        desc: 'A location-based AR social app that allows users to plant messages for friends or the public in their current location and discover messages from others within a set distance.',
        imgSrc: undefined,
        team: 'L. Chen, P. Duong, S. Kang, X. Li, E. Wang, L. Wang, A. Zhang',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '200px'
    },
    {
        name: 'IMYale',
        desc: 'Communication, scheduling, and sign-ups for intramurals. All on one platform.',
        imgSrc: undefined,
        team: 'A. Deng, B. Gong, M. Kinyua, B. Qian, E. Sun, A. Zhang',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '180px'
    },
    {
        name: 'ProTop',
        desc: 'ProTop provides users with a streamlined capability to access and systemize data from multiple databases, download datasets from catalogs, visualize and collaboratively manipulate structures in real-time, and identify molecular entanglements in proteins.',
        imgSrc: undefined,
        team: 'J. Apostol, Y. Cai, J. Sanker, A. Su, H. Zuo',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '220px'
    },
    {
        name: 'Yale Arts Map',
        desc: 'Yale Art Map visualizes the relationships between people and projects across theater, film, and journalism at Yale.',
        imgSrc: undefined,
        team: 'E. Boesen, F. Cuello Garcia, M. Gabashvili, D. Hanson, E. Kirkiles, S. Teng',
        repoSrc: undefined,
        website: undefined,
        presentation: undefined,
        height: '200px'
    }
    // {
    //     name: 'Adventurist',
    //     desc: '',
    //     imgSrc: undefined,
    //     team: '',
    //     repoSrc: undefined,
    //     website: undefined,
    //     presentation: undefined,
    //     height: '200px'
    // },
    // {
    //     name: 'Adventurist',
    //     desc: '',
    //     imgSrc: undefined,
    //     team: '',
    //     repoSrc: undefined,
    //     website: undefined,
    //     presentation: undefined,
    //     height: '200px'
    // },
];

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
        website: 'https://danielmekuriaw.github.io/yalk-page/',
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

const PROJECTS_S23: ProjectType[] = [
    {
        name: 'Cinematch',
        desc: 'Cinematch is a social networking app that allows users to find movies to watch with their friends.',
        // imgSrc: '/assets/appily-logo.png',
        imgSrc: undefined,
        team: 'J. Chen, K. Correia, A. Darfur, O. Fallahi, J. Kuszmaul, R. Takizawa',
        repoSrc: 'https://github.com/yale-swe/s23-cinematch',
        website: undefined,
        presentation: undefined,
        height: '180px'
    },
    {
        name: 'Clockwork',
        desc: 'Clockwork is a task-tracking app specifically designed to help students develop and maintain a healthy work-life balance. Rather than optimizing for maximum productivity, Clockwork aims to help reduce stress and prevent burnout, empowering users to balance their schedules.',
        imgSrc: undefined,
        team: 'A. Gupta, A. Lee, M. Nagib, K. Patel, A. Tewari',
        repoSrc: 'https://github.com/yale-swe/s23-clockwork',
        website: undefined,
        presentation: undefined,
        height: '230px'
    },
    {
        name: 'Foodme',
        desc: 'Foodme is a food waste reduction app that allows users to purchase surplus food from restaurants and grocery stores at a discounted price.',
        imgSrc: undefined,
        team: 'W. Bao, I. Fayler, N. Le, Y. Lu, C. Tng, M. Young, W. Zheng',
        repoSrc: 'https://github.com/yale-swe/s23-foodme',
        website: undefined,
        presentation: undefined,
        height: '200px'
    },
    {
        name: 'here2',
        desc: 'here2 is a social networking web application focused on addressing issues related to peer coordination. The platform would enable users to centrally share in advance events and plans within their social networks to facilitate social interaction.',
        // imgSrc: '/assets/here2icon.png',
        imgSrc: undefined,
        team: 'A. Ao, F. Ciputra, B. Cuza, D. Daud, G. Dos Santos, A. Romero-Ruffo, P. Sykes',
        repoSrc: 'https://github.com/yale-swe/s23-here2',
        website: 'https://s23-here2.vercel.app',
        presentation: undefined,
        height: '230px'
    },
    {
        name: 'iCare',
        desc: 'iCare aims to revolutionize the way patients in hospitals communicate with healthcare staff, as many patients are unable to communicate verbally due to conditions such as stroke, heart attack, aphasia, or language barriers. We do this by creating an iPad/web application that features a user-friendly interface with large images to allow patients to easily send requests to their caretakers.',
        // imgSrc: '/assets/eloit-logo.png',
        imgSrc: undefined,
        team: 'O. Akif, Z. Chen, X. Du, S. Pu, H. Wang',
        repoSrc: 'https://github.com/yale-swe/s23-icare',
        website: undefined,
        presentation: undefined,
        height: '250px'
    },
    {
        name: 'IdleIvy',
        desc: 'IdleIvy is a game on blockchain with idle game mechanics. Users can idly "earn" our game\'s token and have actual custody of the game\'s currency, unlike how typical in-game currencies operate.',
        // imgSrc: '/assets/jumble-logo.png',
        imgSrc: undefined,
        team: 'T. Falk, J. Lee, G. Sleenhof',
        repoSrc: 'https://github.com/yale-swe/s23-idleivy',
        website: undefined,
        presentation: undefined,
        height: '210px'
    },
    {
        name: 'myhour',
        desc: 'myhour is a platform that unifies selling services as a freelancer with tutoring and support. Here we define service in the narrow sense that includes hourly video consultations, be it for academic support, legal support or even health and fitness support.',
        imgSrc: undefined,
        team: 'K. Chen, K. Im, A. Singhania, P. Wong, Z. Zhang',
        repoSrc: 'https://github.com/yale-swe/s23-myhour',
        website: undefined,
        presentation: undefined,
        height: '220px'
    },
    {
        name: 'Shoutify',
        desc: 'Shoutify is a social add-on for Spotify that allows users to leave comments on songs and their lyrics.',
        imgSrc: undefined,
        team: 'V. Del Carpio Gomez, S. Eshun Danquah, T. Lewis, D. Moss, H. Shindika, U. Wilson',
        repoSrc: 'https://github.com/yale-swe/s23-shoutify',
        website: undefined,
        presentation: undefined,
        height: '180px'
    },
    {
        name: 'YIMS',
        desc: "YIMS provides up to date information on Yale's intramural sports competition. Players can easily view college leaderboards, access past game records, and sign up for games.",
        // imgSrc: '/assets/ydn-logo.png',
        imgSrc: undefined,
        team: 'M. Jiang, C. Ouellette, K. Qiang, B. Viquiera, A. Xu, E. Yang',
        repoSrc: 'https://github.com/yale-swe/s23-yims',
        website: undefined,
        presentation: undefined,
        height: '200px'
    },
    {
        name: 'YPaths',
        desc: 'Design your college paths -- schedules, majors, and daily commutes -- with YPaths.',
        // imgSrc: '/assets/ymarket-logo.png',
        imgSrc: undefined,
        team: 'J. Chang, G. Colmenares, F. Limprayoon, C. Martinez Contreras, R. Menon, G. Purohit, C. Yang',
        repoSrc: 'https://github.com/yale-swe/s23-ypaths',
        website: 'https://www.ypaths.org',
        presentation: undefined,
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
                <h2>Fall 2026</h2>
                {PROJECTS_F26.map(
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
                <div style={{ height: '50px', fontSize: '30px' }}>TBD</div>
                <div style={{ height: '50px' }}></div>
                <h3>Fall 2025</h3>
                {PROJECTS_F25.map(
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
                <h3>Fall 2024</h3>
                {PROJECTS_F24.map(
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
                <div style={{ height: '50px', fontSize: '30px' }}>TBD</div>
                <div style={{ height: '50px' }}></div>
                <h3>Spring 2024</h3>
                {PROJECTS_S24.map(
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
                <h3>Fall 2023</h3>
                {PROJECTS_F23.map(
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
                <h3>Spring 2023</h3>
                {PROJECTS_S23.map(
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
