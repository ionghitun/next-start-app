import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import userActions from "../../actions/user";

export const AccountWrapper = (WrappedComponent, needsLogin) => {
    const mapStateToProps = function (store) {
        return {
            user: store.user.user,
            loading: store.user.loading,
            loginErrors: store.user.loginErrors,
            error: store.error,
            translation: store.translation
        };
    };

    const mapDispatchToProps = dispatch => {
        return bindActionCreators({...userActions}, dispatch);
    };

    function ProtectedWrapper(props) {
        const router = useRouter();

        const [userInLoading, setUserInLoading] = useState(true);

        const {error} = props;

        if (error) {
            return <div>{error}</div>
        }

        useEffect(() => {
            const rememberToken = localStorage.getItem('rememberToken');

            const token = sessionStorage.getItem('token');

            if (props.user && !token) {
                if (rememberToken) {
                    const {loginWithRememberToken} = props;

                    let credentials = {
                        rememberToken
                    };

                    loginWithRememberToken(credentials);
                } else {
                    setUserInLoading(false);
                    sessionStorage.clear();
                    router.push("/login");
                }
            } else {
                if (!props.user && token) {
                    const {getUser} = props;

                    getUser();
                } else if (!props.user && rememberToken) {
                    const {loginWithRememberToken} = props;

                    let credentials = {
                        rememberToken
                    };

                    loginWithRememberToken(credentials);
                } else if (needsLogin && !token && router.pathname !== '/login') {
                    setUserInLoading(false);
                    router.push("/login");
                } else {
                    setUserInLoading(false);
                }
            }
        }, [props]);

        if (needsLogin || userInLoading) {
            const {loading} = props;

            if (loading) {
                return null;
            }
        }

        return <WrappedComponent {...props}/>;
    }

    return connect(mapStateToProps, mapDispatchToProps)(ProtectedWrapper);
};
