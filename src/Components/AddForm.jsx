import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { styled } from "@mui/system";

const AddForm = ({ newData, setNewData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const object = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
    };
    axios.post("http://localhost:8080/data", object).then((response) => {
      setNewData({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
      });

      setEmail("");
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container ml={2} spacing={2}>
        <Grid item xs={5} md={3}>
          <TextField
            required
            id="firstName"
            value={firstName}
            label="First Name"
            variant="outlined"
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </Grid>

        <Grid item xs={5} md={3}>
          <TextField
            required
            value={lastName}
            id="lastName"
            label="Last Name"
            variant="outlined"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={5} md={3}>
          <TextField
            required
            id="phoneNumber"
            value={phoneNumber}
            label="Phone Number"
            variant="outlined"
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={5} md={3}>
          <TextField
            required
            id="email"
            label="Email"
            value={email}
            variant="outlined"
            type={"email"}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </Grid>

        <Grid item xs={12} mt={1}>
          <Button
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "black" }}
          >
            Submit Data
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddForm;
