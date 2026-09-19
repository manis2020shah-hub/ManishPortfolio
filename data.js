/* =====================================================================
   EDIT ONLY THIS FILE.
   Filled in from the CV (Manish Shah, dated 2081/08/29). Anything still
   empty shows on the page as an amber marker, and the banner at the top
   counts how many are left. Fill one in and it disappears on its own.

   Deliberately NOT on this page, because it is a public web page rather
   than a Nepali CV: date of birth, parents' names, marital status, and
   the two referees' mobile numbers. Those go in the PDF you attach.

   Save this file and reload index.html to see the change.
   ===================================================================== */

var ME = {
  name:     "Manish Shah",
  initials: "MS",
  role:     "Physics graduate · green hydrogen electrolysis and green-synthesised nanomaterials · Researcher at Innovation Ghar Nepal",
  status:   "Seeking a funded MSc / PhD research assistantship · Autumn 2027",
  location: "Lalitpur, Nepal",
  photo:    "photo.png",  // sits next to index.html; swap for a URL if you host it
  email:    "manish2020shah@gmail.com",
  phone:    "+977 9861360228",
  github:   "https://github.com/manis2020shah-hub",
  linkedin: "https://www.linkedin.com/in/manish-shah-14b238438/",
  orcid:    "https://orcid.org/0009-0008-4432-6746",
  cv:       ""           // link to your CV PDF once it is online
};

var WORKS = [
  {
    slot: "1", num: "01", tag: "HYDROGEN",
    domain: "Electrochemistry · hydrogen production",
    title: "Green hydrogen production using electrolysis with a three-electrode model",
    status: "", venue: "",
    summary: "Water electrolysis treated as an engineering problem: how the configuration and the chemistry of the cell change what comes out of it, and what it takes to turn that hydrogen back into power. I built the cell, ran the conditions, and evaluated the output end to end.",
    methods: [
      "Three-electrode electrolysis model",
      "Electrolysis of water for hydrogen generation",
      "Hydrogen purification and power generation",
      "Thermal evaluation of the power-generation stage",
      "Renewable-energy integration"
    ],
    contribution: "",
    bench: [
      { v: "Three-electrode", l: "Cell configuration" },
      { v: "", l: "Electrode spacing", hint: "e.g. 5–25 mm" },
      { v: "", l: "Electrolyte", hint: "e.g. KOH 0.5–2 M" },
      { v: "", l: "Electrode material", hint: "e.g. nickel, graphite" }
    ],
    links: [ { label: "Paper", url: "" }, { label: "PDF", url: "" } ],
    why: "The strongest card for a physics applicant. Electrolyzer, electrocatalysis and fuel-cell groups use this exact vocabulary daily, and they sit in Chemical, Mechanical and Materials Engineering as well as Physics."
  },
  {
    slot: "2", num: "02", tag: "NANOMATERIALS",
    domain: "Green synthesis · nanomaterials",
    title: "Green synthesis of copper from waste materials",
    status: "", venue: "",
    summary: "Recovering copper from waste and preparing it as nanoparticles by a green route, then putting those particles to use. It is the paper that widens me from a single electrochemical cell into nanomaterials synthesis and characterisation generally.",
    methods: [
      "Green synthesis route from waste feedstock",
      "Nanoparticle preparation",
      "Application of the synthesised nanoparticles",
      { hint: "structural characterisation — e.g. XRD" },
      { hint: "morphological or optical characterisation — e.g. SEM, UV–Vis" }
    ],
    contribution: "",
    bench: null,
    links: [ { label: "Paper", url: "" }, { label: "PDF", url: "" } ],
    why: "Green synthesis and waste-derived feedstock is an active US research area in its own right, and several of the groups doing metal-oxide nanocrystal work sit in Physics departments — the lowest-friction transfer from a B.Sc. Physics."
  },
  {
    slot: "3", num: "03", tag: "SUSCEPTIBILITY",
    domain: "Microbiology · assay work",
    title: "",
    status: "", venue: "",
    summary: "Antibiotic susceptibility testing. I am deliberately honest about where this one sits: for a physics application it is evidence of laboratory method and scientific writing, not a third research identity.",
    methods: [
      { hint: "what was tested — organisms and antibiotics" },
      { hint: "method — e.g. disc diffusion, broth MIC" },
      { hint: "what was measured — e.g. zone of inhibition in mm" },
      { hint: "whether this used your copper nanoparticles" }
    ],
    contribution: "",
    bench: null,
    links: [ { label: "Paper", url: "" }, { label: "PDF", url: "" } ],
    why: "Where this counts is the instrumentation side — groups building rapid susceptibility measurement with Raman imaging, microfluidics or SERS sensors, where a physics background is an advantage rather than a gap."
  }
];

