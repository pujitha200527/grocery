import { useEffect, useState } from "react";
import api from "../services/api";
import GroceryCard from "../components/GroceryCard";
import { Link } from "react-router-dom";

function Grocerys() {
  const [grocerys, setGrocerys] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [sort, setSort] = useState("");

  useEffect(() => {
    getGrocerys();
  }, []);

  async function getGrocerys() {
    try {
      const response = await api.get("/grocerys");
      setGrocerys(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteGrocery(id) {
    try {
      await api.delete(`/grocerys/${id}`);

      setGrocerys(
        grocerys.filter(
          (grocery) => grocery.id !== id
        )
      );
    } catch (error) {
      console.log(error);
    }
  }

  const filteredGrocerys = grocerys.filter((grocery) => {
    const searchMatch = grocery.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" ||
      grocery.category === category;

    const brandMatch =
      brand === "All" ||
      grocery.brand === brand;

    return (
      searchMatch &&
      categoryMatch &&
      brandMatch
    );
  });

  let finalGrocerys = [...filteredGrocerys];

  if (sort === "high") {
    finalGrocerys.sort(
      (a, b) => b.price - a.price
    );
  }

  if (sort === "low") {
    finalGrocerys.sort(
      (a, b) => a.price - b.price
    );
  }

  return (
    <>
      <h1>Popular Grocerys</h1>

      <Link
        className="add-btn"
        to="/add-grocery"
      >
        Add Grocery
      </Link>

      <div className="filters">
        <input
          type="text"
          placeholder="Search Grocery"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option>All</option>
          <option>Rice</option>
          <option>Oil</option>
          <option>Snacks</option>
          <option>Beverages</option>
          <option>Vegetables</option>
        </select>

        <select
          value={brand}
          onChange={(e) =>
            setBrand(e.target.value)
          }
        >
          <option>All</option>
          <option>Aashirvaad</option>
          <option>Fortune</option>
          <option>Tata</option>
          <option>Amul</option>
          <option>Nestle</option>
        </select>

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
        >
          <option value="">
            Select
          </option>

          <option value="high">
            Price High To Low
          </option>

          <option value="low">
            Price Low To High
          </option>
        </select>
      </div>

      <div className="grocerys">
        {finalGrocerys.map((grocery) => (
          <GroceryCard
            key={grocery.id}
            grocery={grocery}
            onDelete={deleteGrocery}
          />
        ))}
      </div>
    </>
  );
}

export default Grocerys;