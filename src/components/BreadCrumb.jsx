import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";

const BreadCrumb = () => {
  const breadcrumbs = [
    <Typography key="1" >
   Home
    </Typography>,
    <Typography key="2" color="error">
      Create an Account
    </Typography>,
  ];
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
        sx={{marginY:"20px",display:"flex",justifyContent:"center" }}
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
};

export default BreadCrumb;
