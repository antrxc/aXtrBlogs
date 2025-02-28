import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const FullPageMDX = ({ children }) => {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'auto' }}>
      <MDXProvider>
        {children}
      </MDXProvider>
    </div>
  );
};

export default FullPageMDX;
