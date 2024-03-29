import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Loading from "../../Components/Shared/Loading";
import { Link } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import { ButtonGroup} from "@mui/material";
import {  CurrencyFranc,ProductionQuantityLimits } from "@mui/icons-material";

export default function Tools({products}) {
  const [admin, adminLoading] = useAdmin();
  if (adminLoading) {
    return <Loading/>
  }
  return (
        <Grid container spacing={4}>
          {products?.map((product) => (
            <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "alliceblue",
                }}
              >
                <CardContent sx={{ flexGrow: 0 }}>
                  <Typography
                    variant="h5"
                    height={36}
                    color="primary"
                    whiteSpace={"nowrap"}
                  >
                    {product.name}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{
                    height: "200px",
                    object: "cover",
                    px: 1,
                  }}
                  image={
                    product.photoURL || product.photoUrl || product.upPhoto
                  }
                  alt="random"
                />
                <ButtonGroup sx={{ mt: 1, px: 1 }} disableElevation fullWidth>
                  <Button endIcon={<CurrencyFranc />}>
                    Price-{product.price}
                  </Button>
                  <Button endIcon={<ProductionQuantityLimits />}>
                    qty-{product.qty}
                  </Button>
                </ButtonGroup>
                <ButtonGroup sx={{ mt: 1, px: 1 }} disableElevation fullWidth>
                  <Button endIcon={<ProductionQuantityLimits />}>
                    Min-Order-Qty: {100}
                  </Button>
                </ButtonGroup>
                <p className="border-blue-500 rounded border h-20 m-2 p-1 text-left text-sky-600 overflow-clip text-ellipsis ">
                    {product.text}
                </p>
                <CardActions>
                  {admin ? (
                    <Button
                      fullWidth
                      variant={"contained"}
                      component={Link}
                      to={`/products/${product._id}`}
                    >
                      Manage
                    </Button>
                  ) : (
                    <Button
                      variant={"contained"}
                      fullWidth
                      component={Link}
                      to={`/checkout/${product._id}`}
                    >
                      Order
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
  );
}
