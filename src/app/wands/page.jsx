function WandsPage() {
    const wandData = [
      {
        id: 1,
        core: "Phoenix Feather",
        wood: "Birch",
        length: 15,
        price: 99,
        totalWandQuantity: 1000,
      },
      {
        id: 2,
        core: "Unicorn Hair",
        wood: "Oak",
        length: 11,
        price: 999,
        totalWandQuantity: 1,
      },
    ];
    return (
      <div>
        <h1>Wands</h1>
        <h2>Browse Wands</h2>
        <table border="1">
          <thead>
            <tr>
              <th>
                <button>New</button>
              </th>
              <th></th>
              <th>Wand ID</th>
              <th>Core</th>
              <th>Wood</th>
              <th>Length</th>
              <th>Price</th>
              <th>Total Wand Quantity</th>
            </tr>
          </thead>
          <tbody>
            {wandData.map((wand) => (
              <tr key={wand.id}>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
                <td>{wand.id}</td>
                <td>{wand.core}</td>
                <td>{wand.wood}</td>
                <td>{wand.length}</td>
                <td>{wand.price}</td>
                <td>{wand.totalWandQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="form-group">
        <form>
          <h2>Add Wand</h2>
          <label htmlFor="id">Wand ID: </label>
          <input type="text" id="length" name="length" required/>
          <> </>

          <label htmlFor="length">Length: </label>
          <input type="text" id="length" name="length" required />
          <> </>
          <label htmlFor="price">Price: </label>
          <input type="text" id="price" name="price" required />
          <> </>

          <label htmlFor="core">Core: </label>
          <select id="core" name="core" required>
            <option value="none">None</option>
            <option value="unicornHair">Unicorn Hair</option>
            <option value="phoenixFeather">Phoenix Feather</option>
          </select>

          <label htmlFor="wood">Wood: </label>
          <input type="text" id="wood" name="wood" required />
          <> </>

          <label htmlFor="totalWandQuantity">Total Wand Quantity: </label>
          <input
            type="text"
            id="totalWandQuantity"
            name="totalWandQuantity"
            required
          />
          <button type="submit">Add</button>
        </form>

        <form>
          <h2>Update Wand</h2>
          <label htmlFor="id">Wand ID: </label>
          <input type="text" id="length" name="length" />
          <> </>

          <label htmlFor="length">Length: </label>
          <input type="text" id="length" name="length" required />
          <> </>
          <label htmlFor="price">Price: </label>
          <input type="text" id="price" name="price" required />
          <> </>

          <label htmlFor="core">Core: </label>
          <select id="core" name="core">
            <option value="none">None</option>
            <option value="unicornHair">Unicorn Hair</option>
            <option value="phoenixFeather">Phoenix Feather</option>
          </select>

          <label htmlFor="wood">Wood: </label>
          <input type="text" id="wood" name="wood" required />
          <> </>

          <label htmlFor="totalWandQuantity">Total Wand Quantity: </label>
          <input
            type="text"
            id="totalWandQuantity"
            name="totalWandQuantity"
            required
          />
          <button type="submit">Edit</button>
        </form>

        <form>
          <h2>Delete Wand</h2>
          <label htmlFor="id">Wand ID: </label>
          <input type="text" id="length" name="length" />
          <> </>

          <label htmlFor="length">Length: </label>
          <input type="text" id="length" name="length" />
          <> </>
          <label htmlFor="price">Price: </label>
          <input type="text" id="price" name="price"  />
          <> </>

          <label htmlFor="core">Core: </label>
          <select id="core" name="core">
            <option value="none">None</option>
            <option value="unicornHair">Unicorn Hair</option>
            <option value="phoenixFeather">Phoenix Feather</option>
          </select>

          <label htmlFor="wood">Wood: </label>
          <input type="text" id="wood" name="wood"  />
          <> </>

          <label htmlFor="totalWandQuantity">Total Wand Quantity: </label>
          <input
            type="text"
            id="totalWandQuantity"
            name="totalWandQuantity"
          />

          <button>Delete</button>
          <> </>
        </form>
      </div>
      </div>
    );
  }

  export default WandsPage;