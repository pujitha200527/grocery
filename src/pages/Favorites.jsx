import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../features/favoriteSlice";

function Favorites() {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="favorites-container">
      <h1>Favorite Grocery Items</h1>

      {favorites.length === 0 ? (
        <h2>No Favorite Grocery Items</h2>
      ) : (
        <div className="favorites-grid">
          {favorites.map((grocery) => (
            <div key={grocery.id} className="favorite-card">
              <img
                src={grocery.image}
                alt={grocery.name}
                width="200"
              />

              <h3>{grocery.name}</h3>

              <p>Category: {grocery.category}</p>

              <p>Brand: {grocery.brand}</p>

              <p>Price: ₹{grocery.price}</p>

              <p>⭐ {grocery.rating}</p>

              <button
  className="remove-btn"
  onClick={() => dispatch(removeFavorite(grocery.id))}
>
  Remove
</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;