/* Secondary projects, from the CV. Short entries, not full cards. */
var MINIS = [
  { title: "Synthesis of graphene and fabrication of a graphene gas sensor",
    detail: "Design and modelling of the sensor fabrication, sensitivity analysis across graphene parameters, and the Arduino programming behind the readout." },
  { title: "Thermal evaluation of an evacuated solar-tube receiver",
    detail: "Hands-on work through the manufacturing process, with thermal performance evaluation of the receiver." },
  { title: "Poster presentation, 6th National Science Day",
    detail: "Nepal Academy of Science and Technology (NAST), Khumaltar, Lalitpur — demonstration of project work." }
];

var JOBS = [
  { years: "Feb 2023 — present", role: "Researcher", org: "Innovation Ghar Nepal, Lalitpur",
    detail: "Data handling and analysis; preparing research proposals; preparing articles for publication." },
  { years: "Nov 2021 — Feb 2022", role: "Data Entry", org: "Central Bureau of Statistics, Nepal",
    detail: "Transferring survey data from paper to database, maintaining data accuracy, and following collection protocols." },
  { years: "Mar 2019 — Jun 2021", role: "Teacher", org: "Peace Garden English Boarding School, Khokana",
    detail: "Preparing and delivering lessons across a mixed-ability class, varying teaching method to suit the group, and setting assignments." }
];

var SKILLS = [
  { group: "Experimental & fabrication", items: [
    { name: "Three-electrode electrolysis cell", note: "Built and operated for the green-hydrogen study." },
    { name: "Green nanoparticle synthesis", note: "Copper recovered from waste materials and prepared as nanoparticles." },
    { name: "Graphene synthesis and gas-sensor fabrication", note: "Including sensitivity analysis across sensor parameters." },
    { name: "Arduino data loggers", note: "Built and programmed for instrument readout." }
  ]},
  { group: "Modelling & CAD", items: [
    { name: "AutoCAD", note: "Working drawings." },
    { name: "SOLIDWORKS", note: "Biogas systems, gears and machine parts." },
    { name: "CATIA", note: "Turbine blade and hub modelling." }
  ]},
  { group: "Computing", items: [
    { name: "Arduino (C/C++)", note: "Instrument control and logging." },
    { name: "C and QBASIC", note: "Programming fundamentals." },
    { name: "Python", note: "Workshop on Python for supercomputing." },
    { name: "Deep learning in physics", note: "15-day training — applied, not yet published." }
  ]},
  { group: "Research communication", items: [
    { name: "Conference paper preparation", note: "" },
    { name: "Proposal and report writing", note: "A core part of the Innovation Ghar role." },
    { name: "Microsoft Word, Excel, PowerPoint", note: "" }
  ]},
  { group: "Media & documentation", items: [
    { name: "DaVinci Resolve", note: "Video editing, modelling and animation." },
    { name: "Adobe Photoshop", note: "Figure and image preparation." }
  ]},
  { group: "Languages", items: [
    { name: "Nepali, Maithili, Hindi, English", note: "All fluent, written and spoken." },
    { hint: "English test score, if you have one — e.g. IELTS 7.0" }
  ]}
];

var TRAINING = [
  { name: "Research Methodology and Research Paper Writing / Publication", org: "Centre of Energy Studies (CES) with the University Grants Commission (UGC)", dur: "2 days" },
  { name: "Deep Learning in Physics", org: "", dur: "15 days" },
  { name: "Python using Supercomputer", org: "Workshop", dur: "5 days" },
  { name: "Diploma in Computer and Basic Training", org: "", dur: "6 months" }
];

var EDU = [
  { years: "", degree: "B.Sc. — Physics, Mathematics, Statistics",
    institution: "Patan Multiple Campus, Patan Dhoka, Lalitpur · Tribhuvan University",
    detail: "60.15%. Majors in Physics, Mathematics and Statistics." },
  { years: "", degree: "+2 Science",
    institution: "Shikshadeep Higher Secondary School, Biratnagar, Morang · NEB",
    detail: "GPA 3.06. Physics, Chemistry, Mathematics and Computer Science." },
  { years: "", degree: "SLC",
    institution: "Lahan Merry Children Academy, Lahan",
    detail: "GPA 3.30. Optional Mathematics and Computer Science." }
];
