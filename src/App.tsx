import { useEffect } from 'react';

export const App: React.FC = () => {
  useEffect(() => {
    console.log('asd');
  }, []);

  return <div>Hello app!</div>;
};
