import React from "react";
import ReactDOM from "react-dom/client";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"
import "./index.css";
import App from "./App";

const uri = "https://planner-graphql-node-server.herokuapp.com/graphql"

const client = new ApolloClient({
  uri:uri,
  cache: new InMemoryCache()
})


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
