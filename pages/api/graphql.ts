import { gql } from "@apollo/client";


export const GET_TOPICS = gql`
{
  topic{
    id
    topicName
    cards{
      id
      title
      description
    }
  }
}
`;

export const GET_CARDS = gql`
{
  cards{
    id
    title
    description
    topic{
      id
      topicName
    }
  }
}
`;


export const LOGIN = gql`
mutation lOGIN($email: String!  $password: String!){
  login(email: $email password: $password){
    token
    user{
      email
      Password
    }
  }
}
`;