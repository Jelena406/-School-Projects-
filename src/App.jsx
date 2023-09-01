import React, {useState} from 'react';
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

function SSS() {
  return (
    <>
      <h1>sss</h1>
      <p>sssss</p>
    </>
  );
}

export default App;
