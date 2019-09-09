import React from "react";
import Amplify  from "aws-amplify";
import { withAuthenticator, ChatBot } from "aws-amplify-react-native";
import { Category } from "./source/Containers/Category.js";
import awsmobile from "./source/constants/awsmobile";
import { Schedule } from "./source/Containers/Schedule.js";

Amplify.configure(awsmobile);

export default withAuthenticator(Schedule);

