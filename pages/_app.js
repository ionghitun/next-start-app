import React, {useEffect} from "react";
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import moment from "moment";

import {onResize} from '../actions/responsive';
import {getLanguages} from "../actions/languages";
import {getTranslation} from "../actions/translation";
import store from '../store';
import '../resources/styles/app.scss';

function MyApp(props) {
    const {Component, pageProps, store} = props;

    useEffect(() => {
        store.dispatch(getLanguages());

        const lang = localStorage.getItem('lang') || process.env.DEFAULT_LANG;

        moment.locale(lang);

        store.dispatch(getTranslation(lang));

        if (process.browser) {
            window.addEventListener('resize', _onResize);
            _onResize();
        }
    }, []);

    const _onResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        store.dispatch(onResize({
            width,
            height
        }));
    }

    return <Provider store={store}>
        <Component {...pageProps} />
    </Provider>;
}

export default withRedux(store)(MyApp);
