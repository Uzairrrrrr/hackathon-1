import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Auth.module.css';

export default function SignupForm() {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    full_name: '',
    software_experience: 'beginner',
    hardware_experience: 'beginner',
    programming_languages: '',
    industry_background: '',
    learning_goals: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const langs = formData.programming_languages
        ? formData.programming_languages.split(',').map(l => l.trim())
        : [];

      await signup({
        ...formData,
        programming_languages: langs,
      });
      
      window.location.href = '/intro';
    } catch (err: any) {
      setError(err.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.authContainer}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <p className={styles.subtitle}>Tell us about yourself to personalize your learning experience</p>

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.formGroup}>
          <label>Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Username *</label>
          <input
            type="text"
            required
            minLength={3}
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Password *</label>
          <input
            type="password"
            required
            minLength={8}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Full Name</label>
          <input
            type="text"
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Software Experience *</label>
            <select
              value={formData.software_experience}
              onChange={(e) => setFormData({ ...formData, software_experience: e.target.value })}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Hardware Experience *</label>
            <select
              value={formData.hardware_experience}
              onChange={(e) => setFormData({ ...formData, hardware_experience: e.target.value })}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Programming Languages (comma-separated)</label>
          <input
            type="text"
            placeholder="e.g., Python, JavaScript, TypeScript"
            value={formData.programming_languages}
            onChange={(e) => setFormData({ ...formData, programming_languages: e.target.value })}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Industry Background</label>
          <input
            type="text"
            placeholder="e.g., Web Development, Data Science"
            value={formData.industry_background}
            onChange={(e) => setFormData({ ...formData, industry_background: e.target.value })}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Learning Goals</label>
          <textarea
            rows={3}
            placeholder="What do you want to learn from this book?"
            value={formData.learning_goals}
            onChange={(e) => setFormData({ ...formData, learning_goals: e.target.value })}
          />
        </div>

        <button type="submit" disabled={loading} className={styles.submitButton}>
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>

        <div className={styles.switchAuth}>
          Already have an account? <a href="/login">Log In</a>
        </div>
      </form>
    </div>
  );
}
