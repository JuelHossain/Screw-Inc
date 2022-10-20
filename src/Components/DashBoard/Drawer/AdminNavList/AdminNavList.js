import {
  Add,
  FormatListBulleted,
  Home,
  ManageAccounts,
  PieChart,
  ProductionQuantityLimits,
  Reviews,
  Star,
  StarHalf,
  ViewInAr,
} from "@mui/icons-material";
import { List } from "@mui/material";
import React from "react";
import NavItem from "./ListItem";

const AdminNavList = ({ open }) => {
  return (
    <List>
      <NavItem
        open={open}
        text={"Add Product"}
        icon={<Add />}
        pathname="addproduct"
      />
      <NavItem
        open={open}
        text={"Manage Orders"}
        icon={<ProductionQuantityLimits />}
        pathname="manageorders"
      />
      <NavItem
        open={open}
        text={"Manage Products"}
        icon={<ViewInAr />}
        pathname="manageproducts"
      />
      <NavItem
        open={open}
        text={"Manage All Users"}
        icon={<ManageAccounts />}
        pathname="manageusers"
      />
      <NavItem
        open={open}
        text={"Manage Reviews"}
        icon={<Reviews />}
        pathname="managereviews"
      />
    </List>
  );
};
const UserNavList = ({ open }) => {
  return (
    <List>
      <NavItem
        open={open}
        text={"My Orders"}
        icon={<FormatListBulleted />}
        pathname="myorders"
      />
      <NavItem
        open={open}
        text={"My Reviews"}
        icon={<Reviews />}
        pathname="myreviews"
      />
      <NavItem
        open={open}
        text={"Add A Review"}
        icon={<StarHalf />}
        pathname="addareview"
      />
    </List>
  );
};

const UiNavList = ({ open }) => {
  return (
    <List className="md:hidden">
      <NavItem open={open} text="Home" icon={<Home />} pathname="/" />
      <NavItem
        open={open}
        text="Products"
        icon={<PieChart />}
        pathname="/Products"
      />
      <NavItem open={open} text="Reviews" icon={<Star />} pathname="/Reviews" />
    </List>
  );
};

export { AdminNavList, UserNavList, UiNavList };
