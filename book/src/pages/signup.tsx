import React from 'react';
import Layout from '@theme/Layout';
import SignupForm from '../components/Auth/SignupForm';

export default function SignupPage() {
  return (
    <Layout
      title="Sign Up"
      description="Create an account to personalize your learning experience"
    >
      <SignupForm />
    </Layout>
  );
}
