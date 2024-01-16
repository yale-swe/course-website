// import DiscordQRImg from '../../assets/images/discord-qr.png';
import NavigationBar from '../../components/NavigationBar';
import styles from './styles.module.scss';

const Community = () => {
    return (
        <div className={styles['page-container']}>
            <NavigationBar />
            <div className={styles['content-container']}>
                <h1>Community</h1>
                <div className={styles['vrgap']}></div>
                <a href="https://discord.com/channels/1195302010115862568/1195302010879221852">
                    Discord Server for Spring 2024
                </a>
                <a href="https://discord.gg/2w999WZV7n">(Invite Link)</a>
                <div className={styles['vrgap']}></div>
                {/* <img width="200px" src={DiscordQRImg}></img> */}
            </div>
        </div>
    );
};

export default Community;
