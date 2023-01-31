import React, from 'react'

export default function NewsFunctional() {
    const[News,setNews]= useState([])
    let GetNews=async()=>{
        let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=6c9ca6d1c86d45a094f96408f61779dc"
        let data=await fetch(url)
        let parsedData=await data.json
        setNews(parsedData.articles)
        }
  return (
    <div className='container my-3'>
        <h2>Today's Top Headlines</h2>
        <div className='row'>
            {News.map((element)=>{
            return <div className='col-md-4' key={element.url}>
           <NewsItem title={element.title.slice(0,45)} description={element.description} urlToImage={element.urlToImage}/>
        </div>
            })}
      </div>
      </div>
  )
}
