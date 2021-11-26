import React, { useEffect }  from 'react';
import {  Container }  from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashbooard';
import { v4 as uuid } from 'uuid';
import { observer } from 'mobx-react-lite';
import HomePage from '../../features/activities/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import { Route, Switch, useLocation } from 'react-router';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import TestErrors from '../../features/errors/TestError';
import { ToastContainer } from 'react-toastify';
import NotFound from '../../features/errors/NotFound';
import ServerError from '../../features/errors/ServerError';
import LoginForm from '../../features/users/LoginForm';
import { useStore } from '../stores/store';
import LoadingComponent from './LoadingComponent';
import ModalContainer from '../common/modals/modalContainer';

uuid();

function App(): JSX.Element {

  const location = useLocation();
  const {commonStore,userStore} = useStore();

  useEffect(() =>{
    if (commonStore.token){
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore])


  if (!commonStore.appLoaded) return <LoadingComponent content='Loading ap..' />

  return (
    
    <>
    <ToastContainer position='bottom-right' hideProgressBar />
    <ModalContainer />
    <Route  exact path='/' component={HomePage} />
   <Route
     path={'/(.+)'}
     render={() =>(
       <>

      <NavBar  />
     <Container style={{marginTop: '7em'}}>
       <Switch>
       <Route exact path='/activities' component={ActivityDashboard} />
       <Route path='/activities/:id' component={ActivityDetails} />
       <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
       <Route path='/errors' component={TestErrors} />
       <Route path='/server-errors' component={ServerError} />
       <Route path='/login' component={LoginForm} />
       <Route component={NotFound} />
         </Switch>
       </Container>

       </> 
     )}
  />
  </>
    
  );
} 

export default observer (App);
