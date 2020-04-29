import React, {Fragment, useEffect, useState} from 'react';
import AuthCard from "../components/Reusable/AuthCard";
import {translate} from "../libs/translate";
import {Alert, Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import Link from 'next/link';
import {AccountWrapper} from "../components/Helpers/AccountWrapper";
import {useRouter} from "next/router";
import Head from "next/head";

function Login(props) {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [loginErrorTimeout, setLoginErrorTimeout] = useState(false);

    const {loginErrors} = props;
    const {setUserErrors} = props;

    useEffect(() => {
        if (props.user) {
            router.push("/");
        }
    }, [props]);

    useEffect(() => {
        if (loginErrors) {
            setLoginErrorTimeout(setTimeout(() => {
                setUserErrors(false);
            }, 5000));
        }
    }, [loginErrors, setUserErrors]);

    const _login = async (e) => {
        e.preventDefault();

        clearTimeout(loginErrorTimeout);

        const {loginUser} = props;

        let data = {
            email,
            password
        };

        if (remember) {
            data.remember = true;
        }

        loginUser && loginUser(data);
    };

    if (props.user) {
        return null;
    }

    return <Fragment>
        <Head>
            <title>Login</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <AuthCard title={translate('login.title')}>
            {loginErrors && loginErrors.account && <Alert color={'warning'}>{loginErrors.account}</Alert>}
            {loginErrors && loginErrors.credentials && <Alert color={'danger'}>{loginErrors.credentials}</Alert>}
            <Form onSubmit={_login}>
                <FormGroup>
                    <Label>{translate('login.email')}</Label>
                    <Input type="email" name="email" value={email}
                           placeholder={translate('login.emailPlaceholder')}
                           onChange={(e) => setEmail(`${e.target.value}`)}
                           {...(loginErrors && loginErrors.email ? {
                               invalid: true
                           } : {})}
                    />
                    {loginErrors && loginErrors.email && <FormFeedback>
                        {loginErrors.email}
                    </FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label>{translate('login.password')}</Label>
                    <Input type="password" name="password" value={password}
                           placeholder={translate('login.passwordPlaceholder')}
                           onChange={(e) => setPassword(`${e.target.value}`)}
                           {...(loginErrors && loginErrors.password ? {
                               invalid: true
                           } : {})}
                    />
                    {loginErrors && loginErrors.password && <FormFeedback>
                        {loginErrors.password}
                    </FormFeedback>}
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input name="remember" type="checkbox" checked={remember}
                               onChange={(e) => setRemember(e.target.checked)}/>{' '}
                        {translate('login.rememberMe')}
                    </Label>
                </FormGroup>
                <Button type={'submit'} onClick={_login}>{translate('login.submit')}</Button>
            </Form>
            <Link href={'/forgot-password'}><a>{translate('login.forgotPassword')}</a></Link> | <Link
            href={'/register'}><a>{translate('login.register')}</a></Link>
        </AuthCard>
    </Fragment>;
}

export default AccountWrapper(Login, false);
