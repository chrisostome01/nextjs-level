import { useQuery } from '@apollo/client';
import { ArrowUpIcon, ChevronRightIcon } from '@heroicons/react/solid'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { GET_TOPICS } from '../pages/api/graphql';
import { NavLinks } from './NavLinks';

type sideBar = {
    setActiceTopic:any,
    selectedCardIndex:any,
    selectCard:any,
    setTopicName:any
}
const SideBar = ({ setActiceTopic,selectedCardIndex,selectCard , setTopicName }:sideBar) =>{
    
    
    return(
        <div className="sideBar w-full min-h-screen  bg-white shadow-2xl flex flex-col justify-around items-center dark:bg-slate-900 py-3 ">
            <div className="log text-center text-indigo-500 tracking-wider">
                <span className="block text-6xl font-semibold">
                    FLASH
                </span>
                <span className="block text-6xl font-semibold">
                    CARD
                </span>
            </div>           
            <ul className="link tracking-wider text-center text-gray-500  font-bold text-lg max-h-96 overflow-y-auto ">
                <NavLinks setActiceTopic={setActiceTopic} selectCard={selectCard} setTopicName={setTopicName} />                
            </ul>
        </div>
    )
}


export default SideBar