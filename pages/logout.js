import {useEffect} from 'react';
import {useRouter} from "next/router";

import {AccountWrapper} from "../components/Helpers/AccountWrapper";

function Logout(props) {
    const router = useRouter();

    useEffect(() => {
        if (!props.user) {
            router.push("/login");
        } else {
            const {logoutUser} = props;

            logoutUser();
        }
    }, [props]);

    return null;
}

export default AccountWrapper(Logout, true);
