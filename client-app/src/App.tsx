import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List }  from 'semantic-ui-react';


function App() {
 const[activities, setActivities] = useState([]);

 useEffect(() => {
 axios.get('http://localhost:5000/api/activities').then(response =>{
   console.log(response);
 setActivities(response.data);
 })
 }, [])



  return (
    <div>
      <Header as= 'h2' icon='users' content='Reactivities' />
     
        
          <li>Past Acitvity 1</li>
          <li>Past Activity 2 </li>
          <li> Future Acitvity 1</li>
          <li>Future Acitvity 2</li>
          <li>Future Acitvity 3</li>
          <li>Future Acitvity 4</li>
          <li>Future Acitvity 5</li>
          <li>Future Acitvity 6</li>
        
            <List>
            {activities.map((activity : any)=>(
               <List.Item key={activity.id}>
                  {activity.title}

               </List.Item>
             ))}
            </List>
             
        
       
     
    </div>
  );
}

export default App;
