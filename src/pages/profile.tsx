import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Header from '../components/header.js';
import UserProfile from '../components/profile/index.js';
import { getUserByUsername } from '../services/firebase.js';
import * as ROUTES from '../constants/routes.js';
import type { ProfilePage }  from '../types/pages.js';

const Profile: ProfilePage = () => {
    const { username } = useParams();
    const [userExists, setUserExists] = useState(undefined);
    const history = useHistory();
    
    useEffect(() => {
        async function checkUserExistsToLoadProfile() {
            const doesUserExist = await getUserByUsername(username);
            if (!doesUserExist) {
                history.push(ROUTES.NOT_FOUND);
            } else {
                setUserExists(true);
            }
        }
        checkUserExistsToLoadProfile();
    }, [username, history])
    
    return userExists ? (
        <div className="bg-gray">
            <Header />
            <div className="mx-auto max-w-screen-lg">
                <UserProfile username={username} />
            </div>
        </div>
    ) : null;
}

export default Profile;