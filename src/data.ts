export const ROCSAR_INFO = {
  name: "ROCSAR",
  tagline: "ROtation Compensated Synthetic Aperture Radar",
  description: "Integrated into the REXUS/BEXUS programme, ROCSAR is a stratospheric balloon experiment that uses a compact 5.8 GHz radar to capture high-resolution Earth observation imagery at low cost. To ensure stable acquisitions, the payload actively counteracts the gondola’s rotation to maintain accurate pointing.",
  rexusWebsite: "https://rexusbexus.net",
  objectives: [
    {
      title: "01. SAR",
      desc: "To obtain Synthetic Aperture Radar (SAR) images of the areas surrounding the BEXUS flight path during the ascent and floating phases."
    },
    {
      title: "02. Antennas",
      desc: "To design and test Resonant Cavity Antennas (RCA) for SAR operation."
    },
    {
      title: "03. Rotation Compensation",
      desc: "To design, implement, and test an electromechanical mechanism to compensate for the natural residual rotation of the BEXUS gondola during flight."
    }
  ],
  timeline: [
    { 
      date: "Nov 2025 – Jan 2026", 
      title: "Preliminary Design", 
      desc: "Structural architecture definition, initial CAD iterations, preliminary PCB schematics, and proof-of-concept prototyping." 
    },
    { 
      date: "Feb – May 2026", 
      title: "Critical Design", 
      desc: "Subsystem sizing freeze, PCB layout routing, structural FEA/FEM simulations, and gondola interface definition." 
    },
    { 
      date: "May – Sep 2026", 
      title: "Integration & Testing", 
      desc: "System assembly, environmental qualification (thermal-vacuum and vibration testing), and telemetry verification." 
    },
    { 
      date: "October 2026", 
      title: "Launch Campaign", 
      desc: "Final payload integration on the gondola, pre-flight readiness checks, and launch operations at Esrange Space Center (Kiruna, Sweden)." 
    }
  ],
  designPhotos: [
    { url: "images/gears.jpg", caption: "Rotation Mechanism & Custom Gearbox" },
    { url: "images/main-box.jpg", caption: "Main Payload Electronics Enclosure" },
    { url: "images/assembly.jpg", caption: "Final Mechanical & Electrical Assembly" },
    { url: "images/design-1.jpg", caption: "5.8 GHz Front-End PCB Layout" },
    { url: "images/design-2.jpg", caption: "RP2040 Telemetry Board" }
  ]
};

export const TEAM_MEMBERS = [
  {
    name: "Pedro Cunha",
    role: "Team Leader",
    bio: "M.Sc. Student in Telecommunications, Electronics, and Computer Engineering",
    skills: ["RF", "Programming", "Antenna Design"],
    photoUrl: "images/PedroCunha.jpg"
  },
  {
    name: "Alberto Silva",
    role: "Mechanical Engineer",
    bio: "M.Sc. Student in Mechanical Engineering – Aeronautics and Vehicle Structures",
    skills: ["GearBox Design", "FEM Analysis", "External Relations"],
    photoUrl: "images/AlbertoSilva.jpg"
  },
  {
    name: "Gonçalo Macedo",
    role: "Mechanical Engineer",
    bio: "M.Sc. Student in Mechanical Engineering – Machine Design",
    skills: ["Mechanical Design", "Mechanical Integration", "External Relations"],
    photoUrl: "images/GonçaloMacedo.jpg"
  },
  {
    name: "Andre Targa",
    role: "Mechanical Engineer",
    bio: "M.Sc. Student in Mechanical Engineering – Aeronautics and Vehicle Structures",
    skills: ["Thermal Design", "Thermal Simulation", "Mechanical Testing"],
    photoUrl: "images/AndreTarga.jpg"
  },
  {
    name: "Beatriz Lourenço",
    role: "Mechanical Engineer",
    bio: "M.Sc. Student in Mechanical Engineering – Aeronautics and Vehicle Structures",
    skills: ["FEA", "External Relations", "Outreach"],
    photoUrl: "images/BeatrizLourenço.jpg"
  },
  {
    name: "Filipe Santos",
    role: "Mechanical Engineer",
    bio: "B.Sc. Student in Mechanical Engineering",
    skills: ["Mechanical Design", "Outreach", "External Relations"],
    photoUrl: "images/FilipeSantos.jpg"
  },
  {
    name: "Mafalda Santos",
    role: "Software Engineer",
    bio: "PhD in Electrical and Computer Engineering",
    skills: ["SAR", "Software Integration", "Antenna"],
    photoUrl: "images/MafaldaSantos.jpg"
  },
  {
    name: "Nuno Barros",
    role: "Advisor",
    bio: "Faculty advisor providing technical guidance and institutional support for the ROCSAR payload.",
    skills: ["RF Systems", "Mentoring", "Programme Oversight"],
    photoUrl: "images/NunoBarros.jpg"
  },
  {
    name: "Rafael Caçoete",
    role: "Electronics Engineer",
    bio: "B.Sc. Student in Electrical and Computer Engineering",
    skills: ["PCB design", "Electronics", "Systems Engineering"],
    photoUrl: "images/RafaelCaçoete.jpg"
  }
];

export const SPONSORS = [
  {
    name: "ESA Education",
    category: "Institutional Partner",
    tier: "Diamond",
    logoUrl: "sponsors/ESA.png"
  },
  {
    name: "FEUP",
    category: "Academic Sponsor",
    logoUrl: "sponsors/feup.png"
  },
  {
    name: "Swedish Space Corp",
    category: "Flight Provider",
    logoUrl: "sponsors/SSC_Space.png"
  },
  {
    name: "ZARM",
    category: "Technical Partner",
    logoUrl: "sponsors/Zarm.jpg"
  },
  {
    name: "Geosat",
    category: "Industry Partner",
    tier: "Diamond",
    logoUrl: "sponsors/geosat.png"
  },
  {
    name: "DEEC (FEUP)",
    category: "Departmental Support",
    logoUrl: "sponsors/DEEC.jpg"
  },
  {
    name: "INEGI",
    category: "Technical Partner",
    tier: "Bronze",
    logoUrl: "sponsors/INEGI.png"
  }
];

export const HISTORY_PROJECTS = [
  {
    year: "2025 – 2026",
    name: "SARIA",
    description: "[TODO: one-line SARIA mission description]"
  },
  {
    year: "2023 – 2024",
    name: "SMART",
    description: "Stratospheric Modular Attitude Research Testbed, focusing on stabilization and sensor logging during balloon flight."
  }
];

export const PROJECT_RESULTS = {
  summary: "Following the October 2026 launch campaign at Esrange Space Center, ROCSAR successfully completed all primary flight objectives.",
  highlights: [
    "Stable 5.8 GHz SAR data acquisition achieved during the float phase.",
    "Rotation compensation mechanism effectively counteracted gondola residual spin.",
    "All telemetry, mechanical structures, and sensor assemblies produced and tested at DEEC performed flawlessly post-flight."
  ]
};
