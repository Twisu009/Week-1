import React from 'react';

const HelloReact: React.FC = () => {
 
    return(
        <div style={{ position: 'absolute', top: '0', left: '0' }}>

            <p style={{
                fontSize: '18px',
                textAlign: 'left',
                margin: '0',
                backgroundImage: 'linear-gradient(to right, #21b570, #0dc1a7)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                opacity:5
            }}>
                
           <b>Hello, React!</b>

           </p>
        </div>
    );

};

export default HelloReact;

