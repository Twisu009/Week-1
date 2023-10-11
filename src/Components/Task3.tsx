import React, { useState } from 'react';
import { Button } from 'antd';


const Task3: React.FC = () => {
  // Defining a state variable to check whether the user is following or not
  const [isFollowing, setIsFollowing] = useState(false);

  // Function to toggle the follow state of the user (Whether the user is following or not)
  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        type="primary"
        className="follow-button"
        onClick={toggleFollow}
      >
        {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
      </Button>
    </div>
  );
};

export default Task3;
