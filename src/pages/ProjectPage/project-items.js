import React from 'react';

export default [{
  name: 'kwaddle',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Kwaddle: Frontend Dev
      </div>
      <div className='portfolio-item__desc'>
        Platform for parents and kids to find after-school and summer camp activities!
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3"></i>
        <i className="fab fa-js"></i>
        <i className="fab fa-python"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://www.kwaddle.com">Website</a>
      </div>
    </div>
  )
}, {
  name: 'yum-yum-recipes',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Yum-Yum Recipes: Backend Dev
      </div>
      <div className='portfolio-item__desc'>
        Fullstack application using Node, Express, MySQL, Sequelize. Find recipes and create a shopping list.
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3"></i>
        <i className="fab fa-js"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="http://yum-yumrecipes.herokuapp.com/">Website</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Rhyngoh/ProjectDionysus">More</a>
      </div>
    </div>
  )
}, {
  name: 'map-your-life',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Map Your Life: Fullstack Dev
      </div>
      <div className='portfolio-item__desc'>
        First Project of Coding Bootcamp using AJAX, Firebase, Google Maps API, and Foursquare API to find restaurants near you.
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
        <i className="fab fa-foursquare"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://rhyngoh.github.io/ProjectPrometheus/">Website</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Rhyngoh/ProjectPrometheus">More</a>
      </div>
    </div>
  )
}]