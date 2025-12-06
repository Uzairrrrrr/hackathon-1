import React from 'react';
import Layout from '@theme/Layout';
import LoginForm from '../components/Auth/LoginForm';

export default function LoginPage() {
  return (
    <Layout
      title="Login"
      description="Login to access your personalized content"
    >
      <LoginForm />
    </Layout>
  );
}
