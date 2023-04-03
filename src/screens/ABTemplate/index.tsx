// import { useEffect } from 'react';
// import React from 'react';

const ABTemplate = () => {
    const rand = Math.floor(Math.random() * 3) + 1;
    // const rand = 1;
    const html =
        '<!DOCTYPE html><html><head><title>Simple HTML Page</title></head><body><a name="abtest" href="/abc/?v=v' +
        rand.toString() +
        '"><button>Go to Example.com</button></a></body></html>';
    // const html = '<!DOCTYPE html><html><head><title>Simple HTML Page</title></head><body><a name="abtest" href="/abc/?v=v1"><button>Go to Example.com</button></a></body></html>';
    return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export default ABTemplate;
