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
  field:    "Green Hydrogen & Nanomaterials",   // shown in the browser tab
  coords:   "27.6674° N · 85.3086° E — Lalitpur, Nepal",
  pitch:    "I build the cell, isolate one variable, and report what the instrument actually showed — *water electrolysis*, *green-synthesised nanomaterials*, and the sensors that measure them.",
  role:     "Physics graduate · Research Assistant at Innovation Ghar Nepal. green hydrogen electrolysis and green-synthesised nanomaterials",
  status:   "Seeking a funded MSc / PhD research assistantship · Spring / Fall 2027",
  location: "Lalitpur, Nepal",
  photo:    "photo.png",  // sits next to index.html; swap for a URL if you host it
  email:    "manish2020shah@gmail.com",
  phone:    "+977 9861360228",
  github:   "https://github.com/manis2020shah-hub",
  linkedin: "https://www.linkedin.com/in/manish-shah-14b238438/",
  orcid:    "https://orcid.org/0009-0008-4432-6746",
  // cv:       "https://drive.google.com/file/d/1vfIyBbURH8cEyYuD21wc7udu_YrPMqjG/view?usp=sharing"           // link to your CV PDF once it is online
  cv: "/Manish_Shah_Academic_CV.pdf"
};

/* The Profile section. One string per paragraph; *stars* italicise, **doubles** bold. */
var PROFILE = [
  "I am a physics graduate working at the experimental end of energy materials, and a research assistant at **Innovation Ghar Nepal** since February 2023. My work runs from **green hydrogen production by water electrolysis**, through **green synthesis of copper nanoparticles from waste materials**, to **graphene synthesis and gas-sensor fabrication**.",
  "The common thread is the measurement itself: building the cell or the sensor, isolating one variable, and reporting what the instrument actually showed. A physics training is what makes that transferable — the electrochemistry, the nanomaterials and the sensing are different subjects, but they are the same discipline of controlled measurement."
];

/* The short fact column beside the profile. */
var FACTS = [
  { k: "Degree",   v: "B.Sc. Physics, Mathematics, Statistics" },
  { k: "Standing", v: "60.15% · Tribhuvan University" },
  { k: "Focus",    v: "Water electrolysis · green nanomaterials · gas sensors" },
  { k: "Based in", v: "Lalitpur, Nepal" }
];

