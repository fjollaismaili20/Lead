
import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Icon, Segment, Button } from 'semantic-ui-react';

export default function NotFound(){
    return (
     <Segment placeholder>
         <Header icon>
           <Icon name='search' />
           Oops we've looked everywhere and could not find this.
         </Header>
         <Segment.Inline>
             <Button as={Link} to='/activities' primary>
                Return to Courses page
             </Button>
         </Segment.Inline>

     </Segment>
    )
}