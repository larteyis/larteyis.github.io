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
  resume: 'https://www.linkedin.com/in/isaac-lartey-346161139/',
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
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Public API Request',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Ajax', 'JavaScript'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Random Quote Generator',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'OOP Game Show App',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Data Pagination and Filtering',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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