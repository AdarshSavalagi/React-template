import { Provider } from 'react-redux';
import RouterProvider from './core/router/RouterProvider';
import { store, persister } from './core/store/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={<div>Loading...</div>} persistor={persister}>
                <RouterProvider />
            </PersistGate>
        </Provider>
    );
}

export default App;
