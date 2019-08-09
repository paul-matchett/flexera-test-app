import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchAllRepositories } from '../../store/actions/repositories';
import Repositories from '../../components/Repositories';

import Layout from '../../hoc/Layout';

const Home = () => {

  const dispatch = useDispatch();
  dispatch(fetchAllRepositories(1, 10));

  return (
    <Layout>
        <h2>Github Repositories</h2>
        <Repositories />
    </Layout>
  );
};

export default Home;