var WORKS = [
  {
    slot: "1", num: "01", tag: "HYDROGEN",
    domain: "Electrochemistry · hydrogen production",
    title: "Green hydrogen production using electrolysis with a three-electrode model",
    status: "B.Sc. project, Aug 2024", venue: "",
    summary: "Water electrolysis treated as an engineering problem: how the configuration and the chemistry of the cell change what comes out of it, and what it takes to turn that hydrogen back into power. I built the cell, ran the conditions, and evaluated the output end to end.",
    methods: [
      // "Three-electrode electrolysis model",
      // "Electrolysis of water for hydrogen generation",
      // "Hydrogen purification and power generation",
      // "Thermal evaluation of the power-generation stage",
      // "Renewable-energy integration"
    ],
    bench: [
      { v: "Two- and three-electrode", l: "Cell configuration" },
      { v: "1–3 mm", l: "Electrode spacing" },
      { v: "NaCl, 0–5 g", l: "Electrolyte" },
      { v: "Graphite, Ø15 × 75 mm", l: "Electrode material" }
    ],
    links: [ { label: "Paper", url: "" }, { label: "PDF", url: "" } ],
    // why: "The strongest card for a physics applicant. Electrolyzer, electrocatalysis and fuel-cell groups use this exact vocabulary daily, and they sit in Chemical, Mechanical and Materials Engineering as well as Physics."
  },
  {
    slot: "2", num: "02", tag: "NANOMATERIALS",
    domain: "Green synthesis · photocatalysis",
    title: "Green synthesis of copper nanoparticles from agro-waste garlic husk and its efficiency in degradation of rifampicin antibiotic and optical absorption",
    status: "First author · in preparation", venue: "",
    summary: "Garlic husk — an agro-waste thrown out by the kitchen-load — is used as the reducing and stabilising agent that turns copper sulfate into **copper nanoparticles**, with no synthetic reductant involved. The particles are then put to work: they degrade **rifampicin**, an antibiotic that reaches surface water as pharmaceutical pollution, and I mapped the degradation against concentration, pH, contact time, temperature and nanoparticle dose.",
    methods: [
      // "Extract preparation: garlic husk dried for 48 h, ground, steeped in double-distilled water for 24 h and filtered to a 1 mg/mL aqueous extract",
      // "Synthesis: extract added dropwise into 0.1 M copper sulfate, pH held at 9 with 0.1 N NaOH, stirred 2 h at 60 °C and 150 rpm; the blue-to-green colour change marks nanoparticle formation",
      // "Recovery: centrifuged at 6000 rpm for 20 min, washed in double-distilled water and dried",
      // "Optical characterisation by UV–vis absorption spectroscopy",
      // "Degradation assay on 10 mg/L rifampicin, tracked as the fall in absorbance at λmax = 480 nm and converted to percentage degradation",
      // "Thermodynamics from a Van ’t Hoff plot (ΔH, ΔS) and activation energy from an Arrhenius plot"
    ],
    bench: [
      { v: "Garlic husk, 1 mg/mL", l: "Reducing agent" },
      { v: "0.1 M CuSO₄", l: "Precursor" },
      { v: "pH 9 · 60 °C · 2 h", l: "Synthesis conditions" },
      { v: "221 nm", l: "UV–vis peak" }
    ],
    links: [ { label: "Paper", url: "" }, { label: "PDF", url: "" } ],
    // why: "Green synthesis from waste feedstock is an active research area in its own right, and pairing it with photocatalytic removal of pharmaceutical pollutants puts the work in front of environmental-nanomaterials and water-treatment groups as well. Several of the groups doing metal-oxide nanocrystal work sit in Physics departments — the lowest-friction transfer from a B.Sc. Physics."
  },
  {
    slot: "3", num: "03", tag: "SUSCEPTIBILITY",
    domain: "Clinical microbiology · antimicrobial resistance",
    title: "Antibiotic susceptibility pattern of bacterial pathogens isolated from sputum of patients with lower respiratory tract infections at a tertiary care hospital in Nepal",
    status: "First author, 2025", venue: "",
    summary: "A prospective, cross-sectional study of 475 sputum samples from patients with suspected lower respiratory tract infection at Nepal Medical College Hospital, Kathmandu, between February and May 2025. Seventy-one samples grew a significant pathogen, and nine in ten of those were Gram-negative bacilli led by *Klebsiella pneumoniae*. The point of the paper is the **local antibiogram**: which drugs still work at this centre, and how much of the resistance is multidrug.",
    methods: [
      // "Prospective cross-sectional sampling, screened against the Murray–Washington quality criterion (fewer than 10 squamous epithelial cells per low-power field) to reject saliva-contaminated specimens",
      // "Gram staining and quadrant-streak culture on 5% sheep blood, chocolate and MacConkey agar",
      // "Identification by colony morphology, Gram reaction and a biochemical panel — catalase, oxidase and coagulase; indole, citrate, urease, motility, TSI and H₂S",
      // "Modified Kirby–Bauer disc diffusion on Mueller–Hinton agar to CLSI guidance, inoculum standardised to 0.5 McFarland turbidity",
      // "Multidrug resistance scored by the ECDC/CDC definition — non-susceptibility to at least one agent in three or more antimicrobial categories",
      // "Daily quality control of incubator, autoclave and media sterility; descriptive analysis in Excel"
    ],
    bench: [
      { v: "475", l: "Sputum samples" },
      { v: "71 (14.94%)", l: "Culture-positive" },
      { v: "90.14%", l: "Gram-negative" },
      { v: "42.25%", l: "Multidrug-resistant" }
    ],
    links: [ { label: "Paper", url: "" }, { label: "PDF", url: "" } ],
    // why: "Where this counts is the instrumentation side — groups building rapid susceptibility measurement with Raman imaging, microfluidics or SERS sensors, where a physics background is an advantage rather than a gap."
  }
];

