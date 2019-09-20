import React from "react";
import { Category } from "./source/Containers/Category.js";
import { Schedule } from "./source/Containers/Schedule.js";
import {Profile} from "./source/Containers/Profile.js";
import {PhoneNumber} from "./source/Containers/PhoneNumber.js";
import {OTP} from "./source/Containers/Otp.js";
import  {Home} from "./source/Containers/Home.js";
import {Language} from "./source/Containers/Language.js"
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
  },
  ProfileRT:{
    screen:Profile
  },
  PhoneRT:{
    screen:PhoneNumber
  },
  OtpRT:{
    screen:OTP
  },
  LanRT:{
    screen:Language
  }
});

export default class App extends React.Component{
  render(){
    return (
      <MyRoutes/>
    );

  }
    
}
