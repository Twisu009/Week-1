import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { Types } from "../Components/Types";
import Task3 from "../Components/Task3";

const ReuseableModal: React.FC<Types> = (props) => {
  const { id, name, age, contact, address, isFollowing } = props.customer;

  // Defining a state variable to check whether the user is following or not
  const [isFollow, setIsFollow] = useState(isFollowing);

  useEffect(() => {
    setIsFollow(isFollowing);
  }, [props.customer, isFollowing]);

  return (
    <Modal
      title="CUSTOMER DETAILS"
      open={props.open}
      onCancel={props.onCancel}
      footer={null} // removes cancel and OK button from the popup
    >
      <div style={{ marginBottom: "16px" }}>
        <p>
          <strong>Name:</strong> {name}
        </p>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <p>
          <strong>Age:</strong> {age}
        </p>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <p>
          <strong>Contact Number:</strong> {contact}
        </p>
      </div>
      <div>
        <p>
          <strong>Address:</strong> {address}
        </p>
      </div>
      <Task3
        isFollow={isFollow}
        setIsFollow={setIsFollow}
        handleFollowChange={() => props.handleFollowChange(id)}
      />
    </Modal>
  );
};

export default ReuseableModal;