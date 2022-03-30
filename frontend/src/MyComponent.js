import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function MyComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <p>Input your first name:</p>
      <TextField onChange={(e) => setFirstName(e.target.value)} />
      <Button
        variant="outlined"
        onClick={() => {
        console.log("here" + firstName)
          fetch("/" + firstName)
            .then((response) => response.json())
            .then((data) => {
              setLastName(data.lastName);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        Submit
      </Button>
      <p>Response from server:</p>
      {lastName}
    </div>
  );
}
