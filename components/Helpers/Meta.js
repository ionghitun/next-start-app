import React from 'react';
import PropTypes from 'prop-types';
import Head from "next/head";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {translate} from "../../libs/translate";

const mapStateToProps = function (store) {
    return {
        translation: store.translation
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch);
};

function Meta(props) {
    const {title, description, keywords} = props;

    let metaTitle = title ? title : translate('meta.title');
    let metaDescription = description ? description : translate('meta.description');
    let metaKeywords = keywords ? keywords : translate('meta.keywords');

    return <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription}/>
        <meta name="keywords" content={metaKeywords}/>
        <link rel="icon" href="/favicon.ico"/>
    </Head>;
}

Meta.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Meta);
