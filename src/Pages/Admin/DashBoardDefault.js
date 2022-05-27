import React from 'react';
import AddProducts from './AddProducts';
import ManageOrders from './ManageOrders';
import ManageProducts from './ManageProducts';
import Users from './Users';

const DashBoardDefault = () => {
    return (
        <div>
            <AddProducts />
            <ManageProducts />
            <ManageOrders />
            <Users/>
        </div>
    );
};

export default DashBoardDefault;