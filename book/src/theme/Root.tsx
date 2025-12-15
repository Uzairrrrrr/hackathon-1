import React from 'react';
import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ChatBot from '@site/src/components/ChatBot';
import { AuthProvider } from '@site/src/contexts/AuthContext';
import useApiBaseUrl from '@site/src/hooks/useApiBaseUrl';

// This component wraps the entire site and adds the chatbot
export default function Root({children}) {
  const {siteConfig} = useDocusaurusContext();
  const apiBaseUrl = useApiBaseUrl();
  
  return (
    <AuthProvider>
      {children}
      <ChatBot apiBaseUrl={apiBaseUrl} />
    </AuthProvider>
  );
}
