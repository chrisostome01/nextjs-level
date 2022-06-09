
export type topic ={
    id:number,
    topicName:String
}

export type topicParam = {
  topicName: String
}
export type Header = {
    topicName: String
    topicId: Number    
}
export type response = {    
    id:number,
    title: String,
    description: String,
    topic:topic
}

export type renderCardParam = {
    cardId: number,
    topicId: number,
    firstCard:number,
    lastCard:number,
    selectedCardIndex:any,
    selectCard:any,
    queryData:queryResponse
}

export type queryResponse = {
    loading: any,
    activeCards: any,
    error:any
}

export type card ={
    id:number,
    title: String,
    description: String
}

export type topicData = {
    id:Number,
    topicName:String,
    cards:card[]
}

export type topicResponse = {    
    id:number,
    topicName:String
}