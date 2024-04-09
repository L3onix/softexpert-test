import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

export default function Main() {
  return (
    <p>alskdjflkajsdflajsdflkajdf</p>
  );
}

if (document.getElementById('app')) {
  const rootElement = document.getElementById('app');
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Main />
    </StrictMode>
  )
}
