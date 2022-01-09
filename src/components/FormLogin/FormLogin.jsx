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

const FormLogin = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
          onChange={({ target }) => setUser(target.value)}
          value={user}
        />

        <TextField
          type="email"
          label="E-mail"
          variant="filled"
          fullWidth
          required
          margin="normal"
          onChange={({ target }) => setEmail(target.value)}
          value={email}
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
          onChange={({ target }) => setPassword(target.value)}
          value={password}
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
