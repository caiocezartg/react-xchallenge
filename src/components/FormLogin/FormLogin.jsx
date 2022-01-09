import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        p: 3,
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
      </form>
    </Box>
  );
};

export default FormLogin;
