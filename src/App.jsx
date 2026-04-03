import Header from "./header/Header";
import NewsList from "./components/NewsList";
import { newsData } from "./utils/Data"
import { useState, useSyncExternalStore } from "react";

export default function App(){
  const [news,setNews] = useState(newsData)
  const getKeywords = (event)=>{
    let keywords = (event.target.value)
    let filtered = newsData.filter(item=>{
      return item.title.indexOf(keywords)>-1
    })
    setNews(filtered)
  }
  
  return(
    <>
    <Header getKeywords={getKeywords}/>
    <NewsList news = {news}/>

    
    </>
  )
}