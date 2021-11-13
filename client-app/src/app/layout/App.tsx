import React  from 'react';
import {  Container }  from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../features/activities/dashboard/ActivityDashbooard';
import { v4 as uuid } from 'uuid';

import { observer } from 'mobx-react-lite';

import HomePage from '../features/activities/home/HomePage';
import ActivityForm from '../features/activities/form/ActivityForm';
import { Route, useLocation } from 'react-router';

import ActivityDetails from '../features/activities/details/ActivityDetails';

uuid();

function App(): JSX.Element {

  const location = useLocation();

  return (
    
    <>
    <Route  exact path='/' component={HomePage} />
   <Route
     path={'/(.+)'}
     render={() =>(
       <>

      <NavBar  />
     <Container style={{marginTop: '7em'}}>
    <Route exact path='/activities' component={ActivityDashboard} />
    <Route path='/activities/:id' component={ActivityDetails} />
    <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
    
  
       </Container>

       </>
     )}
  />
  </>
    
  );
} 

export default observer (App);
