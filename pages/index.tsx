/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import 'react-toastify/dist/ReactToastify.css';
import { useQuery } from "@apollo/client"
import {  useState } from 'react'
import { RenderCards } from '../components/RenderCards'
import { GET_CARDS, GET_TOPICS } from './api/graphql'
import { topicData } from '../utils/types/types.js'


const Home: NextPage = () => {
  const { loading , error , data } = useQuery(GET_CARDS);
  const { loading:loadingTopics , error:topicError , data:topicData } = useQuery(GET_TOPICS);
  const [ activeTopic ,setActiceTopic ] = useState(0);  
  const [ selectedCardIndex , selectCard ] = useState(0);
  const  [ topicName , setTopicName ]  = useState("")
  let firstCardIndex = 0;
  let lastCardIndex = 0;
  let activeCards:any = [];

  if(loadingTopics){
    return(
      <p>loading</p>
    )
  }

  if(topicError){
    return(
      <p>Please try again</p>
    )
  }
  

  if(activeTopic != 0){
    const topic = topicData.topic.filter((value:topicData) => value.id == activeTopic);
    activeCards = [];
    if(topic[0].cards.length != 0){
      activeCards = topic[0].cards;
      firstCardIndex = 0;
      lastCardIndex = activeCards.length;
    }  
  } 

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Flashcard app</title>
        <meta name="description" content="FlashCard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      <main className="min-w-full min-h-screen overflow-x-hidden overflow-y-hidden flex dark:bg-slate-900">
        {/* ========== Start: sideBar ========== */}
          <div className="lg:w-3/12 overflow-y-auto min-h-screen shadow-2xl">
            <SideBar setActiceTopic={setActiceTopic} selectedCardIndex={selectedCardIndex} selectCard={selectCard}  setTopicName={setTopicName} />
          </div>
        {/* ========== End: sideBar ============ */}
        {/* ========== Start: Middle content ========== */}
          <div className="lg:w-9/12 min-h-screen">
            <Header topicName={topicName == "" ? "Pick a topic" : topicName} topicId={activeTopic}  /> 
            <div className="content flex items-center justify-center h-full overflow-y-auto ">
              <RenderCards selectedCardIndex={selectedCardIndex} selectCard={selectCard} firstCard={firstCardIndex} lastCard={lastCardIndex} cardId={1} topicId={activeTopic} queryData={{ loading , error , activeCards }} />
            </div>           
          </div>
        {/* ========== End: Middle content ============ */}
      </main>
    </div>
  )
}



export default Home
