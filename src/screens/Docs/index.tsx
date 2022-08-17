import DocContent from '../../components/DocContent/';
import NavigationBar from '../../components/NavigationBar';
import styles from './styles.module.scss';

const Docs = () => {
    return (
        <div className={styles['page-container']}>
            <NavigationBar />
            <div className={styles['content-container']}>
                <h1>Docs</h1>
                <div style={{ marginBottom: '30px' }}></div>
                <h2>Tutorials</h2>
                <hr
                    style={{
                        background: 'black',
                        color: 'black',
                        height: '1px',
                        width: '100%',
                        marginBottom: '40px'
                    }}
                />

                <div style={{ marginBottom: '40px' }}></div>
                <h2>Example Code</h2>
                <hr
                    style={{
                        background: 'black',
                        color: 'black',
                        height: '1px',
                        width: '100%',
                        marginBottom: '40px'
                    }}
                />

                <DocContent
                    docName="MERN Example App"
                    docDesc="A MERN-stack application written in TypeScript. The MERN stack is a popular development stack, composed of: MongoDB (NoSQL Database), Express (Backend Framework), React (Frontend Framework), Node.js (Backend Runtime)."
                    docImgSrc=""
                    docUrl="https://github.com/yale-swe/mern-example-app"
                ></DocContent>
                <DocContent
                    docName="PFRN Example App"
                    docDesc="A PFRN-stack application written in Python. The PFRN stack consists of: PostgreSQL (a relational Database), Flask (Backend Framework), React Native (Mobile Framework)."
                    docImgSrc=""
                    docUrl="https://github.com/yale-swe/pfrn-example-app"
                ></DocContent>
                <div style={{ marginBottom: '40px' }}></div>

                <h2>Documentation</h2>
                <hr
                    style={{
                        background: 'black',
                        color: 'black',
                        height: '1px',
                        width: '100%',
                        marginBottom: '40px'
                    }}
                />

                <div style={{ marginBottom: '40px' }}></div>
                <h2>Useful Resources</h2>
                <hr
                    style={{
                        background: 'black',
                        color: 'black',
                        height: '1px',
                        width: '100%',
                        marginBottom: '40px'
                    }}
                />
            </div>
        </div>
    );
};

export default Docs;
