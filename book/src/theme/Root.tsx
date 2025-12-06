import React from 'react';
import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ChatBot from '@site/src/components/ChatBot';
import { AuthProvider } from '@site/src/contexts/AuthContext';

// This component wraps the entire site and adds the chatbot
export default function Root({children}) {
  const {siteConfig} = useDocusaurusContext();
  
  // Get API URL from config - use default for local development
  const apiBaseUrl = 'http://localhost:8000';
  
  return (
    <AuthProvider>
      {children}
      <ChatBot apiBaseUrl={apiBaseUrl} />
    </AuthProvider>
  );
}
