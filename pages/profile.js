import React from 'react';
import Layout from "../components/Layout/Layout";

import {AccountWrapper} from '../components/Helpers/AccountWrapper';

function Profile(props) {
    const {user} = props;

    return <Layout>
        <div>Name: {user.name}</div>
        <div>Email: {user.email}</div>
        <div>Role: {user.role_id}</div>
    </Layout>;
}

export default AccountWrapper(Profile, true);
