import Image from "next/image";
import styles from "./page.module.css";

function HomePage() {
  return(
    <div>
      <h1>Welcome to the Magic Wares Shop Database!</h1>
      <div className="magic-info">
      <p>This database is used to keep track of all of our orders. Below is some information on accessing the site.</p>
      <br></br>

      <p>Clicking on the Wands tab allows you to browse our current selection of wands for sale, each with a unique ID. Every wand is defined by its core, wood type, and length. Cores can be Phoenix Feather, Unicorn Hair, or none at all. Each wand also has a set price and quantity in stock. If you need to make updates, such as changing the ID, you can do so easily. Additionally, if a wand is discontinued, you can remove it from the table using its ID, length, price, core, wood, or quantity.
      </p>
      <br></br>

      <p>Clicking on the Spells tab allows you to browse our current selection of spells for sale, which also have a unique ID. Every spell will have a level and a type. Each spell also has a set price and quantity in stock. If you need to make updates, such as changing the spell level, you will be able to do so. Additionally, if a spell is removed from our stock, you can remove it from the table using its ID, level, type, price, or quantity.
      </p>
      <br></br>

      <p>Clicking on the Customers tab allows you to view our current list of customers, each having their own unique ID. When customers make a purchase, they are able to enter their email, address, and phone number. If, for example, a customer does not have an email address or physical address, we will not require them to add that during checkout. Each customer, however, will be required to enter a phone number so that we can contact them. If the information of a customer needs to be updated, such as adding an email address, you will be able to do so. Also, if a customer would like to be removed from our customer list, you can remove them using their ID, name, email, address, or phone number.
      </p>
      <br></br>

      <p>Clicking on the Orders tab will allow you to view all of the orders we have recieved. Each order will have a unique ID and order date. Each order will also be linked to a Customer ID, and the total price of the order will be shown as well. If an order needs to be updated for any reason, you will be able to do so. Additionally, if an order needs to be deleted for any reason, you can remove is using the Order ID, date, Customer ID, or the total price.</p>
      <br></br>

      <p>Clicking on the Order Items tab will allow you to view the items in an order. Each order item will have its own unique Order Item ID. This will be linked to a specific order ID, and will either show the spell ID or the wand ID of a purchase. The quantity of each will be shown, as well as the price. If an order item needs to be updated, you will be able to do so. If an order item needs to be removed, you can do so using the Order Item ID, Order ID, Wand ID, Spell ID, quantity, or price.</p>
    </div>
    </div>

  )
}

export default HomePage