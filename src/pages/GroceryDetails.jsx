import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function GroceryDetails() {
  const { id } = useParams();

  const [grocery, setGrocery] = useState(null);

  useEffect(() => {
    getGrocery();
  }, []);

  async function getGrocery() {
    try {
      const response = await api.get(`/grocerys/${id}`);

      setGrocery(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!grocery) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details">
      <img
        src={grocery.image}
        alt={grocery.name}
      />

      <h1>{grocery.name}</h1>

      <p>{grocery.description}</p>

      <h3>Category</h3>
      <p>{grocery.category}</p>

      <h3>Brand</h3>
      <p>{grocery.brand}</p>

      <h3>Price</h3>
      <p>₹ {grocery.price}</p>

      <h3>Quantity</h3>
      <p>{grocery.quantity}</p>
      <h3>Rating</h3>
     <p>{grocery.rating}</p>

      
 

      {grocery.features && (<ul>
        {grocery.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>)}
    </div>
  );
}

export default GroceryDetails;