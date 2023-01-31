import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Today's Top Headlines</h2>
        <div className='col-md-4 my-3'>
           <NewsItem title="myTitle" description="myDescription"/>
        </div>
      </div>
    )
  }
}
