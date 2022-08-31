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
                <a href="https://discord.gg/bwwD7QTqDu">
                    Discord Server for Fall 2022
                </a>
                <div className={styles['vrgap']}></div>
                <img width="200px" src={DiscordQRImg}></img>
            </div>
        </div>
    );
};

export default Community;
