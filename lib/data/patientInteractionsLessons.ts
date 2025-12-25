// lib/data/patientInteractionsLessons.ts

export const patientInteractionsLessons = [
  {
    id: "patient-1",
    title: "Greetings & Initial Contact",
    description: "Cumprimentos e contato inicial com pacientes",
    level: "Beginner",
    xp: 30,
    hearts: 5,
    exercises: [
      {
        type: "matching",
        question: "Combine as frases em português com o inglês correto",
        pairs: [
          { pt: "Bom dia", en: "Good morning" },
          { pt: "Como posso ajudar?", en: "How can I help you?" },
          { pt: "Qual é o seu nome?", en: "What is your name?" },
          { pt: "Sente-se, por favor", en: "Please have a seat" },
          { pt: "Como você está se sentindo?", en: "How are you feeling?" },
          { pt: "Pode me contar o que aconteceu?", en: "Can you tell me what happened?" },
        ],
      },
      {
        type: "multiple_choice",
        question: "How do you politely ask a patient's age?",
        options: ["How old are you?", "May I ask your age?", "Tell me your age", "What age do you have?"],
        correct: "May I ask your age?",
      },
      {
        type: "translate_to_en",
        question: "Traduza: 'Prazer em conhecê-lo, Sr. Silva.'",
        correct: "Nice to meet you, Mr. Silva.",
      },
      {
        type: "translate_to_en",
        question: "Traduza: 'Vou precisar de algumas informações suas.'",
        correct: "I will need some information from you.",
      },
      {
        type: "fill_blank",
        question: "Good afternoon, Mrs. Johnson. Please _____ a seat. (sentar)",
        correct: "have",
      },
      {
        type: "fill_blank",
        question: "How are you _____ today? (sentindo)",
        correct: "feeling",
      },
      {
        type: "listen_type",
        audioText: "Please make yourself comfortable while we wait.",
        question: "Digite o que você ouviu",
        correct: "Please make yourself comfortable while we wait.",
      },
      {
        type: "speak",
        question: "Pronuncie claramente: 'How may I assist you today?'",
        expected: "How may I assist you today?",
      },
      {
        type: "multiple_choice",
        question: "What's the most professional way to greet a patient in the morning?",
        options: ["Hey there!", "Good morning, how are you today?", "What's up?", "Hi"],
        correct: "Good morning, how are you today?",
      },
    ],
  },

  {
    id: "patient-2",
    title: "Taking Medical History",
    description: "Coleta de histórico médico",
    level: "Beginner",
    xp: 35,
    exercises: [
      {
        type: "matching",
        question: "Combine as perguntas médicas",
        pairs: [
          { pt: "Você tem alergias?", en: "Do you have any allergies?" },
          { pt: "Toma algum medicamento?", en: "Are you taking any medications?" },
          { pt: "Já teve cirurgias?", en: "Have you had any surgeries?" },
          { pt: "Histórico familiar de doenças?", en: "Any family history of diseases?" },
          { pt: "Você fuma?", en: "Do you smoke?" },
          { pt: "Consome álcool?", en: "Do you drink alcohol?" },
          { pt: "Pratica exercícios?", en: "Do you exercise?" },
        ],
      },
      {
        type: "multiple_choice",
        question: "How do you ask about previous hospitalizations?",
        options: [
          "Were you in hospital before?",
          "Have you been hospitalized before?",
          "Did you go to hospital?",
          "You were in hospital?"
        ],
        correct: "Have you been hospitalized before?",
      },
      {
        type: "translate_to_en",
        question: "O paciente nega alergias a medicamentos.",
        correct: "The patient denies medication allergies.",
      },
      {
        type: "translate_to_pt",
        question: "Do you have a history of high blood pressure?",
        correct: "Você tem histórico de pressão alta?",
      },
      {
        type: "fill_blank",
        question: "Are you currently _____ any medications? (tomando)",
        correct: "taking",
      },
      {
        type: "fill_blank",
        question: "Do you have a family _____ of diabetes? (histórico)",
        correct: "history",
      },
      {
        type: "listen_type",
        audioText: "Have you experienced these symptoms before?",
        question: "Digite o que ouviu",
        correct: "Have you experienced these symptoms before?",
      },
      {
        type: "speak",
        question: "Pronuncie: 'medical history'",
        expected: "medical history",
        hint: "MED-i-kul HIS-to-ree",
      },
      {
        type: "multiple_choice",
        question: "What does 'PMH' stand for in medical records?",
        options: ["Previous Medical History", "Past Medical History", "Primary Medical Health", "Personal Medicine History"],
        correct: "Past Medical History",
      },
    ],
  },

  {
    id: "patient-3",
    title: "Describing Symptoms",
    description: "Descrevendo sintomas e queixas",
    level: "Intermediate",
    xp: 40,
    exercises: [
      {
        type: "matching",
        pairs: [
          { pt: "dor aguda", en: "sharp pain" },
          { pt: "dor surda", en: "dull pain" },
          { pt: "náusea", en: "nausea" },
          { pt: "tontura", en: "dizziness" },
          { pt: "falta de ar", en: "shortness of breath" },
          { pt: "fadiga", en: "fatigue" },
          { pt: "inchaço", en: "swelling" },
          { pt: "febre", en: "fever" },
        ],
      },
      {
        type: "multiple_choice",
        question: "How would you describe pain that comes and goes?",
        options: ["Constant pain", "Intermittent pain", "Chronic pain", "Acute pain"],
        correct: "Intermittent pain",
      },
      {
        type: "translate_to_en",
        question: "O paciente relata dor no peito que irradia para o braço esquerdo.",
        correct: "The patient reports chest pain radiating to the left arm.",
      },
      {
        type: "translate_to_en",
        question: "A dor começou há três dias e está piorando.",
        correct: "The pain started three days ago and is getting worse.",
      },
      {
        type: "fill_blank",
        question: "On a scale of 1 to 10, how would you rate your _____? (dor)",
        correct: "pain",
      },
      {
        type: "fill_blank",
        question: "The patient complains of severe _____ and vomiting. (náusea)",
        correct: "nausea",
      },
      {
        type: "listen_type",
        audioText: "When did you first notice these symptoms?",
        question: "Digite o que ouviu",
        correct: "When did you first notice these symptoms?",
      },
      {
        type: "speak",
        question: "Pronuncie: 'shortness of breath'",
        expected: "shortness of breath",
      },
      {
        type: "multiple_choice",
        question: "What is 'SOB' an abbreviation for?",
        options: ["Sense of balance", "Shortness of breath", "Severity of bleeding", "Sign of bleeding"],
        correct: "Shortness of breath",
      },
      {
        type: "translate_to_pt",
        question: "Does the pain worsen with movement or rest?",
        correct: "A dor piora com movimento ou repouso?",
      },
    ],
  },

  {
    id: "patient-4",
    title: "Physical Examination Instructions",
    description: "Instruções durante exame físico",
    level: "Intermediate",
    xp: 45,
    exercises: [
      {
        type: "matching",
        pairs: [
          { pt: "Respire fundo", en: "Take a deep breath" },
          { pt: "Segure a respiração", en: "Hold your breath" },
          { pt: "Abra a boca", en: "Open your mouth" },
          { pt: "Vire-se de lado", en: "Turn on your side" },
          { pt: "Deite-se", en: "Lie down" },
          { pt: "Levante o braço", en: "Raise your arm" },
          { pt: "Relaxe os músculos", en: "Relax your muscles" },
        ],
      },
      {
        type: "multiple_choice",
        question: "How do you ask a patient to breathe normally?",
        options: ["Breathe usual", "Just breathe", "Breathe normally", "Normal breath"],
        correct: "Breathe normally",
      },
      {
        type: "translate_to_en",
        question: "Vou examinar seu abdômen agora. Por favor, relaxe.",
        correct: "I'm going to examine your abdomen now. Please relax.",
      },
      {
        type: "translate_to_en",
        question: "Isso pode causar um pequeno desconforto.",
        correct: "This may cause some discomfort.",
      },
      {
        type: "fill_blank",
        question: "Please roll up your _____ so I can check your blood pressure. (manga)",
        correct: "sleeve",
      },
      {
        type: "fill_blank",
        question: "I need to _____ your lungs. (auscultar)",
        correct: "auscultate",
      },
      {
        type: "listen_type",
        audioText: "Can you bend your knee for me, please?",
        question: "Digite o que ouviu",
        correct: "Can you bend your knee for me, please?",
      },
      {
        type: "speak",
        question: "Pronuncie: 'auscultation'",
        expected: "auscultation",
        hint: "aws-kul-TAY-shun",
      },
      {
        type: "multiple_choice",
        question: "What does 'palpation' mean?",
        options: ["Listening with stethoscope", "Examining by touch", "Visual inspection", "Taking measurements"],
        correct: "Examining by touch",
      },
    ],
  },

  {
    id: "patient-5",
    title: "Explaining Diagnosis & Treatment - Advanced",
    description: "Explicando diagnóstico e tratamento",
    level: "Advanced",
    xp: 50,
    exercises: [
      {
        type: "matching",
        pairs: [
          { pt: "diagnóstico", en: "diagnosis" },
          { pt: "prognóstico", en: "prognosis" },
          { pt: "tratamento", en: "treatment" },
          { pt: "prescrição", en: "prescription" },
          { pt: "efeitos colaterais", en: "side effects" },
          { pt: "acompanhamento", en: "follow-up" },
          { pt: "recuperação", en: "recovery" },
        ],
      },
      {
        type: "translate_to_en",
        question: "Com base nos exames, o diagnóstico é pneumonia bacteriana.",
        correct: "Based on the tests, the diagnosis is bacterial pneumonia.",
      },
      {
        type: "translate_to_en",
        question: "Vou prescrever antibióticos por sete dias.",
        correct: "I will prescribe antibiotics for seven days.",
      },
      {
        type: "fill_blank",
        question: "You'll need to take this medication _____ a day. (duas vezes)",
        correct: "twice",
      },
      {
        type: "fill_blank",
        question: "The _____ for recovery is excellent. (prognóstico)",
        correct: "prognosis",
      },
      {
        type: "listen_type",
        audioText: "We need to schedule a follow-up appointment in two weeks.",
        question: "Digite o que ouviu",
        correct: "We need to schedule a follow-up appointment in two weeks.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'prognosis'",
        expected: "prognosis",
        hint: "prog-NO-sis",
      },
      {
        type: "multiple_choice",
        question: "What does 'contraindicated' mean?",
        options: [
          "Highly recommended",
          "Not advisable or potentially harmful",
          "Alternative treatment",
          "Experimental treatment"
        ],
        correct: "Not advisable or potentially harmful",
      },
      {
        type: "translate_to_pt",
        question: "This medication may cause drowsiness as a side effect.",
        correct: "Este medicamento pode causar sonolência como efeito colateral.",
      },
    ],
  },

  {
    id: "patient-6",
    title: "Difficult Conversations - Advanced",
    description: "Conversas difíceis e más notícias",
    level: "Advanced",
    xp: 55,
    exercises: [
      {
        type: "matching",
        pairs: [
          { pt: "más notícias", en: "bad news" },
          { pt: "prognóstico reservado", en: "guarded prognosis" },
          { pt: "cuidados paliativos", en: "palliative care" },
          { pt: "consentimento informado", en: "informed consent" },
          { pt: "expectativa de vida", en: "life expectancy" },
          { pt: "qualidade de vida", en: "quality of life" },
        ],
      },
      {
        type: "translate_to_en",
        question: "Infelizmente, os resultados mostram que a doença progrediu.",
        correct: "Unfortunately, the results show that the disease has progressed.",
      },
      {
        type: "translate_to_en",
        question: "Precisamos discutir suas opções de tratamento.",
        correct: "We need to discuss your treatment options.",
      },
      {
        type: "fill_blank",
        question: "I understand this is difficult news to _____. (processar/receber)",
        correct: "process",
      },
      {
        type: "fill_blank",
        question: "We will focus on maintaining your _____ of life. (qualidade)",
        correct: "quality",
      },
      {
        type: "listen_type",
        audioText: "Would you like a family member present for this discussion?",
        question: "Digite o que ouviu",
        correct: "Would you like a family member present for this discussion?",
      },
      {
        type: "speak",
        question: "Pronuncie com empatia: 'I'm here to support you.'",
        expected: "I'm here to support you.",
      },
      {
        type: "multiple_choice",
        question: "What is the best approach when delivering bad news?",
        options: [
          "Be direct and quick",
          "Use medical jargon to sound professional",
          "Be empathetic, clear, and allow time for questions",
          "Avoid eye contact"
        ],
        correct: "Be empathetic, clear, and allow time for questions",
      },
      {
        type: "translate_to_pt",
        question: "Take your time to think about the treatment options we discussed.",
        correct: "Reserve um tempo para pensar sobre as opções de tratamento que discutimos.",
      },
    ],
  },
];
