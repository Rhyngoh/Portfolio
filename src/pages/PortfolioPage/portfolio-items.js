import React from 'react';

export default [{
  name: 'the-forge',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        The Forge
      </div>
      <div className='portfolio-item__desc'>
        Mobile Strategy Game for Android
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3"></i>
        <i className="fab fa-js"></i>
        <i className="fab fa-react"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://forge-website.herokuapp.com/">Website</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Rhyngoh/Forge-Website">More</a>
      </div>
    </div>
  )
}, {
  name: 'hot-words',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Hot Words
      </div>
      <div className='portfolio-item__desc'>
        1-week coding challenge: Race your friends to type the most words!
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
        <i className="fas fa-database"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://hotwords-1dcd8.firebaseapp.com/">Play</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Rhyngoh/HotWords">More</a>
      </div>
    </div>
  )
}, {
  name: 'nyt-article-scrubber',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        NYT Article Scrubber
      </div>
      <div className='portfolio-item__desc'>
        SPA using React, React-router, Express, Node
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
        <i className="fab fa-react"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://warm-depths-86835.herokuapp.com/#/">Try it!</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Rhyngoh/NYTReact">More</a>
      </div>
    </div>
  )
}]