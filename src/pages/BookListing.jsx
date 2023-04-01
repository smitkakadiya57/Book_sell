import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import BookCard from "../components/BookCard";
import { useEffect, useState } from "react";


const BookListing = () => {
  const [books, setBooks] = useState([]);

// Fetch all books
const fetchBook = async () => {
    const res = await fetch(
      "https://ebooksell-api.vercel.app/api/Book/list",
      {
        method: "GET",
      }
    );
    const data=await res.json();
    console.log(data);
    setBooks((prev)=> data.detail.records);
  };
  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography
          variant="h4"
          gutterBottom
          style={{ fontWeight: 600 }}
          textAlign="center"
        >
          Book Listing
        </Typography>
      </Box>
      <Box>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>Total- {books.length} Items </Box>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <TextField
              type="text"
              size="small"
              placeholder="Search..."
              fullWidth
              name="search"
            />
            <Stack
              spacing={2}
              direction="row"
              sx={{ width: "100%" }}
              alignItems="center"
            >
              <Typography variant="body1" sx={{ width: "100px" }} gutterBottom>
                Sort By
              </Typography>
              <Select name="sorting" size="small" fullWidth>
                <MenuItem value="asc">A-Z</MenuItem>
                <MenuItem value="desc">Z-A</MenuItem>
              </Select>
            </Stack>
          </Stack>
        </Stack>
        <Grid container mt={2} spacing={3}>
            {books.map((book)=>{
                return (
                    <Grid item xs={3} key={book._id}>
                    <BookCard data={book} />
                  </Grid>
                )
            })}
          
        </Grid>
      </Box>
    </Container>
  );
};

export default BookListing;
