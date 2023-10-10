import React from 'react';
//import { Modal } from 'antd';

const HelloReact: React.FC = () => {
    return(
        <div style={{ position: 'absolute', top: '0', left: '0' }}>

            <p style={{
                fontSize: '14px',
                textAlign: 'left',
                margin: '0',
                backgroundImage: 'linear-gradient(to right, #187568, #25b7c4)',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
            }}>
                
           <b>Hello, React!</b>

           </p>
        </div>
    );

};

export default HelloReact;

