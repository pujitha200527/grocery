import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/favoriteSlice";

function GroceryCard({ grocery, onDelete }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img
        src={grocery.image}
        alt={grocery.name}
      />

      <div className="card-content">
        <h3>{grocery.name}</h3>

        <p>
          <strong>Category:</strong> {grocery.category}
        </p>

        <p>
          <strong>Brand:</strong> {grocery.brand}
        </p>

        <p>
          <strong>Price:</strong> ₹{grocery.price}
        </p>

        <p className="rating">
           ⭐ {grocery.rating}
        </p>

        <div className="card-actions">
          <Link
            className="view-btn"
            to={`/grocerys/${grocery.id}`}
          >
            View
          </Link>

          <Link
            className="edit-btn"
            to={`/edit-grocery/${grocery.id}`}
          >
            Edit
          </Link>

          <button
            className="delete-btn"
            onClick={() => onDelete(grocery.id)}
          >
            Delete
          </button>
        </div>

        <button
          className="fav-btn"
          onClick={() => dispatch(addFavorite(grocery))}
        >
          Add to Fav
        </button>
      </div>
    </div>
  );
}

export default GroceryCard;