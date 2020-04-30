import React, {Fragment} from 'react';

import Layout from "../components/Layout/Layout";
import {AccountWrapper} from '../components/Helpers/AccountWrapper';
import Meta from "../components/Helpers/Meta";
import {translate} from "../libs/translate";

function Home(props) {
    const {user} = props;

    return <Fragment>
        <Meta title={translate('home.metaTitle')}/>
        <Layout>
            Home - No login required
        </Layout>
    </Fragment>;
}

export default AccountWrapper(Home, false);
