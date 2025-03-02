import { combineReducers } from "redux";

import MyBasic from "./basicreducer";
import MyContact from "./contactreducer";
import MyEducation from "./edureducer";
import MyExperience from "./expreducer";
import MyProject from "./projectreducer";
import MySkill from "./skillreducer";

const MainReducer = combineReducers({
    MyBasic, MyContact, MyEducation, MyExperience, MyProject, MySkill
})

export default MainReducer;