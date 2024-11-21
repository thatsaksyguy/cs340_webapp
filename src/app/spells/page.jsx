function SpellsPage() {
    const wandData = [
      {
        id: 1,
        level: "Beginner",
        type: "Disarming",
        price: 55,
        totalSpellQuantity: 2000,
      },
      {
        id: 2,
        level: "Intermediate",
        type: "Stunning",
        price: 555,
        totalSpellQuantity: 2,
      },
    ];
    return (
      <div>
        <h1>Spells</h1>
        <h2>Browse Spells</h2>
        <table border="1">
          <thead>
            <tr>
              <th>
                <button>New</button>
              </th>
              <th></th>
              <th>Spell ID</th>
              <th>Level</th>
              <th>Type</th>
              <th>Price</th>
              <th>Total Spell Quantity</th>
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
                <td>{wand.level}</td>
                <td>{wand.type}</td>
                <td>{wand.price}</td>
                <td>{wand.totalSpellQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="form-group">
        <form>
        <h2>Add Spell</h2>
          <label htmlFor="id">Spell ID: </label>
          <input type="text" id="id" name="id" required />
          <> </>

          <label htmlFor="level">Level: </label>
          <input type="text" id="level" name="level" required />
          <> </>
          <label htmlFor="type">Type: </label>
          <input type="text" id="type" name="type" required />
          <> </>

          <label htmlFor="price">Price: </label>
          <input type="text" id="price" name="price" required />
          <> </>

          <label htmlFor="totalSpellQuantity">Total Spell Quantity: </label>
          <input
            type="text"
            id="totalSpellQuantity"
            name="totalSpellQuantity"
            required
          />

          <button type="submit">Add</button>
        </form>

        <form>
        <h2>Update Spell</h2>
          <label htmlFor="id">Spell ID: </label>
          <input type="text" id="id" name="id" />
          <> </>

          <label htmlFor="level">Level: </label>
          <input type="text" id="level" name="level"  />
          <> </>

          <label htmlFor="type">Type: </label>
          <input type="text" id="type" name="type"  />
          <> </>

          <label htmlFor="price">Price: </label>
          <input type="text" id="price" name="price" />
          <> </>

          <label htmlFor="totalSpellQuantity">Total Spell Quantity: </label>
          <input
            type="text"
            id="totalSpellQuantity"
            name="totalSpellQuantity"

          />

          <button type="submit">Update</button>
        </form>

        <form>
        <h2>Delete Spell</h2>
          <label htmlFor="id">Spell ID: </label>
          <input type="text" id="id" name="id" />
          <> </>

          <label htmlFor="level">Level: </label>
          <input type="text" id="level" name="level" />
          <> </>

          <label htmlFor="type">Type: </label>
          <input type="text" id="type" name="type" />
          <> </>

          <label htmlFor="price">Price: </label>
          <input type="text" id="price" name="price" />
          <> </>

          <label htmlFor="totalSpellQuantity">Total Spell Quantity: </label>
          <input type="text" id="total" name="total" />
          <> </>

          <button>Delete</button>
          <> </>
        </form>
      </div>
      </div>
    );
  }

  export default SpellsPage;