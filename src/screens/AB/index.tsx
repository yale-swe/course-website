// import { useEffect } from 'react';
import React, { useState } from 'react';

import NavigationBar from '../../components/NavigationBar';
import styles from './styles.module.scss';

// import NavigationBar from '../../components/NavigationBar';
// import StaffContent from '../../components/StaffContent';
// import styles from './styles.module.scss';

// const AB = () => {
//     useEffect(() => {
//         window.location.href = 'https://misc-dev.onrender.com/ab/';
//     }, []);

//     return (
//         <div>
//             <h2>Contact</h2>
//         </div>
//     );
// };

const AB = () => {
    const [text, setText] = useState('Enter the URL and wait for result');
    const [value, setValue] = useState('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }

    const handleChangeText = () => {
        setText('Checking...');

        console.log(value);
        const url = 'https://misc-dev.onrender.com/check/';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: "resourceURL=google.com"
            body: JSON.stringify({
                resourceURL: value
            })
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.result) {
                    setText(data.result);
                } // Do something with the parsed data
            })
            .catch(error => setText('error: ' + error));
    };

    return (
        <div className={styles['page-container']}>
            <NavigationBar />
            <div className={styles['content-container']}>
                {/* <h1>About</h1> */}
                <div style={{ marginBottom: '30px' }}></div>
                <p style={{ marginBottom: '0px', textAlign: 'center' }}>
                    {text}
                </p>
                <div style={{ marginBottom: '30px' }}></div>
                <input type="text" value={value} onChange={handleChange} />
                <div style={{ marginBottom: '10px' }}></div>
                <button onClick={handleChangeText}>Check URL</button>
            </div>
        </div>
    );
};

export default AB;
