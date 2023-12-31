// Filename: App.js
import './App.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import config from './amplifyconfiguration.json';


// style imports
import '@aws-amplify/ui-react/styles.css';

// react imports
import React from 'react';


import EmbeddedForm from './EmbeddedForm';

Amplify.configure(config);


const UserDashboard = () => {
  
  return (
    <Authenticator signUpAttributes={[
      'email',
    ]}>

    {({ signOut, user }) => (
      <main>
        <nav className="navbar">
          <div className="navbar-left">
            <h1>File Uploading App</h1>    
          </div>
          <div className="navbar-right">
            <div className="user-info">
              <h4>Welcome! {user.username}</h4>
              <button onClick={signOut}>Sign Out</button>
            </div>
          </div>
        </nav>

        <div className="form">
          <EmbeddedForm />
        </div>

        {/* Add more code here */}
        
        <footer className="footer">
          <p>&copy; 2023 File Uploading App. All rights reserved.</p>
        </footer>
      </main>
    )}

    </Authenticator>
  );
};


export default UserDashboard;

