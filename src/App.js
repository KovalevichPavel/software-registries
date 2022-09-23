import React from 'react';
import Main from './pages/main';
import RegistriesNews from './pages/registriesNews';
import Authorization from './pages/authorization';
import CreateNewAccount from './pages/creacteNewAccount';
import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Main />}/>
                    <Route path='registriesNews' element={<RegistriesNews />}/>
                    <Route path='authorization' element={<Authorization />}/>
                    <Route path='createNewAccount' element={<CreateNewAccount />}/>
                </Route>
            </Routes>
        </>    
    )
}

export default App;