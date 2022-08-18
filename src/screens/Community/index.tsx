import DiscordQRImg from '../../assets/images/discord-qr.png';
import NavigationBar from '../../components/NavigationBar';
import styles from './styles.module.scss';

const Community = () => {
    return (
        <div className={styles['page-container']}>
            <NavigationBar />
            <div className={styles['content-container']}>
                <h1>Community</h1>
                <div className={styles['vrgap']}></div>
                <p>Discord Server for Fall 2022: </p>
                <a href="https://discord.com/channels/1009650713187582032/1009650713187582035">
                    Discord Server
                </a>
                <div className={styles['vrgap']}></div>
                <img width="200px" src={DiscordQRImg}></img>
            </div>
        </div>
    );
};

export default Community;
