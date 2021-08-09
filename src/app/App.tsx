import Home from 'pages/home';
import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div id="app" className="flex flex-col mx-auto my-6">
      {/* <TsReactTest /> */}
      {/* <ProjectListPage /> */}
      <Home />
    </div>
  );
};

export default App;
