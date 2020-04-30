import React, {Fragment} from 'react';

import Layout from "../components/Layout/Layout";
import {AccountWrapper} from '../components/Helpers/AccountWrapper';
import {translate} from "../libs/translate";
import Meta from "../components/Helpers/Meta";

function Profile(props) {
    const {user} = props;

    return <Fragment>
        <Meta title={translate('profile.metaTitle')}/>
        <Layout>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            <div>Role: {user.role_id}</div>
        </Layout>
    </Fragment>;
}

export default AccountWrapper(Profile, true);
