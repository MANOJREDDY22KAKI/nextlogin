"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormData } from "@/types/formtype";
import Grid from "@mui/material/Grid2";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const validateSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is Required"),
  Password: yup.string().required("Password is Required"),
});

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: yupResolver(validateSchema),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const formSubmit: SubmitHandler<LoginFormData> = (data) => {
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
        Login
      </Typography>

      <Grid container spacing={2} justifyContent="center">
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
            Login
          </Button>
        </Grid>
      </Grid>
      <Link href={"/RestPassword"}>Forgot Password</Link>
    </Box>
  );
};

export default LoginForm;
