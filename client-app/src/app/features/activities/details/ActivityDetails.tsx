import React from 'react';
import { Card, Image , Button  } from 'semantic-ui-react';
import {  Activity } from '../../../models/activity';
//import ActivityDashboard from '../dashboard/ActivityDashbooard';


interface Props{
    activity: Activity;
    cancelSelectActivity : () => void;
    openForm: (id: string) => void;
}

export default function AcitivityDetails({activity, cancelSelectActivity, openForm} : Props){
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
              <Button onClick={cancelSelectActivity} basic color='grey' content='Cancel'/ >
          </Button.Group>
        </Card.Content>
      </Card> 
    )
}