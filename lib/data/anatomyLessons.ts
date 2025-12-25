// lib/data/anatomyLessons.ts

export const anatomyLessons = [
  {
    id: "anatomy-1",
    title: "Basic Anatomy - Body Parts",
    description: "Partes básicas do corpo humano",
    level: "Beginner",
    xp: 30,
    hearts: 5,
    exercises: [
      {
        type: "matching",
        question: "Combine os termos em português com o inglês correto",
        pairs: [
          { pt: "cabeça", en: "head" },
          { pt: "braço", en: "arm" },
          { pt: "perna", en: "leg" },
          { pt: "peito", en: "chest" },
          { pt: "estômago", en: "abdomen" },
          { pt: "costas", en: "back" },
          { pt: "mão", en: "hand" },
          { pt: "pé", en: "foot" },
        ],
      },
      {
        type: "multiple_choice",
        question: "Qual é o termo em inglês para 'olho'?",
        options: ["ear", "eye", "nose", "mouth"],
        correct: "eye",
      },
      {
        type: "multiple_choice",
        question: "Qual é o termo em inglês para 'boca'?",
        options: ["nose", "mouth", "chin", "forehead"],
        correct: "mouth",
      },
      {
        type: "translate_to_en",
        question: "Traduza: 'O paciente reclama de dor de cabeça.'",
        correct: "The patient complains of a headache.",
      },
      {
        type: "translate_to_en",
        question: "Traduza: 'A enfermeira mediu a temperatura no braço.'",
        correct: "The nurse took the temperature in the arm.",
      },
      {
        type: "fill_blank",
        question: "The patient has pain in the lower _____ . (costas)",
        correct: "back",
      },
      {
        type: "fill_blank",
        question: "The doctor palpated the patient's _____ . (abdômen)",
        correct: "abdomen",
      },
      {
        type: "listen_type",
        audioText: "Please point to your chest.",
        question: "Digite o que você ouviu",
        correct: "Please point to your chest.",
      },
      {
        type: "speak",
        question: "Pronuncie claramente: 'abdomen'",
        expected: "abdomen",
        hint: "ab-DOH-men",
      },
    ],
  },

  {
    id: "anatomy-2",
    title: "Upper Body Anatomy",
    description: "Anatomia detalhada da parte superior do corpo",
    level: "Beginner",
    xp: 35,
    exercises: [
      {
        type: "matching",
        question: "Combine corretamente",
        pairs: [
          { pt: "pescoço", en: "neck" },
          { pt: "ombro", en: "shoulder" },
          { pt: "cotovelo", en: "elbow" },
          { pt: "punho", en: "wrist" },
          { pt: "dedo", en: "finger" },
          { pt: "tórax", en: "thorax" },
          { pt: "clavícula", en: "collarbone" },
          { pt: "axila", en: "armpit" },
        ],
      },
      {
        type: "multiple_choice",
        question: "The collarbone is also known as:",
        options: ["scapula", "clavicle", "humerus", "radius"],
        correct: "clavicle",
      },
      {
        type: "translate_to_en",
        question: "O paciente fraturou a clavícula esquerda.",
        correct: "The patient fractured the left clavicle.",
      },
      {
        type: "translate_to_pt",
        question: "The nurse applied a bandage to the patient's wrist.",
        correct: "A enfermeira aplicou uma faixa no punho do paciente.",
      },
      {
        type: "fill_blank",
        question: "Pain radiated from the _____ to the fingers. (ombro)",
        correct: "shoulder",
      },
      {
        type: "fill_blank",
        question: "The doctor auscultated the _____ with a stethoscope. (tórax)",
        correct: "thorax",
      },
      {
        type: "listen_type",
        audioText: "Raise your arms above your head.",
        question: "Digite o que ouviu",
        correct: "Raise your arms above your head.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'clavicle'",
        expected: "clavicle",
        hint: "KLA-vi-kul",
      },
      {
        type: "multiple_choice",
        question: "Where is the elbow located?",
        options: ["Between shoulder and wrist", "Between upper arm and forearm", "Between wrist and fingers", "In the neck"],
        correct: "Between upper arm and forearm",
      },
    ],
  },

  {
    id: "anatomy-3",
    title: "Lower Body & Limbs",
    description: "Membros inferiores e estruturas relacionadas",
    level: "Intermediate",
    xp: 40,
    exercises: [
      {
        type: "matching",
        pairs: [
          { pt: "quadril", en: "hip" },
          { pt: "joelho", en: "knee" },
          { pt: "tornozelo", en: "ankle" },
          { pt: "calcanhar", en: "heel" },
          { pt: "dedo do pé", en: "toe" },
          { pt: "coxa", en: "thigh" },
          { pt: "panturrilha", en: "calf" },
          { pt: "patela", en: "kneecap" },
          { pt: "fêmur", en: "femur" },
        ],
      },
      {
        type: "multiple_choice",
        question: "The longest bone in the human body is the:",
        options: ["tibia", "fibula", "femur", "humerus"],
        correct: "femur",
      },
      {
        type: "translate_to_en",
        question: "O paciente torceu o tornozelo durante a corrida.",
        correct: "The patient sprained the ankle while running.",
      },
      {
        type: "translate_to_en",
        question: "A enfermeira mediu a circunferência da panturrilha.",
        correct: "The nurse measured the calf circumference.",
      },
      {
        type: "fill_blank",
        question: "The patella protects the _____ joint.",
        correct: "knee",
      },
      {
        type: "fill_blank",
        question: "Swelling was observed around the _____ . (tornozelo)",
        correct: "ankle",
      },
      {
        type: "listen_type",
        audioText: "Please bend your knee slowly.",
        question: "Digite o que ouviu",
        correct: "Please bend your knee slowly.",
      },
      {
        type: "speak",
        question: "Pronuncie claramente: 'patella'",
        expected: "patella",
        hint: "puh-TEL-uh",
      },
      {
        type: "multiple_choice",
        question: "The tibia is commonly known as:",
        options: ["shin bone", "thigh bone", "calf bone", "heel bone"],
        correct: "shin bone",
      },
      {
        type: "translate_to_pt",
        question: "The X-ray showed a fracture in the femur.",
        correct: "O raio-X mostrou uma fratura no fêmur.",
      },
    ],
  },

  {
    id: "anatomy-4",
    title: "Major Organs & Systems",
    description: "Principais órgãos internos e sistemas",
    level: "Intermediate",
    xp: 45,
    exercises: [
      {
        type: "matching",
        pairs: [
          { pt: "coração", en: "heart" },
          { pt: "pulmões", en: "lungs" },
          { pt: "fígado", en: "liver" },
          { pt: "rins", en: "kidneys" },
          { pt: "cérebro", en: "brain" },
          { pt: "pâncreas", en: "pancreas" },
          { pt: "baço", en: "spleen" },
          { pt: "estômago", en: "stomach" },
          { pt: "intestinos", en: "intestines" },
        ],
      },
      {
        type: "multiple_choice",
        question: "Which organ detoxifies the blood and produces bile?",
        options: ["Kidneys", "Pancreas", "Liver", "Spleen"],
        correct: "Liver",
      },
      {
        type: "translate_to_en",
        question: "O ultrassom abdominal revelou esteatose hepática.",
        correct: "The abdominal ultrasound revealed hepatic steatosis.",
      },
      {
        type: "translate_to_en",
        question: "Os rins do paciente estão funcionando normalmente.",
        correct: "The patient's kidneys are functioning normally.",
      },
      {
        type: "fill_blank",
        question: "The _____ regulates blood sugar levels. (pâncreas)",
        correct: "pancreas",
      },
      {
        type: "fill_blank",
        question: "Oxygen enters the body through the _____ .",
        correct: "lungs",
      },
      {
        type: "listen_type",
        audioText: "The heart rate is 78 beats per minute.",
        question: "Digite o que ouviu",
        correct: "The heart rate is 78 beats per minute.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'pancreas'",
        expected: "pancreas",
        hint: "PAN-kree-us",
      },
      {
        type: "multiple_choice",
        question: "The brain and spinal cord form the:",
        options: ["Peripheral nervous system", "Central nervous system", "Autonomic system", "Endocrine system"],
        correct: "Central nervous system",
      },
    ],
  },

  {
    id: "anatomy-5",
    title: "Musculoskeletal System - Advanced",
    description: "Sistema musculoesquelético com termos clínicos avançados",
    level: "Advanced",
    xp: 50,
    exercises: [
      {
        type: "matching",
        pairs: [
          { pt: "vértebra", en: "vertebra" },
          { pt: "coluna vertebral", en: "spine" },
          { pt: "costela", en: "rib" },
          { pt: "esterno", en: "sternum" },
          { pt: "pelve", en: "pelvis" },
          { pt: "crânio", en: "skull" },
          { pt: "escápula", en: "scapula" },
          { pt: "úmero", en: "humerus" },
        ],
      },
      {
        type: "multiple_choice",
        question: "The medical term for shoulder blade is:",
        options: ["clavicle", "scapula", "sternum", "ilium"],
        correct: "scapula",
      },
      {
        type: "translate_to_en",
        question: "A ressonância mostrou hérnia de disco lombar em L4-L5.",
        correct: "The MRI showed a lumbar disc herniation at L4-L5.",
      },
      {
        type: "fill_blank",
        question: "The patient has scoliosis of the thoracic _____ .",
        correct: "spine",
      },
      {
        type: "listen_type",
        audioText: "Palpation revealed tenderness over the lumbar vertebrae.",
        question: "Digite o que ouviu",
        correct: "Palpation revealed tenderness over the lumbar vertebrae.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'intervertebral disc'",
        expected: "intervertebral disc",
      },
      {
        type: "translate_to_pt",
        question: "The patient underwent pelvic reconstruction surgery.",
        correct: "O paciente foi submetido a cirurgia de reconstrução pélvica.",
      },
      {
        type: "multiple_choice",
        question: "How many cervical vertebrae are there in humans?",
        options: ["5", "7", "12", "5 lumbar"],
        correct: "7",
      },
    ],
  },

  {
    id: "anatomy-6",
    title: "Cardiovascular & Nervous System - Advanced",
    description: "Sistemas cardiovascular e nervoso com terminologia clínica",
    level: "Advanced",
    xp: 55,
    exercises: [
      {
        type: "matching",
        pairs: [
          { pt: "artéria coronária", en: "coronary artery" },
          { pt: "veia jugular", en: "jugular vein" },
          { pt: "nervo vago", en: "vagus nerve" },
          { pt: "medula espinhal", en: "spinal cord" },
          { pt: "aorta", en: "aorta" },
          { pt: "átrio", en: "atrium" },
          { pt: "ventrículo", en: "ventricle" },
          { pt: "nervo óptico", en: "optic nerve" },
        ],
      },
      {
        type: "translate_to_en",
        question: "O ECG mostrou fibrilação atrial com resposta ventricular rápida.",
        correct: "The ECG showed atrial fibrillation with rapid ventricular response.",
      },
      {
        type: "fill_blank",
        question: "The _____ aorta is the first segment after the heart.",
        correct: "ascending",
      },
      {
        type: "multiple_choice",
        question: "The vagus nerve is cranial nerve number:",
        options: ["V", "VII", "X", "XII"],
        correct: "X",
      },
      {
        type: "listen_type",
        audioText: "Blood pressure is 140 over 90 millimeters of mercury.",
        question: "Digite o que ouviu",
        correct: "Blood pressure is 140 over 90 millimeters of mercury.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'myocardial infarction'",
        expected: "myocardial infarction",
      },
      {
        type: "translate_to_en",
        question: "O paciente apresentou isquemia transitória no território da artéria cerebral média.",
        correct: "The patient presented transient ischemia in the middle cerebral artery territory.",
      },
      {
        type: "multiple_choice",
        question: "Which chamber pumps blood into the aorta?",
        options: ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"],
        correct: "Left ventricle",
      },
    ],
  },
];
