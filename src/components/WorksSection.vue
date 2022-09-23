<template>
  <v-col cols=12 sm=10 class="mt-0">
    <h1 class="font-weight-bold mb-0 text--primary colored-text colored-text-var2">Works</h1>
    <v-row class="container ma-auto">
      <v-col v-for="work in works" :key="work.id" cols=12 md="6" lg="4" class="mt-0">
        <v-card class="mx-auto rounded-xl" flat>
          <v-img
              @click="showWork=true; showingWork=work"
              :src="work.cover"
              height="200px"
          ></v-img>

          <v-card-title class="work-title colored-text colored-hover-text" @click="showWork=true; showingWork=work">
            {{ work.title }}
          </v-card-title>

          <v-card-subtitle>
            <div class="work-subtitle mb-2">{{ work.subtitle }}</div>

            <div>{{ work.subsubtitle }}</div>
            <v-chip v-for="(tag, tag_index) in work.tags" :key="tag_index" x-small outlined :color="tagColors[tag]"
                    class="tags mr-2">
              {{ tag }}
            </v-chip>

          </v-card-subtitle>

          <v-card-actions class="justify-center">

            <v-btn color="primary" text rounded plain class="pa-4" @click.native="showWork=true; showingWork=work">
              More info
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- DIALOG -->
    <template>
      <div class="text-center">
        <v-dialog
            fullscreen
            v-model="showWork"
        >
          <WorkPage :showing-work="showingWork" :tagColors="tagColors" @showWork="(e)=>showWork=e"></WorkPage>
        </v-dialog>
      </div>
    </template>
  </v-col>
</template>

<script>
import WorkPage from "@/components/WorkPage";

