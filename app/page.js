'use client';
import { useEffect, useState } from "react";

export default function ApiTest() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`https://backend-api-8g5t.onrender.com/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="p-10 text-xl">
      <h2>Backend Response:</h2>
      <p>{message || "Loading..."}</p>
    </div>
  );
}
