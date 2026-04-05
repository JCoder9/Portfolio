import { Project } from '../shared/models/project.model';
import { CATEGORIES } from './category-data';

export const projectData: Project[] = [
  {
    id: 1,
    slug: 'all-angles-news',
    title: 'All Angles News',
    category: CATEGORIES.find((cat) => cat.name === 'Software & AI'),
    overview: `All Angles News is a sophisticated news aggregation platform designed to combat media bias and echo chambers by presenting the same stories from multiple political perspectives (left, center, right). The platform features real-time news feeds from diverse sources, comprehensive topic extraction using AI and structured data parsing, and innovative perspective comparison tools that help users understand how different outlets cover the same events.`,
    goals: [
      'Create a bias-aware news platform that promotes media literacy.',
      'Implement comprehensive topic extraction from multiple data sources (JSON-LD, Open Graph, meta tags).',
      'Develop real-time RSS aggregation with political bias classification.',
      'Build a scalable serverless architecture with Firebase Functions.',
      'Showcase advanced full-stack development and news API integration skills.',
    ],
    images: [
      'assets/AllAnglesNews/homepage_live_feed.jpg',
      'assets/AllAnglesNews/perspective_comparison.jpg',
      'assets/AllAnglesNews/deep_dive_timeline.jpg',
      'assets/AllAnglesNews/sketchy_news.jpg',
    ],
    phases: [
      {
        name: 'Phase 1: Architecture and Planning',
        tasks: [
          'Technical Architecture: Design serverless architecture using Next.js, Firebase Functions, and Python pipeline.',
          'News Source Research: Identify reliable RSS feeds across political spectrum (NPR, BBC, Breitbart, etc.).',
          'Database Schema: Design Prisma schema for articles, topics, and source metadata with proper indexing.',
          'UI/UX Design: Create responsive design system with dark/light themes and mobile-first approach.',
        ],
      },
      {
        name: 'Phase 2: Data Pipeline Development',
        tasks: [
          'RSS Aggregation: Build Python pipeline using feedparser for reliable RSS feed processing.',
          'Topic Extraction System: Implement 4-tier extraction (JSON-LD → Open Graph → Meta Keywords → Headline Analysis).',
          'Political Bias Classification: Develop domain-based bias classification system for news sources.',
          'Error Handling: Add comprehensive timeout, retry, and fallback mechanisms for unreliable feeds.',
        ],
      },
      {
        name: 'Phase 3: Frontend Development',
        tasks: [
          'Core Components: Build reusable React components for article cards, navigation, and filtering.',
          'Page Architecture: Develop News Feed, All Angles (perspective comparison), and Deep Dive (timeline) pages.',
          'State Management: Implement article caching and cross-page data consistency.',
          'TypeScript Integration: Add comprehensive type safety for all news data structures.',
        ],
      },
      {
        name: 'Phase 4: Advanced Features',
        tasks: [
          'Perspective Comparison: Group articles by story and display different political viewpoints side-by-side.',
          'Timeline View: Create chronological story development tracking in Deep Dive section.',
          'Topic Filtering: Build dynamic filtering system with real-time topic extraction.',
          'Search and Discovery: Implement article search with topic-based recommendations.',
        ],
      },
      {
        name: 'Phase 5: API Development',
        tasks: [
          'REST API Design: Create comprehensive news API endpoints with filtering and pagination.',
          'Firebase Functions: Deploy serverless API with proper CORS and error handling.',
          'Caching Strategy: Implement efficient data caching to reduce API calls and improve performance.',
          'Rate Limiting: Add protection against abuse while maintaining user experience.',
        ],
      },
      {
        name: 'Phase 6: Production Optimization',
        tasks: [
          'Performance Testing: Optimize bundle size, implement lazy loading, and improve Core Web Vitals.',
          'Error Boundaries: Add comprehensive React error handling with user-friendly fallbacks.',
          'SEO Optimization: Implement meta tags, structured data, and Open Graph for social sharing.',
          'Monitoring: Set up error tracking and performance monitoring for production deployment.',
        ],
      },
      {
        name: 'Phase 7: Deployment and Scaling',
        tasks: [
          'Firebase Deployment: Configure Firebase hosting with Functions for scalable serverless architecture.',
          'CI/CD Pipeline: Set up GitHub Actions for automated testing and deployment.',
          'Environment Configuration: Manage production secrets and environment-specific settings.',
          'Load Testing: Verify platform performance under realistic traffic conditions.',
        ],
      },
      {
        name: 'Phase 8: Enhancement and Maintenance',
        tasks: [
          'User Analytics: Implement usage tracking to understand how users consume news across perspectives.',
          'Content Quality: Add article verification and fact-checking integration capabilities.',
          'Mobile Optimization: Enhance mobile experience with progressive web app features.',
          'Community Features: Consider user feedback systems and preference customization.',
        ],
      },
    ],
    conclusion: `All Angles News successfully demonstrates advanced full-stack development capabilities while addressing a critical need for unbiased news consumption. The platform combines cutting-edge web technologies with innovative news aggregation techniques to create a unique media literacy tool. Key technical achievements include building a robust RSS processing pipeline that handles unreliable feeds, implementing comprehensive topic extraction with 100% coverage guarantee, solving complex React state management for cross-page data consistency, and deploying a production-ready serverless architecture on Firebase. The project showcases expertise in TypeScript, Next.js, Python, Firebase Functions, and modern web development practices while tackling real-world challenges in news aggregation and political bias detection.`,
    link: 'https://allanglesnews-311cc.web.app',
    githubLink: '',
  },
  {
    id: 2,
    slug: 'wandr-buddy',
    title: 'WandRBuddy',
    category: CATEGORIES.find((cat) => cat.name === 'Mobile Apps'),
    overview: `WandRBuddy is a mobile safety and companion-planning app designed to help users request walking companions, collaborate on routes, and access emergency support in real time. Built with Expo, React Native, and TypeScript, the app combines live location sharing, collaborative route planning, distress workflows, chat, and safety-conscious UI design into a single product focused on public, visible, and socially supported walking experiences. The project demonstrates end-to-end mobile product thinking, from native device capabilities and custom map rendering with MapLibre to route planning flows, themed modal systems, and a scalable architecture that can evolve from mock services into production Firebase-backed infrastructure.`,
    goals: [
      'Build a privacy-aware mobile safety product centered on walk requests, live coordination, and emergency response.',
      'Create a collaborative route planner where users can set start and destination points, add stops, and propose route changes.',
      'Integrate maps, device location, camera, motion sensors, and real-time-style workflows into a cohesive React Native experience.',
      'Design an intentional mobile UI system with a distinctive sunburst visual identity, reusable components, and consistent interaction patterns.',
      'Demonstrate production-relevant mobile engineering skills across TypeScript, Expo native modules, mapping, state management, and scalable app architecture.',
    ],
    images: [
      'assets/WandRBuddy/homeRequests.jpg',
      'assets/WandRBuddy/homeProfile.jpg',
      'assets/WandRBuddy/routes1.jpg',
      'assets/WandRBuddy/routes2.jpg',
      'assets/WandRBuddy/walkRequest.jpg',
      'assets/WandRBuddy/walkRequestPopup.jpg',
      'assets/WandRBuddy/chats.jpg',
      'assets/WandRBuddy/emergency.jpg',
      'assets/WandRBuddy/emergencyAlerts.jpg',
    ],
    phases: [
      {
        name: 'Phase 1: Product Definition and Architecture',
        tasks: [
          'Defined the core safety workflows for requesting a walking companion, accepting a request, planning a shared route, and escalating to emergency mode.',
          'Structured the app around Expo and React Native with TypeScript, React Navigation, and modular screen/component boundaries.',
          'Designed context-based state layers for authentication, location, and emergency workflows to support clear separation of concerns.',
          'Planned a development approach using mock Firebase-style services first, with a path toward production backend integration.',
        ],
      },
      {
        name: 'Phase 2: Core Mobile Foundations',
        tasks: [
          'Implemented authentication, profile, request, chat, and emergency screen flows using a mobile-first navigation architecture.',
          'Integrated Expo native capabilities including location, camera, media handling, and motion/shake detection support.',
          'Built reusable UI primitives and shared theming to keep behavior and styling consistent across the app.',
          'Created mock data pipelines and service abstractions to enable local development without depending on a live backend.',
        ],
      },
      {
        name: 'Phase 3: Mapping and Route Planning',
        tasks: [
          'Integrated MapLibre for custom map rendering, markers, route overlays, and map-based interaction within React Native.',
          'Built a route planner that supports typed start and destination search, current-location centering, map-based point selection, and manual stop placement.',
          'Added explicit “select on map” modes so start and destination can be placed directly from the map UI.',
          'Implemented route-stop workflows that allow users to add cafes, parks, or other public waypoints along a walk.',
        ],
      },
      {
        name: 'Phase 4: Free-Stack Route Intelligence',
        tasks: [
          'Connected the planner to free public services for route and place intelligence using Photon for place suggestions, Overpass for POIs, and OSRM for walking routes.',
          'Added route recommendation cards that score route options based on nearby public places such as cafes, parks, libraries, and transit stops.',
          'Built stop suggestion flows that surface POIs visually on the map and allow them to be added directly into the route.',
          'Separated fetched route geometry from user-added route stops to preserve route quality and avoid corrupting the route path.',
        ],
      },
      {
        name: 'Phase 5: Walk Request and Collaboration Flows',
        tasks: [
          'Implemented request creation, acceptance, requester review, and active-walk screens to support both solo and collaborative planning.',
          'Built route response workflows so users can accept a proposed route as-is or propose changes back to the requester.',
          'Added multi-responder requester flows where the original requester can review and select from incoming responses.',
          'Designed the app to support both direct user targeting and nearby-user broadcast requests.',
        ],
      },
      {
        name: 'Phase 6: Emergency and Safety Features',
        tasks: [
          'Built distress-mode flows that use device capabilities to support emergency alerting and camera-based recording scaffolding.',
          'Integrated emergency alerts, responder flows, and high-priority UI affordances for urgent states.',
          'Added shake-detection hooks and safety-conscious interaction patterns while keeping accidental triggering under control.',
          'Designed the emergency flows to be extensible for future contact notification, media upload, and escalation services.',
        ],
      },
      {
        name: 'Phase 7: Design System and UX Refinement',
        tasks: [
          'Created a custom pastel sunburst design system with shared gradients, surfaces, borders, shadows, and iconography.',
          'Replaced inconsistent emoji-based UI with a cohesive Lucide icon system for a more professional and product-ready presentation.',
          'Built reusable themed dialog components to replace native alerts and maintain visual consistency across key user flows.',
          'Applied the design system across request, route-planning, active-walk, distress, chat, and profile experiences.',
        ],
      },
      {
        name: 'Phase 8: Production Readiness and Portfolio Value',
        tasks: [
          'Organized the app around reusable services and abstractions so the free-stack planner can later be swapped for hosted providers without rewriting the UI.',
          'Kept the architecture compatible with a future Firebase-backed production model for authentication, chat, walk requests, and emergency events.',
          'Validated TypeScript integrity and mobile build compatibility while iterating on native dependencies and environment setup.',
          'Positioned the project as a portfolio piece that demonstrates mobile product design, mapping workflows, native device integration, and full-stack thinking.',
        ],
      },
    ],
    conclusion: `WandRBuddy is a strong portfolio project because it demonstrates substantially more than standard CRUD mobile development. It combines React Native product design, TypeScript architecture, native device integration, custom mapping workflows, route planning, safety-oriented UX, and scalable service abstraction in one cohesive application. From an employer’s perspective, the project highlights practical experience with Expo, React Native, TypeScript, React Navigation, MapLibre, expo-location, expo-camera, expo-sensors, expo-linear-gradient, lucide-react-native, react-native-svg, AsyncStorage, and Firebase-oriented service patterns. It also shows strong judgment in problem solving: replacing brittle native alerts with reusable themed dialogs, stabilizing native library integration, supporting collaborative route editing, and building a low-cost MVP planner using public geospatial services. The result is a differentiated mobile product that reflects both engineering rigor and product sense, especially around safety, mapping, and real-world user workflows.`,
    link: '',
    githubLink: '',
  },
  {
    id: 5,
    slug: 'zodi-angular-nx-ecommerce',
    title: 'Zodi - Angular NX E-Commerce Solution',
    category: CATEGORIES.find((cat) => cat.name === 'Software & AI'),
    overview: `Zodi is an e-commerce solution built using Angular NX, designed to deliver a seamless online shopping experience for shoppers. This project not only includes the customer shoe store website but also a dedicated admin portal within the same NX project. The admin portal allows administrators to manage orders, products, and inventory, ensuring that any changes made here are instantly reflected on the main Zodi website.`,
    goals: [
      'E-Commerce Platform: Develop a feature-rich e-commerce platform, allowing customers to explore and purchase shoe products.',
      'Responsive Design: Implement responsive design principles across the main website and admin portal using Angular NX, ensuring accessibility on various devices.',
      'Secure Payments: Integrate Stripe payment gateway for secure and efficient online transactions.',
      'Sass Styling: Utilize Sass for consistent and customizable UI/UX.',
      'Database Connectivity: Establish server-side connectivity through Node.js and MongoDB for efficient inventory management, order processing, and seamless data synchronization between the main website and admin portal.',
      'Admin Portal: Create a robust admin portal within the same Angular NX project, allowing administrators to manage orders, products, and inventory with real-time synchronization to the main website.',
    ],
    images: [
      'assets/zodi/zodi_home.png',
      'assets/zodi/zodi_products.png',
      'assets/zodi/zodi_categories.png',
    ],
    phases: [
      {
        name: 'Phase 1: Planning and Design',
        tasks: [
          'Define project scope and objectives for both the main website and admin portal',
          'Develop the design and functionality of the site.',
          'Plan Stripe integration for secure payment processing.',
          'Define requirements for real-time data synchronization between the main website and admin portal.',
        ],
      },
      {
        name: 'Phase 2: Front-End Development',
        tasks: [
          'Set up the Angular NX project structure, organizing code for modularity and reusability.',
          'Create user interfaces for the main website, including product browsing, details, and the shopping cart.',
          'Develop the responsive design using Angular Flex Grid and Sass for styling.',
          'Implement Stripe integration for secure payment processing on the main website.',
          'Create a user-friendly admin portal with Angular components and views.',
        ],
      },
      {
        name: 'Phase 3: Back-End Development',
        tasks: [
          'Develop a Node.js server to handle user accounts, orders, and inventory management.',
          'Implement server routes for user authentication, product retrieval, and order processing.',
          'Establish a secure connection to the MongoDB database for storing product data and user information.',
          'Set up an API for seamless communication between the main website, admin portal, and the backend.',
        ],
      },
      {
        name: 'Phase 4: Real-Time Data Synchronization',
        tasks: [
          'Implement a real-time data synchronization mechanism between the main website and the admin portal.',
          'Ensure that changes made in the admin portal (such as adding, editing, or deleting products) are instantly reflected on the main website and vice versa.',
        ],
      },
      {
        name: 'Phase 5: Testing and Optimization',
        tasks: [
          'Conduct rigorous testing, including functional, usability, and security testing.',
          'Optimize the performance of both the main website and admin portal.',
          'Address and resolve any identified bugs, issues, or user feedback.',
        ],
      },
      {
        name: 'Phase 6: Launch and Post-Launch Support',
        tasks: [
          'Monitor website performance, security, and user feedback post-launch.',
          'Provide a method for user feedback so future improvements can be implemented.',
          'Consider future enhancements and features based on user demand and market trends.',
        ],
      },
    ],
    conclusion: `Zodi is an e-commerce solution built with Angular NX, combining the customer-facing main website and a powerful admin portal for seamless order and product management. The real-time data synchronization ensures that any changes made by administrators are instantly reflected on the main website. This project aims to provide an exceptional online shopping experience for customers while streamlining administrative tasks for shop owners. \n In the ongoing development phase, discussions with the client regarding the implementation of Stripe payments for secure transactions as well as some design decisions are in progress. The final version of the website will reflect the outcome of these discussions.`,
    link: 'https://zodi-shop.web.app/',
    githubLink: '',
  },
  {
    id: 5,
    slug: 'stories-android-audio-storytelling-app',
    title: 'Stories - Android Audio Storytelling App',
    category: CATEGORIES.find((cat) => cat.name === 'Software & AI'),
    overview: `ElderStories is a native Android application designed to help families preserve oral histories through guided audio recording, playback, timeline-based editing, and transcript-assisted storytelling. The app combines a distinctive retro cassette-inspired interface with practical modern tooling like waveform visualization, snippet-based editing, live speech input, and word-level transcript interaction. It was built to make recording long-form family memories feel approachable for non-technical users while still giving them flexible editing controls.`,
    goals: [
      'Story Preservation: Create a mobile-first storytelling tool that helps users capture spoken family memories in a more personal format than plain text.',
      'Accessible Recording Experience: Design an intuitive recording interface with a nostalgic cassette-inspired visual identity that feels familiar and easy to use.',
      'Timeline-Based Editing: Let users break recordings into manageable snippets, review them visually, and perform editing operations like cut, copy, paste, and reordering.',
      'Transcript-Assisted Editing: Support transcript-driven interaction with word-level timing so spoken content can be reviewed and eventually edited more precisely.',
      'Playback and Review: Provide smooth audio playback and seek controls so users can review stories before saving or sharing them.',
      'Scalable Data Layer: Prepare the app for cloud-connected workflows using Firebase and service integrations for future synchronization, storage, and AI-assisted features.',
    ],
    images: [
      'assets/ElderStories/recorder1.jpg',
      'assets/ElderStories/recorder2.jpg',
      'assets/ElderStories/transcript.jpg',
    ],
    phases: [
      {
        name: 'Phase 1: Product Planning and UX Direction',
        tasks: [
          'Defined the product around oral history preservation, focusing on recording, reviewing, and editing spoken family stories.',
          'Planned a retro cassette-inspired interface to make the recording experience visually memorable and emotionally aligned with storytelling.',
          'Mapped out the core user flow from recording to transcription, snippet review, editing, and save/export behavior.',
          'Identified technical requirements for audio capture, playback, transcript rendering, and timeline visualization on Android.',
        ],
      },
      {
        name: 'Phase 2: Core Android Architecture',
        tasks: [
          'Set up the Android project using Kotlin, Jetpack components, ViewBinding, and a ViewModel-driven UI state approach.',
          'Structured the app into feature-focused modules for recording, playback, editing, transcription, and reusable UI components.',
          'Built foundational app state management with LiveData and AndroidViewModel patterns.',
          'Prepared the app for device-based testing and Gradle-based debug/release builds.',
        ],
      },
      {
        name: 'Phase 3: Audio Recording and Playback',
        tasks: [
          'Implemented microphone recording with local file output and real-time audio level monitoring.',
          'Added playback controls using Media3 ExoPlayer for a smooth in-app listening experience.',
          'Supported transport-style actions such as record, stop, play, pause, rewind, and fast-forward.',
          'Handled local file creation and storage workflows for recorded story content.',
        ],
      },
      {
        name: 'Phase 4: Timeline and Editing Features',
        tasks: [
          'Built a horizontal snippet timeline where each item reflects the duration of the recording visually.',
          'Added waveform rendering to make snippets easier to understand at a glance.',
          'Implemented drag-and-drop snippet movement and laid groundwork for split and join operations.',
          'Added cut, copy, and paste style editing actions for audio segment manipulation.',
        ],
      },
      {
        name: 'Phase 5: Transcript and AI-Assisted Features',
        tasks: [
          'Created transcript models with word-level timing support to connect spoken audio with readable text.',
          'Built a custom transcript editor for displaying and selecting individual timed words.',
          'Integrated live and experimental speech recognition services using Android SpeechRecognizer.',
          'Prepared the codebase for future AI and cloud service integrations using Retrofit, OkHttp, Firebase, and external transcription workflows.',
        ],
      },
      {
        name: 'Phase 6: Testing, Device Validation, and Polish',
        tasks: [
          'Validated the app on a real Android phone and resolved build and installation issues.',
          'Refined the timeline and transcript experience with seeded test recordings and demo content for easier product review.',
          'Improved resilience around development-time transcription and UI initialization flows.',
          'Documented setup, testing, transcription behavior, and implementation details for future iteration.',
        ],
      },
    ],
    conclusion: `ElderStories demonstrates my ability to build a polished, feature-rich Android product that combines strong UI direction with non-trivial media functionality. The project includes native audio recording, Media3-based playback, duration-aware timeline rendering, waveform visualization, transcript interaction, and editing workflows that connect text and sound. It also shows how I approach real product constraints: building reliable fallbacks, testing on physical hardware, and shaping the codebase so future AI, cloud sync, and export features can be added without rewriting the application from scratch.`,
    link: '',
    githubLink: '',
  },
  {
    id: 3,
    slug: 'cyber-infiltrator',
    title: 'Cyber Infiltrator',
    category: CATEGORIES.find((cat) => cat.name === 'Software & AI'),
    overview: `Cyber Infiltrator is a 2D top-down adventure game that combines elements of classic Pokémon games with hacking, social engineering, stealth mechanics, and a dynamic moral system. Players take on the role of a skilled hacker and social engineer in a futuristic world, navigating complex environments filled with security systems, NPCs, and moral dilemmas.`,
    goals: [
      'Create an engaging and morally-driven narrative.',
      'Develop intricate hacking, social engineering, and stealth gameplay mechanics.',
      "Implement a dynamic moral system that influences the game's story.",
      'Showcase proficiency in Unity and game development skills.',
    ],
    images: [
      'assets/CyberInfiltrator/cybergame_shorter.gif',
      'assets/CyberInfiltrator/cybergame_interior_dialogue.jpg',
      'assets/CyberInfiltrator/cybergame_derelict.jpg',
      'assets/CyberInfiltrator/cybergame_interior.jpg',
    ],
    phases: [
      {
        name: 'Phase 1: Planning and Design',
        tasks: [
          "Concept and Story: Define the game's core concept, storyline, and moral choices that will affect the narrative.",
          'Game Design Document: Create a comprehensive design document outlining gameplay mechanics, levels, characters, and objectives.',
          'Asset Planning: Plan the assets required, including character sprites, level backgrounds, sound effects, and music.',
          'Technical Design: Determine the architecture for the game, including the implementation of the hacking, social engineering, and stealth mechanics.',
        ],
      },
      {
        name: 'Phase 2: Environment and Character Setup',
        tasks: [
          '2D Art and Animation: Begin creating 2D assets, including character animations, NPC designs, and level backgrounds.',
          'Character Controller: Develop character movement controls, including sneaking and hiding mechanics.',
          'Level Design: Create the first set of game levels with a focus on stealth-oriented environments and NPC placement.',
          'Sound and Music: Start integrating sound effects and background music.',
        ],
      },
      {
        name: 'Phase 3: Hacking and Social Engineering Mechanics',
        tasks: [
          'Hacking Mini-Games: Design and implement hacking mini-games and puzzles, considering difficulty progression.',
          'Social Engineering: Develop systems for engaging in conversations, making choices, and influencing NPCs.',
          'Stealth Mechanics: Integrate LOS systems, AI awareness, and stealth tools for a compelling stealth experience.',
          'Inventory and Gadgets: Create an inventory system to manage hacking tools, weapons, and stealth gadgets.',
        ],
      },
      {
        name: 'Phase 4: AI and NPC Interaction',
        tasks: [
          "NPC Behaviors: Code patrol routes, AI responses to the player's actions, and communication among NPCs.",
          "Security Systems: Implement security cameras, laser grids, and other obstacles that challenge the player's stealth abilities.",
          "Moral System Integration: Connect NPC interactions and story outcomes to the player's moral choices.",
        ],
      },
      {
        name: 'Phase 5: Game Logic and Systems',
        tasks: [
          'Game Logic: Develop the core game logic, including quest objectives, scripted events, and moral point tracking.',
          'UI Design: Create the user interface elements, including HUD elements, dialogue boxes, and a moral point tracker.',
          'Save/Load System: Implement a save/load system that considers game state, moral choices, and player progress.',
        ],
      },
      {
        name: 'Phase 6: Testing and Balancing',
        tasks: [
          'Testing: Conduct thorough playtesting to identify bugs, balance gameplay, and refine AI behaviors.',
          'Optimization: Optimize code and assets for performance, especially in levels with complex interactions.',
          'Feedback Integration: Address player feedback and make necessary adjustments to improve the player experience.',
        ],
      },
      {
        name: 'Phase 7: Polishing and Finalization',
        tasks: [
          'Audio Integration: Finalize sound effects and background music to enhance immersion.',
          'Art Polish: Ensure all 2D assets are polished, and character animations are fluid.',
          'Narrative Polish: Refine dialogues, narrative branches, and moral choices for maximum impact.',
          'Documentation: Document code, design decisions, and gameplay mechanics for reference.',
        ],
      },
      {
        name: 'Phase 8: Release and Post-Launch Support',
        tasks: [
          'Launch: Release the game on chosen platforms, considering marketing and distribution strategies.',
          'Community Engagement: Interact with players, gather feedback, and provide updates or patches as needed.',
          "Expansions or DLC (Optional): Consider creating additional content to expand the game's story and mechanics.",
        ],
      },
    ],
    conclusion: `In its current phase of development, the focus is on building the fundamentals. This includes creating menus, speech interactions, inventory systems, and refining basic movements. Additionally, initial level designs are being laid out to set the groundwork for the game's environments. \n Creating Cyber Infiltrator is an ambitious project that will showcase proficiency in Unity game development and a diverse set of gameplay mechanics, including hacking, social engineering, stealth, and a dynamic moral system. Careful planning, development, testing, and player engagement will be crucial to the success of the game.`,
    link: '',
    githubLink: '',
  },
  {
    id: 4,
    slug: 'machine-learning-dynamic-narrative-gaming',
    title:
      'Application of Machine Learning for Personalised Dynamic Narrative Generation in Gaming',
    category: CATEGORIES.find((cat) => cat.name === 'Software & AI'),
    overview: `The Text-Based Game with AI Story Generation project is a creative endeavor that combines the realms of machine learning and narrative storytelling. The primary objective is to create an interactive text-based game where the storyline is dynamically generated by an AI model. This project encompasses extensive research into machine learning technologies, including RNNs, GANs, and VAEs, as well as natural language processing techniques such as sentiment analysis, Named Entity Recognition (NER), and Topic Modeling. The ultimate goal is to craft an engaging and immersive gaming experience that adapts to player input and emotions.`,
    goals: [
      'AI-Driven Storytelling: Develop an AI-driven system capable of generating coherent and context-aware story responses based on user interactions.',
      'Sentiment Analysis: Implement sentiment analysis to understand and adapt to the emotional context of player input, providing a personalized gaming experience.',
      'Topic Modeling: Utilize topic modeling techniques, such as Latent Dirichlet Allocation (LDA) or Non-negative Matrix Factorization (NMF), to identify trends in user input and tailor the narrative accordingly.',
      'Named Entity Recognition: Implement Named Entity Recognition to ensure consistency in the narrative by identifying and classifying entities like character names and locations.',
      "Web Scraping: Utilize web scraping techniques, specifically Scrapy, to collect textual data from Project Gutenberg, a repository of copyright-free eBooks, to enhance the AI's storytelling capabilities.",
    ],
    images: [
      'assets/ApplicationofMachineLearningforPersonalisedDynamicNarrativeGenerationinGaming/text_game.jpeg',
    ],
    phases: [
      {
        name: 'Phase 1: Literature Review and Research',
        tasks: [
          'Conduct a comprehensive literature review to understand machine learning technologies, natural language processing techniques, and their applications in storytelling.',
          'Explore the strengths and weaknesses of RNNs, GANs, VAEs, sentiment analysis, NER, and Topic Modeling.',
          'Collect research papers, articles, and resources to establish a strong foundation for the project.',
        ],
      },
      {
        name: 'Phase 2: Methodology Planning',
        tasks: [
          'Define a structured methodology for the project, outlining the different stages of development and their objectives.',
          'Plan the integration of Scrapy for web scraping to gather a diverse set of textual data.',
          'Specify how sentiment analysis, NER, and Topic Modeling will enhance the cohesiveness and context-awareness of the generated stories.',
        ],
      },
      {
        name: 'Phase 3: Story Generator 1',
        tasks: [
          'Build the initial text-based game prototype, integrating an RNN model for story generation.',
          'Utilize Scrapy to extract textual data from Project Gutenberg, ensuring a rich dataset for AI training.',
          'Implement sentiment analysis to gauge emotional context in player input.',
          'Develop the story generator algorithm, which uses the pre-trained model to create cohesive story responses based on user interactions.',
        ],
      },
      {
        name: 'Phase 4: Story Generator 2',
        tasks: [
          'Enhance the RNN architecture to improve the quality and coherence of generated narratives.',
          'Employ Kerastuner for hyperparameter tuning, optimizing hidden layers, learning rate, and batch size..',
          'Continue gathering and generating data as in Story Generator 1, but focus on improving model training efficiency and performance.',
        ],
      },
      {
        name: 'Phase 5: Story Generator 3 ',
        tasks: [
          "Expand the AI's capabilities by incorporating natural language processing techniques.",
          'Use topic modeling techniques like LDA or NMF to identify and adapt to user trends.',
          'Implement sentiment analysis to adjust the narrative based on user emotions.',
          'Integrate Named Entity Recognition to ensure narrative consistency.',
        ],
      },
      {
        name: 'Phase 6: Testing and Evaluation',
        tasks: [
          'Conduct extensive testing of the text-based game, assessing its responsiveness to player input, emotional context, and narrative cohesiveness.',
          'Evaluate the effectiveness of sentiment analysis, NER, and Topic Modeling in enhancing the player experience.',
          'Address any identified issues and refine the AI-driven storytelling algorithms.',
        ],
      },
    ],
    conclusion: `In it's current phase of development the projects code is of a high quality, and has undergone testing. However, due to limitations in hardware, specifically the need for improved computational resources to enhance model training, the results of the trained model may still be incoherent. \n The Text-Based Game with AI Story Generation project explores the intersection of machine learning and narrative creativity. It looks to provide players with a personalized and emotionally resonant gaming experience. By following a well-structured methodology and leveraging advanced natural language processing techniques, this project aims to push the boundaries of AI-driven storytelling in the context of interactive text-based games. Future iterations may explore even more advanced NLP techniques and expand the dataset for richer and more engaging narratives.`,
    link: 'https://drive.google.com/drive/folders/1eq3q4mxorJ-GpGWRAEpjvre8ZjKMxi0Z?usp=sharing',
    githubLink: 'https://github.com/JCoder9/StoryGenerator',
  },
  
  {
    id: 6,
    slug: 'sprinkler-leak-detection-ml',
    title: 'Sprinkler System Leak Detection with Machine Learning',
    category: CATEGORIES.find((cat) => cat.name === 'Software & AI'),
    overview: `This project makes use of Python and machine learning to develop an effective approach for identifying and categorizing sprinkler system faults. The main goal is to analyze pressure data gathered from sprinkler systems in order to pinpoint particular fault types, such as leaks, trapped air, and blowouts.  Using a variety of sensor technologies and machine learning techniques, the project aims to improve sprinkler system leak detection efficiency and reliability.`,
    goals: [
      'Develop a system capable of detecting and classifying different types of faults in sprinkler systems, including leaks, trapped air, and blowouts.',
      'Implement and evaluate various machine learning algorithms, such as Support Vector Machines (SVMs), Artificial Neural Networks (ANNs), Decision Trees, and Random Forests, for their effectiveness in fault classification.',
      'Investigate sensor technologies, including acoustic sensors, flow meters, and pressure sensors, to gather relevant data for analysis.',
      'Perform extensive data analysis to identify fault patterns and establish criteria for fault classification based on pressure loss over time.',
    ],
    images: [
      'assets/SprinklerSystemLeakDetectionwithMachineLearning/sprinkler.jpeg',
    ],
    phases: [
      {
        name: 'Phase 1: Literature Review and Research',
        tasks: [
          'Conduct a comprehensive literature review to explore the capabilities and limitations of different machine learning algorithms and sensor technologies in the context of fault detection in sprinkler systems.',
          'Investigate research papers and studies related to SVMs, ANNs, Decision Trees, Random Forests, and sensor technologies.',
          'Gather insights into data preprocessing, feature engineering, and fault classification criteria.',
        ],
      },
      {
        name: 'Phase 2: Methodology Planning',
        tasks: [
          'Define a structured methodology for detecting and classifying sprinkler system faults based on pressure data.',
          'Plan the integration of sensor technologies, data collection, and data preprocessing techniques.',
          'Specify the criteria for fault classification, including pressure loss thresholds and duration-based considerations.',
        ],
      },
      {
        name: 'Phase 3: Data Preprocessing and Fault Classification',
        tasks: [
          'Acquire pressure data from sprinkler systems equipped with sensors, including acoustic sensors, flow meters, and pressure sensors.',
          'Group the data by "TestNo" to isolate individual tests within the dataset.',
          'Implement fault classification methods, including "is_leak_or_blowout()", "is_trapped_air()", and "is_passed()", based on pressure loss patterns and duration.',
          'Create a new "Result" column to append fault classifications ("Leak", "Trapped Air", "Blowout", or "Passed") to each row within a test group.',
        ],
      },
      {
        name: 'Phase 4: Data Splitting and Model Training',
        tasks: [
          'Separate the data into training and testing sets to prepare for machine learning model training.',
          'Utilize Decision Tree Classifier and K-Nearest Neighbors Classifier for fault detection.',
          'Train the machine learning models on the training dataset using the defined fault classification criteria.',
        ],
      },
      {
        name: 'Phase 5: Model Testing and Accuracy Assessment',
        tasks: [
          'Test the trained models on the testing dataset to evaluate their accuracy in classifying sprinkler system faults.',
          'Calculate accuracy metrics to assess the performance of the Decision Tree Classifier and K-Nearest Neighbors Classifier.',
          'Address any identified issues or discrepancies and fine-tune the models if necessary.',
        ],
      },
      {
        name: 'Phase 6: Threshold Calibration and Refinement',
        tasks: [
          'Refine and calibrate the fault classification criteria, including pressure loss thresholds and duration-based considerations, to optimize fault detection accuracy.',
          'Reevaluate the machine learning models with the refined criteria to assess their improved performance.',
        ],
      },
    ],
    conclusion: `This project is an ambitious effort to make use of sensor technologies and machine learning to improve the accuracy when identifying and categorizing sprinkler system defects. The project aims to provide a reliable solution for recognizing leaks, trapped air, blowouts, and system integrity ("Passed" category) by following a well-structured process that includes data analysis, fault classification, and machine learning model training. The system's accuracy and reliability in practical applications are continuously improved through ongoing calibration and improvement of fault detection criteria. For even more accurate fault identification, future versions might investigate new sensor technologies and sophisticated machine learning algorithms.`,
    link: 'https://drive.google.com/drive/folders/1QNv679OlAbkYGrk5w89y9JU_GBCX-sla?usp=sharing',
    githubLink: 'https://github.com/JCoder9/AiPipeLeakDetector',
  },
  {
    id: 7,
    slug: '3d-binaural-audio-self-motion',
    title: '3D Binaural Audio Self-Motion Illusion',
    category: CATEGORIES.find((cat) => cat.name === 'Audio & Sound Design'),
    overview: `This project explores the creation of an immersive 3D binaural soundscape designed to evoke an illusion of self-motion through audio cues alone. By leveraging principles of auditory spatial perception, I created a soundscape that simulates movement through virtual environments, showcasing proficiency in spatial audio design, programming, and sound engineering tools.`,
    goals: [
      'Investigate human auditory perception of spatial cues such as elevation, distance, and direction.',
      'Create a 3D soundscape that evokes a convincing illusion of self-motion without visual stimuli.',
      'Implement sound manipulation techniques, including the Doppler effect and Head-Related Transfer Function (HRTF), to enhance realism.',
      'Showcase expertise in audio design software, including Pure Data and Logic Pro X.',
    ],
    images: ['assets/3DBinauralAudioSelfMotionIllusion/fyp_soundscape.png'],
    phases: [
      {
        name: 'Phase 1: Research and Planning',
        tasks: [
          'Research spatial audio cues and human auditory perception related to location, distance, and movement.',
          'Study Head-Related Transfer Function (HRTF) and the Doppler effect for integration into the soundscape.',
          'Plan a 3D soundscape setup, defining environments, types of sounds, and motion effects for realism.',
        ],
      },
      {
        name: 'Phase 2: Sound Design and Initial Testing',
        tasks: [
          'Use Logic Pro X to create initial 3D soundscapes for testing spatialization effects and localization cues.',
          'Test binaural panning effects and adjust sounds for elevation and distance perception.',
        ],
      },
      {
        name: 'Phase 3: Audio Manipulation with Pure Data',
        tasks: [
          'Implement movement and location cues in Pure Data, utilizing Doppler effect and HRTF adjustments.',
          'Program user-controlled movement in the soundscape to interactively experience self-motion.',
        ],
      },
      {
        name: 'Phase 4: Testing and Calibration',
        tasks: [
          'Conduct blindfolded tests with high-quality headphones, allowing users to navigate the soundscape via keyboard input.',
          'Record observations and refine sound cues to improve motion realism and response to user movement.',
        ],
      },
      {
        name: 'Phase 5: Finalization and Documentation',
        tasks: [
          'Optimize the audio system for smooth transitions in azimuth and elevation, ensuring minimal noise during movement.',
          'Document code, design choices, and insights gained from testing for future reference.',
        ],
      },
    ],
    conclusion: `This 3D Binaural Audio project highlights my ability to design and implement realistic auditory environments using binaural sound techniques. By using software like Pure Data and Logic Pro X, I demonstrated technical proficiency in creating an immersive, interactive audio experience that leverages complex spatial cues to achieve a convincing illusion of self-motion.`,
    link: '',
  },
  {
    id: 8,
    slug: 'digital-spacers-iphone-animation',
    title: 'Digital Spacers - iPhone Animation Project',
    category: CATEGORIES.find((cat) => cat.name === 'Visual & Digital Media'),
    overview: `Digital Spacers is a sophisticated motion graphics project showcasing advanced video editing and animation techniques. This project features a detailed iPhone disassembly animation, holographic effects, and digital transformations that demonstrate proficiency in Adobe Creative Suite and motion graphics design.`,
    goals: [
      'Create realistic iPhone disassembly animation with precise component separation.',
      'Implement advanced holographic and digital effects for futuristic aesthetics.',
      'Develop seamless motion graphics transitions and transformations.',
      'Showcase expertise in Adobe After Effects, Premiere Pro, and motion design.',
    ],
    images: [
      'assets/DigitalSpacers/digital_spacers.png',
      'assets/DigitalSpacers/digital_spacers.mp4',
      'assets/DigitalSpacers/phone_dissassemble.png',
    ],
    phases: [
      {
        name: 'Phase 1: iPhone Animation',
        tasks: [
          'Source images of iPhone components and prepare them in Photoshop.',
          'Separate and align layers to create a 3D phone structure.',
          'Animate the phone disassembly and reassembly in After Effects.',
        ],
      },
      {
        name: 'Phase 2: Hologram Effect',
        tasks: [
          'Use a grid plugin to divide the image into lines for a hologram look.',
          'Add black flickering lines and adjust the gain to emulate an old TV effect.',
        ],
      },
      {
        name: 'Phase 3: Morphing Transition',
        tasks: [
          'Export images as layered files and import them into After Effects.',
          'Apply time remapping and pixel motion for smooth morphing between layers.',
        ],
      },
      {
        name: 'Phase 4: Matrix-Style Background',
        tasks: [
          'Create a matrix-style text background with random character offsets.',
          'Apply radial blur and card wipe to add depth and movement.',
        ],
      },
      {
        name: 'Phase 5: Final Edits and Compilation',
        tasks: [
          'Edit final footage in Premiere for a cohesive video.',
          'Polish transitions, adjust color, and fine-tune animations.',
        ],
      },
    ],
    conclusion: `The iPhone Infovert Animation project demonstrates my ability to create detailed, multi-step animations and effects using Adobe Premiere, After Effects, and Photoshop. From disassembling an iPhone to adding holographic and matrix-style effects, this project reflects my skills in both technical execution and creative design.`,
    link: '',
  },
  {
    id: 9,
    slug: 'allianz-gaa-championship-design',
    title: 'Allianz GAA Championship Design',
    category: CATEGORIES.find((cat) => cat.name === 'Visual & Digital Media'),
    overview: `Professional graphic design work for the Allianz GAA Championship, creating compelling visual assets for sports marketing and promotional materials.`,
    goals: [
      'Create engaging visual content for sports marketing campaigns',
      'Develop brand-consistent design materials',
      'Design promotional assets for championship events',
    ],
    images: ['assets/VisualandDigitalMedia/ALLIANZ_GAA.jpg'],
    phases: [
      {
        name: 'Design Development',
        tasks: [
          'Concept development and creative direction',
          'Visual asset creation and refinement',
          'Brand guidelines implementation',
        ],
      },
    ],
    conclusion: `Professional sports marketing design showcasing brand consistency and visual impact for major sporting events.`,
    link: '',
  },
  {
    id: 10,
    slug: 'fa-cup-2014-advertising',
    title: 'FA Cup 2014 Advertising Campaign',
    category: CATEGORIES.find((cat) => cat.name === 'Visual & Digital Media'),
    overview: `Advertising design work for the FA Cup 2014, creating promotional materials for one of football's most prestigious tournaments.`,
    goals: [
      'Design impactful advertising materials',
      'Create tournament-specific branding elements',
      'Develop promotional campaign visuals',
    ],
    images: ['assets/VisualandDigitalMedia/FACup2014Ad.jpg'],
    phases: [
      {
        name: 'Campaign Design',
        tasks: [
          'Campaign concept development',
          'Visual identity creation',
          'Multi-format advertising design',
        ],
      },
    ],
    conclusion: `Professional advertising design work for major football tournament showcasing creative campaign development.`,
    link: '',
  },
  {
    id: 11,
    slug: 'fa-sponsor-pack-2014',
    title: 'FA Sponsor Pack 2014',
    category: CATEGORIES.find((cat) => cat.name === 'Visual & Digital Media'),
    overview: `Comprehensive sponsor package design for the Football Association, providing professional presentation materials for partnership opportunities.`,
    goals: [
      'Create professional sponsor presentation materials',
      'Develop comprehensive partnership packages',
      'Design compelling sponsor benefit communications',
    ],
    images: ['assets/VisualandDigitalMedia/FASponserPack2014.jpg'],
    phases: [
      {
        name: 'Sponsor Package Development',
        tasks: [
          'Package structure planning',
          'Professional layout design',
          'Content organization and presentation',
        ],
      },
    ],
    conclusion: `Professional sponsor package design demonstrating corporate presentation skills and strategic marketing material development.`,
    link: '',
  },
  {
    id: 12,
    slug: 'hotel-christmas-marketing',
    title: 'Hotel Christmas Marketing Campaign',
    category: CATEGORIES.find((cat) => cat.name === 'Visual & Digital Media'),
    overview: `Seasonal marketing design for hospitality sector, creating festive promotional materials to drive holiday bookings and engagement.`,
    goals: [
      'Design seasonal promotional materials',
      'Create festive brand communications',
      'Develop holiday marketing campaigns',
    ],
    images: ['assets/VisualandDigitalMedia/HotelChristmasFlyer.jpg'],
    phases: [
      {
        name: 'Seasonal Campaign Design',
        tasks: [
          'Holiday theme development',
          'Promotional material design',
          'Brand-consistent festive styling',
        ],
      },
    ],
    conclusion: `Seasonal marketing design showcasing hospitality sector promotional expertise and festive campaign development.`,
    link: '',
  },
  {
    id: 13,
    slug: 'friendlies-advertising-usa',
    title: 'Friendlies Advertising USA Campaign',
    category: CATEGORIES.find((cat) => cat.name === 'Visual & Digital Media'),
    overview: `International advertising campaign design for USA Friendlies, creating promotional materials for international football events targeting American audiences.`,
    goals: [
      'Design culturally relevant advertising for US market',
      'Create engaging promotional materials for international football',
      'Develop brand awareness campaigns for American audiences',
    ],
    images: ['assets/VisualandDigitalMedia/FriendliesAdvertisingUSA.jpg'],
    phases: [
      {
        name: 'Campaign Development',
        tasks: [
          'Market research and cultural adaptation',
          'Creative concept development for US audience',
          'Multi-platform advertising design',
        ],
      },
    ],
    conclusion: `International advertising campaign showcasing cross-cultural marketing expertise and sports promotion design.`,
    link: '',
  },
  {
    id: 14,
    slug: 'schools-rugby-ad-pack-2015',
    title: 'Schools Rugby Ad Pack 2015',
    category: CATEGORIES.find((cat) => cat.name === 'Visual & Digital Media'),
    overview: `Comprehensive advertising package design for schools rugby programs, creating educational sport promotional materials and recruitment campaigns.`,
    goals: [
      'Design engaging materials for youth rugby promotion',
      'Create educational sports marketing content',
      'Develop recruitment-focused advertising campaigns',
    ],
    images: ['assets/VisualandDigitalMedia/SCHOOLSRUGBYADPACK2015.jpg'],
    phases: [
      {
        name: 'Educational Campaign Design',
        tasks: [
          'Youth-focused creative development',
          'Educational content design and layout',
          'School partnership promotional materials',
        ],
      },
    ],
    conclusion: `Educational sports marketing design demonstrating youth engagement and promotional campaign expertise.`,
    link: '',
  },
  {
    id: 15,
    slug: 'special-deals-september-2014',
    title: 'Special Deals September 2014 Campaign',
    category: CATEGORIES.find((cat) => cat.name === 'Visual & Digital Media'),
    overview: `Promotional campaign design for special deals and offers, showcasing retail marketing design skills and customer engagement strategies.`,
    goals: [
      'Design compelling promotional materials for special offers',
      'Create urgency-driven marketing campaigns',
      'Develop customer engagement through visual design',
    ],
    images: ['assets/VisualandDigitalMedia/SpecialDealsSept2014.jpg'],
    phases: [
      {
        name: 'Promotional Campaign Design',
        tasks: [
          'Offer-focused creative development',
          'Urgency and scarcity marketing design',
          'Multi-channel promotional materials',
        ],
      },
    ],
    conclusion: `Retail promotional design showcasing customer engagement and sales-driven marketing expertise.`,
    link: '',
  },
  {
    id: 16,
    slug: 'sky-vfx-before-after',
    title: 'Sky VFX Project - Before & After',
    category: CATEGORIES.find((cat) => cat.name === 'Visual & Digital Media'),
    overview: `Visual effects project demonstrating advanced photo manipulation and sky replacement techniques. This project showcases before and after comparisons of digital sky enhancements and atmospheric effects.`,
    goals: [
      'Demonstrate advanced photo manipulation techniques',
      'Showcase realistic sky replacement and atmospheric effects',
      'Create compelling before and after visual comparisons',
      'Display proficiency in digital compositing and color grading',
    ],
    images: [
      'assets/VisualandDigitalMedia/sky_before.jpg',
      'assets/VisualandDigitalMedia/sky_after.jpg',
    ],
    phases: [
      {
        name: 'VFX Development',
        tasks: [
          'Original photography analysis and preparation',
          'Sky replacement and atmospheric enhancement',
          'Color grading and final compositing',
        ],
      },
    ],
    conclusion: `Visual effects project demonstrating advanced digital manipulation skills and realistic atmospheric enhancement techniques.`,
    link: '',
  },
];
