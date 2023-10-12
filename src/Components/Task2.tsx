import { useState } from "react";
import { Customer } from "./Types";
import ReuseableModal from "../Commons/ReuseableModal";
import { Table } from "antd";
import "../App.css";

function Task2() {
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
      age: 28,
      contact: "010-234-5432",
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
      id: 4,
      name: "Fwisu Fu",
      age: 24,
      contact: "033-099-9816",
      address: "KT 410 St",
      isFollowing: false,
    },
  ];

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
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

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
        onRow={(record) => ({
          onClick: () => handleTableRowClick(record),
        })}
      />
      {selectedCustomer && (
        <ReuseableModal
          customer={selectedCustomer}
          handleFollowChange={handleFollowChange}
          open={open}
          onCancel={handleCloseModal}
        />
      )}
    </div>
  );
}

export default Task2;