export default {
  name: "WorksSection",
  components: {WorkPage},
  data() {
    return {
      works: [

        {
          id: 'vh',
          title: 'Variant Hunter',
          dateStart: 'Jan 2022',
          dateEnd: 'Jul 2022',
          tags: ['Vue.js', 'Python-Flask', 'Data Analysis', 'UX & UI design'],
          subtitle: 'Master\'s thesis',
          expandedSubtitle: 'Master\'s thesis project at Politecnico di Milano',
          subsubtitle: 'A highly flexible and user-friendly tool for systematic monitoring of the evolution of new SARS-CoV-2 variants at regional, national and continental levels.',
          cover: require("../assets/works/vh/cover.png"),
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
              'The former has the primary objective of identifying the occur- rence of new mutations at regional, national, or continental level. In contrast, the second feature focuses on the sequences of a specific lineage to support the discovery of new sub-lineages.',
          screenshots: [
            require("../assets/works/vh/1.png"),
            require("../assets/works/vh/2.png"),
            require("../assets/works/vh/3.png"),
            require("../assets/works/vh/4.png"),
            require("../assets/works/vh/5.png"),
            require("../assets/works/vh/6.png"),
            require("../assets/works/vh/7.png"),
            require("../assets/works/vh/8.png")
          ]
        },
        {
          id: 'eitm',
          title: 'EITM@Polimi',
          dateStart: 'Dec 2021',
          dateEnd: 'Jan 2022',
          tags: ['UX design', 'Usability'],
          subtitle: 'Politecnico di Milano',
          expandedSubtitle: 'Project fot the Multidisciplinary Project course, Politecnico di Milano',
          subsubtitle: 'Design and implementation of the website for the EIT Manufacturing Master School at Politecnico di Milano.',
          cover: require("../assets/works/eitm/cover.png"),
          url: 'https://www.eitm.polimi.it',
          intro:
              'The project consists of the development of the website of the EIT Manufacturing Master School course at the Politecnico di Milano. <br>' +
              'The <span class="colored-text">focus</span> of this project was on the study of a UX that would facilitate browsing information about the course and how to enroll. <br>' +
              'At the same time, however, we wanted to create a website with an attractive and modern look  in order to represent the innovation that characterizes the reality under consideration. ' +
              'Thus , the large amount of information to be displayed is carefully organized in an intuitive and effective design.',
          screenshots: [
            require("../assets/works/eitm/1.png"),
            require("../assets/works/eitm/2.png"),
            require("../assets/works/eitm/3.png"),
            require("../assets/works/eitm/4.png"),
            require("../assets/works/eitm/5.png"),
            require("../assets/works/eitm/6.png"),
            require("../assets/works/eitm/7.png")
          ]
        },
        {
          id: 'recsys',
          title: 'Recommender System',
          dateStart: 'Nov 2021',
          dateEnd: 'Dec 2021',
          tags: ['Python'],
          subtitle: 'Politecnico di Milano',
          expandedSubtitle: 'Project fot the Recommender System course, Politecnico di Milano',
          subsubtitle: 'Hyperparameter optimization for a recommender system.',
          cover: require("../assets/works/recsys/cover.png"),
          repoUrl: 'https://github.com/lucagrammer/recommender-system',
          intro:
              'The application domain is <span class="colored-text">TV programs recommendation. </span> ' +
              'The main goal of the competition is to discover which items (TV shows) a user will interact with.<br> ' +
              'More specifically, the task of the project is to discover the best algorithm to use and to appropriately ' +
              'tune its hyper-parameters.',
        },
        {
          id: 'jewelly',
          title: 'Jewelly Process Design',
          dateStart: 'Apr 2021',
          dateEnd: 'Jun 2021',
          tags: ['BPMN', 'Archimate', 'Swagger', 'REST API', 'Camunda', 'Docker'],
          subtitle: 'Politecnico di Milano',
          expandedSubtitle: 'Project fot the Process and Service Design course, Politecnico di Milano',
          subsubtitle: 'Business and application-level documentation of a manufacturing company.',
          cover: require("../assets/works/jewelly/cover.png"),
          repoUrl: 'https://github.com/lucagrammer/process-and-service-design',
          intro:
              'The project consists of drawing up <span class="colored-text">business and application-level documentation</span> of a manufacturing company. <br>' +
              'In particular: Archiamte Model, Business Process Choreography (with soundness assessment), Business Process Orchestration. \n' +
              '<br>The project also includes the design and implementation of <span class="colored-text">REST API</span> ' +
              'for interacting with suppliers, logistics partners and payment gateways. <br>' +
              'Finally, part of the business processes were made executable using Camunda Engine.\n',
        },
        {
          id: 'plugit',
          title: 'Plug-IT Website',
          dateStart: 'Mar 2021',
          dateEnd: 'Jun 2021',
          tags: ['UX & UI design', 'Accessibility', 'SEO', 'Nuxt.js', 'Node.js', 'CSS', 'SQL'],
          subtitle: 'Politecnico di Milano',
          expandedSubtitle: 'Project fot the Hypermedia Applications (Web and Multimedia) course, Politecnico di Milano',
          subsubtitle: 'Design and implementation of a web application with a very high level of accessibility, usability and SEO.',
          cover: require("../assets/works/plugit/cover.png"),
          url: 'https://plug-it.herokuapp.com/',
          repoUrl: 'https://github.com/lucagrammer/Plug-IT',
          intro: 'The project consists of:\n' +
              '<ul><li>drawing up an <span class="colored-text">evaluation of the usability</span> of the Reply.com web application through User Testing and Inspections;</li>' +
              '<li>designing and developing a <span class="colored-text">web application</span> with a very high level of accessibility, usability and SEO. ' +
              'More specifically this part of the project consists in the design and development of a website for Plug-IT, ' +
              'a medium-sized Italian company operating in the ICT sector that needs a website to make itself known and ' +
              'to show its offers.</li></ul>',
          screenshots: [
            require("../assets/works/plugit/1.png"),
            require("../assets/works/plugit/2.png"),
            require("../assets/works/plugit/3.png"),
            require("../assets/works/plugit/4.png"),
            require("../assets/works/plugit/5.png"),
            require("../assets/works/plugit/6.png"),
            require("../assets/works/plugit/7.png"),
            require("../assets/works/plugit/8.png")
          ]
        },
        {
          id: 'clup',
          title: 'CLUp: queue management',
          dateStart: 'Nov 2020',
          dateEnd: 'Dec 2020',
          tags: ['RASD', 'DD', 'Alloy', 'UML', 'UX & UI design'],
          subtitle: 'Politecnico di Milano',
          expandedSubtitle: 'Project fot the Software Engineering 2 course, Politecnico di Milano',
          subsubtitle: 'Designing software for supermarket queue management in the era of the Covid-19 pandemic.',
          cover: require("../assets/works/clup/cover.png"),
          repoUrl: 'https://github.com/lucagrammer/LeoniLocarnoMinotti',
          intro: 'The project consists in the drafting of the <span class="colored-text">RASD</span> (Requirements analysis and ' +
              'specification document) document and the <span class="colored-text">design document</span> of a complex ' +
              'software for managing queues at supermarkets in the era of the Covid-19 pandemic.',
          screenshots: [
            require("../assets/works/clup/1.png"),
            require("../assets/works/clup/2.png"),
            require("../assets/works/clup/3.png"),
            require("../assets/works/clup/4.png"),
            require("../assets/works/clup/5.png"),
          ]
        },
        {
          id: 'meetings',
          title: 'Meetings App',
          dateStart: 'Jun 2020',
          dateEnd: 'Jul 2020',
          tags: ['Java', 'Javascript', 'HTML', 'CSS', 'Thymeleaf', 'Servlet', 'SQL'],
          subtitle: 'Politecnico di Milano',
          expandedSubtitle: 'Project fot the Web Technologies course, Politecnico di Milano',
          subsubtitle: 'Implementation of a web app for meeting scheduling in Java.',
          cover: require("../assets/works/meetings/cover.png"),
          repoUrl: 'https://github.com/lucagrammer/meetings-manager-web-app',
          intro: 'The project consists of the implementation of a web app for meeting scheduling in Java.',
        },
        {
          id: 'santorini',
          title: 'Santorini Game',
          dateStart: 'Jan 2020',
          dateEnd: 'Jun 2020',
          tags: ['Java', 'Socket', 'MVC Pattern', 'UML', 'Java Swing'],
          subtitle: 'Politecnico di Milano',
          expandedSubtitle: 'Project fot the Ingegneria del Software course, Politecnico di Milano',
          subsubtitle: 'Distributed, multiplayer implementation of the Santorini board game.',
          cover: require("../assets/works/santorini/cover.png"),
          repoUrl: 'https://github.com/lucagrammer/Ing-Sw-2020-Leoni-Locarno-Minotti',
          intro: 'The project consists of the implementation of a distributed system consisting of a single ' +
              'server capable of handling multiple matches and multiple clients interacting via CLI or GUI. <p/> ' +
              'Specifically, the software consists of the implementation of the ' +
              '<span class="colored-text">board game Santorini</span>.'
        },
        {
          id: 'tracker',
          title: 'Efficient Relation Tracker',
          dateStart: 'Jun 2019',
          dateEnd: 'Aug 2019',
          tags: ['C', 'Efficient data structures', 'Efficient algorithms'],
          subtitle: 'Politecnico di Milano',
          expandedSubtitle: 'Project fot the Algoritmi e Strutture Dati course, Politecnico di Milano',
          subsubtitle: 'Implementation of an efficient system for monitoring relationships between generic entities.',
          cover: require("../assets/works/tracker/cover.png"),
          repoUrl: 'https://github.com/lucagrammer/relation-tracker',
          intro: 'The system implements a <span class="colored-text">mechanism for monitoring relationships between entities</span> ' +
              '(e.g., people) that change over time. <br>Imagine, for example, a social network, where new users can register, ' +
              'and existing users can delete their accounts, become "friends" with other users, break the friendship ' +
              'relationship, etc.<br> Relationships between entities are not necessarily symmetrical. ' +
              'For example, Alice can be "friends" with Bruno, but the friendship is not reciprocal (Bruno is not Alice\'s friend).'

        },
        {
          id: 'bookly',
          title: 'Bookly',
          dateStart: 'Jan 2017',
          dateEnd: 'Jul 2017',
          tags: ['HTML', 'CSS', 'Javascript', 'PHP','SQL' ,'UX & UI design'],
          subtitle: 'Project',
          expandedSubtitle: 'The social network for exchanging second-hand books at low prices.',
          subsubtitle: 'A free platform for buying and selling second-hand school books',
          cover: require("../assets/works/bookly/cover.png"),
          url: 'https://www.bookly.altervista.org',
          intro: 'Bookly is a free platform for <span class="colored-text">buying and selling second-hand school books</span>.<br>' +
              'Bookly has been created to offer students, from all Italian schools, an easy, safe and fast way to buy and sell texts.' +
              '<span class="colored-text">Key features</span>:' +
              '<ul><li>Buying books has never been easier: all you need is the ISBN code. Bookly will take care of the rest, showing you texts with that code for sale in your school or city.</li>' +
              '<li>Post an ad by simply selecting the book you intend to sell and indicating its price; Bookly will take care of entering the rest of the information automatically.</li>' +
              '<li>Bookly was developed to be accessible from any device, so you can buy books directly from your smartphone or TV.</li></ul>',
          screenshots: [
            require("../assets/works/bookly/1.png"),
            require("../assets/works/bookly/2.png"),
            require("../assets/works/bookly/3.png"),
            require("../assets/works/bookly/4.png"),
            require("../assets/works/bookly/5.png"),
          ]
        },
      ],
      showingWork: {},
      showWork: false,
      imageZoom: false,
      tagColors: {
        'UX design': "#fe6a6a",
        'Usability': "#997d65",
        'Vue.js': "#6acafe",
        'Python-Flask': "#fe6af7",
        'Python': "#fe6af7",
        'Data Analysis': "#6a83fe",
        'UX & UI design': "#fe6a6a",
        'BPMN': "#fe9e6a",
        'Archimate': "#d38b00",
        'Swagger': "#4bc406",
        'REST API': "#000000",
        'Camunda': "#6a99fe",
        'Docker': "#00c8e3",
        'Accessibility': "#c202a8",
        'SEO': "#e32200",
        'Nuxt.js': "#4c00e3",
        'Node.js': "#53e300",
        'CSS': "#e35700",
        'SQL': "#e3bd00",
        'RASD': "#8800e3",
        'DD': "#049f07",
        'Alloy': "#016c94",
        'UML': "#6b0121",
        'Java': "#b9d504",
        'Javascript': "#ec2b65",
        'HTML': "#01066b",
        'Thymeleaf': "#6c6a6b",
        'Servlet': "#ec3b05",
        'Socket': "#325d47",
        'MVC Pattern': "#6e7543",
        'Java Swing': "#fa9e15",
        'C': "#14e54f",
        'PHP': "#e514d4",
        'Efficient data structures': "#e54514",
        'Efficient algorithms': "#144fe5"
      }
    }
  },
}
</script>

<style>
.tags {
  text-transform: uppercase;
}

.work-title {
  word-break: break-word;
}

.work-subtitle {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
}

.work-title:hover {
  color: var(--v-secondary-base);
  cursor: pointer;
}

.work-date {
  font-weight: 300;
  text-transform: uppercase;
  line-height: 15px;
  width: 100%;
  text-align: right;
}

.cursor-reduce {
  cursor: zoom-out;
}

.cursor-expand {
  cursor: zoom-in;
}

.v-dialog {
  box-shadow: none !important;
}
</style>