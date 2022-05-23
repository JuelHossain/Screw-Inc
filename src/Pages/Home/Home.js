
import { Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Shared/Loading';

const Home = () => {
    const { data: users, isLoading } = useQuery('users', () => axios('/users').then(res=>res.data));
    console.log(users);
    if (isLoading) {
        return <Loading/>
    }
    return (
      <Container maxWidth="xl">
        {users.map((user,index) => (

            <li key={index}>{user.displayName}</li>

        ))}
      </Container>
    );
};

export default Home;