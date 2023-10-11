import { useState } from 'react';
import './App.css';
import HelloReact from './HelloReact';
import CustomerProfile from './CustomerProfile';

function App() {

  //defining dummy datas
  const Customers = [
    
    { 
    id: 1,
    name: "Baku Pi",
    age: 98,
    contact: "030-099-9816",
    address: "CH 410 St",
  },

  {  
    id: 2,
    name: "Nisu Mi",
    age: 28,
    contact: "010-234-5432",
    address: "PK 400 St",
  },

  {  
    id: 3,
    name: "Sa de Vinci",
    age: 40,
    contact: "010-234-2345",
    address: "GM 390 St",
  },
  
  {  
    id: 4,
    name: "Fwisu Fu",
    age: 24,
    contact: "033-099-9816",
    address: "KT 410 St",
  },
  

];

//State to manage the selected customer and modal visibility
const [selectedCustomer, setselectedCustomer]= useState<any | null>(null);
const [open, setOpen] = useState(false);

//Function to handle row click and open the modal
const handleTableRowClick = (customer: any) => {
  setselectedCustomer(customer);
  setOpen(true); //sHOWS the modal
};

//Function to close the modal
const handleCloseModal = () => {
  setOpen(false); //Hides the modal 
};


  return (

    <div className="App">

      <b><h1>CUSTOMER PROFILE</h1></b>

      <table>

        <thead>
          <tr>   
            <th>Name</th>
            <th>Age</th>
            <th>Contact Number</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {Customers.map((customer) => (
            <tr 
            key= {customer.id} className='table-row'
            onClick={() => handleTableRowClick(customer)} //handles row click event
            >

              <td>{customer.name}</td>
              <td>{customer.age}</td>
              <td>{customer.contact}</td>
              <td>{customer.address}</td>
            </tr>
          ))}
        </tbody>

      </table>

      {selectedCustomer && (
      <CustomerProfile
        customer={selectedCustomer} 
        open={open} // To control modal visibility
        onCancel={handleCloseModal}
        /> 
      )}

        <p>
          <HelloReact/>
        </p>

    </div>

  );
}

export default App;
