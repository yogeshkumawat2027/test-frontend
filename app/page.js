'use client';
import { useEffect, useState } from "react";

export default function ApiTest() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://backend-api-8g5t.onrender.com/api/hello`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setMessage(data.message);
        setError(null);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("Failed to fetch data from backend");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-10 text-xl">
      <h2>Backend Response:</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {message && !error && <p className="text-green-500">{message}</p>}
    </div>
  );
}