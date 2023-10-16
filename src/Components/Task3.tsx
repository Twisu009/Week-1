import React from "react";
import { Button } from "antd";

const Task3: React.FC<{
  isFollow: boolean;
  setIsFollow: React.Dispatch<boolean>;
  handleFollowChange: () => void;
}> = ({ isFollow, setIsFollow, handleFollowChange }) => {
  // Defining a state variable to check whether the user is following or not

  // Function to toggle the follow state of the user (Whether the user is following or not)
  const toggleFollow = () => {
    setIsFollow(!isFollow);
    handleFollowChange();
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Button type="primary" className="follow-button" onClick={toggleFollow}>
        {isFollow ? "FOLLOWING" : "FOLLOW"}
      </Button>
    </div>
  );
};

export default Task3;