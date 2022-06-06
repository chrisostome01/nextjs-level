/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { GET_CARDS } from "../pages/api/graphql"
import { renderCardParam, response } from "../utils/types/types"
import { Card } from "./Card.jsx"
import {  ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'



export const RenderCards = ({ cardId , topicId ,queryData , firstCard , lastCard , selectedCardIndex,selectCard }:renderCardParam ) => {
    const { loading , error , activeCards } =  queryData;

    if(loading){
        return(
            <Card title={"Fetching cards"} content={"Loading"} />
        )
    }

    if(error){
        return(
            <Card title={"Something wrong happend"} content={"Try again sometime"} />
        )
    }

    if(topicId == 0){
        return(
            <Card title={"please pick one of the topic"} content={"..."} />
        )
    }

    if(firstCard == 0 && lastCard == 0 ){
        return(
            <Card title={"No cards found, please pick another topic"} content={"..."} />
        )
    }


    if(selectedCardIndex == lastCard){
        return(
            <>
                {
                ( (selectedCardIndex >=  0) &&
                    <ChevronLeftIcon className="w-10 h-10 text-indigo-500 cursor-pointer hover:text-indigo-700" onClick={ () =>{
                       selectCard(selectedCardIndex - 1);
                    }}/>
                )
                }
                <Card title={"Conglaturation "} content={"You have reached to the end"} />
            </>
        )
    }

    return(
        <>
            {
                ( (selectedCardIndex >  0) &&
                    <ChevronLeftIcon className="w-10 h-10 text-indigo-500 cursor-pointer hover:text-indigo-700" onClick={ () =>{
                        selectCard(selectedCardIndex - 1);
                    }}/>
                )
            }
                <Card title={ activeCards[selectedCardIndex].title} content={activeCards[selectedCardIndex].description} />
            <ChevronRightIcon className="w-10 h-10 text-indigo-500 cursor-pointer hover:text-indigo-700" onClick={ () =>{
              if(selectedCardIndex != lastCard){
                selectCard(selectedCardIndex + 1);
              }
            }}/>
        </>
    )
}