import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './styles/index.css';

const App = lazy(() => import('./components/App'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<p>Loading</p>}>
      <App />
      <div id='background'>
        <div className='blurBg firstBg'></div>
        <div className='blurBg secondBg'></div>
        <div className='blurBg thirdBg'></div>
      </div>
    </Suspense>
  </React.StrictMode>
);

