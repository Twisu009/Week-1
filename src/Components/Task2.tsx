import { useState} from "react";
import { Customer} from "./Types";
import ReuseableModal from "../Commons/ReuseableModal";
import { Table, Button, Form, Input, Modal} from "antd";
import "../App.css";
import Task4 from "./Task4"; //inporting task4 component


function Task2() {
  // adding stste variables for isEdit and editCustomer
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); //manages edit modal visibility
  //const [editCustomerData, setEditCustomerData] = useState<Customer | null>(null); //stores customer data to edit
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

  const addCustomerToTable = (newCustomer: Customer) => {

    setAllCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
  }


  // State to manage the selected customer and modal visibility
  const [selectedCustomer, setselectedCustomer] = useState<Customer | null>(
    null
  );
  const [allCustomers, setAllCustomers] = useState<Customer[]>(Customers);
  const [open, setOpen] = useState(false);

  // Function to handle row click and open the modal
  const handleTableRowClick = (customer: Customer) => {
    

    setselectedCustomer(customer);
    setOpen(true); // Shows the modal
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
//---Edit Info--- | --Task-4--//
  const handleEdit = (id: number) => {
    
    const customerToEdit = allCustomers.find((customer) => customer.id === id);
  
    if (customerToEdit) {
      //setEditCustomerData(customerToEdit); // Stores customer data to edit
      editForm.setFieldsValue(customerToEdit)
      setIsEditModalOpen(true); // Opens edit modal
    }
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false); //closes
  };
  
  const handleSaveEdit = (values: Customer) => {
    console.log("values", values)
    setIsEditModalOpen(false); // Closess the modal after saving
    setAllCustomers((prevCustomers) =>
    prevCustomers.map((customer) =>
      customer.id === values.id ? { ...customer, ...values } : customer
    )
  );
  };

//Creating a state ti manage the customer modal visibility
  const [isCreateCustomerModalOpen, setIsCreateCustomerModalOpen] = useState(false);

  const openCreateCustomerModal = () => {
    setIsCreateCustomerModalOpen(true);
  };

  const closeCreateCustomerModal = () => {
    setIsCreateCustomerModalOpen(false);
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

    //Delet action 
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
                  color: "#564c4d",
                  textDecoration: "underline",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
              >Edit Customer
              </a>

              <a
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(record.id)}}
                style={{
                  color: "black",
                  textDecoration: "underline",
                  cursor: "pointer",
                  transition: "color 0.3s",
                  marginLeft: 15,
                }}
                >Delete Customer</a>

              </span>
            );
        },
      },
  ];

    //Task-4
    interface FormData {
      name: string;
      age: number;
      contact: string;
      address: string;
    };
  
    const handleTask4FormSubmit = (data: FormData) => {
  
    }; 

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

      <Task4 
      onFormSubmit={handleTask4FormSubmit} 
      open={isCreateCustomerModalOpen} 
      onCancel={closeCreateCustomerModal} 
      addCustomerToTable={addCustomerToTable}
      />

    <Button type="primary" onClick={openCreateCustomerModal}
      style={{backgroundColor: 'white', position:'absolute', top: 10, right: 10, color: 'black'}}
      
      > Create Customer</Button>

      {/* Edit Customer modal */}
      <Modal
        title="Edit Customer"
        open={isEditModalOpen}
        onCancel={closeEditModal}
        footer={[
          <Button key="cancel" onClick={closeEditModal}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={ (e) =>editForm.submit()}>
            Save
          </Button>,
        ]}
      >
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
}

export default Task2;