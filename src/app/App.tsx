import ProjectListPage from 'pages/project-list';
import './App.css';

const App: React.FC = () => {
  return (
    <div id="app" className="flex flex-col mx-auto my-6">
      <ProjectListPage />
    </div>
  );
};

export default App;
