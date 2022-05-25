import { Add, FormatListBulleted, ManageAccounts, ManageHistory, ProductionQuantityLimits, Reviews, StarHalf, ViewInAr } from '@mui/icons-material';
import { List} from '@mui/material';
import React from 'react';
import NavItem from './ListItem';


const AdminNavList = ({open}) => {
    return (
      <List>
      <NavItem open={open } text={'Add Product'} icon={<Add/>} pathname='addproduct'/>
      <NavItem open={open } text={'Manage Orders'} icon={<ProductionQuantityLimits/>} pathname='manageorders'/>
      <NavItem open={open } text={'Manage Product'} icon={<ViewInAr/>} pathname='manageproduct'/>
      <NavItem open={open } text={'Manage All Users'} icon={<ManageAccounts/>} pathname='manageusers'/>
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