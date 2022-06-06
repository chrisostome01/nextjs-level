import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_TOPICS } from "../pages/api/graphql";

export const NavLinks = ({ setActiceTopic,selectCard,setTopicName }:any) => {
    
    const [ topics , setTopics ] = useState([]);
    const { loading , error , data } = useQuery(GET_TOPICS);
    
    if (loading) {
        return(
            <li className="my-2 hover:text-indigo-500 text-indigo-700  cursor-pointer">Loading</li>
        )
    }

    if (loading) {
        return(
            <li className="my-2 hover:text-red-500 text-red-400 cursor-pointer">Network error</li>
        )
    }

    
    return(
        data.topic.map((value:any, index:number) => (
            <li key={index} onClick={()=>{
                  selectCard(0)
                  setActiceTopic(value.id);
                  setTopicName(value.topicName)
                }
            } className="my-2 hover:text-indigo-500 cursor-pointer uppercase">
                {
                    value.topicName
                }
            </li>
        ))
    )
}