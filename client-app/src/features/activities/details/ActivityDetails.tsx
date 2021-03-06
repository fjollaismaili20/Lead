import {  observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {  Grid  } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';

import { useStore } from '../../../app/stores/store';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedSidebar from './ActivityDetailedSidebar';
import ActivityDetailedHeader from './ActivityDetaledHeader';
import ActivityDetailedInfo from './ActvityDetailedInfo';
//import ActivityDashboard from '../dashboard/ActivityDashbooard';




export default observer (function AcitivityDetails() {

  const {activityStore} = useStore();
  const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
  const {id} = useParams<{id: string}>();

  useEffect(() =>{
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loadingInitial || !activity) return <LoadingComponent />;

    return (
       <Grid>
         <Grid.Column width={10}>
         <ActivityDetailedHeader activity={activity} />
         <ActivityDetailedInfo activity={activity} />
         <ActivityDetailedChat />
         </Grid.Column>
         <Grid.Column width={6}>
          <ActivityDetailedSidebar activity={activity} />
         </Grid.Column>
       </Grid>
    )
})