/* The final-year project (B.Sc.), from "4th year final report.docx". */
var THESIS = {
  title:  "Green Hydrogen Production via Electrolysis with a Two- and Three-Electrode Model",
  meta:   "B.Sc. final-year project (PRO-406) · Department of Physics, Patan Multiple Campus, Tribhuvan University · August 2024",
  pdf:    "https://drive.google.com/file/d/1HNH_f_RrPr1ffM-MPnXlVKt5CVhBshIz/view?usp=sharing",          // link to the report PDF once it is online
  lead:   "My final-year project built an alkaline water electrolyser twice over — once as a conventional **two-electrode cell**, once with a third reference electrode — and measured what actually came out of each. Over graphite electrodes in NaCl solution I varied electrode spacing, electrolyte concentration, applied voltage and electrode alignment, and recorded the volume of hydrogen evolved at every combination. The **three-electrode configuration**, which holds the working electrode against a steady reference potential, produced close to 50% more hydrogen than the two-electrode cell on the same power.",
  facts: [
    { k: "Cell",        v: "0.45 L two-compartment electrolyser, 15 × 4.5 × 4 cm conduit" },
    { k: "Electrodes",  v: "Cylindrical graphite, 99% purity, Ø 15 mm × 75 mm" },
    { k: "Electrolyte", v: "NaCl solution, 0–5 g" },
    { k: "Variables",   v: "Spacing 1–3 mm · 5–30 V · parallel vs inclined alignment" },
    { k: "Supervisors", v: "Assist. Prof. Santosh Kumar Das · Saddam Hussain Dhobi (co-supervisor)" }
  ],
  findings: [
    // "**The three-electrode cell beat the two-electrode cell at every condition tested** — 200 mL of hydrogen at 1 mm spacing and 5 g NaCl, against 135 mL for the two-electrode setup on the same power.",
    // "**Electrode spacing matters:** yield fell steadily from 1 mm to 3 mm — 200, 190 and 178 mL at 5 g NaCl — as the ohmic path through the electrolyte lengthened.",
    // "**Electrolyte concentration dominates:** at 1 mm spacing the three-electrode cell rose from 14 mL with no NaCl to 200 mL at 5 g.",
    // "**Applied voltage,** swept from 5 V to 30 V, raised the evolution rate sharply, consistent with a more uniform charge density over the cylindrical electrode.",
    // "**Alignment changed the outcome too:** parallel electrodes out-produced inclined ones in both cell configurations.",
    // "The concentration trend reproduces Yuvaraj & Santhanaraj (2014) for graphite electrodes, the closest published comparison."
  ]
};

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
  { years: "Feb 2023 — present", role: "Research Assistant", org: "Innovation Ghar Nepal, Lalitpur",
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
    { name: "Graphene synthesis and gas-sensor fabrication", note: "Including sensitivity analysis across sensor parameters." }
  ]},
  { group: "Computing", items: [
    { name: "C and QBASIC", note: "Programming fundamentals." },
    { name: "Python", note: "Workshop on Python for supercomputing." },
    { name: "R", note: "Statistical analysis." },
    { name: "Origin Pro", note: "Data analysis and plotting." },
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
    detail: "60.15% aggregate.",
    courses: ["Physics", "Mathematics", "Statistics"] },
  { years: "", degree: "+2 Science",
    institution: "Shikshadeep Higher Secondary School, Biratnagar, Morang · NEB",
    detail: "GPA 3.06.",
    courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"] },
  { years: "", degree: "SLC",
    institution: "Lahan Merry Children Academy, Lahan",
    detail: "GPA 3.30.",
    courses: ["Optional Mathematics", "Computer Science"] }
];
