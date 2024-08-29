"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormData } from "@/types/formtype";
import Grid from "@mui/material/Grid2";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";


const validateSchema = yup.object().shape({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  email: yup.string().email("Invalid Email").required("Email is Required"),
  address: yup.string().required("Address is Required"),
  state: yup.string().required("State is Required"),
  PhoneNumber: yup
    .string()
    .required("Phone Number is Required and it should be positive only")
    .matches(/^\d{10}$/, "Phone Number must be exactly 10 digits"),
  Zip: yup
    .string()
    .required("Zip Code is Required")
    .matches(/^\d{5}$/, "Zip Code must be exactly 5 digits"),
  Password: yup
    .string()
    .required("Password is Required")
    .min(8, "Minimum 8 characters required")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one symbol"
    )
    .matches(/[0-9]/, "Password should contain at least one number")
    .matches(/[A-Z]/, "Password should contain at least one uppercase letter")
    .matches(/[a-z]/, "Password should contain at least one lowercase letter"),
  ConfirmPassword: yup
    .string()
    .required("Confirm Password is Required")
    .oneOf([yup.ref("Password")], "Passwords do not match"),
  Country: yup.string().required("Country is Required"),
});

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(validateSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });


  const formSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset();
  };

  function handleClickShowPassword(): void {
    setShowPassword(!showPassword);
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(formSubmit)}
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#fff",
        mt: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ mb: 3, textAlign: "center", color: "primary.main" }}
      >
        SignUp Form
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid size={{ xs: 12 }}>
          <TextField
            {...register("firstName")}
            label="First Name"
            fullWidth
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField
            {...register("lastName")}
            label="Last Name"
            fullWidth
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField
            {...register("email")}
            label="Email"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Box
            sx={{ display: "flex", alignItems: "center", position: "relative" }}
          >
            <TextField
              {...register("Password")}
              id="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              error={!!errors.Password}
              helperText={errors.Password ? errors.Password.message : ""}
            />
            <IconButton
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              sx={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Box
            sx={{ display: "flex", alignItems: "center", position: "relative" }}
          >
            <TextField
              {...register("ConfirmPassword")}
              id="Confirmpassword"
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              error={!!errors.ConfirmPassword}
              helperText={errors.ConfirmPassword ? errors.ConfirmPassword.message : ""}
            />
            <IconButton
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              sx={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField
            {...register("PhoneNumber")}
            label="Phone Number"
            fullWidth
            error={!!errors.PhoneNumber}
            helperText={errors.PhoneNumber?.message}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            {...register("Zip")}
            label="Zip Code"
            fullWidth
            error={!!errors.Zip}
            helperText={errors.Zip?.message}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            {...register("address")}
            label="Address"
            fullWidth
            error={!!errors.address}
            helperText={errors.address?.message}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            {...register("state")}
            label="State"
            fullWidth
            error={!!errors.state}
            helperText={errors.state?.message}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            {...register("Country")}
            label="Country"
            fullWidth
            error={!!errors.Country}
            helperText={errors.Country?.message}
          />
        </Grid>

        <Grid size={{ xs: 6, md: 8 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isValid}
            sx={{
              mt: 3,
              width: "100%",
              padding: "12px",
              textTransform: "uppercase",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            SignUp
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
