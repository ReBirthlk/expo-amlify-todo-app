import React from "react";
import { Category } from "./source/Containers/Category.js";
import { Schedule } from "./source/Containers/Schedule.js";
import  {Home} from "./source/Containers/Home.js";
import {StackNavigator} from 'react-navigation';

const MyRoutes=StackNavigator({
  HomeRT:{
    screen:Home
  },
  ScheduleRT:{
    screen:Schedule
  },
  CategoryRT:{
    screen:Category
  }
});

export default class App extends React.Component{
  render(){
    return (
      <MyRoutes/>
    );

  }
    
}
