import {
  Add,
  ManageAccounts,
  ProductionQuantityLimits,
  Reviews,
  ViewInAr,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../Components/Shared/Loading";
import useAdmin from "../../Hooks/useAdmin";
import Addareview from "../User/Addareview";
import MyOrders from "../User/MyOrders";
import MyReviews from "../User/MyReviews";
const DButton = ({ name, children, ...props }) => {
  return (
    <Link {...props} className="flex flex-1  border justify-center p-5 h-full">
      <div className="flex-col flex items-center gap-2">
        {children}
        <p className="font-semibold text-center">{name}</p>
      </div>
    </Link>
  );
};
const dLinks = [
  {
    name: "Add Product",
    link: "addproduct",
    icon: Add,
  },
  {
    name: "Manage Orders",
    link: "manageorders",
    icon: ProductionQuantityLimits,
  },
  {
    name: "Manage Products",
    link: "manageproducts",
    icon: ViewInAr,
  },
  {
    name: "Manage All Users",
    link: "manageusers",
    icon: ManageAccounts,
  },
  {
    name: "Manage Reviews",
    link: "managereviews",
    icon: Reviews,
  },
];
const DashBoardDefault = () => {
  const [admin, adminLoading] = useAdmin();
  if (adminLoading) {
    return <Loading />;
  } else if (admin) {
    return (
      <div className="flex   flex-wrap gap-5 flex-1  items-stretch">
        {dLinks.map((link) => (
          <DButton key={link.link} to={link.link} name={link.name}>
            <link.icon fontSize="large" />
          </DButton>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <MyOrders />
        <MyReviews />
        <Addareview />
      </div>
    );
  }
};

export default DashBoardDefault;
