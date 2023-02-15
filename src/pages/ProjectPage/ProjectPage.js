import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from '@components/PortfolioItem';
import ScrollToPrevious from '@components/ScrollToPrevious';
import projectItems from './project-items';

import './style.scss';

const ProjectPage = (props, context) => {
  const {
    theme: { colorPrimary, colorAlternate, textAlternate, bgPrimary }
  } = context;

  return (
    <div className="project-page" style={{ backgroundColor: bgPrimary }}>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>UT Coding Bootcamp Projects</h1>
        <div className="portfolio-wrapper">
          <style jsx="true">
            {`
              .portfolio-item {
                background-color: ${colorPrimary};
                color: ${textAlternate};
              }
              .portfolio-item a {
                color: ${textAlternate};
              }
              .portfolio-item__links a:hover {
                border-bottom: 2px solid ${colorAlternate};
              }
            `}
          </style>
          {projectItems.map((item, i) => (
            <ProjectItem render={item.render} key={i} />
          ))}
        </div>
      </div>
      <ScrollToPrevious pageSelector=".portfolio-page" />
    </div>
  );
};

ProjectPage.contextTypes = {
  theme: PropTypes.any
};

export default ProjectPage;
