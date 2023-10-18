import { useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import '../App.css';

const Task5Home = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const customerToEdit = location.state?.customerToEdit;
  
    
    const [editedCustomer, setEditedCustomer] = useState(customerToEdit || {});
  
    // Handlse changes in the edit formz    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setEditedCustomer({
        ...editedCustomer,
        [name]: value,
      });
    };
    const handleSaveEdit = () => {
    
        navigate('/', { state: {  editedCustomer },  });
      };

    return (
        <div className='Container'>
          <h1>Edit Customer</h1>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={editedCustomer.name}
                onChange={handleInputChange}
              />
                </label>
                <label>
                Age:
                <input
                    type="text"
                    name="age"
                    value={editedCustomer.age}
                    onChange={handleInputChange}
                />
                </label>
                <label>
                Contact:
                <input
                    type="text"
                    name="contact"
                    value={editedCustomer.contact}
                    onChange={handleInputChange}
                />
                </label>
                <label>
                Address:
                <input
                    type="text"
                    name="address"
                    value={editedCustomer.address}
                    onChange={handleInputChange}
                />
                </label>
                
                <div className="saveButton" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="button" onClick={handleSaveEdit}>
                Save
              </button>
              <a className="goBack" type="primary" onClick={() => navigate('/')}>
                &#x21E6; Go Back
              </a>
            </div>      
                
            </form>
            </div>
      );
    };

export default Task5Home;