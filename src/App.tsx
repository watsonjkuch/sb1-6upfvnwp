import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { AppRoutes } from './routes';
import { AssetProvider } from './context/AssetContext';

function App() {
  return (
    <Router>
      <AssetProvider>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto">
              <AppRoutes />
            </main>
          </div>
        </div>
      </AssetProvider>
    </Router>
  );
}

export default App;