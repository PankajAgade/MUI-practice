import React, { useState } from "react";

//* imports MUI
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

//* imports SubComponent
import CustomInput from "../../SubComponent/CustomInput";

//* Imports Images
import loginDoor from "../../Assets/Images/loginDoor.png"
import logo from "../../Assets/Images/logo.svg"

function Login() {

  const [loginFields, setLoginFields] = useState({
    email: "",
    password: ""
  });

  return (
      <Box sx={{ flexGrow: 1, height: "calc(100% - 3.2rem)", padding: "1.6rem" }} flex={1} display={"flex"}>
        <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12, lg: 12}}>
          <Grid item xs={0} sm={0} md={5.5} lg={5.5} flex={1} sx={{display: { lg: "block", md: "block", sm: "none", xs: "none"  }}}>
            <Paper 
              style={{
                padding: "4rem",
                borderRadius: "1.6rem",
                height: "calc(100% - 8rem)",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <img src={logo} alt="" style={{width: "4rem", height: "4rem"}}/>
              <h1 style={{fontSize: "3.2rem", flex: "20%"}}>Hi, Welcome Back</h1>
              <img src={loginDoor} alt="" style={{width: "100%",flex: "80%"}}/>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={5.5} lg={6.5} display={"flex"} flexDirection={"column"} >
            <Grid p={3} display={"flex"} flexDirection={"column"} flex={1}>
              <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <img src={logo} alt="" style={{width: "4rem", height: "4rem"}}/>

                <Typography variant="h5" component="h5" textAlign={"right"}>
                  Don’t have an account? {" "}
                  <Typography variant="h5" component="span" color={"primary"} fontWeight={600}>
                    Get started
                  </Typography>
                </Typography>
              </Box>

              <Grid display={"flex"} flexDirection={"column"} flex={1} justifyContent={"center"} width={"min(48rem,100%)"} sx={{margin: { lg: "unset", md: "unset", sm: "auto", xs: "auto"  }}}>
                <Typography color={"#212B36"} fontSize={"2.4rem"} margin={"0 0 0.8rem 0"} fontWeight={600}>Sign in to Minimal</Typography>
                <Typography variant="h5" component="h5" margin={"0 0 0.8rem 0"} color={"#637381"}>Enter your details below.</Typography>
                <Grid>
                  <CustomInput 
                    label="Email address"
                    inputType={"email"}
                    value={loginFields.email}
                    onChange={(_value) => {
                      setLoginFields((pre) => {
                        pre.email = _value;
                        return {...pre}
                      })
                    }}
                  />
                </Grid>
                <Grid style={{marginTop: "2rem"}}>
                  <CustomInput 
                    label="Password"
                    inputType={"password"}
                    value={loginFields.password}
                    onChange={(_value) => {
                      setLoginFields((pre) => {
                        pre.password = _value;
                        return {...pre}
                      })
                    }}
                  />
                </Grid>

                <Grid display={"flex"} marginTop={"2rem"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                  <FormGroup>
                    <FormControlLabel 
                      control={<Checkbox defaultChecked size="large" />} 
                      label={
                        <Typography variant="h5" component="h5" color={"#637381"}>Remember me</Typography>
                      }
                    />
                  </FormGroup>
                  <Typography variant="h5" component="h5" color={"primary"} fontWeight={500}>
                    Forgot password?
                  </Typography>
                </Grid>

                <Button 
                  variant="contained"
                  style={{
                    width: "100%",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    borderRadius: "0.8rem",
                    boxShadow: "none",
                    padding: "1rem",
                    marginTop: "2rem"
                  }}
                >
                  Login 
                </Button>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
  );
}

export default Login;
