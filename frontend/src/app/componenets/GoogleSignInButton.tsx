// components/GoogleSignInButton.tsx
import React from 'react';

const GoogleSignInButton = () => {
  const handleGoogleSignIn = () => {
    // Replace with your Express backend OAuth endpoint URL
    window.location.href = 'http://localhost:3000/auth/google';
  };

  return (
    <button onClick={handleGoogleSignIn} style={{marginTop:'20px', padding: '8px 16px', backgroundColor: '#4285F4', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;