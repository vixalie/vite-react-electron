import { useState } from 'react';
import 'twin.macro';
import electronLogo from './electron.svg';
import reactLogo from './react.svg';
import tailwindLogo from './tailwind.svg';
import viteLogo from './vite.svg';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div tw="text-center">
      <header tw="h-screen flex flex-col justify-center items-center space-y-2 bg-[#282c34] text-white">
        <div tw="flex flex-row justify-center items-center space-x-2">
          <img src={reactLogo} tw="h-[20vmin] pointer-events-none" alt="react-logo" />
          <img src={tailwindLogo} tw="h-[15vmin] pointer-events-none" alt="tailwind-logo" />
          <img src={viteLogo} tw="h-[20vmin] pointer-events-none" alt="vite-logo" />
          <img src={electronLogo} tw="h-[20vmin] pointer-events-none" alt="electron-logo" />
        </div>
        <p>Hello React + Tailwind CSS + Vite + Electron!</p>
        <p>
          <button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a tw="text-[#61dafb] hover:text-white" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            tw="text-[#61dafb] hover:text-white"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};
