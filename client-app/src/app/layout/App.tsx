import React, {  useEffect } from 'react';
import {  Container }  from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../features/activities/dashboard/ActivityDashbooard';
import { v4 as uuid } from 'uuid';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
uuid();

function App(): JSX.Element {
  const {activityStore} = useStore();


 useEffect(() => {
   activityStore.loadActivities();

 }, [activityStore])

 

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />
  return (
    <>
     <NavBar  />
     <Container style={{marginTop: '7em'}}>

       
             <ActivityDashboard 
           
              />
       </Container>
       
     </>
  );
} 

export default observer (App);
