const isAdminUser = (user) => {
    // Replace 'admin' with the actual name of the admin group
    const adminGroup = 'admin';
  
    // Check if the user is part of the admin group
    if (user && user.signInUserSession && user.signInUserSession.accessToken) {
      const groups = user.signInUserSession.accessToken.payload['cognito:groups'];
      if (groups && groups.includes(adminGroup)) {
        return true;
      }
    }
  
    return false;
  };
  
  const App = () => {
    return (
      <Authenticator signUpAttributes={['email']}>
        {({ signOut, user }) => (
          <main>
              {isAdminUser(user) ? (
                // Render admin dashboard
                <AdminDashboard />
              ) : (
                // Render regular user dashboard
                <UserDashboard />
              )}
          </main>
        )}
      </Authenticator>
      );
  };