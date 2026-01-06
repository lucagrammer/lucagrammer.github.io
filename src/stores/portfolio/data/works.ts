import {Work} from '../../../models/work.model';

export const WORKS: Work[] =[
  {
    id: 'recomb',
    title: 'RecombinHunt',
    dateStart: 'Oct 2022',
    dateEnd: 'Jan 2023',
    tags: ['Complex UX', 'Vue.js', 'UX & UI design'],
    subtitle: 'Politecnico di Milano',
    expandedSubtitle: 'Collaboration with DEIB of Politecnico di Milano',
    subline: 'Development of an interactive and rich user interface for the analysis of genomic sequences to identify re-combinations between SARS-CoV-2 variants',
    cover: 'assets/works/rc/cover.png',
    url: 'https://lucagrammer.github.io/recombinhunt-test/',
    urlDisclaimer: 'DEMO VERSION ONLY! Using mocked data. Actual engine is not publicly available.',
    intro:
      '<p>Development of an interactive and rich user interface for the analysis of genomic ' +
      'sequences to identify <span class="colored-text">recombinations between SARS-CoV-2 variants</span>' +
      '</p>' +
      '<p>The intuitive web app allows the user to select the sequence to be analyzed in several ways:' +
      ' uploading it directly (FASTA file), providing the mutation list, or providing the sequence ID. ' +
      'In the latter case, the system will take care of downloading the corresponding sequence from the database.</p>' +
      '<p>After preliminary analysis, the user is informed of the estimated probability ' +
      'that the sequence is the result of recombination of variants.' +
      'Proceeding, the complete analysis, including recurrence plot, is generated. ' +
      'The latter plot provides a range of possible recombinations and the probability ' +
      'associated with the pair of lineages.' +
      'By selecting pairs from this plot, the user can deepen the analysis by ' +
      'generating similarity plots.</p>' +
      '<p>The graphs are <span class="colored-text">extremely flexible</span> and allow the user to perform as many ' +
      'operations as he or she wishes, including: adding annotations, focusing ' +
      'on a specific range, or even combining two similarity graphs into a ' +
      'comparison view.</p>',
    images: [
      { src: 'assets/works/rc/1.png', alt: 'Home page of the RecombinHunt application' },
      { src: 'assets/works/rc/2.png', alt: 'Sequence selection panel' },
      { src: 'assets/works/rc/3.png', alt: 'Preliminary analysis results' },
      { src: 'assets/works/rc/4.png', alt: 'Result page with mutation list and parameters tuning' },
      { src: 'assets/works/rc/5.png', alt: 'Result page with recurrence plot' },
      { src: 'assets/works/rc/6.png', alt: 'Result page with similarity plots' },
      { src: 'assets/works/rc/7.png', alt: 'Result page with similarity plots and annotations' },
      { src: 'assets/works/rc/8.png', alt: 'Settings panel' },
    ],
  },
  {
    id: 'gs',
    title: 'Graph-search',
    dateStart: 'Jul 2022',
    dateEnd: 'Oct 2022',
    tags: ['Complex UX', 'Vue.js', 'UX & UI design'],
    subtitle: 'Politecnico di Milano',
    expandedSubtitle: 'Collaboration with DEIB of Politecnico di Milano',
    subline: 'Development of a complex and highly interactive user interface for a search engine for the exploration of scientific literature using the “graphical abstract” paradigm.',
    cover: 'assets/works/gs/cover.png',
    url: 'http://geco.deib.polimi.it/graph-search/',
    intro:
      '<p>Design and development of a complex and <span class="colored-text">highly interactive user interface</span> for ' +
      '<span class="colored-text">a search engine</span> for the exploration of scientific literature using the “graphical abstract” paradigm.</p>' +
      '<p>Searching for information over graphs is rather intuitive, as users can express queries in ' +
      'the form of graph patterns. We consider the use of “graphical abstracts” (small graphs ' +
      'of concepts) as a means for expressing graph searches over existing biomedical literature, ' +
      'providing an interesting new application for exploring the supporting literature ' +
      'of given research findings.</p>',
    images: [
      { src:'assets/works/gs/1.png', alt: 'Home page of the Graph-Search application' },
      { src:'assets/works/gs/2.png', alt: 'Featured searches section' },
      { src:'assets/works/gs/3.png', alt: 'Page for creating a new search' },
      { src:'assets/works/gs/4.png', alt: 'Concept information panel' },
      { src:'assets/works/gs/5.png', alt: 'Subgraph selection panel' },
      { src:'assets/works/gs/6.png', alt: 'Path selection panel' },
      { src:'assets/works/gs/7.png', alt: 'Results page with path details' },
      { src:'assets/works/gs/8.png', alt: 'Results page with bibliography details' },
    ]
  },
  {
    id: 'vh2',
    title: 'Variant Hunter 2.0',
    dateStart: 'Jul 2022',
    dateEnd: 'Sept 2022',
    tags: ['Redesign', 'Vue.js', 'Python-Flask', 'Data Analysis', 'UX & UI design'],
    subtitle: 'Politecnico di Milano',
    expandedSubtitle: 'Collaboration with DEIB of Politecnico di Milano',
    subline: 'New look and dozens of new features for the VariantHunter tool. Redesigned from the ground up for better performance and even greater flexibility of use.',
    cover: 'assets/works/vh2/cover.png',
    url: 'http://cerilab.deib.polimi.it/variant_hunter/about',
    repoUrl: 'https://github.com/DEIB-GECO/VariantHunter',
    intro:
      '<b class="text-overline">Introduction</b>' +
      '<p>Variant Hunter is a highly flexible and user-friendly tool for systematic monitoring of the evolution of new ' +
      '<span class="colored-text">SARS-CoV-2 variants</span> at regional, national and continental levels.' +
      '<br>While more than tens of millions of genomic sequences of SARS-CoV-2 are available, their analysis would ' +
      'generally require a significant amount of manual work and engage a huge number of virologists worldwide.' +
      'Variant Hunter moves toward automating this work. ' +
      '</p>' +
      '<b class="text-overline">What\'s new</b>' +
      '<p>The tool has been redesigned from the ground up, based on feedback from end users and taking into account the direction the project has taken. ' +
      'Below are some of the improvements:</p>' +
      '<ul>' +
      '<li><b class="colored-text">New (beautiful) design</b>: the new interface separates the results from the analysis creation panel.</li>' +
      '<li><b class="colored-text">Introduction to lineage-specific analyses with multiple lineages</b>: you can now select multiple lineages in lineage-specific analyses. More: you can select entire branches of lineages by selecting values such as BA.1.* .</li>' +
      '<li><b class="colored-text">New speed Heat map</b>: a new heat map view allows you to discover the fastest growing mutations at a glance.' +
      '<li><b class="colored-text">Pick up where you left off</b>: now the application keeps all your data stored in your browser.</li>' +
      '<li><b class="colored-text">Introduction to tags</b>: it is now possible to associate a tag to each analysis. Tags allow you to group past analyses. But there is more: indeed, tags allow you to preserve filtering and sorting options between various analyses. So you can apply the same filters to an entire group of analyses.</li>' +
      '<li><b class="colored-text">Integration of covSPECTRUM</b>: It is now possible, by selecting mutations from the table, to generate a search on covSPECTRUM for those mutations.</li>' +
      '<li><b class="colored-text">Quick adjustment of analysis parameters</b>: with the brand new controls in the toolbar you can quickly and easily change the analysis parameters. For example you can move from lineage-specific to lineage-independent search; move to a larger geographic area and you can also shift the analysis period.</li>' +
      '</ul>',
    images:[
      { src: 'assets/works/vh2/1.png', alt: 'Variant Hunter 2.0 Sidebar' },
      { src: 'assets/works/vh2/2.png', alt: 'Variant Hunter 2.0 Homepage' },
      { src: 'assets/works/vh2/3.png', alt: 'Variant Hunter 2.0 New Analysis panel' },
      { src: 'assets/works/vh2/4.png', alt: 'Variant Hunter 2.0 Analysis results page' },
      { src: 'assets/works/vh2/5.png', alt: 'Variant Hunter 2.0 Diffusion trend view with evidence of trend change' },
      { src: 'assets/works/vh2/6.png', alt: 'Variant Hunter 2.0 Diffusion trend view' },
      { src: 'assets/works/vh2/7.png', alt: 'Variant Hunter 2.0 Notes and other advanced features' },
    ]
  },
  {
    id: 'vh',
    title: 'Variant Hunter',
    dateStart: 'Jan 2022',
    dateEnd: 'Jul 2022',
    tags: ['Vue.js', 'Python-Flask', 'Data Analysis', 'UX & UI design', 'Docker'],
    subtitle: 'Master\'s thesis',
    expandedSubtitle: 'Master\'s thesis project at Politecnico di Milano',
    subline: 'A highly flexible and user-friendly tool for systematic monitoring of the evolution of new SARS-CoV-2 variants at regional, national and continental levels.',
    cover: 'assets/works/vh/cover.png',
    url: 'http://cerilab.deib.polimi.it/variant_hunter/about',
    repoUrl: 'https://github.com/DEIB-GECO/VariantHunter',
    intro:
      '<p>Variant Hunter is a highly flexible and user-friendly tool for systematic monitoring of the evolution of new ' +
      '<span class="colored-text">SARS-CoV-2 variants</span> at regional, national and continental levels.' +
      '<br>While more than tens of millions of genomic sequences of SARS-CoV-2 are available, their analysis would ' +
      'generally require a significant amount of manual work and engage a huge number of virologists worldwide. </p>' +
      'Variant Hunter moves toward automating this work. Specifically, the tool analyzes the ' +
      '<span class="colored-text">frequencies of amino acid mutations</span> detected in the sequences over 4-week ' +
      'spans in specific locations, in order to hunt novel emerging variants as early as possible.\n' +
      '<br>Variant Hunter mainly supports two types of analysis, namely lineage-independent and lineage-specific analysis. ' +
      'The former has the primary objective of identifying the occurrence of new mutations at regional, national, ' +
      'or continental level. In contrast, the second feature focuses on the sequences of a specific lineage to support ' +
      'the discovery of new sub-lineages.',
    images:[
      { src: 'assets/works/vh/1.png', alt: 'Variant Hunter new analysis panel (lineage independent)' },
      { src: 'assets/works/vh/2.png', alt: 'Variant Hunter dataset explorer' },
      { src: 'assets/works/vh/3.png', alt: 'Variant Hunter mutation table' },
      { src: 'assets/works/vh/4.png', alt: 'Variant Hunter heatmap view' },
      { src: 'assets/works/vh/5.png', alt: 'Variant Hunter diffusion trend chart' },
      { src: 'assets/works/vh/6.png', alt: 'Variant Hunter diffusion odd ratio chart' },
      { src: 'assets/works/vh/7.png', alt: 'Variant Hunter info page' },
      { src: 'assets/works/vh/8.png', alt: 'Variant Hunter new analysis panel (lineage specific)' },
    ],
  },
  {
    id: 'eitm',
    title: 'EITM@Polimi',
    dateStart: 'Dec 2021',
    dateEnd: 'Jan 2022',
    tags: ['UX design', 'Usability'],
    subtitle: 'Politecnico di Milano',
    expandedSubtitle: 'Project fot the Multidisciplinary Project course, Politecnico di Milano',
    subline: 'Design and implementation of the website for the EIT Manufacturing Master School at Politecnico di Milano.',
    cover: 'assets/works/eitm/cover.png',
    url: 'https://www.eitm.polimi.it',
    urlDisclaimer: 'Current design may differ due to subsequent changes from 3rd parties.',
    intro:
      'The project consists of the development of the website of the EIT Manufacturing Master School course at the Politecnico di Milano. <br>' +
      'The <span class="colored-text">focus</span> of this project was on the study of a UX that would facilitate ' +
      'browsing information about the course and how to enroll. <br>' +
      'At the same time, however, we wanted to create a website with an attractive and modern look  in order to ' +
      'represent the innovation that characterizes the reality under consideration. ' +
      'Thus , the large amount of information to be displayed is carefully organized in an intuitive and effective design.',
    images:[
      { src: 'assets/works/eitm/1.png', alt: 'EITM@Polimi Homepage' },
      { src: 'assets/works/eitm/2.png', alt: 'EITM@Polimi Offer section' },
      { src: 'assets/works/eitm/3.png', alt: 'EITM@Polimi Overview section' },
      { src: 'assets/works/eitm/4.png', alt: 'EITM@Polimi Programs section' },
      { src: 'assets/works/eitm/5.png', alt: 'EITM@Polimi Apply page' },
      { src: 'assets/works/eitm/6.png', alt: 'EITM@Polimi Additional info page' },
      { src: 'assets/works/eitm/7.png', alt: 'EITM@Polimi Program page' },
    ],
  }
];
