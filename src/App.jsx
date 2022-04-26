import Main from './views/Main';
import { Header, Button } from './common';

const App = () => {
  const submitFormHandler = (event) => { console.log(event) };

  const cancelFormHandler = () => { console.log('Form was cleared') };

  return (
    <Main>
      <Header />
      <Button title="Submit" onClick={submitFormHandler} />
      <Button title="Cancel" onClick={cancelFormHandler} />
    </Main>
  );
};

export default App;
