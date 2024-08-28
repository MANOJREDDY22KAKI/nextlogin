// "use client";
// import React, { useState } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { Box, Button, TextField, Typography, Grid } from "@mui/material";

// // Define the validation schema using Yup
// const validationSchema = yup.object().shape({
//   firstName: yup.string().required("First Name is required."),
//   lastName: yup
//     .string()
//     .required("Last Name is required.")
//     .min(2, "Last Name must be at least 2 characters."),
//   company: yup.string().required("Company name is required."),
//   email: yup
//     .string()
//     .email("Invalid email format")
//     .required("Email address is required."),
//   phone: yup
//     .number()
//     .typeError("Phone Number must be a number.")
//     .required("Phone Number is required."),
//   address: yup.string().required("Street Address is required."),
//   addressL2: yup.string(),
//   addressL3: yup.string(),
//   city: yup.string().required("City name is required."),
//   zip: yup
//     .number()
//     .typeError("Zip Code must be a number.")
//     .required("Zip Code is required."),
//   country: yup.string().required("Country name is required."),
//   state: yup.string().required("State/Province is required."),
// });

// // Define the interface for the form data
// interface FormData {
//   firstName: string;
//   lastName: string;
//   company: string;
//   email: string;
//   phone: number;
//   address: string;
//   addressL2?: string;
//   addressL3?: string;
//   city: string;
//   zip: number;
//   country: string;
//   state: string;
// }

// const LoginForm: React.FC = () => {
//   const {
//     register,
    
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: yupResolver(validationSchema), // Use yupResolver with the validation schema
//   });

 

//   // Define the formSubmit function with type annotation for the data parameter
//   const formSubmit: SubmitHandler<FormData> = (data) => {
//     console.log(data);
    
//     reset(); // Reset the form fields after submission
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit(formSubmit)}
//       sx={{ maxWidth: 600, mx: "auto", p: 3, boxShadow: 3, borderRadius: 2 }}
//     >
//       <Typography variant="h5" component="h2" gutterBottom>
//         Account Information
//       </Typography>

//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             label="First Name"
//             fullWidth
//             {...register("firstName")}
//             error={!!errors.firstName}
//             helperText={errors.firstName?.message}
//           />
//         </Grid>

//         <Grid item xs={12} sm={6}>
//           <TextField
//             label="Last Name"
//             fullWidth
//             {...register("lastName")}
//             error={!!errors.lastName}
//             helperText={errors.lastName?.message}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <TextField
//             label="Company"
//             fullWidth
//             {...register("company")}
//             error={!!errors.company}
//             helperText={errors.company?.message}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <TextField
//             label="Email"
//             type="email"
//             fullWidth
//             {...register("email")}
//             error={!!errors.email}
//             helperText={errors.email?.message}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <TextField
//             label="Phone Number"
//             type="tel"
//             fullWidth
//             {...register("phone")}
//             error={!!errors.phone}
//             helperText={errors.phone?.message}
//           />
//         </Grid>

//         <Typography variant="h6" component="h3" gutterBottom>
//           Address
//         </Typography>

//         <Grid item xs={12}>
//           <TextField
//             label="Street Address"
//             fullWidth
//             {...register("address")}
//             error={!!errors.address}
//             helperText={errors.address?.message}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <TextField
//             label="Street Address 2"
//             fullWidth
//             {...register("addressL2")}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <TextField
//             label="Street Address 3"
//             fullWidth
//             {...register("addressL3")}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <TextField
//             label="City"
//             fullWidth
//             {...register("city")}
//             error={!!errors.city}
//             helperText={errors.city?.message}
//           />
//         </Grid>

//         <Grid item xs={12} sm={6}>
//           <TextField
//             label="Zip Code"
//             fullWidth
//             {...register("zip")}
//             error={!!errors.zip}
//             helperText={errors.zip?.message}
//           />
//         </Grid>

//         <Grid item xs={12} sm={6}>
//           <TextField
//             label="Country"
//             fullWidth
//             {...register("country")}
//             error={!!errors.country}
//             helperText={errors.country?.message}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <TextField
//             label="State/Province"
//             fullWidth
//             {...register("state")}
//             error={!!errors.state}
//             helperText={errors.state?.message}
//           />
//         </Grid>
//       </Grid>

//       <Button
//         type="submit"
//         variant="contained"
//         color="primary"
//         sx={{ mt: 3, mb: 2 }}
//         fullWidth
//       >
//         Save
//       </Button>

      
//     </Box>
//   );
// };

// export default LoginForm;

"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormData } from "@/types/formtype";

const validateSchema = yup.object().shape({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  email: yup.string().email("Invalid email").required("Email is Required"),
  address: yup.string().required("Address is Required"),
  state: yup.string().required("State is Required"),
  PhoneNumber: yup
    .string()
    .required("Phone Number is Required")
    .matches(/^\d{10}$/, "Phone Number must be exactly 10 digits and positive"),
  Zip: yup
    .string()
    .required("Zip Code is Required")
    .matches(/^\d{5}$/, "Zip Code must be exactly 5 digits and positive"),
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(validateSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      state: '',
      PhoneNumber: '',
      Zip:'' ,
      Password: '',
      ConfirmPassword: '',
      Country: '',
    },
  });

  const formSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset();
  };

  // Check if any field is invalid
  const isFormEmpty = Object.keys(errors).length > 0;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(formSubmit)}
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#fff",
        mt: 4,
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

      <TextField
        {...register("firstName")}
        label="First Name"
        fullWidth
        margin="normal"
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
        sx={{ mb: 3 }}
      />

      <TextField
        {...register("lastName")}
        label="Last Name"
        fullWidth
        margin="normal"
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
        sx={{ mb: 3 }}
      />

      <TextField
        {...register("email")}
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        error={!!errors.email}
        helperText={errors.email?.message}
        sx={{ mb: 3 }}
      />

      <TextField
        {...register("Password")}
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        error={!!errors.Password}
        helperText={errors.Password?.message}
        sx={{ mb: 3 }}
      />

      <TextField
        {...register("ConfirmPassword")}
        label="Confirm Password"
        type="password"
        fullWidth
        margin="normal"
        error={!!errors.ConfirmPassword}
        helperText={errors.ConfirmPassword?.message}
        sx={{ mb: 3 }}
      />

      <TextField
        {...register("PhoneNumber")}
        label="Phone Number"
        type="tel"
        fullWidth
        margin="normal"
        error={!!errors.PhoneNumber}
        helperText={errors.PhoneNumber?.message}
        sx={{ mb: 3 }}
      />

      <TextField
        {...register("Zip")}
        label="Zip Code"
        type="text"
        fullWidth
        margin="normal"
        error={!!errors.Zip}
        helperText={errors.Zip?.message}
        sx={{ mb: 3 }}
      />

      <TextField
        {...register("address")}
        label="Address"
        fullWidth
        margin="normal"
        error={!!errors.address}
        helperText={errors.address?.message}
        sx={{ mb: 3 }}
      />

      <TextField
        {...register("state")}
        label="State"
        fullWidth
        margin="normal"
        error={!!errors.state}
        helperText={errors.state?.message}
        sx={{ mb: 3 }}
      />

      <TextField
        {...register("Country")}
        label="Country"
        fullWidth
        margin="normal"
        error={!!errors.Country}
        helperText={errors.Country?.message}
        sx={{ mb: 3 }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!isValid || isFormEmpty}
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
        Submit
      </Button>
    </Box>
  );
};

export default LoginForm;
