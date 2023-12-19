// Filename: App.js
import './App.css';

// Amplify imports

import { Amplify } from 'aws-amplify';


import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { getCurrentUser } from 'aws-amplify/auth';
import AWS from 'aws-sdk';

// graphql imports
import * as mutations from './graphql/mutations';

// Form.io imports
import { formio } from '@formio/react';

// React imports
import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

// Component imports
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';

Amplify.configure(config);

function App({ signOut, user }) {
  const [userGroup, setUserGroup] = useState(null);
  const [DynamoDBClient, setDynamoDBClient] = useState(null);

  useEffect(() => {

    const DynamoDBClient = new AWS.DynamoDB({
      region: 'ap-southeast-2',
    });

    //function to upload file to s3
    const handleFileChange = (file) => {
      // Upload file to S3
      formio.uploadFile(file, { bucketName: 'mntsfilebucket-s3' });
  
      // Extract file information
      const filename = file.name;
      const fileSize = file.size;
      const fileType = file.type;
      const description = document.getElementById('description').value;
      const userId = getCurrentUser().userId;
      const uploadDate = new Date().toISOString();
  
      // Store file metadata in DynamoDB
      DynamoDBClient.putItem({
        TableName: 'file-metadata',
        Item: {
          fileName: { S: filename },
          userID: { S: userId },
          uploadDate: { S: uploadDate },
          fileSize: { N: fileSize.toString() },
          s3Location: { S: `s3://mntsfilebucket-s3/${filename}` },
          fileType: { S: fileType },
          description: { S: description },
          query: mutations.createFile
        },
      }).promise();
    };

    //function to fetch cognito groups
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
  }, [DynamoDBClient]);

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
