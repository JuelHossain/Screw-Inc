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
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    const [admin, adminLoading] = useAdmin();
    console.log(admin);
    const { _id,name, photoURL, photoUrl, upPhoto, price, qty, text } = product;
    if (adminLoading) {
        return <Loading/>
  }
  return (
    <div className=" w-[150px]  sm:w-[180px] border">
      <img
        className="h-[150px] w-full object-cover"
        src={photoURL || photoUrl || upPhoto}
        alt={name}
      />
      <hr />
      <p className="text-lg h-8 font-semibold pl-2 truncate hover:bg-blue-100/20 ease-in-out duration-300">
        {name}
      </p>
      <hr />
      <p className="text-md h-12 text-clip overflow-hidden  pl-2 hover:bg-blue-100/20  ease-in-out duration-300">
        {text}
      </p>
      <hr />
      <div className=" h-16 p-2 hover:bg-blue-100/20 ease-in-out duration-300">
        <p className="font-bold">Price {price} taka </p>
        <p className="font-bold">Available: {qty}pcs </p>
      </div>
      <hr />
      {admin ? (
        <Button fullWidth component={Link} to={`products/${_id}`}>
          Manage
        </Button>
      ) : (
        <Button fullWidth component={Link} to={`/checkout/${_id}`}>
          Order
        </Button>
      )}
    </div>
  );
}
