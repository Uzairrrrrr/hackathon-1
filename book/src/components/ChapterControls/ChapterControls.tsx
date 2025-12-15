import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import styles from './ChapterControls.module.css';
import useApiBaseUrl from '@site/src/hooks/useApiBaseUrl';

interface ChapterControlsProps {
  chapterPath: string;
  originalContent: string;
  onContentUpdate: (newContent: string) => void;
}

export default function ChapterControls({
  chapterPath,
  originalContent,
  onContentUpdate,
}: ChapterControlsProps) {
  const { user, token } = useAuth();
  const apiBaseUrl = useApiBaseUrl();
  const [personalizing, setPersonalizing] = useState(false);
  const [translating, setTranslating] = useState(false);
  const [error, setError] = useState('');
  const [showingPersonalized, setShowingPersonalized] = useState(false);
  const [showingTranslated, setShowingTranslated] = useState(false);

  const handlePersonalize = async () => {
    if (!user || !token) {
      alert('Please login to personalize content');
      window.location.href = '/login';
      return;
    }

    setError('');
    setPersonalizing(true);

    try {
      const response = await fetch(`${apiBaseUrl}/api/v1/content/personalize`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          chapter_path: chapterPath,
          content: originalContent,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || 'Failed to personalize content');
      }

      const data = await response.json();
      onContentUpdate(data.personalized_content);
      setShowingPersonalized(true);
      setShowingTranslated(false);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setPersonalizing(false);
    }
  };

  const handleTranslate = async () => {
    setError('');
    setTranslating(true);

    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${apiBaseUrl}/api/v1/content/translate`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          content: originalContent,
          target_language: 'ur',
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || 'Failed to translate content');
      }

      const data = await response.json();
      onContentUpdate(data.translated_content);
      setShowingTranslated(true);
      setShowingPersonalized(false);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setTranslating(false);
    }
  };

  const handleReset = () => {
    onContentUpdate(originalContent);
    setShowingPersonalized(false);
    setShowingTranslated(false);
    setError('');
  };

  return (
    <div className={styles.controls}>
      <div className={styles.buttonGroup}>
        <button
          onClick={handlePersonalize}
          disabled={personalizing || showingPersonalized}
          className={`${styles.button} ${styles.personalizeButton} ${
            showingPersonalized ? styles.active : ''
          }`}
        >
          {personalizing ? '⏳ Personalizing...' : '🎯 Personalize for Me'}
        </button>

        <button
          onClick={handleTranslate}
          disabled={translating || showingTranslated}
          className={`${styles.button} ${styles.translateButton} ${
            showingTranslated ? styles.active : ''
          }`}
        >
          {translating ? '⏳ Translating...' : '🌐 Translate to Urdu'}
        </button>

        {(showingPersonalized || showingTranslated) && (
          <button onClick={handleReset} className={`${styles.button} ${styles.resetButton}`}>
            ↩️ Show Original
          </button>
        )}
      </div>

      {error && <div className={styles.error}>{error}</div>}

      {showingPersonalized && (
        <div className={styles.statusMessage}>
          ✨ Content personalized based on your {user?.software_experience} software experience
        </div>
      )}

      {showingTranslated && (
        <div className={styles.statusMessage}>
          🌐 Content translated to Urdu
        </div>
      )}
    </div>
  );
}
