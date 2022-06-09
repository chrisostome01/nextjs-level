/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';


const renderMyContent = (content = "" ) =>{
    let result = ""
    for(let i =0; i < (Math.round(content.length / 3)) ; i++){
        result += content[i]
    }
    return result;
}

export const Card = ({ title , content }) => {
    const ref = useRef();
    return(
        <Flippy flipOnHover={true} flipOnClick={true} flipDirection="vertical" ref={ref} className="card w-4/12 h-2/6 2xl:h-60  p-3 mx-4 ">
            <FrontSide  className="card w-4/12 min-h-2/6 2xl:h-60 bg-gray-200 dark:bg-gray-800 rounded-md shadow-xl text-center p-3 mx-4 flex flex-col items-center justify-center"> 
                <div className="overlay opacity-0 hover:bg-slate-900  hover:dark:bg-slate-900 hover:opacity-70  rounded-md h-full w-full absolute right-0 left-0 top-0 flex items-center justify-center ">
                </div>              
                <div className=" text-indigo-500 hover:text-indigo-500 font-bold text-lg 2xl:text-4xl">
                    { title }                  
                </div>
                <div className="text-gray-500 font-medium 2xl:text-lg max-h-full overflow-y-auto overflow-ellipsis">
                    <p>
                        { renderMyContent(content) }...
                    </p>
                </div>                
            </FrontSide>
            <BackSide className="card w-4/12 min-h-2/6 2xl:h-60 bg-gray-200 dark:bg-gray-800 rounded-md shadow-xl text-center p-3 mx-4  flex flex-col items-center justify-center">
                <div className="text-gray-500 font-medium 2xl:text-xl max-h-full overflow-y-auto">
                    <p>
                        { content }
                    </p>
                </div>    
            </BackSide>
        </Flippy>
    )
}