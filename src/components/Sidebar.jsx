import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";
import { UploadFile } from "@mui/icons-material";

const handleclick = () => {
  window.location.href = "/upload";
}
const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <div>
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
      
    ))}
  </Stack>
    <button style={{
      width: "100%",
      background: "#000",
      color: "white",
      border: "none",
      outline: "none",
    }} onClick={handleclick} className="category-btn"
    >
      <UploadFile></UploadFile>
      <span style={{ marginLeft: "15px" }}>
        Upload
      </span>

    </button>
  </div>
);

export default Categories;
