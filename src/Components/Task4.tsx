import React from 'react';
import { Button, Form, Input, Modal } from 'antd';
import {Customer} from './Types'
import { Task4ModalProps } from './Types';


const Task4: React.FC<Task4ModalProps> = ({ onFormSubmit, open, onCancel, addCustomerToTable }) => {
  const [form] = Form.useForm();

  const handleFormSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        
        // Handling form submission
        onFormSubmit(values);

        // Creating a new customer object
        const newCustomer: Customer = {
          id: Math.floor(Math.random() * 1000), // Generating a random ID
          isFollowing: false, // Setting the default value for isFollowing
          ...values,
        };

        // Adding the new customer to the table
        addCustomerToTable(newCustomer);

        // Resetting the form after submission
        form.resetFields();

        onCancel(); // Closing the modal
      })
      .catch((error) => {
        // Handling form validation errors
      });
  };

  return (
    <Modal title="Create Customer" open={open} onCancel={onCancel} footer={null}>
      <Form form={form} onFinish={handleFormSubmit}>
        <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter a name' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="age" label="Age" rules={[{ required: true, message: 'Please enter your age' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="contact"
          label="Contact"
          rules={[{ required: true, message: 'Please enter your contact' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true, message: 'Please enter an address' }]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          Create
        </Button>
      </Form>
    </Modal>
  );
};

export default Task4;