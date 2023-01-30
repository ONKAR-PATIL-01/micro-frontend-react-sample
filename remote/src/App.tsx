import React from "react";
import ReactDOM from "react-dom";
import {ErrorBoundary, useErrorHandler} from 'react-error-boundary'

import Counter from "./Counter";
import "./index.css";
const App = () => {
  const handleError= useErrorHandler();
  const errorHandler = function (error: any, errorInfo: any) {
  console.log("logging",error,errorInfo)
}
const Fallback = ()=>{
  return <h1>Something went wrong!!!</h1>
}
  
  return <div className="container1">
         <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
    <Counter/>
    </ErrorBoundary>
  </div>
}
ReactDOM.render(<App />, document.getElementById("app"));
