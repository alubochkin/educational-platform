import './App.css';
import CreateGroupForm from './components/CreateGroupForm';
import SendInvitesForm from './components/SendInvitesForm';

function App() {
  return (
    <div className="App">
      <h1>Odu project</h1>
      <CreateGroupForm />
      <SendInvitesForm />
    </div>
  );
}

export default App;
