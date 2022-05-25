import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CurrencyBitcoin, PieChartRounded, ProductionQuantityLimits } from "@mui/icons-material";
import Loading from "./Loading";
import useAdmin from "../../Hooks/useAdmin";

export default function ProductCard({ product }) {
    const [admin, adminLoading] = useAdmin();
    console.log(admin);
    const { name, photoURL, photoUrl, upPhoto, price, qty, text } = product;
    if (adminLoading) {
        return <Loading/>
    }
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="140"
        width="240"
        image={photoURL || photoUrl || upPhoto}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
              <Typography variant="body2" color="text.secondary">{ text}</Typography>
      </CardContent>
      <CardActions>
    {admin?<Button size="small">Manage</Button>:<Button size="small">Order Now</Button>}
      </CardActions>
    </Card>
  );
}
