
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import DashBoard from '../components/DashBoard';
import AddPost from '../components/AddPost';
import EditPost from '../components/EditPost';
 
const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Header />
            <Switch>
                <Route path="/" component={DashBoard} exact={true} />
                <Route path="/add" component={AddPost} />
                <Route path="/Post/:id" component={EditPost} />
            </Switch>
        </div>
    </BrowserRouter>
);
 
export default AppRouter;