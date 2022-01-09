import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import useForm from "../../hooks/useForm";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const user = useForm("");
  const email = useForm("email");
  const password = useForm("password");

  return (
    <Box
      sx={{
        p: { xs: 0, md: 3 },
        borderLeft: { xs: "none", md: "1px solid rgba(0,0,0, 0.2)" },
      }}
    >
      <Typography
        variant="h6"
        color="primary.main"
        textAlign="center"
        marginBottom={3}
      >
        Faça seu login
      </Typography>

      <form action="">
        <TextField
          type="text"
          label="Nome de usuário"
          variant="filled"
          fullWidth
          required
          margin="normal"
          {...user}
          helperText={user.error ?? user.error}
        />

        <TextField
          type="email"
          label="E-mail"
          variant="filled"
          fullWidth
          required
          margin="normal"
          {...email}
          helperText={email.error ?? email.error}
        />

        <TextField
          type={showPassword ? "text" : "password"}
          label="Senha"
          variant="filled"
          fullWidth
          required
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...password}
          helperText={password.error ?? password.error}
        />

        <Button
          variant="outlined"
          size="large"
          sx={{ width: "100%", marginTop: "20px" }}
        >
          ENTRAR
        </Button>
      </form>
    </Box>
  );
};

export default FormLogin;
