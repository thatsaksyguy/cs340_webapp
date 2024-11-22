"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

function CustomersPage() {
  const [customers, setCustomers] = useState([{
    customerID: "",
    name: "",
    email: "",
    address: "",
    phone: "",
  }]);
  const [addName, setAddName] = useState("");
  const [addEmail, setAddEmail] = useState("");
  const [addAddress, setAddAddress] = useState("");
  const [addPhone, setAddPhone] = useState("");

  const [updateCustomerID, setUpdateCustomerID] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [updateAddress, setUpdateAddress] = useState("");
  const [updatePhone, setUpdatePhone] = useState("");

  const [deleteCustomerID, setDeleteCustomerID] = useState("");

  useEffect(() => {
    getCustomers().then((data) => setCustomers(data));
  }, [])

  const getCustomers = async () => {
    // const response = await axios.get("api url");
    // return response.data;
    return customers
  };
  
  const addCustomer = async () => {
    // const response = await axios.post("api url", {
    //   name: addName,
    //   email: addEmail,
    //   address: addAddress,
    //   phone: addPhone,
    // });

    getCustomers().then((data) => setCustomers(data));

    setAddName("");
    setAddEmail("");
    setAddAddress("");
    setAddPhone("");
  };

  const updateCustomer = async () => {
    // const response = await axios.put("api url", {
    //   customerID: updateCustomerID,
    //   name: updateName,
    //   email: updateEmail,
    //   address: updateAddress,
    //   phone: updatePhone,
    // });

    getCustomers().then((data) => setCustomers(data));

    setUpdateCustomerID("");
    setUpdateName("");
    setUpdateEmail("");
    setUpdateAddress("");
    setUpdatePhone("");
  };

  const deleteCustomer = async () => {
    // const response = await axios.delete("api url", {
    //   data: { customerID: deleteCustomerID },
    // });
    getCustomers().then((data) => setCustomers(data));

    setDeleteCustomerID("");
  };

  return (
    <div>
      <h1>Customers</h1>
      <h2>Browse Customers</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.customerID}>
              <td>{customer.customerID}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.address}</td>
              <td>{customer.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="form-group">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addCustomer();
          }}
        >
          <h2>Add Customer</h2>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={addName}
            onChange={(e) => setAddName(e.target.value)}
            required
          />
          <> </>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={addEmail}
            onChange={(e) => setAddEmail(e.target.value)}
            placeholder="Leave blank if N/A"
          />
          <> </>
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            name="address"
            value={addAddress}
            onChange={(e) => setAddAddress(e.target.value)}
            placeholder="Leave blank if N/A"
          />
          <> </>
          <label htmlFor="phone">Phone: </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={addPhone}
            onChange={(e) => setAddPhone(e.target.value)}
            required
          />
          <button type="submit">Add</button>
        </form>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateCustomer();
          }}
        >
          <h2>Update Customer</h2>
          <label htmlFor="customerID">Customer ID: </label>
          <input
            type="text"
            id="id"
            name="id"
            value={updateCustomerID}
            onChange={(e) => setUpdateCustomerID(e.target.value)}
          />
          <> </>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
          />
          <> </>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={updateEmail}
            onChange={(e) => setUpdateEmail(e.target.value)}
          />
          <> </>
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            name="address"
            value={updateAddress}
            onChange={(e) => setUpdateAddress(e.target.value)}
          />
          <> </>
          <label htmlFor="phone">Phone: </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={updatePhone}
            onChange={(e) => setUpdatePhone(e.target.value)}
          />

          <button type="submit">Update</button>
        </form>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            deleteCustomer();
          }}
        >
          <h2>Delete Customer</h2>
          <label htmlFor="customerID">Customer ID: </label>
          <input
            type="text"
            id="id"
            name="id"
            value={deleteCustomerID}
            onChange={(e) => setDeleteCustomerID(e.target.value)}
          />
          <> </>
          <button>Delete</button>
          <> </>
        </form>
      </div>
    </div>
  );
}

export default CustomersPage;
