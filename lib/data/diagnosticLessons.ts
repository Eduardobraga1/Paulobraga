// lib/data/diagnosticLessons.ts

export const diagnosticLessons = [
  {
    id: "diagnostic-1",
    title: "Basic Laboratory Tests",
    description: "Exames laboratoriais básicos",
    level: "Beginner",
    xp: 30,
    hearts: 5,
    exercises: [
      {
        type: "matching",
        question: "Combine os exames laboratoriais",
        pairs: [
          { pt: "hemograma completo", en: "complete blood count" },
          { pt: "glicemia", en: "blood glucose" },
          { pt: "ureia", en: "urea" },
          { pt: "creatinina", en: "creatinine" },
          { pt: "urina tipo 1", en: "urinalysis" },
          { pt: "colesterol", en: "cholesterol" },
          { pt: "hemoglobina", en: "hemoglobin" },
        ],
      },
      {
        type: "multiple_choice",
        question: "What does 'CBC' stand for?",
        options: [
          "Complete Body Check",
          "Complete Blood Count",
          "Cardiac Blood Check",
          "Central Blood Count"
        ],
        correct: "Complete Blood Count",
      },
      {
        type: "translate_to_en",
        question: "Solicite hemograma completo e bioquímica.",
        correct: "Order complete blood count and biochemistry.",
      },
      {
        type: "translate_to_en",
        question: "O resultado da glicemia está elevado.",
        correct: "The blood glucose result is elevated.",
      },
      {
        type: "fill_blank",
        question: "The patient's _____ level is 180 mg/dL. (glicemia)",
        correct: "glucose",
      },
      {
        type: "fill_blank",
        question: "We need to check the _____ function with these tests. (renal)",
        correct: "kidney",
      },
      {
        type: "listen_type",
        audioText: "The urinalysis shows presence of protein and blood.",
        question: "Digite o que ouviu",
        correct: "The urinalysis shows presence of protein and blood.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'urinalysis'",
        expected: "urinalysis",
        hint: "yur-ih-NAL-ih-sis",
      },
      {
        type: "multiple_choice",
        question: "Normal fasting blood glucose is typically below:",
        options: ["70 mg/dL", "100 mg/dL", "140 mg/dL", "200 mg/dL"],
        correct: "100 mg/dL",
      },
    ],
  },

  {
    id: "diagnostic-2",
    title: "Imaging Studies Basics",
    description: "Exames de imagem básicos",
    level: "Beginner",
    xp: 35,
    exercises: [
      {
        type: "matching",
        question: "Combine os exames de imagem",
        pairs: [
          { pt: "raio-X", en: "X-ray" },
          { pt: "ultrassom", en: "ultrasound" },
          { pt: "tomografia computadorizada", en: "CT scan" },
          { pt: "ressonância magnética", en: "MRI" },
          { pt: "mamografia", en: "mammography" },
          { pt: "radiografia de tórax", en: "chest X-ray" },
        ],
      },
      {
        type: "multiple_choice",
        question: "What does 'CT' stand for?",
        options: [
          "Cardiac Test",
          "Computed Tomography",
          "Central Testing",
          "Clinical Trial"
        ],
        correct: "Computed Tomography",
      },
      {
        type: "translate_to_en",
        question: "O médico solicitou uma radiografia de tórax.",
        correct: "The doctor ordered a chest X-ray.",
      },
      {
        type: "translate_to_pt",
        question: "The ultrasound shows no abnormalities.",
        correct: "O ultrassom não mostra anormalidades.",
      },
      {
        type: "fill_blank",
        question: "The _____ will help us visualize soft tissue structures. (ressonância)",
        correct: "MRI",
      },
      {
        type: "fill_blank",
        question: "A chest _____ confirmed the presence of pneumonia. (raio-X)",
        correct: "X-ray",
      },
      {
        type: "listen_type",
        audioText: "Schedule a CT scan of the abdomen and pelvis with contrast.",
        question: "Digite o que ouviu",
        correct: "Schedule a CT scan of the abdomen and pelvis with contrast.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'magnetic resonance imaging'",
        expected: "magnetic resonance imaging",
      },
      {
        type: "multiple_choice",
        question: "Which imaging modality uses magnetic fields?",
        options: ["X-ray", "CT scan", "MRI", "Ultrasound"],
        correct: "MRI",
      },
    ],
  },

  {
    id: "diagnostic-3",
    title: "Cardiac & Pulmonary Tests",
    description: "Exames cardíacos e pulmonares",
    level: "Intermediate",
    xp: 40,
    exercises: [
      {
        type: "matching",
        pairs: [
          { pt: "eletrocardiograma", en: "electrocardiogram" },
          { pt: "ecocardiograma", en: "echocardiogram" },
          { pt: "teste ergométrico", en: "stress test" },
          { pt: "espirometria", en: "spirometry" },
          { pt: "cateterismo cardíaco", en: "cardiac catheterization" },
          { pt: "monitor Holter", en: "Holter monitor" },
          { pt: "oximetria", en: "pulse oximetry" },
        ],
      },
      {
        type: "multiple_choice",
        question: "What does 'ECG' or 'EKG' stand for?",
        options: [
          "Electrocardiogram",
          "Echocardiogram",
          "Electrogram",
          "Emergency Cardiac Graph"
        ],
        correct: "Electrocardiogram",
      },
      {
        type: "translate_to_en",
        question: "O ECG mostra alterações compatíveis com isquemia miocárdica.",
        correct: "The ECG shows changes consistent with myocardial ischemia.",
      },
      {
        type: "translate_to_en",
        question: "A espirometria revelou padrão obstrutivo.",
        correct: "The spirometry revealed an obstructive pattern.",
      },
      {
        type: "fill_blank",
        question: "The _____ showed reduced ejection fraction. (ecocardiograma)",
        correct: "echocardiogram",
      },
      {
        type: "fill_blank",
        question: "The patient will wear a _____ monitor for 24 hours. (Holter)",
        correct: "Holter",
      },
      {
        type: "listen_type",
        audioText: "The stress test was positive for exercise-induced ischemia.",
        question: "Digite o que ouviu",
        correct: "The stress test was positive for exercise-induced ischemia.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'echocardiogram'",
        expected: "echocardiogram",
        hint: "ek-oh-KAR-dee-oh-gram",
      },
      {
        type: "multiple_choice",
        question: "What does a pulse oximeter measure?",
        options: [
          "Blood pressure",
          "Heart rate only",
          "Oxygen saturation",
          "Blood glucose"
        ],
        correct: "Oxygen saturation",
      },
      {
        type: "translate_to_pt",
        question: "The cardiac catheterization revealed significant coronary artery disease.",
        correct: "O cateterismo cardíaco revelou doença arterial coronariana significativa.",
      },
    ],
  },

  {
    id: "diagnostic-4",
    title: "Specialized Laboratory Tests",
    description: "Exames laboratoriais especializados",
    level: "Intermediate",
    xp: 45,
    exercises: [
      {
        type: "matching",
        pairs: [
          { pt: "função hepática", en: "liver function tests" },
          { pt: "função tireoidiana", en: "thyroid function tests" },
          { pt: "marcadores tumorais", en: "tumor markers" },
          { pt: "troponina", en: "troponin" },
          { pt: "gasometria arterial", en: "arterial blood gas" },
          { pt: "eletrólitos", en: "electrolytes" },
          { pt: "coagulograma", en: "coagulation profile" },
        ],
      },
      {
        type: "multiple_choice",
        question: "What does 'ABG' stand for?",
        options: [
          "Automated Blood Glucose",
          "Arterial Blood Gas",
          "Advanced Blood Group",
          "Antibody Blood Group"
        ],
        correct: "Arterial Blood Gas",
      },
      {
        type: "translate_to_en",
        question: "Os níveis de troponina estão elevados, sugerindo lesão miocárdica.",
        correct: "Troponin levels are elevated, suggesting myocardial injury.",
      },
      {
        type: "translate_to_en",
        question: "A gasometria mostra acidose metabólica.",
        correct: "The blood gas shows metabolic acidosis.",
      },
      {
        type: "fill_blank",
        question: "The _____ function tests indicate hepatic dysfunction. (hepática)",
        correct: "liver",
      },
      {
        type: "fill_blank",
        question: "Check _____ levels including sodium and potassium. (eletrólitos)",
        correct: "electrolyte",
      },
      {
        type: "listen_type",
        audioText: "The D-dimer is elevated, suggesting possible thromboembolism.",
        question: "Digite o que ouviu",
        correct: "The D-dimer is elevated, suggesting possible thromboembolism.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'coagulation profile'",
        expected: "coagulation profile",
      },
      {
        type: "multiple_choice",
        question: "What does TSH measure?",
        options: [
          "Liver function",
          "Thyroid function",
          "Kidney function",
          "Cardiac function"
        ],
        correct: "Thyroid function",
      },
      {
        type: "translate_to_pt",
        question: "The INR is therapeutic for anticoagulation therapy.",
        correct: "O INR está terapêutico para a terapia anticoagulante.",
      },
    ],
  },

  {
    id: "diagnostic-5",
    title: "Advanced Imaging & Interventional - Advanced",
    description: "Imagem avançada e procedimentos intervencionistas",
    level: "Advanced",
    xp: 50,
    exercises: [
      {
        type: "matching",
        pairs: [
          { pt: "angiotomografia", en: "CT angiography" },
          { pt: "PET scan", en: "PET scan" },
          { pt: "angiografia", en: "angiography" },
          { pt: "endoscopia", en: "endoscopy" },
          { pt: "colonoscopia", en: "colonoscopy" },
          { pt: "broncoscopia", en: "bronchoscopy" },
        ],
      },
      {
        type: "translate_to_en",
        question: "A angiotomografia revelou embolia pulmonar bilateral.",
        correct: "The CT angiography revealed bilateral pulmonary embolism.",
      },
      {
        type: "translate_to_en",
        question: "O PET scan mostrou captação aumentada sugestiva de malignidade.",
        correct: "The PET scan showed increased uptake suggestive of malignancy.",
      },
      {
        type: "fill_blank",
        question: "The _____ will visualize the coronary arteries. (angiografia)",
        correct: "angiography",
      },
      {
        type: "fill_blank",
        question: "A _____ is scheduled to evaluate the upper GI tract. (endoscopia)",
        correct: "endoscopy",
      },
      {
        type: "listen_type",
        audioText: "The contrast-enhanced MRI shows a space-occupying lesion.",
        question: "Digite o que ouviu",
        correct: "The contrast-enhanced MRI shows a space-occupying lesion.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'angiography'",
        expected: "angiography",
        hint: "an-jee-AH-gruh-fee",
      },
      {
        type: "multiple_choice",
        question: "What does PET stand for in PET scan?",
        options: [
          "Positron Emission Tomography",
          "Physical Examination Test",
          "Pulmonary Evaluation Test",
          "Pathology Examination Technique"
        ],
        correct: "Positron Emission Tomography",
      },
      {
        type: "translate_to_pt",
        question: "The patient requires sedation for the colonoscopy procedure.",
        correct: "O paciente necessita de sedação para o procedimento de colonoscopia.",
      },
    ],
  },

  {
    id: "diagnostic-6",
    title: "Pathology & Biopsy Results - Advanced",
    description: "Patologia e resultados de biópsia",
    level: "Advanced",
    xp: 55,
    exercises: [
      {
        type: "matching",
        pairs: [
          { pt: "biópsia", en: "biopsy" },
          { pt: "histopatologia", en: "histopathology" },
          { pt: "citologia", en: "cytology" },
          { pt: "benigno", en: "benign" },
          { pt: "maligno", en: "malignant" },
          { pt: "metástase", en: "metastasis" },
          { pt: "estadiamento", en: "staging" },
        ],
      },
      {
        type: "translate_to_en",
        question: "A histopatologia confirmou adenocarcinoma bem diferenciado.",
        correct: "The histopathology confirmed well-differentiated adenocarcinoma.",
      },
      {
        type: "translate_to_en",
        question: "A biópsia excisional foi negativa para malignidade.",
        correct: "The excisional biopsy was negative for malignancy.",
      },
      {
        type: "fill_blank",
        question: "The lesion appears to be _____ based on imaging. (benigna)",
        correct: "benign",
      },
      {
        type: "fill_blank",
        question: "Cancer _____ determines the extent of disease spread. (estadiamento)",
        correct: "staging",
      },
      {
        type: "listen_type",
        audioText: "The pathology report shows evidence of distant metastases.",
        question: "Digite o que ouviu",
        correct: "The pathology report shows evidence of distant metastases.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'histopathology'",
        expected: "histopathology",
        hint: "his-toh-puh-THOL-uh-jee",
      },
      {
        type: "multiple_choice",
        question: "What does TNM stand for in cancer staging?",
        options: [
          "Type, Number, Malignancy",
          "Tumor, Node, Metastasis",
          "Treatment, Nodes, Mass",
          "Time, Nodules, Margin"
        ],
        correct: "Tumor, Node, Metastasis",
      },
      {
        type: "translate_to_pt",
        question: "The immunohistochemistry results support the diagnosis of lymphoma.",
        correct: "Os resultados da imuno-histoquímica apoiam o diagnóstico de linfoma.",
      },
    ],
  },
];
