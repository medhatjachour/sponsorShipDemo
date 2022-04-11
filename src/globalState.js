import { createGlobalState } from "react-hooks-global-state";
import {Users} from './dummydata'

const {setGlobalState, useGlobalState} = createGlobalState({
    "theGlobalData" : Users,
  
})
export {setGlobalState, useGlobalState}