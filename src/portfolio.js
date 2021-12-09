const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://larteyis.github.io',
  title: 'IL.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Isaac Lartey',
  role: 'Full Stack Developer',
  description:
    'I build elegant, performant full stack web applications.',
  resume: 'https://drive.google.com/file/d/12RKIrXlGRXJ83w71UnZ8QEf1fYGDwhJJ/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/isaac-lartey-346161139/',
    github: 'https://github.com/larteyis',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Interactive Online Form',
    description:
      'Recreated a responsive form based on a responsive mockup and incorporated form validation',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/larteyis/Interactive_Form.git',
    livePreview: 'https://modest-snyder-d6a3f9.netlify.app',
  },
  {
    name: 'Public API Request',
    description:
      'Created an employee directory by communicating with third-party API for info',
    stack: ['Ajax', 'JavaScript'],
    sourceCode: 'https://github.com/larteyis/Public_API_Request.git',
    livePreview: 'https://lucid-lamarr-957bc8.netlify.app',
  },
  {
    name: 'Random Quote Generator',
    description:
      'Displays a random quote from an array every time a  user clicks a button',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/larteyis/Random_Quote_Generator.git',
    livePreview: 'https://unruffled-murdock-22f9c8.netlify.app',
  },
  {
    name: 'OOP Game Show App',
    description:
      'Used object-oriented-programming to select a random hidden phrase for a player to guess',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/larteyis/OOP_Game_Show_App.git',
    livePreview: 'https://gallant-lichterman-c01635.netlify.app',
  },
  {
    name: 'Data Pagination and Filtering',
    description:
      'Simplified a large data of students by creating pages with fewer pages with pagination and a search bar',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/larteyis/Data_Pagination_And_Filtering.git',
    livePreview: 'https://zealous-ptolemy-801cd5.netlify.app',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Node.js',
  'Git',
  'Github',
  'Express',
  'Ajax',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'lartey.isaac@gmail.com',
}

export { header, about, projects, skills, contact }