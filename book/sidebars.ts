import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Book sidebar with organized chapters
  bookSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Chapter 1: Getting Started',
      items: [
        'chapter-1/overview',
        'chapter-1/setup',
        'chapter-1/first-steps',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 2: Core Concepts',
      items: [
        'chapter-2/fundamentals',
        'chapter-2/best-practices',
        'chapter-2/examples',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 3: Advanced Topics',
      items: [
        'chapter-3/advanced-techniques',
        'chapter-3/troubleshooting',
        'chapter-3/case-studies',
      ],
    },
    {
      type: 'doc',
      id: 'conclusion',
      label: 'Conclusion',
    },
  ],
};

export default sidebars;
