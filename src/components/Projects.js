import React from 'react';
import styled from 'styled-components';
import backImage from '../images/projectt.png';
import resortImage from '../images/resort.png';
import exploreCountriesImage from '../images/explore-countries.png';
import toDoAppImage from '../images/todoapp.png';
import spaceTravelersImage from '../images/space-travelers.png';
import budgetAppImage from '../images/budgetapp.png';
import bookstoreImage from '../images/bookstore.png';
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
        '"Resort Vista" is a web application built with a Ruby on Rails backend API and a React frontend UI, offering users a platform to explore and manage resort reservations. Whether you are planning a getaway or looking for a relaxing vacation spot, Resort Vista provides a seamless experience to discover, reserve, and manage your resort bookings.',
      imageUrl: backImage,
      modalImg: resortImage,
      liveDemoLink: 'https://resortvista.onrender.com/',
      githubSourceLink: 'https://github.com/meryemsanem/resort-back-end',
    },
    {
      id: 2,
      title: 'Budget App',
      tech: 'Ruby on Rails and PostgreSQL.',
      description:
        '"Budget App" is a Ruby on Rails mobile application designed to help users manage their expenses and budgets. With Budget App, users can track their expenses and categorize them to improve their financial management.',
      imageUrl: backImage,
      modalImg: budgetAppImage,
      liveDemoLink: 'https://budget-app-yvr4.onrender.com/',
      githubSourceLink: 'https://github.com/meryemsanem/budget-app',
    },
    {
      id: 3,
      title: 'Space Travelers Hub',
      tech: 'React, Redux and external API.',
      description:
        '"Space Travelers Hub" is a dynamic single-page web app connecting users to comprehensive rocket and mission data from SpaceX. Explore rockets, missions, and your profile seamlessly.',
      imageUrl: backImage,
      modalImg: spaceTravelersImage,
      liveDemoLink: 'https://space-travelers-33zs.onrender.com/',
      githubSourceLink: 'https://github.com/meryemsanem/space-travelers-hub',
    },
    {
      id: 4,
      title: 'Explore The Countries',
      tech: 'React, Redux and external API.',
      description:
        '"Explore The Countries" is a web application built using React and Redux that displays information about different countries. It consists of the following main pages: Homepage and Details. The project provides a user-friendly interface for users to search, sort, and view details about different countries.',
      imageUrl: backImage,
      modalImg: exploreCountriesImage,
      liveDemoLink: 'https://explore-the-countries.onrender.com/',
      githubSourceLink:
        'https://github.com/meryemsanem/countries-capstone-project',
    },
    {
      id: 5,
      title: 'To Do List',
      tech: 'React and CSS.',
      description:
        '"To Do App" is a tool that helps to organize your day, built with HTML, CSS, JavaScript and React. With its management features, User can add, mark as completed, remove tasks and make changes to tasks.',
      imageUrl: backImage,
      modalImg: toDoAppImage,
      liveDemoLink: 'https://meryemsanem.github.io/To-Do-List/dist/',
      githubSourceLink: 'https://github.com/meryemsanem/react-todo-app',
    },
    {
      id: 6,
      title: 'Bookstore',
      tech: 'React and Redux.',
      description:
        '"Bookstore" is a user-friendly application enabling book enthusiasts to effortlessly manage their book collections. Users can view, add, and remove books, as well as edit book details. ',
      imageUrl: backImage,
      modalImg: bookstoreImage,
      liveDemoLink: 'https://bookstore-gxx9.onrender.com/',
      githubSourceLink: 'https://github.com/meryemsanem/Bookstore',
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
                modalImg={project.modalImg}
                liveDemoLink={project.liveDemoLink}
                githubSourceLink={project.githubSourceLink}
              />
            </div>
          </ProjectItem>
        ))}
      </ProjectList>
    </ProjectsWrapper>
  );
};

export default Projects;
