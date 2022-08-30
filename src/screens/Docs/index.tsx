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

                <DocContent
                    docName="Intro to React"
                    docDesc="This is a tutorial on React: a Javascript library for building user interfaces."
                    docImgSrc="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    docUrl="https://reactjs.org/tutorial/tutorial.html"
                ></DocContent>
                <DocContent
                    docName="React Native: Learning the Basics"
                    docDesc="A tutorial on React Native: a library just like React, that uses native components instead of web ones. One needs some knowledge of React before start this tutorial."
                    docImgSrc="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    docUrl="https://github.com/yale-swe/pfrn-example-app"
                ></DocContent>
                <DocContent
                    docName="Creating a Next.js App"
                    docDesc="A tutorial to build a complete web application using Next.js, a React framework"
                    docImgSrc={undefined}
                    docUrl="https://nextjs.org/learn/basics/create-nextjs-app"
                ></DocContent>
                <DocContent
                    docName="Express JS Tutorial"
                    docDesc="A tutorial for building a web application using Express JS, a popular web framework."
                    docImgSrc={undefined}
                    docUrl="https://expressjs.com/en/starter/installing.html"
                ></DocContent>
                <DocContent
                    docName="Writing a Django App"
                    docDesc="A tutorial to build a web app uing Django: a high-level Python web framework that makes it easy to build web applicaitons."
                    docImgSrc="https://static.djangoproject.com/img/logo-django.42234b631760.svg"
                    docUrl="https://docs.djangoproject.com/en/4.1/intro/tutorial01/"
                ></DocContent>
                <DocContent
                    docName="Flask"
                    docDesc="A tutorial describing how to create a basic blog applicaiton using Flask."
                    docImgSrc="https://flask.palletsprojects.com/en/2.2.x/_static/flask-icon.png"
                    docUrl="https://flask.palletsprojects.com/en/2.2.x/tutorial/"
                ></DocContent>

                <div style={{ marginBottom: '30px' }}></div>
                <h2>Video Tutorials</h2>

                <DocContent
                    docName="MERN Stack Walkthrough 🔒"
                    docDesc="This is a video walkthrough created for the CPSC 439/539 class, for building a basic app using the MERN stack: MongoDB (NoSQL Database), Express (Backend Framework), React (Frontend Framework), Node.js (Backend Runtime)."
                    docImgSrc={undefined}
                    docUrl="https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6636764c-b8e9-4ae5-bcc2-aef90055d0bb"
                ></DocContent>

                <div className={styles['vrgap']}></div>
                <h2>Example Code</h2>
                <DocContent
                    docName="MERN Example App"
                    docDesc="A MERN-stack application written in TypeScript. The MERN stack is a popular development stack, composed of: MongoDB (NoSQL Database), Express (Backend Framework), React (Frontend Framework), Node.js (Backend Runtime)."
                    docImgSrc={undefined}
                    docUrl="https://github.com/yale-swe/mern-example-app"
                ></DocContent>
                <DocContent
                    docName="PFRN Example App"
                    docDesc="A PFRN-stack application written in Python. The PFRN stack consists of: PostgreSQL (a relational Database), Flask (Backend Framework), React Native (Mobile Framework)."
                    docImgSrc={undefined}
                    docUrl="https://github.com/yale-swe/pfrn-example-app"
                ></DocContent>
                <DocContent
                    docName="Flaskr: An App Built in Flask"
                    docDesc="This is the blog app built in the Flask tutorial above."
                    docImgSrc={undefined}
                    docUrl="https://github.com/pallets/flask/tree/2.1.3/examples/tutorial"
                ></DocContent>
                <div className={styles['vrgap']}></div>

                {/* <h2>Documentation</h2>
                <DocContent
                    docName=""
                    docDesc=""
                    docImgSrc={undefined}
                    docUrl=""
                ></DocContent>
                <div className={styles['vrgap']}></div>

                <h2>Useful Resources</h2> */}
            </div>
        </div>
    );
};

export default Docs;
