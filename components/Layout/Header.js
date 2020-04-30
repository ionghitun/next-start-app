import React, {Fragment} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Link from 'next/link';

import {translate} from "../../libs/translate";

const mapStateToProps = function (store) {
    return {
        user: store.user.user,
        translation: store.translation
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch);
};

function Header(props) {
    const {user} = props;

    return (
        <header className={'header'}>
            <Link href={'/'}><a>{translate('header.home')}</a></Link> | {user && <Fragment>
            <Link href={'/profile'}><a>{translate('header.profile')}</a></Link> | <Link
            href={'/logout'}><a>{translate('header.logout')}</a></Link>
        </Fragment>} {!user && <Fragment>
            <Link href={'/login'}><a>{translate('header.login')}</a></Link> | <Link
            href={'/register'}><a>{translate('header.register')}</a></Link>
        </Fragment>}
        </header>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
