import {Job} from '../../../models/job.model';

export const JOB_EXPERIENCES: Job[] = [
  {
    img: 'assets/images/reply.png',
    color: 'cyan',
    date: 'January 2023 - Current',
    position: 'IT Consultant',
    place: 'Reply SPA',
    department: 'Techology Reply Financial Services',
    body: '<p>Developed and maintained enterprise credit risk applications for multiple major banking institutions, ' +
      'supporting high-impact digital transformation and automated customer credit assessments.<p/>'+
      '<p>Involved in end-to-end development — including design, business logic implementation, ' +
      'front-end development, and legacy migration — while leading development teams.</p>',
    companyLink: 'https://www.reply.it',
    linkedinLink: 'https://www.linkedin.com/in/lucagrammer/',
    keys: ['Angular', 'Java', 'Quarkus','Spring','Scrum','React']
  },
  {
    img: 'assets/images/deib_logo.png',
    color: 'cyan',
    date: 'February 2022 - January 2023',
    position: 'Full Stack Web Developer and Data Analyst',
    place: 'Politecnico di Milano',
    department: 'Department of Electronics, Informatics and Bioengineering (DEIB)',
    body: '<p>Designed and developed web applications for the analysis of vast SARS-CoV-2 genomic datasets, ' +
      'supporting early variant detection and trend analysis.</p>' +
      '<p>Engineered advanced user interfaces for the graphical exploration of bibliographic resources, ' +
      'mapping concept correlations to visualize complex data relationships.</>',
    companyLink: 'https://www.deib.polimi.it/ita/home',
    linkedinLink: 'https://www.linkedin.com/in/lucagrammer/',
    keys: ['Vue.js','Python','Flask'],
  },
]
