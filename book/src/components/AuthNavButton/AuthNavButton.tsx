import React from 'react';
import { useAuth } from '@site/src/contexts/AuthContext';
import styles from './AuthNavButton.module.css';

export default function AuthNavButton() {
  const { user, logout } = useAuth();

  if (user) {
    return (
      <div className={styles.authNav}>
        <span className={styles.username}>👤 {user.username}</span>
        <button onClick={logout} className={styles.logoutBtn}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className={styles.authNav}>
      <a href="/login" className={styles.loginBtn}>
        Login
      </a>
      <a href="/signup" className={styles.signupBtn}>
        Sign Up
      </a>
    </div>
  );
}
