import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <ul style={{ listStyle: "none", padding: "0" }}>
      <li style={{ marginBottom: "10px" }}>
        <Link
          to="/desktopseventythree"
          style={{
            color: "#87CEFA",
            textDecoration: "underline",
            textAlign: "center",
            padding: "4rem",
          }}
        >
          Desktop-73
        </Link>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/desktopseventyfive"
            style={{
              color: "#87CEFA",
              textDecoration: "underline",
              textAlign: "center",
              padding: "4rem",
            }}
          >
            Desktop-75
          </Link>
        </li>
      </li>
    </ul>
  );
};
export default Home;
