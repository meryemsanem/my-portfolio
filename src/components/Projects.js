import React from 'react';
import styled from 'styled-components';
import backImage from './projectt.png';
import ProjectModals from './ProjectModals';

const ProjectsWrapper = styled.section`
  width: 100%;
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectItem = styled.div`
  position: relative;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 30px;
  overflow: hidden;

  img {
    width: 100%;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }

  .button-group {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }

    .button-group {
      opacity: 1;
    }
  }
`;
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Resort Vista',
      tech: 'Rails API, React, Redux and PostgreSQL.',
      description:
        'Resort Vista is a web application built with a Ruby on Rails backend API and a React frontend UI, offering users a platform to explore and manage resort reservations. Whether you are planning a getaway or looking for a relaxing vacation spot, Resort Vista provides a seamless experience to discover, reserve, and manage your resort bookings.',
      imageUrl: backImage,
    },
    {
      id: 2,
      title: 'Project 1',
      tech: 'Tech Stack For The Project',
      imageUrl: backImage,
    },
    {
      id: 3,
      title: 'Project 1',
      tech: 'Tech Stack For The Project',
      imageUrl: backImage,
    },
    {
      id: 4,
      title: 'Project 1',
      tech: 'Tech Stack For The Project',
      imageUrl: backImage,
    },
    {
      id: 5,
      title: 'Project 14',
      tech: 'Tech Stack For The Project',
      imageUrl: backImage,
    },
    {
      id: 6,
      title: 'Project 11',
      tech: 'Tech Stack For The Project',
      imageUrl: backImage,
    },
  ];

  return (
    <ProjectsWrapper>
      <ProjectList>
        {projects.map((project) => (
          <ProjectItem key={project.id}>
            <img src={project.imageUrl || backImage} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.tech}</p>
            <div className="button-group">
              <ProjectModals
                title={project.title}
                tech={project.tech}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            </div>
          </ProjectItem>
        ))}
      </ProjectList>
    </ProjectsWrapper>
  );
};

export default Projects;
