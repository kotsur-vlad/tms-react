import { useState } from 'react';

// Компонента, которую хотим обернуть (снабдить доп. логикой)
const ComponentExample = () => {
  return (
    <div>я обычная компонента</div>
  );
};

// HOC - high order component
const withAuthHOC = (Component) => {
  const [auth, setAuth] = useState(false);

  let WrappedComponent = (props) => {
    return <Component auth={auth} setAuth={setAuth} {...props} />;
  };

  return WrappedComponent;
};

// пример вызова HOC-а
const newComponent = withAuthHOC(ComponentExample);
