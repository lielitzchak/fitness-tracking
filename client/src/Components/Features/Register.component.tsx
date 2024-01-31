import { FormEvent, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UserService } from "../../service/User-service";

const theme = createTheme();

export default function Register() {
  const [Action, SetActin] = useState("sign up!");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    UserService.CreateUser({
      Email: data.get("Email"),
      Password: data.get("Password"),
      UserName: data.get("UserName"),
      Image: data.get("Image"),
    }).then((responseFromServer: any) => {
      console.log(responseFromServer);
      console.log("just a test");
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {Action}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              // id="UserName"
              label="Name"
              name="UserName"
              // autoComplete="Name"
              // autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Password"
              label="Password"
              type="Password"
              id="Password"
              autoComplete="current-Password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Email"
              label="Email"
              type="email"
              id="Email"
              autoComplete="current-email"
            />
            <TextField
              margin="normal"
              fullWidth
              name="Image"
              label="Image"
              type="url"
              id="Image"
              autoComplete="current-Image"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // className={Action === "Login" ? "Submit gray" : "Submit"}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
