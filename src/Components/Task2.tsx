import { useState, useEffect} from "react";
import { Customer} from "./Types";
import ReuseableModal from "../Commons/ReuseableModal";
import { Table, Button, Form, Input, Modal} from "antd";
import "../App.css";
import { useNavigate, useLocation} from "react-router-dom";



const Task2 = ()  => {

//Adds new customer to the table
const location = useLocation();
const newCustomer = location.state?.newCustomer;
const editedCustomer = location.state?.editedCustomer;

//Customer creation
useEffect(() => {
  if (newCustomer) {
    setAllCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
  }
}, [newCustomer]);


// Customer edit
useEffect(() => {
  if (editedCustomer) {
    setAllCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === editedCustomer.id ? editedCustomer : customer
      )
    );
  }
}, [editedCustomer]);


  const [editForm] = Form.useForm(); // Creates a form for editing customer data


  // Defining dummy data for customers
  let Customers = [
    {
      id: 1,
      name: "Baku Pi",
      age: 98,
      contact: "030-099-9816",
      address: "CH 410 St",
      isFollowing: false,
    },
    {
      id: 2,
      name: "Nisu Mi",
      age: 800,
      contact: "060-602-9901",
      address: "PK 400 St",
      isFollowing: false,
    },
    {
      id: 3,
      name: "Sa de Vinci",
      age: 42,
      contact: "010-234-2345",
      address: "GM 390 St",
      isFollowing: false,
    },
    {
      id: 4,
      name: "Metal de X",
      age: 26,
      contact: "010-234-3456",
      address: "GA 395 St",
      isFollowing: false,
    },
    {
      id: 5,
      name: "Fwisu Fu",
      age: 24,
      contact: "033-099-9816",
      address: "KT 410 St",
      isFollowing: false,
    },
  ];  
 

  // State manages the selected customer and modal visibility
  const [selectedCustomer, setselectedCustomer] = useState<Customer | null>(null);
  const [allCustomers, setAllCustomers] = useState<Customer[]>(Customers);
  const [open, setOpen] = useState(false);


  // Function to handle row click and open the modal
  const handleTableRowClick = (customer: Customer) => {
    setselectedCustomer(customer);
    setOpen(true);// Shows the modal
  };


  // Function to close the modal
  const handleCloseModal = () => {
    setOpen(false); // Hides the modal
  };

//------------------------Additional self task-4------------------------------------//
  //Function to handle customer deletion
  const handleDelete = (id: number) => {

    //Filters out the customer with specified id
    const UpdatedCustomers = allCustomers.filter((customer) => customer.id !== id);
    setAllCustomers(UpdatedCustomers);
  }; 

  
//---Edit Info--- | --Task-4--and Task-5--//
  const handleEdit = (id: number) => {
    navigate(`/`);    
    const customerToEdit = allCustomers.find((customer) => customer.id === id);
  
    if (customerToEdit) {
      navigate('/customer-profiles', { state: { customerToEdit: customerToEdit, customerProfiles: allCustomers } });
    }    
  };

 
  //--- Task 5
  const navigate = useNavigate();
  const handleSaveEdit = (values: Customer) =>{ setAllCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === values.id ? { ...customer, ...values } : customer
      )
    );
      
      navigate('/customer-profiles');
    };

  // Columns for the Antd Table
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Contact Number",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",   
    },

    //--Self Delet action 
      {
        title: "Actions",
      key: "action",
      render: (record: Customer) => {
        
          return (
            <span> 
              <a
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit(record.id)}}

                  style={{

                  textDecoration: "underline",
                  cursor: "pointer",
                  transition: "color 0.3s",
                  marginLeft: 15,
                  backgroundImage: 'linear-gradient(to right, #21b570, #0dc1a7)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  opacity:5
                }}
              >Edit Customer </a>

              <a
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(record.id)}}
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    transition: "color 0.3s",
                    marginLeft: 15,
                    backgroundImage: 'linear-gradient(to right, #0dc1a7, #21b570)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    opacity:5
                  }}
                >Delete Customer</a>

              </span>
            );
        },
      },
  ];

  //--Task2 Follow
  const handleFollowChange = (id: number) => {
    const updatedCustomer = allCustomers.map((value) => {
      if (value.id === id) {
        return { ...value, isFollowing: !value.isFollowing };
      } else {
        return { ...value };
      }
    });
    setAllCustomers(updatedCustomer);
  };

  return (
    <div className="App">

  <div>
    </div>

      
      <b>
        <h1>CUSTOMER PROFILE</h1>
      </b>
      <Table

        columns={columns}
        dataSource={allCustomers}
        pagination={false}
        onRow={(record: Customer) => ({
          onClick: () => handleTableRowClick(record),
        })}
        className="tbl-content"
      />
      {selectedCustomer && (
        <ReuseableModal
          customer={selectedCustomer}
          handleFollowChange={handleFollowChange}
          open={open}
          onCancel={handleCloseModal}
        />
      )}

    <Button type="primary" onClick={() => navigate('/create-customer')}
      style={{
        backgroundColor: 'white', 
        position:'absolute', 
        top: 10, 
        right: 10, 
        color: 'black',
        borderColor: 'black',
        borderWidth: '1px',
        transition: 'background-color 0.3s'
      }}

      onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}


    > Create Customer</Button>

    <Button type="primary" onClick={() => navigate('/Counter')}
          style={{
            backgroundColor: 'transparent', 
            position:'absolute', 
            top: 10, 
            right: 180, 
            borderColor: 'white',
            borderWidth: '0px',
            transition: 'color 0.3s, borderWidth 0.3s'
          }}
          onMouseOver={(e) => {e.currentTarget.style.color = 'white'; e.currentTarget.style.borderWidth = '1px';}}
          onMouseOut={(e) => {e.currentTarget.style.color = '	#A9A9A9'; e.currentTarget.style.borderWidth = '0px';}}
        > Check Counter</Button>


      <Modal>
        <Form form={editForm} onFinish={handleSaveEdit}>

          {/* Creatinngg form fields for editing customer data */}
         <Form.Item name="id" label="Id" hidden>  {/*hides id */}
            <Input />
          </Form.Item>
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
          <Form.Item name="age" label="Age">
            <Input />
          </Form.Item>
          <Form.Item name="contact" label="Contact">
            <Input />
          </Form.Item>
          <Form.Item name="address" label="Address">
            <Input />
          </Form.Item>
        </Form>
      </Modal>     
    </div>
  );
      
};

export default Task2;