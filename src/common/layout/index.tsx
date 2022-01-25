import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Counter } from "../../features/counter/Counter";
import DayForecast from "../../pages/day";
import MonthForecast from "../../pages/month";
import WeekForecast from "../../pages/week";
import Header from "../header";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export default function LayoutWrapper() {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <Header />
          <Routes>
            <Route path="/" element={<Counter />}>
              <Route path="day" element={<DayForecast />} />
              <Route path="week" element={<WeekForecast />} />
              <Route path="month" element={<MonthForecast />} />
            </Route>
          </Routes>
        </Box>
      </Container>
    </>
  );
}
