import React from 'react';
import { DappUI, DappProvider } from '@elrondnetwork/dapp-core';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Layout from 'components/Layout';
import PageNotFound from 'pages/PageNotFound';
import { routeNames } from 'routes';
import routes from 'routes';
import 'react-responsive-modal/styles.css';
import '@elrondnetwork/dapp-core/build/index.css';

const environment = 'devnet';

const {
  TransactionsToastList,
  SignTransactionsModals,
  NotificationModal,
  DappCorePages: { UnlockPage }
} = DappUI;

const App = () => {
  return (
    <Router>
      <DappProvider
        environment={environment}
        customNetworkConfig={{ name: 'customConfig', apiTimeout: 6000 }}
        completedTransactionsDelay={200}
      >
        <Layout>
          <TransactionsToastList />
          <NotificationModal />
          <SignTransactionsModals className='custom-class-for-modals' />

          <Routes>
            {routes.map((route: any, index: number) => (
              <Route
                path={route.path}
                key={'route-key-' + index}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Layout>
      </DappProvider>
    </Router>
  );
};

export default App;
