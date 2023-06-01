"use client";
import axios

export default function Home() {
  function getData() {
    axios.get("http://localhost:8080/").then((response) => {
      console.log(response);
    });
  }
  return (
    <div>
      <h1>eksamen</h1>
    </div>
  );
}
