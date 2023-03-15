import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
const Login = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography
          variant="h4"
          gutterBottom
          style={{ fontWeight: 600 }}
          textAlign="center"
        >
          Login or Create An Account
        </Typography>

        <Grid container spacing={5}>
          
          <Grid item md={6} xs={12} >
            <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
              New Customers
            </Typography>
            <hr />
            <Typography variant="body1" gutterBottom color="grey">
              Registration is free and easy
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon sx={{ width: "10px" }}>
                  <CircleIcon sx={{ color: "black", fontSize: "small" }} />
                </ListItemIcon>
                <ListItemText>Faster Checkout</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ width: "10px" }}>
                  <CircleIcon sx={{ color: "black", fontSize: "small" }} />
                </ListItemIcon>
                <ListItemText>Save multiple Shipping Addresses</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ width: "10px" }}>
                  <CircleIcon sx={{ color: "black", fontSize: "small" }} />
                </ListItemIcon>
                <ListItemText>View and track orers and more</ListItemText>
              </ListItem>
            </List>
            <Button
                  variant="contained"
                  color="error"
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "#f14d54",
                    fontWeight:"600"
                  }}
                >
                  Create an Account
                </Button>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
              Registered Customers
            </Typography>
            <hr />
            <Typography variant="body1" gutterBottom color="grey">
              If you have an account with us please log in
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Email Address *
                </Typography>
                <TextField type="email" size="small" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Password *
                </Typography>
                <TextField type="password" size="small" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "#f14d54",
                    fontWeight:"600"
                  }}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
