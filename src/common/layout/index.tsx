import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Counter } from "../../features/counter/Counter";
import DayForecast from "../../pages/day";
import MonthForecast from "../../pages/month";
import WeekForecast from "../../pages/week";

export default function LayoutWrapper() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> | <Link to="/day">Day</Link> |
        <Link to="/week">Week</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Counter />}>
          <Route path="day" element={<DayForecast />} />
          <Route path="week" element={<WeekForecast />} />
          <Route path="month" element={<MonthForecast />} />
        </Route>
      </Routes>
    </div>
  );
}
