import React from 'react';
import { Modal } from 'antd';
import { Types } from '../Components/Types';
import Task3 from '../Components/Task3';

const ReuseableModal: React.FC<Types> = (props) => {
  const { name, age, contact, address } = props.customer;

  return (
    <Modal
      title="CUSTOMER DETAILS"
      open={props.open}
      onCancel={props.onCancel}
      footer={null} // removes cancel and OK button from the popup
    >
      <div style={{ marginBottom: '16px' }}>
        <p>
          <strong>Name:</strong> {name}
        </p>
      </div>
      <div style={{ marginBottom: '16px' }}>
        <p>
          <strong>Age:</strong> {age}
        </p>
      </div>
      <div style={{ marginBottom: '16px' }}>
        <p>
          <strong>Contact Number:</strong> {contact}
        </p>
      </div>
      <div>
        <p>
          <strong>Address:</strong> {address}
        </p>
      </div>
    <Task3/>
    </Modal>
  );
};

export default ReuseableModal;
