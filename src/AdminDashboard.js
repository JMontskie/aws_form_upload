// Filename: App.js
import './App.css';
import { Amplify } from 'aws-amplify';
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';


// import EmbeddedForm from './EmbeddedForm';

Amplify.configure(config);


const AdminDashboard = () => {
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
              <h4>Welcome Admin! {user.username}</h4>
              <button onClick={signOut}>Sign Out</button>
            </div>
          </div>
        </nav>

        {/* <div className="form">
          <EmbeddedForm />
        </div> */}

        {/* Add more code here */}
        
        <footer className="footer">
          <p>&copy; 2023 File Uploading App. All rights reserved.</p>
        </footer>
      </main>
    )}

    </Authenticator>
  );
};


export default AdminDashboard;

