import { Add, FormatListBulleted, ManageAccounts,  ProductionQuantityLimits, RateReviewRounded, Reviews, StarHalf, ViewInAr } from '@mui/icons-material';
import { List} from '@mui/material';
import React from 'react';
import NavItem from './ListItem';


const AdminNavList = ({open}) => {
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
          icon={<RateReviewRounded />}
          pathname="managereviews"
        />
      </List>
    );
};
const UserNavList = ({open}) => {
    return (
      <List>
        <NavItem
          open={open}
          text={"My Orders"}
          icon={<FormatListBulleted />}
            pathname='myorders'
          
        />
        <NavItem
          open={open}
          text={"My Reviews"}
          icon={<Reviews />}
          pathname='myreviews'
        />
        <NavItem open={open} text={"Add A Review"} icon={<StarHalf />} pathname='addareview' />
      </List>
    );
};

export {AdminNavList,UserNavList}