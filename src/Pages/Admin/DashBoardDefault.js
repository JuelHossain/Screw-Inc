import React from 'react';
import Loading from '../../Components/Shared/Loading';
import useAdmin from '../../Hooks/useAdmin';
import Addareview from '../User/Addareview';
import MyOrders from '../User/MyOrders';
import MyReviews from '../User/MyReviews';
import AddProducts from './AddProducts';
import ManageOrders from './ManageOrders';
import ManageProducts from './ManageProducts';
import Users from './Users';

const DashBoardDefault = () => {
    const [admin, adminLoading] = useAdmin();
    if (adminLoading) {
        return <Loading/>
    }else if (admin) {
      return (
        <div>
          <AddProducts />
          <ManageProducts />
          <ManageOrders />
          <Users />
        </div>
      );
    } else {
        return (
          <div>
            < MyOrders/>
                <MyReviews />
                <Addareview/>
          </div>
        );
    }
};

export default DashBoardDefault;