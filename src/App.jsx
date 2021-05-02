import React from 'react';
import s from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
    return (
        <div className={s.app_Wrapper}>
            < HeaderContainer/>
            < Navbar
                // friends={props.state.sideBar}
            />
            <div className={s.app_Wrapper_Content}>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
                {/*<Route path='/news' component={ News }/>*/}
                {/*<Route path='/music' component={ Music }/>*/}
                {/*<Route path='/settings' component={ Settings }/>*/}
            </div>
        </div>
    );
};
export default App;