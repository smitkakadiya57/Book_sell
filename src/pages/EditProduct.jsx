import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
const EditProduct = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography
          variant="h4"
          gutterBottom
          style={{ fontWeight: 600 }}
          textAlign="center"
        >
          Edit Product
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="body1" gutterBottom>
              Book Name *
            </Typography>
            <TextField type="text" size="small" fullWidth name="bookname" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" gutterBottom>
              Book Price (Rs) *
            </Typography>
            <TextField type="number" size="small" fullWidth name="bookprice" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" gutterBottom>
              Category *
            </Typography>
            <Select name="bookcategory" size="small" fullWidth displayEmpty>
              <MenuItem value="Business" defaultChecked>
                Business
              </MenuItem>
              <MenuItem value="Comedy">Comedy</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1" gutterBottom>
              Book Image*
            </Typography>
            <Button
              variant="contained"
              component="label"
              sx={{ textTransform: "capitalize", backgroundColor: "#f14d54" }}
            >
              Upload Image
              <input type="file" name="bookimage" hidden />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              Book Description*
            </Typography>
            <TextField
              type="text"
              size="small"
              multiline
              rows={4}
              fullWidth
              name="bookdescription"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="error"
              sx={{ textTransform: "capitalize", backgroundColor: "#80bf32" }}
            >
              Save
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="error"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "#f14d54",
                marginLeft: "10px",
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default EditProduct;
