import React from 'react';
import { Card, Image , Button  } from 'semantic-ui-react';
import LoadingComponent from '../../../layout/LoadingComponent';

import { useStore } from '../../../stores/store';
//import ActivityDashboard from '../dashboard/ActivityDashbooard';




export default function AcitivityDetails(){

  const {activityStore} = useStore();
  const {selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore;

  if (!activity) return <LoadingComponent />;

    return (
        <Card fluid>
        <Image src={`assets/categoryImages/${activity.category}.jpg`}  />
    
        <Card.Content>
          <Card.Header>{activity.title}</Card.Header>
          <Card.Meta>
            <span >{activity.date}</span>
          </Card.Meta>
          <Card.Description>
           {activity.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group>
              <Button onClick={()=> openForm(activity.id)} basic color='blue' content='Edit' />
              <Button onClick={cancelSelectedActivity} basic color='grey' content='Cancel'/ >
          </Button.Group>
        </Card.Content>
      </Card> 
    )
}