import { useState } from 'react';

import { Button, Header } from './common';
import Main from './views/Main';
import Login from './views/Login';
import Posts from './views/Posts';
import Register from './views/Register';

const App = (props) => {
  const { _theme } = props;

  const [theme, setTheme] = useState('light');
  const [name, setName] = useState('');

  const submitFormHandler = (event) => { console.log(event); };

  const cancelFormHandler = () => { console.log('Form was cleared'); };

  const changeThemeHandler = () => { setTheme('dark'); };

  return (
    <Main>
      <Header />
      {theme}
      <Button title='Change theme' onClick={changeThemeHandler} />

      <Button title='Submit' onClick={submitFormHandler} />
      <Button title='Cancel' onClick={cancelFormHandler} />

      <Register />
      {/*<Posts />*/}
      {/*<Login />*/}

    </Main>
  );
};

export default App;
