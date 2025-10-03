import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Weeho.css';
import reactLogo from '@/assets/react.svg';
import weehoLogo from '@/assets/weeho-logo.png';

const Weeho = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="weeho-container">
      <div id="weeho-root">
        <div>
          <div className="weeho-logo-container">
            <img src={weehoLogo} className="weeho-main-logo" alt="Weeho logo" />
          </div>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="weeho-logo react" alt="React logo" />
          </a>
        </div>
        <h1>Welcome to Weeho</h1>
        <p>Your one-stop solution for all your needs.</p>
        <div className="weeho-card">
          <button className="weeho-button" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/pages/Weeho.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <Link to="/" className="weeho-nav-link">
          ← Back to Hnband Music Site
        </Link>
      </div>
    </div>
  );
};

export default Weeho;
