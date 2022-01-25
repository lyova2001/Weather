import React, { useState } from "react";
import { Link } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default function Header() {
  return (
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> | <Link to="/day">Day</Link> |
        <Link to="/week">Week</Link> |
        <Link to="/month">Month</Link>
      </nav>
  );
}
