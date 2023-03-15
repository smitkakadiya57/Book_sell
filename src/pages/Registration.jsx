import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const Registration = () => {
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
        <Box>
          <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
            Personal Information
          </Typography>
          <hr />
          <Typography variant="body1" gutterBottom color="grey">
            Please enter your information to create your account.
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                First Name *
              </Typography>
              <TextField type="text" size="small" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Last Name *
              </Typography>
              <TextField type="text" size="small" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Email Address *
              </Typography>
              <TextField type="email" size="small" fullWidth />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
            Login Information
          </Typography>
          <hr />

          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Password *
              </Typography>
              <TextField type="password" size="small" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Confirm Password *
              </Typography>
              <TextField type="password" size="small" fullWidth />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="error"
            sx={{ textTransform: "capitalize", backgroundColor: "#f14d54" }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Registration;
