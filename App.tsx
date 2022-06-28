import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import Main from './src/navigation/Main';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </QueryClientProvider>
    </>
  );
};
export default App;
