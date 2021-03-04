import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

import CreateGroupForm from './components/CreateGroupForm';
import SendInvitesForm from './components/SendInvitesForm';

function App() {
  return (
    <Provider store={store}>
        <h1>Odu project</h1>
        <CreateGroupForm />
        <SendInvitesForm />
    </Provider>
  );
}

export default App;
