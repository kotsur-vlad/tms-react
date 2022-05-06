import { useState } from 'react';

// Компонента, которую хотим обернуть (снабдить доп. логикой)
const ComponentExample = () => {
  return <div>я обычная компонента</div>;
};

// HOC - high order component
const WithAuthHOC = (Component) => {
  const [auth, setAuth] = useState(false);

  function WrappedComponent(props) {
    return <Component auth={auth} setAuth={setAuth} {...props} />;
  }

  return WrappedComponent;
};

// пример вызова HOC-а
const newComponent = WithAuthHOC(ComponentExample);
