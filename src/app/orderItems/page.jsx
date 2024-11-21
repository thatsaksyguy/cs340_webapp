function OrderItemsPage() {
    const orderData = [
      {
        orderItemID: 1001,
        orderID: 101,

        SpellID: 2,
        Quantity: 3,
        Price: 150.0,
      },
      {
        orderItemID: 1002,
        orderID: 102,
        WandID: 2,

        Quantity: 4,
        Price: 250.0,
      },
    ];

    return (
      <div>
        <h1>Order Items</h1>
        <h2>Browse Order Items</h2>
        <table border="1">
          <thead>
            <tr>
              <th>
                <button>New</button>
              </th>
              <th></th>
              <th>Order Item ID</th>
              <th>Order ID</th>
              <th>Wand ID</th>
              <th>Spell ID</th>
              <th>Quantity</th>
              <th>Price</th>
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
                <td>{order.orderItemID}</td>
                <td>{order.orderID}</td>
                <td>{order.WandID}</td>
                <td>{order.SpellID}</td>
                <td>{order.Quantity}</td>
                <td>{order.Price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="form-group">
        <form>
          <h2>Add Order Item</h2>
          <label htmlFor="orderItemID">Order Item ID: </label>
          <input type="text" id="orderID" name="orderID" required />
          <> </>
          <label htmlFor="orderID">Order ID: </label>
          <input type="text" id="orderDate" name="orderDate" required />
          <> </>
          <label htmlFor="wandID">Wand ID: </label>
          <input type="text" id="wandID" name="wandID" placeholder="Only add one item type (wand or spell)" />
          <> </>
          <label htmlFor="spellID">Spell ID: </label>
          <input type="text" id="spellID" name="spellID" placeholder="Only add one item type (wand or spell)" />
          <> </>
          <label htmlFor="quantity">Quantity: </label>
          <input type="text" id="quantity" name="quantity" required />
          <> </>
          <label htmlFor="Price">Price: </label>
          <input type="text" id="price" name="price" required />

          <button type="submit">Add</button>
        </form>

        <form>
          <h2>Update Order Item</h2>
          <label htmlFor="orderItemID">Order Item ID: </label>
          <input type="text" id="orderID" name="orderID" required />
          <> </>
          <label htmlFor="orderID">Order ID: </label>
          <input type="text" id="orderDate" name="orderDate" required />
          <> </>
          <label htmlFor="wandID">Wand ID: </label>
          <input type="text" id="wandID" name="wandID" placeholder="Only update one item type (wand or spell)" />
          <> </>
          <label htmlFor="spellID">Spell ID: </label>
          <input type="text" id="spellID" name="spellID" placeholder="Only update one item type (wand or spell)" />
          <> </>
          <label htmlFor="quantity">Quantity: </label>
          <input type="text" id="quantity" name="quantity" required />
          <> </>
          <label htmlFor="Price">Price: </label>
          <input type="text" id="price" name="price" required />

          <button type="submit">Update</button>
        </form>

        <form>
          <h2>Delete Order Item</h2>
          <label htmlFor="orderItemID">Order Item ID: </label>
          <input type="text" id="orderID" name="orderID" required />
          <> </>
          <label htmlFor="orderID">Order ID: </label>
          <input type="text" id="orderDate" name="orderDate" required />
          <> </>
          <label htmlFor="wandID">Wand ID: </label>
          <input type="text" id="wandID" name="wandID" />
          <> </>
          <label htmlFor="spellID">Spell ID: </label>
          <input type="text" id="spellID" name="spellID" />
          <> </>
          <label htmlFor="quantity">Quantity: </label>
          <input type="text" id="quantity" name="quantity" required />
          <> </>
          <label htmlFor="Price">Price: </label>
          <input type="text" id="price" name="price" required />

          <button type="submit">Delete</button>
          <> </>
        </form>
      </div>
      </div>
    );
  }

  export default OrderItemsPage;