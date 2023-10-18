import React from 'react';
import { useTheme} from './Task7ThemeContext';
import { Button } from 'antd';


const ThemeToggleButton: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button type="primary" onClick={() => toggleTheme()}
          style={{
            backgroundColor: 'transparent', 
            position:'absolute', 
            top: 10, 
            right: 330, 
            borderColor: 'white',
            borderWidth: '0px',
            transition: 'color 0.3s, borderWidth 0.3s'
          }}
          onMouseOver={(e) => {e.currentTarget.style.color = 'white'; e.currentTarget.style.borderWidth = '1px';}}
          onMouseOut={(e) => {e.currentTarget.style.color = '	#A9A9A9'; e.currentTarget.style.borderWidth = '0px';}}
        > Change Mode</Button>
  );
};

export default ThemeToggleButton;
