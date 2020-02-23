module.exports = {
  siteTitle: 'João Garcia | Software Engineer',
  siteDescription:
    'João Garcia is a software engineer based in Portugal who specializes in developing web applications.',
  siteKeywords:
    'João Garcia, Joao, João, Garcia, software engineer, back-end developer, fullstack developer, web developer, javascript, typescript',
  siteUrl: 'https://joao-garcia.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-4',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx944',
  name: 'João Garcia',
  location: 'Portugal',
  email: 'dev@joao-garcia.com',
  github: 'https://github.com/joao-garcia',
  twitterHandle: '@JooGarc56473873',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/joao-garcia',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jo%C3%A3o-garcia-a5728037/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/JooGarc56473873',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
