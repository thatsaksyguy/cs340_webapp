function OrdersPage() {
    const orderData = [
      {
        orderID: 101,
        orderDate: "2024-11-01",
        customerID: 1,
        totalPrice: 150.0,
      },
      {
        orderID: 102,
        orderDate: "2024-11-03",
        customerID: 2,
        totalPrice: 250.0,
      },
    ];

    return (
      <div>
        <h1>Orders</h1>
        <h2>Browse Orders</h2>
        <table border="1">
          <thead>
            <tr>
              <th>
                <button>New</button>
              </th>
              <th></th>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Customer ID</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order) => (
              <tr key={order.orderID}>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
                <td>{order.orderID}</td>
                <td>{order.orderDate}</td>
                <td>{order.customerID}</td>
                <td>{order.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="form-group">
        <form>
          <h2>Add Order</h2>
          <label htmlFor="orderID">Order ID: </label>
          <input type="text" id="orderID" name="orderID" required />
          <> </>
          <label htmlFor="orderDate">Order Date: </label>
          <input type="text" id="orderDate" name="orderDate" required />
          <> </>
          <label htmlFor="customerID">Customer ID: </label>
          <input type="text" id="customerID" name="customerID" required />
          <> </>
          <label htmlFor="totalPrice">Total Price: </label>
          <input
            type="text"
            id="totalPrice"
            name="totalPrice"
            required
          />

          <button type="submit">Add</button>
        </form>

        <form>
          <h2>Update Order</h2>
          <label htmlFor="orderID">Order ID: </label>
          <input type="text" id="orderID" name="orderID"  />
          <> </>
          <label htmlFor="orderDate">Order Date: </label>
          <input type="text" id="orderDate" name="orderDate"  />
          <> </>
          <label htmlFor="customerID">Customer ID: </label>
          <input type="text" id="customerID" name="customerID"  />
          <> </>
          <label htmlFor="totalPrice">Total Price: </label>
          <input
            type="text"
            id="totalPrice"
            name="totalPrice"

          />

          <button type="submit">Update</button>
        </form>

        <form>
          <h2>Delete Order</h2>
          <label htmlFor="orderID">Order ID: </label>
          <input type="text" id="orderID" name="orderID"  />
          <> </>
          <label htmlFor="orderDate">Order Date: </label>
          <input type="text" id="orderDate" name="orderDate"  />
          <> </>
          <label htmlFor="customerID">Customer ID: </label>
          <input type="text" id="customerID" name="customerID"  />
          <> </>
          <label htmlFor="totalPrice">Total Price: </label>
          <input
            type="text"
            id="totalPrice"
            name="totalPrice"

          />

          <button type="submit">Delete</button>
          <> </>
        </form>
      </div>
      </div>
    );
  }

  export default OrdersPage;