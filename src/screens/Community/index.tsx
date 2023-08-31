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
                <a href="https://discord.com/channels/1143356392653193236/1143356393110388797">
                    Discord Server for Fall 2023
                </a>
                <a href="https://discord.gg/TMJsWsu7Yu">(Invite Link)</a>
                <div className={styles['vrgap']}></div>
                {/* <img width="200px" src={DiscordQRImg}></img> */}
            </div>
        </div>
    );
};

export default Community;
