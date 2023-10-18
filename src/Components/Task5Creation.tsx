import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Task5Creation = () => {
  const navigate = useNavigate();

  const [newCustomer, setNewCustomer] = useState({
    name: '',
    age: 0,
    contact: '',
    address: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleCreateCustomer = () => {
   

    // Redirects to the MAIN TABLE (task2 table) page
    navigate('/', { state: { newCustomer: newCustomer } });
  };

  return (
    <div className={'container'}>
      <h1>Create New Customer</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newCustomer.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={newCustomer.age}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={newCustomer.contact}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={newCustomer.address}
            onChange={handleInputChange}
          />
        </label>

        <div className="saveButton" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button type="button" onClick={handleCreateCustomer}>
          Create
        </button>

        <a className="goBack" type="primary" onClick={() => navigate('/')}>
        &#x21E6; Go Back</a>

        </div>

      </form>
    </div>
  );
};

export default Task5Creation;
