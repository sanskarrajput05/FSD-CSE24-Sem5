import { useState, useEffect } from "react";

function FetchProducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");

        const jsonData = await res.json();
        setData(jsonData);
      } catch (e) {
        console.log("Error is:", e);
        setData([{ id: 1, title: "No products found" }]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
      <h2>Fetch Products</h2>

      {data.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            margin: "8px 0",
            padding: "8px",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100px", height: "100px", objectFit: "contain" }}
          />

          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>

          <button onClick={() => alert(`You selected ${product.title}`)}>
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default FetchProducts;

