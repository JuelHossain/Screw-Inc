import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useProducts from "../../Hooks/useProducts";
import Loading from "../../Components/Shared/Loading";
import { Link } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import { ButtonGroup} from "@mui/material";
import {  CurrencyFranc,ProductionQuantityLimits } from "@mui/icons-material";

export default function Tools() {
  const { products, productsLoading } = useProducts();
  const [admin, adminLoading ] = useAdmin();
  if (productsLoading || adminLoading) {
    return <Loading />;
  }
  return (
    <main>
      <Container sx={{ py: 8 }} maxWidth="xl">
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "alliceblue",
                }}
              >
                <CardContent sx={{ flexGrow: 0 }}>
                  <Typography variant="h5" height={36} color="primary">
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
                  <Button
                    endIcon={<CurrencyFranc />}
                  >
                    Price-{product.price}
                  </Button>
                  <Button endIcon={<ProductionQuantityLimits />}>
                    qty-{product.qty}
                  </Button>
                </ButtonGroup>
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
      </Container>
    </main>
  );
}
