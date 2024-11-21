function CustomersPage() {
    const customerData = [
      {
        customerID: 1,
        name: "Hermione Granger",
        email: "hergranger@hogwarts.com",
        address: "123 Godric's Hollow St.",
        phone: "222-222-2222",
      },
      {
        customerID: 2,
        name: "Draco Malfoy",
        email: "dmalfoy@deatheater.com",
        address: "456 Malfoy Rd.",
        phone: "111-111-1111",
      },
    ];

    return (
      <div>
        <h1>Customers</h1>
        <h2>Browse Customers</h2>
        <table border="1">
          <thead>
            <tr>
              <th>
                <button>New</button>
              </th>
              <th></th>
              <th>Customer ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {customerData.map((customer) => (
              <tr key={customer.customerID}>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
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
        <form>
          <h2>Add Customer</h2>
          <label htmlFor="customerID">Customer ID: </label>
          <input type="text" id="id" name="id" required />
          <> </>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" required />
          <> </>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" placeholder="Leave blank if N/A" />
          <> </>
          <label htmlFor="address">Address: </label>
          <input type="text" id="address" name="address" placeholder="Leave blank if N/A" />
          <> </>
          <label htmlFor="phone">Phone: </label>
          <input type="text" id="phone" name="phone" required />

          <button type="submit">Add</button>
        </form>

        <form>
        <h2>Update Customer</h2>
          <label htmlFor="customerID">Customer ID: </label>
          <input type="text" id="id" name="id"  />
          <> </>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name"  />
          <> </>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email"  />
          <> </>
          <label htmlFor="address">Address: </label>
          <input type="text" id="address" name="address" />
          <> </>
          <label htmlFor="phone">Phone: </label>
          <input type="text" id="phone" name="phone" />

          <button type="submit">Update</button>
        </form>


        <form>
        <h2>Delete Customer</h2>
        <label htmlFor="customerID">Customer ID: </label>
          <input type="text" id="id" name="id"  />
          <> </>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name"  />
          <> </>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" />
          <> </>
          <label htmlFor="address">Address: </label>
          <input type="text" id="address" name="address" />
          <> </>
          <label htmlFor="phone">Phone: </label>
          <input type="text" id="phone" name="phone" />

          <button>Delete</button>
          <> </>
        </form>
        </div>
      </div>
    );
  }

  export default CustomersPage;