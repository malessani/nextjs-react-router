import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Order from "../src/Order";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/:orderId" element={<Order />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function User() {
  return <p>User</p>;
}

function Error() {
  return <p>Page not found</p>;
}
