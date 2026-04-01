// DataFetcher.jsx
import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // empty dependency array = run once on mount

  if (loading) {
    return <p className="status-message">Loading data...</p>;
  }

  if (error) {
    return <p className="status-message error">Error: {error}</p>;
  }

  return (
    <div className="data-container">
      <h2>Users List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetcher;