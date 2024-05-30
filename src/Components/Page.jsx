import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const Page = ({ Name, onSave }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    onSave({ [Name]: event.target.value });
  };

  return (
    <div className="">
      <div className="space-x-7 border-2 border-slate-400 p-5 rounded-md m-3 hover:border-gray-900">
        <div className="text-xl font-semibold text-gray-700 hover:text-blue-800">
          {Name}
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            type="Number"
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
