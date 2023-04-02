// import { useEffect } from 'react';
import React, { useState } from 'react';

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
    const [text, setText] = useState('Hello World');

    const handleChangeText = () => {
        setText('Checking...');

        const url = 'https://misc-dev.onrender.com/check/';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                resourceURL: 'google.com'
            })
        };

        fetch(url, options)
            // .then(response => setText(response.text()))
            // .then(json => setText(json))
            .catch(error => setText('error: ' + error));
    };

    return (
        <div>
            <p>{text}</p>
            <button onClick={handleChangeText}>Check</button>
        </div>
    );
};

export default AB;
