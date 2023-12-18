// Filename: App.js
import './App.css';

// Amplify imports

import { Amplify } from 'aws-amplify';


import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import { CognitoUserPool } from 'amazon-cognito-identity-js';


// React imports
import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

// Component imports
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';

Amplify.configure(config);

function App({ signOut, user }) {
  const [userGroup, setUserGroup] = useState(null);

  useEffect(() => {
    const fetchCognitoGroups = async () => {
      const userPool = new CognitoUserPool({
        UserPoolId: 'ap-southeast-2_VFr01y6Nx',
        ClientId: '7pd23vm6agkap8h690n4a52m72'
      });

      const cognitoUser = userPool.getCurrentUser();

      if (cognitoUser != null) {
        cognitoUser.getSession((err, session) => {
          if (err) {
            console.error(err);
            return;
          }

          console.log('session validity: ' + session.isValid());

          const sessionIdInfo = jwtDecode(session.getIdToken().jwtToken);
          // console.log(sessionIdInfo['cognito:groups']);

          const userGroups = sessionIdInfo['cognito:groups'];
          // console.log(userGroups);
          setUserGroup(userGroups);
        });
      }
    };

    fetchCognitoGroups();
  }, []);

  return (
    <>
      {userGroup && userGroup.includes('admin') ? (
        <AdminDashboard />
      ) : (
        <UserDashboard />
      )}
    </>
  );
}

export default withAuthenticator(App);
