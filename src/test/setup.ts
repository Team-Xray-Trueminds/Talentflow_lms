import '@testing-library/jest-dom';

// Suppress some React Router act() warnings globally right here if needed
const originalConsoleError = console.error;
console.error = (...args: any[]) => {
  if (typeof args[0] === 'string' && args[0].includes('Warning: React does not recognize')) {
    return;
  }
  originalConsoleError(...args);
};
