export const projects = [
  {
    id: 'argo-floatchat',
    number: '01',
    title: 'Argo FloatChat AI',
    category: 'Oceanographic AI & RAG Platform',
    image: 'projects/argo-floatchat.webp',
    imageAlt: 'Argo FloatChat AI conversational oceanographic intelligence dashboard with interactive map and telemetry query interface',
    description: 'Conversational oceanographic intelligence platform enabling natural language exploration of global Argo float array datasets. Integrates automated NetCDF data pipelines with vector embeddings and domain-specific RAG retrieval.',
    capabilities: [
      'Automated ingestion and parsing of complex NetCDF4 ocean profile datasets into structured database records.',
      'Conversational RAG pipeline enabling natural language multi-variable trajectory and depth-profile scientific queries.',
      'Interactive spatial visualizations mapping float coordinates, salinity profiles, and temperature casts.'
    ],
    tags: ['Python', 'PostgreSQL', 'Xarray', 'NetCDF4', 'Streamlit', 'RAG / Vector DB', 'Pandas'],
    githubUrl: 'https://github.com/sharathkudachi/Argo-Floatchat',
    liveUrl: 'https://argo-floatchat-8u4c.onrender.com/',
    hasLiveDemo: true,
    overview: 'Developed an AI-powered conversational platform for exploring large-scale oceanographic datasets by enabling natural language interaction with ARGO float data.',
    problem: 'Oceanographic data from thousands of global Argo floats is dispersed across complex NetCDF files and institutional endpoints, making rapid multi-variable cross-profiling and natural language scientific analysis difficult.',
    solution: 'Designed and implemented a data ingestion pipeline to automate the collection, parsing and conversion of complex NetCDF and Markdown datasets into structured database records for efficient querying, paired with RAG retrieval pipelines.',
    keyFeatures: [
      'Data Ingestion Pipeline: Automates collection, parsing, and conversion of complex NetCDF datasets into structured database records.',
      'Conversational AI Chatbot: Built backend components including prompt engineering and database management for natural language ocean data querying.',
      'Interactive Visualizations: Integrated APIs and data retrieval pipelines to generate context-aware responses and interactive charts.',
      'Data Provenance: Ensures accurate dataset retrieval across global ocean float profiles.'
    ],
    architecture: 'NetCDF4 & Xarray Ingestor → PostgreSQL & Vector Database → FastAPI / Streamlit Engine → Interactive Visualizer.',
    techStack: ['Python', 'PostgreSQL', 'Pandas', 'NumPy', 'Xarray', 'NetCDF4', 'Streamlit', 'REST APIs', 'Vector Database'],
    engineeringConsiderations: 'Maintains dataset integrity while streaming multi-variable ocean float casts across asynchronous querying endpoints.'
  },
  {
    id: 'orvms',
    number: '02',
    title: 'Ocean Risk Vessel Monitoring System (ORVMS)',
    category: 'Maritime Intelligence & Surveillance',
    image: 'projects/orvms.webp',
    imageAlt: 'ORVMS maritime operations dashboard showing live AIS vessel tracking, boundary monitoring, and anomaly detection alerts',
    description: 'Integrated maritime situational awareness platform tracking live AIS telemetry streams, geospatial EEZ boundary proximity, OCR document verification, and machine learning anomaly detection.',
    capabilities: [
      'Isolation Forest anomaly scoring analyzing speed, course deviations, and unauthorized maritime boundary proximity.',
      'Unified operational dashboard combining geospatial map tracking, live threat triage, and real-time alert feeds.',
      'Thread-safe SQLite storage architecture managing spatial coordinates and historical vessel paths.'
    ],
    tags: ['Python', 'Streamlit', 'Folium', 'Scikit-learn', 'SQLite', 'Shapely', 'FastAPI'],
    githubUrl: 'https://github.com/sharathkudachi/OCEAN-RISK-VESSEL-MONITORING-SYSTEM-ORVMS-',
    liveUrl: 'https://ocean-risk-vessel-monitoring-system-orvms.onrender.com/',
    hasLiveDemo: true,
    overview: 'Developed an integrated Maritime Situational Awareness platform that combines vessel tracking, geospatial visualization, OCR-based document processing, weather monitoring, and intelligent alert generation into a unified dashboard.',
    problem: 'Maritime security operators face overwhelming raw telemetry data streams without instant threat triage, automated EEZ boundary detection, or explainable factor breakdowns for suspicious vessel movements.',
    solution: 'Implemented AIS data simulation and Isolation Forest-based anomaly detection using vessel attributes such as speed, latitude, longitude, heading, course and proximity to maritime boundaries to identify suspicious vessel behavior.',
    keyFeatures: [
      'Maritime Situational Awareness: Integrates vessel tracking, geospatial visualization, OCR processing, and weather monitoring.',
      'Isolation Forest Anomaly Detection: Analyzes speed, heading, course, and boundary proximity to detect suspicious behavior.',
      'SQLite Backend Management: Efficient data management, alert generation, and historical monitoring.',
      'Unified Dashboard: Reduces system switching by combining visualization, document analysis, and surveillance in one interface.'
    ],
    architecture: 'AIS Telemetry Stream → Isolation Forest Anomaly Engine → SQLite Storage & Folium Maps → FastAPI / Streamlit Dashboard.',
    techStack: ['Python', 'Streamlit', 'Folium', 'Pandas', 'NumPy', 'SQLite', 'Scikit-learn', 'Shapely', 'FastAPI'],
    engineeringConsiderations: 'Designed thread-safe vessel stores with spatial boundary algorithms to eliminate telemetry positioning errors.'
  },
  {
    id: 'uav-simulation',
    number: '03',
    title: 'UAV Simulation (AURA-X)',
    category: 'Autonomous Robotics & Flight Simulation',
    image: 'projects/uav-simulation.webp',
    imageAlt: 'UAV simulation system overview showing Gazebo 3D obstacle environment, ROS node graphs, Kalman filter telemetry, and A* path planning',
    imageLabel: 'Simulation / System Overview',
    description: 'Autonomous flight dynamics and navigation research platform in Gazebo and PX4 environments. Evaluates Visual-Inertial Odometry (VIO) sensor fusion and obstacle-avoidance trajectory planning in GPS-denied scenarios.',
    capabilities: [
      'VIO and Kalman filter state estimation designed for reliable localization under GPS denial or spoofing.',
      'Integrated trajectory optimization and obstacle avoidance algorithms (A*, RRT*, PSO, APF).',
      'Modular ROS architecture interfacing sensor streams, flight controllers, and simulated dynamics.'
    ],
    tags: ['ROS', 'PX4', 'Gazebo', 'Python', 'C++', 'OpenCV', 'MATLAB', 'Sensor Fusion'],
    githubUrl: 'https://github.com/sharathkudachi/UAV-Simulation',
    liveUrl: null,
    hasLiveDemo: false,
    overview: 'Designing and developing an autonomous reconnaissance UAV capable of reliable GPS-denied navigation using Visual-Inertial Odometry (VIO) and sensor fusion techniques to prevent spoofing, jamming, and EM warfare.',
    problem: 'Operating uncrewed aerial vehicles in electronic warfare or GPS-denied environments leads to loss of localization, satellite drift, and mission failure.',
    solution: 'Developing intelligent path planning, obstacle avoidance and trajectory optimization using algorithms including A*, RRT, RRT*, PSO and APF for autonomous mission execution in Gazebo and PX4 simulation.',
    keyFeatures: [
      'GPS-Denied Navigation: Employs Visual-Inertial Odometry (VIO) and sensor fusion to counter GPS spoofing and EM warfare.',
      'Intelligent Path Planning: Implements A*, RRT, RRT*, Particle Swarm Optimization (PSO), and Artificial Potential Field (APF) algorithms.',
      'Real-Time SLAM & Mapping: Researching localization, mapping, and autonomous flight control within a modular UAV architecture.',
      'ROS & Gazebo Hardware-in-Loop: Simulated flight dynamics and obstacle avoidance testing.'
    ],
    architecture: 'Gazebo & PX4 Simulation → ROS Nodes & VIO Sensor Fusion → Path Planning (A*/RRT*/PSO) → Flight Control Output.',
    techStack: ['ROS', 'Python', 'C++', 'OpenCV', 'Gazebo', 'PX4', 'MATLAB', 'TensorFlow', 'SolidWorks'],
    engineeringConsiderations: 'Ensures real-time trajectory optimization performance while running high-frequency sensor fusion in simulated ROS environments.'
  },
  {
    id: 'lifeline-ai',
    number: '04',
    title: 'Lifeline AI',
    category: 'Emergency Response & Dispatch Network',
    image: 'projects/lifeline-ai.webp',
    imageAlt: 'Lifeline AI emergency response interface displaying live road-snapped OSRM routing and multi-factor hospital triage scoring',
    description: 'Intelligent emergency dispatch network that queries OpenStreetMap facility geometries via Overpass mirrors, computes road-snapped OSRM routes, and ranks medical centers through a multi-factor triage matrix.',
    capabilities: [
      'Multi-factor hospital scoring weighing driving duration, straight-line distance, specialty match, and availability.',
      'Dynamic mid-journey rerouting recalculating paths from real-time coordinates upon traffic surge alerts without teleportation.',
      'Progressive radius spatial expansion auto-expanding facility retrieval from 1km up to 100km via Overpass API proxies.'
    ],
    tags: ['React 18', 'Node.js', 'Express', 'Leaflet.js', 'OSRM API', 'OpenStreetMap'],
    githubUrl: 'https://github.com/sharathkudachi/Lifeline-Ai',
    liveUrl: 'https://lifeline-ai-frontend-lilac.vercel.app/',
    hasLiveDemo: true,
    overview: 'LifeLine AI is an emergency dispatch platform that transforms static dispatch into a dynamic, data-driven network. It proxies OpenStreetMap data via Overpass mirrors, calculates road-snapped OSRM routes, and ranks medical facilities using a multi-factor AI matrix.',
    problem: 'Emergency response systems frequently rely on simple straight-line distance to select hospitals, ignoring real-time traffic congestion, specialized medical unit availability (ICU/Cardiac), and road network geometries.',
    solution: 'Architected a React + Express system executing multi-mirror Overpass queries, OSRM driving route calculations, live traffic surge rerouting, and a 5-step visual milestone dispatch timeline.',
    keyFeatures: [
      'Multi-Factor AI Scoring: 35% Distance + 35% Travel Time + 20% Specialty Match + 10% Rating/Availability matrix.',
      'Progressive OSM Radius Expansion: Auto-expands facility retrieval from 1km up to 100km via Overpass API proxies.',
      '5-Step Dispatch Milestone Tracker: Real-time progress tracking from emergency creation to hospital arrival.',
      'Mid-Journey Rerouting: Dynamic route recalculation from ambulance coordinates upon traffic surge triggers without teleportation.'
    ],
    architecture: 'React 18 Frontend → Express.js API Server → Overpass API Proxies & OSRM Driving Engine.',
    techStack: ['React 18', 'Vite', 'Node.js', 'Express.js', 'Leaflet.js', 'OSRM API', 'OpenStreetMap Overpass'],
    engineeringConsiderations: 'Handles API mirror fallbacks gracefully when Overpass endpoints experience rate limits during peak spatial query requests.'
  },
  {
    id: 'smartspend-ai',
    number: '05',
    title: 'SmartSpend AI',
    category: 'Full Stack Financial Intelligence SaaS',
    image: 'projects/smartspend-ai.webp',
    imageAlt: 'SmartSpend AI personal finance platform authentication and financial copilot dashboard view',
    description: 'MERN-stack personal finance platform featuring an interactive LLM financial copilot, transaction narration auto-categorization, CSV statement fuzzy deduplication, and regression-based cash flow forecasting.',
    capabilities: [
      'Contextual AI copilot maintaining dialogue history for relative expenditure queries and budget recommendations.',
      'Automatic narration parser classifying raw transaction strings into structured expenditure categories.',
      'Financial health scoring (0–100), visual budget warnings, and CSV import fuzzy deduplication.'
    ],
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Mongoose', 'Recharts', 'Docker'],
    githubUrl: 'https://github.com/sharathkudachi/SmartSpend-AI',
    liveUrl: 'https://smart-spend-ai-sigma.vercel.app/',
    hasLiveDemo: true,
    overview: 'SmartSpend AI is a security-hardened Personal Finance Management (PFM) SaaS platform built on the MERN stack. It converts standard expense tracking into an interactive financial copilot with automatic narration parsing, cash flow regression forecasting, and wealth goal tracking.',
    problem: 'Traditional financial trackers require tedious manual tagging and offer static graphs without predictive insights or natural language querying.',
    solution: 'Engineered a MERN platform featuring context-aware chat dialogue memory, regression-based 3-month cash flow forecasting, statement drag-and-drop CSV parsers, and Helmet/JWT security controls.',
    keyFeatures: [
      'AI Financial Copilot: Contextual chat answering relative questions ("What about last month?") with guided goal creation state machines.',
      'Automated Categorization: Parses narration strings on creation (e.g. Swiggy → Food & Dining).',
      'Statement Import & De-duplication: Drag-and-drop CSV parser with fuzzy duplicate matching to protect balance integrity.',
      'Wealth & Budget Metrics: Composite financial health scores (0-100), visual budget warnings, and Recharts analytics.'
    ],
    architecture: 'React Client → Nginx Reverse Proxy → Express API Server → MongoDB Atlas & Gemini AI Engine.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Mongoose', 'Recharts', 'Framer Motion', 'Docker'],
    engineeringConsiderations: 'Implemented HTTP-Only refresh cookies, short-lived access tokens, and Mongoose query sanitization to prevent security vulnerabilities.'
  },
  {
    id: 'astra-expo',
    number: '06',
    title: 'Astra Defence Tech Expo',
    category: 'Defence Exhibition & Event Platform',
    image: 'projects/astra-defence-tech-expo.webp',
    imageAlt: 'Astra Defence Technology Expo web portal showcasing event tracks, exhibition domains, and delegate registration',
    description: 'Interactive web portal built for the Astra Defence Tech Expo at BMSIT, presenting exhibition domain tracks, technical demonstration schedules, speaker rosters, and delegate registration workflows.',
    capabilities: [
      'Structured technical domain explorer presenting defense tracks, robotics demonstrations, and keynotes.',
      'Interactive delegate registration with client-side validation and responsive schedule navigation.',
      'Performance-optimized single-page architecture with accessible interaction controls.'
    ],
    tags: ['React 18', 'Vite', 'Tailwind CSS', 'Lucide Icons', 'Responsive UI'],
    githubUrl: 'https://github.com/sharathkudachi/astra-defence-tech-expo',
    liveUrl: 'https://astra-defence-tech-expo.vercel.app/',
    hasLiveDemo: true,
    overview: 'An interactive web showcase and event platform designed for the Astra Defence Tech Expo, presenting technical event tracks, speaker rosters, exhibit details, and registration workflows.',
    problem: 'Technical expo events require clean information architecture and responsive presentation of event schedules, defense tech domains, and delegate registration.',
    solution: 'Designed and built a modular React web platform with refined editorial layouts, smooth section transitions, and responsive mobile schedules.',
    keyFeatures: [
      'Domain Exhibition Schedule: Structured display of defense tracks, robotics demonstrations, and keynote sessions.',
      'Interactive Registration: Responsive delegate form handling with validation.',
      'Modern UI Components: Clean card grid layout and accessibility controls.'
    ],
    architecture: 'React + Vite Single Page Application rendered with modular UI components.',
    techStack: ['React 18', 'Vite', 'Tailwind CSS', 'Lucide Icons'],
    engineeringConsiderations: 'Focused on rapid asset loading and crisp editorial hierarchy across mobile and desktop viewport sizes.'
  },
  {
    id: 'military-timeline',
    number: '07',
    title: 'Indian Military Operations Timeline',
    category: 'Interactive Historical & Geospatial Timeline',
    image: 'projects/military-operations-timeline.webp',
    imageAlt: 'Indian Military Operations interactive timeline interface with battle filters, chronological sorting, and strategic summaries',
    description: 'Interactive historical application chronicling major Indian military battles and strategic operations from 1947 to the present, featuring branch-specific filters, chronological indexing, and strategic event details.',
    capabilities: [
      'Branch-specific filtering across Army, Navy, Air Force, and Joint military operations.',
      'Chronological sorting and responsive expandable battle dossier cards with strategic outcomes.',
      'Lightweight vanilla JavaScript architecture delivering instant client-side search and filtering.'
    ],
    tags: ['HTML5', 'CSS3', 'Vanilla JS', 'Leaflet.js', 'Geospatial Data'],
    githubUrl: 'https://github.com/sharathkudachi/indian-military-operations-timeline',
    liveUrl: 'https://sharathkudachi.github.io/indian-military-operations-timeline/',
    hasLiveDemo: true,
    overview: 'An interactive historical timeline and documentation project detailing major operations, conflicts, and strategic maneuvers undertaken by the Indian Armed Forces from 1947 to the present day.',
    problem: 'Historical military operations are frequently documented in disparate archives without unified timelines, spatial orientation, or branch-filtered categorization.',
    solution: 'Developed a responsive map-and-timeline interface with dual-mode chronological sorting, branch filtering, and searchable battle summaries.',
    keyFeatures: [
      'Multi-Branch Filtering: Filter operations by Army, Navy, Air Force, or Joint tri-service commands.',
      'Chronological & Reverse Views: Sort through key campaigns from 1947 to modern strategic operations.',
      'Contextual Maps & Dossiers: Integrated geospatial mapping and tactical summaries for each engagement.'
    ],
    architecture: 'Semantic HTML5/CSS3 Interface → Vanilla JavaScript Filter Engine → Embedded Leaflet Maps.',
    techStack: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Leaflet.js', 'Geospatial Data'],
    engineeringConsiderations: 'Engineered for zero runtime dependencies to ensure instant initial load and high cross-browser compatibility.'
  },
  {
    id: 'healthcare-ai',
    number: '08',
    title: 'Healthcare AI Management Platform',
    category: 'Full Stack Healthcare Management',
    image: 'projects/healthcare-ai.webp',
    imageAlt: 'Healthcare AI dashboard displaying policy coverage overview, health scoring metrics, and symptom checker modules',
    description: 'Full-stack healthcare management web application integrating AI symptom screening, insurance policy tracking, appointment scheduling, and OpenStreetMap-powered facility locators.',
    capabilities: [
      'AI-guided symptom checker and health scoring module providing structured health indicators.',
      'Comprehensive patient dashboard managing policy coverage, claims filing, and appointment scheduling.',
      'Geospatial hospital locator finding nearby medical centers using OpenStreetMap services.'
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'OpenStreetMap', 'REST APIs'],
    githubUrl: 'https://github.com/sharathkudachi/healthcare',
    liveUrl: 'https://sharathkudachi.github.io/healthcare/',
    hasLiveDemo: true,
    overview: 'A full-stack healthcare platform engineered to streamline patient health records, AI-driven symptom preliminary assessments, insurance policy tracking, and medical facility discovery.',
    problem: 'Patients often struggle to track insurance policies, navigate symptom prioritization, and locate specialized medical facilities in a unified workflow.',
    solution: 'Engineered a unified MERN dashboard integrating dynamic symptom question flows, health metrics scoring, appointment bookings, and map-based facility discovery.',
    keyFeatures: [
      'AI Symptom Checker: Interactive questionnaire engine assessing reported symptoms and estimating health scores.',
      'Policy & Claims Tracker: Overview of policy coverage limits, premium renewal dates, and claims submission status.',
      'Nearby Hospital Discovery: Geospatial facility search powered by OpenStreetMap coordinates.'
    ],
    architecture: 'React Frontend → Express REST API → MongoDB Atlas → OpenStreetMap Location Services.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'OpenStreetMap', 'REST APIs'],
    engineeringConsiderations: 'Designed decoupled API routes for symptom triage and policy records to isolate health score calculations.'
  }
]
