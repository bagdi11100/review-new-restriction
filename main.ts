// Import the CSS and JS if using a bundler like Vite, Webpack, or Rollup
import './main.593d481e.css';
import './main.be179052.js';

// Run initialization logic when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('App initialized.');

  // Example: Attach a click handler
  const button = document.getElementById('myButton');
  if (button) {
    button.addEventListener('click', () => {
      alert('Button clicked!');
    });
  }

  // Any other startup logic goes here
});
