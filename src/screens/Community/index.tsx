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
                <a href="https://discord.com/channels/1059696577960235038/1059696577960235041">
                    Discord Server for Spring 2023
                </a>
                <div className={styles['vrgap']}></div>
                {/* <img width="200px" src={DiscordQRImg}></img> */}
            </div>
        </div>
    );
};

export default Community;
