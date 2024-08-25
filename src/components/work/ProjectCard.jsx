import React from 'react';

const ProjectCard = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt={item.title} className="work__img" />
      <div className="work__overlay">
        <h3 className="work__title">{item.title}</h3>
        <div className="work__icons">
          {item.gitUrl && (
            <a href={item.gitUrl} className="work__icon-link" target="_blank" rel="noopener noreferrer">
              <i className="bx bx-code work__icon"></i>
            </a>
          )}
          {item.previewUrl && (
            <a href={item.previewUrl} className="work__icon-link" target="_blank" rel="noopener noreferrer">
              <i className="bx bx-show work__icon"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
