import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound';
import UserForm from './pages/UserForm'
import ApplicantForm from './pages/ApplicantForm';
import Users from './pages/Users'
import Transactions from './pages/Transactions'
import TransactionForm from './pages/TransactionForm'
import Members from './pages/Members'
import UserSessionProvider from './utils/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faPlus, faChevronUp, faHome,
    faUserPlus, faUsers, faUsersCog,
    faEllipsisV} from '@fortawesome/free-solid-svg-icons';

function App() {
    library.add(fab, faPlus, faChevronUp, faHome, faUserPlus, faUsers, faUsersCog, faEllipsisV)
    return (
        <div>
            <UserSessionProvider>
                <Router>
                    <Switch>
                        <Route exact path='/login' component={Login}/>
                        <ProtectedRoute exact path='/' component={Home}/>
                        <ProtectedRoute path='/user/create' component={UserForm}/>
                        <ProtectedRoute path='/user' component={Users}/>
                        <ProtectedRoute path='/member/create' component={ApplicantForm}/>
                        <ProtectedRoute path='/member' component={Members}/>
                        <ProtectedRoute path='/transaction/create' component={TransactionForm}/>
                        <ProtectedRoute path='/transaction' component={Transactions}/>
                        <Route path='*' component={NotFound}/>
                    </Switch>

                </Router>
            </UserSessionProvider>

        </div>
    );
}

export default App;
