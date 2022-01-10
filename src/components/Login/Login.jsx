import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LogoXtrategie from "../../assets/logo_xtrategie.png";
import FormLogin from "../FormLogin/FormLogin";

const Login = () => {
  return (
    <Container maxWidth="md" sx={{ height: "100vh", width: "100vw" }}>
      <Grid container height="100%" justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: "#FFF",
              padding: 3,
              borderRadius: 2,
              marginTop: 2,
              boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.35)",
            }}
          >
            <Grid container alignItems="center">
              <Grid
                item
                xs={12}
                md={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box padding={3}>
                  <img
                    src={LogoXtrategie}
                    alt="Logo Xtrategie"
                    style={{ maxWidth: "100%" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormLogin />
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} textAlign="center">
          <footer>
            <p>
              &copy; Software Powered by Xtrategie - Developed by Caio Cezar.{" "}
              <br />
              2009 - {new Date().getFullYear()}.
            </p>
          </footer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
