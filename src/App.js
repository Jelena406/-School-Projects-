import {useState} from 'react';
import './App.css';
import {PasswordBox} from './components/PasswordBox';
import {PasswordForm} from './components/PasswordForm';
function App() {
  const [state, setState] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
    charactersLength: 0,
    password: '',
  });
  return (
    <main>
      <h3>Password Generator</h3>
      <PasswordBox {...state} />
      <PasswordForm {...state} setState={setState} />
    </main>
  );
}

export default App;
