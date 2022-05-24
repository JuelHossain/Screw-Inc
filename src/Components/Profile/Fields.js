import { Edit } from "@mui/icons-material";
import { Box, IconButton, InputBase, Paper } from "@mui/material";
import React, { useRef } from "react";

const Fields = ({ value, register,label,...props }) => {
  return (
    <Paper sx={{ p: 1,m:1, display: "flex", alignItems: "center", gap: 2, }}>
      <label
        className="text-2xl font-semibold  h-full text-stone-700"
        htmlFor={label}
      >
        {label}:
      </label>
          <input
              {...props}
        id={label}
        {...register(label)}
        className="text-2xl font-semibold w-full h-full text-stone-700 p-2"
        type="text"
        defaultValue={value}
      />
    </Paper>
  );
};

export default Fields;
