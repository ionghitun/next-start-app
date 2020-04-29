import React from 'react';
import Layout from "../components/Layout/Layout";

import {AccountWrapper} from '../components/Helpers/AccountWrapper';

function Home(props) {
    const {user} = props;

    return <Layout>
        Home - No login required
    </Layout>;
}

export default AccountWrapper(Home, false);
