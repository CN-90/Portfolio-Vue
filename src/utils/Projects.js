// Project Images
import movieHub from '../assets/moviehub2.jpg';
import fourHorse from '../assets/fourhorsemen.jpg';

// Tool images
import htmlImg from '../assets/html.png';
import reactImg from '../assets/react.png';
import reduxImg from '../assets/Redux.png';
import firebaseImg from '../assets/firebase.png';
import sassImg from '../assets/Sass.png';
import styledComp from '../assets/styled-components.png';
import movieDB from '../assets/moviedb.png';
import javascriptImg from '../assets/javascript.png';

const projects = [
  {
    title: 'Movie Hub',
    img: movieHub,
    description:
      "Movie Hub allows users to look up movies, add movies to favorites and leave reviews for movies they've seen. I built this project to expand my firebase knowledge and to improve my skills working with React, Redux and styled components.",
    tools: [
      { name: 'React', img: reactImg },
      { name: 'Redux', img: reduxImg },
      { name: 'Firebase', img: firebaseImg },
      { name: 'SASS', img: sassImg },
      { name: 'Styled Comp.', img: styledComp },
      { name: 'MovieDB API', img: movieDB }
    ],
    links: { github: '', live: '' }
  },
  {
    title: 'Four Horsemen',
    img: fourHorse,
    description:
      'This is a website I built for a ficticious tattoo parlor to practice my design, HTML and CSS skills. Built with HTML, SCSS and Javascript and the Google maps API',
    tools: [
      { name: 'HTML', img: htmlImg },
      { name: 'SASS', img: sassImg },
      { name: 'Javascript', img: javascriptImg }
    ]
  }
];

export default projects;
