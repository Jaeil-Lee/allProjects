import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* App이라는 컴포넌트
     여기에 App.js에서 만든 파일을 index.html파일의 root div에 끼워 넣게되는 부분이다 */}
    <App />
  </React.StrictMode>
);


reportWebVitals();
