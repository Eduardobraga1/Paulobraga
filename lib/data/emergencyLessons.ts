// lib/data/emergencyLessons.ts

export const emergencyLessons = [
  {
    id: "emergency-1",
    title: "Emergency Triage Basics",
    description: "Triagem básica em emergências",
    level: "Beginner",
    xp: 30,
    hearts: 5,
    exercises: [
      {
        type: "matching",
        question: "Combine os termos de emergência",
        pairs: [
          { pt: "emergência", en: "emergency" },
          { pt: "urgente", en: "urgent" },
          { pt: "crítico", en: "critical" },
          { pt: "estável", en: "stable" },
          { pt: "ambulância", en: "ambulance" },
          { pt: "sala de emergência", en: "emergency room" },
          { pt: "trauma", en: "trauma" },
        ],
      },
      {
        type: "multiple_choice",
        question: "What does 'ER' stand for?",
        options: ["Emergency Response", "Emergency Room", "Emergency Rescue", "Emergency Report"],
        correct: "Emergency Room",
      },
      {
        type: "translate_to_en",
        question: "É uma emergência! Precisamos de ajuda imediata!",
        correct: "It's an emergency! We need immediate help!",
      },
      {
        type: "translate_to_en",
        question: "O paciente está em estado crítico.",
        correct: "The patient is in critical condition.",
      },
      {
        type: "fill_blank",
        question: "Call 911! This is a medical _____! (emergência)",
        correct: "emergency",
      },
      {
        type: "fill_blank",
        question: "The patient needs _____ attention. (imediata)",
        correct: "immediate",
      },
      {
        type: "listen_type",
        audioText: "We have a trauma patient incoming.",
        question: "Digite o que ouviu",
        correct: "We have a trauma patient incoming.",
      },
      {
        type: "speak",
        question: "Pronuncie claramente: 'critical condition'",
        expected: "critical condition",
      },
      {
        type: "multiple_choice",
        question: "In triage, what color typically indicates the highest priority?",
        options: ["Green", "Yellow", "Red", "Black"],
        correct: "Red",
      },
    ],
  },

  {
    id: "emergency-2",
    title: "ABC Assessment",
    description: "Avaliação ABC em emergências",
    level: "Beginner",
    xp: 35,
    exercises: [
      {
        type: "matching",
        question: "Combine os componentes da avaliação ABC",
        pairs: [
          { pt: "via aérea", en: "airway" },
          { pt: "respiração", en: "breathing" },
          { pt: "circulação", en: "circulation" },
          { pt: "pulso", en: "pulse" },
          { pt: "frequência cardíaca", en: "heart rate" },
          { pt: "pressão arterial", en: "blood pressure" },
          { pt: "saturação de oxigênio", en: "oxygen saturation" },
        ],
      },
      {
        type: "multiple_choice",
        question: "What does ABC stand for in emergency assessment?",
        options: [
          "Alert, Breathing, Circulation",
          "Airway, Breathing, Circulation",
          "Alert, Blood, Cardiac",
          "Airway, Blood, Conscious"
        ],
        correct: "Airway, Breathing, Circulation",
      },
      {
        type: "translate_to_en",
        question: "Verifique se a via aérea está desobstruída.",
        correct: "Check if the airway is clear.",
      },
      {
        type: "translate_to_pt",
        question: "The patient has no pulse. Start CPR immediately.",
        correct: "O paciente não tem pulso. Inicie RCP imediatamente.",
      },
      {
        type: "fill_blank",
        question: "Check for _____ and breathing. (pulso)",
        correct: "pulse",
      },
      {
        type: "fill_blank",
        question: "The oxygen _____ is dropping. (saturação)",
        correct: "saturation",
      },
      {
        type: "listen_type",
        audioText: "Assess airway, breathing, and circulation in that order.",
        question: "Digite o que ouviu",
        correct: "Assess airway, breathing, and circulation in that order.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'airway obstruction'",
        expected: "airway obstruction",
      },
      {
        type: "multiple_choice",
        question: "Normal oxygen saturation (SpO2) should be above:",
        options: ["75%", "85%", "95%", "100%"],
        correct: "95%",
      },
    ],
  },

  {
    id: "emergency-3",
    title: "Common Emergency Situations",
    description: "Situações de emergência comuns",
    level: "Intermediate",
    xp: 40,
    exercises: [
      {
        type: "matching",
        pairs: [
          { pt: "infarto", en: "heart attack" },
          { pt: "AVC", en: "stroke" },
          { pt: "convulsão", en: "seizure" },
          { pt: "overdose", en: "overdose" },
          { pt: "choque anafilático", en: "anaphylactic shock" },
          { pt: "parada cardíaca", en: "cardiac arrest" },
          { pt: "hemorragia", en: "hemorrhage" },
          { pt: "fratura exposta", en: "open fracture" },
        ],
      },
      {
        type: "multiple_choice",
        question: "What is the acronym FAST used to identify?",
        options: ["Heart attack", "Stroke", "Seizure", "Allergic reaction"],
        correct: "Stroke",
      },
      {
        type: "translate_to_en",
        question: "Paciente apresenta sinais de AVC: face caída e fala arrastada.",
        correct: "Patient shows signs of stroke: facial drooping and slurred speech.",
      },
      {
        type: "translate_to_en",
        question: "Administre epinefrina imediatamente para choque anafilático.",
        correct: "Administer epinephrine immediately for anaphylactic shock.",
      },
      {
        type: "fill_blank",
        question: "The patient is having a _____. Protect them from injury. (convulsão)",
        correct: "seizure",
      },
      {
        type: "fill_blank",
        question: "Apply pressure to control the _____. (hemorragia)",
        correct: "bleeding",
      },
      {
        type: "listen_type",
        audioText: "We have a possible myocardial infarction in bay three.",
        question: "Digite o que ouviu",
        correct: "We have a possible myocardial infarction in bay three.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'anaphylactic shock'",
        expected: "anaphylactic shock",
        hint: "an-uh-fuh-LAK-tik shock",
      },
      {
        type: "multiple_choice",
        question: "What does 'MI' stand for in medical terminology?",
        options: ["Medical Issue", "Myocardial Infarction", "Major Injury", "Minor Incident"],
        correct: "Myocardial Infarction",
      },
      {
        type: "translate_to_pt",
        question: "Time is critical in stroke cases. Act fast.",
        correct: "O tempo é crítico em casos de AVC. Aja rápido.",
      },
    ],
  },

  {
    id: "emergency-4",
    title: "Emergency Medications & Interventions",
    description: "Medicações e intervenções de emergência",
    level: "Intermediate",
    xp: 45,
    exercises: [
      {
        type: "matching",
        pairs: [
          { pt: "epinefrina", en: "epinephrine" },
          { pt: "atropina", en: "atropine" },
          { pt: "naloxona", en: "naloxone" },
          { pt: "adrenalina", en: "adrenaline" },
          { pt: "desfibrilador", en: "defibrillator" },
          { pt: "intubação", en: "intubation" },
          { pt: "acesso venoso", en: "IV access" },
        ],
      },
      {
        type: "multiple_choice",
        question: "What is naloxone used for?",
        options: [
          "Allergic reactions",
          "Opioid overdose reversal",
          "Cardiac arrest",
          "Seizures"
        ],
        correct: "Opioid overdose reversal",
      },
      {
        type: "translate_to_en",
        question: "Prepare o desfibrilador. Todos afastem-se do paciente.",
        correct: "Prepare the defibrillator. Everyone stand clear of the patient.",
      },
      {
        type: "translate_to_en",
        question: "Estabeleça acesso venoso e inicie reposição volêmica.",
        correct: "Establish IV access and start fluid resuscitation.",
      },
      {
        type: "fill_blank",
        question: "Administer 1mg of _____ for cardiac arrest. (epinefrina)",
        correct: "epinephrine",
      },
      {
        type: "fill_blank",
        question: "The patient needs _____. Prepare the ET tube. (intubação)",
        correct: "intubation",
      },
      {
        type: "listen_type",
        audioText: "Give two amps of epinephrine and prepare for defibrillation.",
        question: "Digite o que ouviu",
        correct: "Give two amps of epinephrine and prepare for defibrillation.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'defibrillation'",
        expected: "defibrillation",
        hint: "dee-fib-rih-LAY-shun",
      },
      {
        type: "multiple_choice",
        question: "What does AED stand for?",
        options: [
          "Automatic Emergency Device",
          "Automated External Defibrillator",
          "Advanced Emergency Diagnosis",
          "Acute Emergency Department"
        ],
        correct: "Automated External Defibrillator",
      },
    ],
  },

  {
    id: "emergency-5",
    title: "Trauma Management - Advanced",
    description: "Gerenciamento de trauma avançado",
    level: "Advanced",
    xp: 50,
    exercises: [
      {
        type: "matching",
        pairs: [
          { pt: "politrauma", en: "polytrauma" },
          { pt: "trauma cranioencefálico", en: "traumatic brain injury" },
          { pt: "pneumotórax", en: "pneumothorax" },
          { pt: "hemotórax", en: "hemothorax" },
          { pt: "fratura pélvica", en: "pelvic fracture" },
          { pt: "lesão medular", en: "spinal cord injury" },
        ],
      },
      {
        type: "translate_to_en",
        question: "Paciente vítima de trauma fechado com suspeita de hemorragia interna.",
        correct: "Patient victim of blunt trauma with suspected internal bleeding.",
      },
      {
        type: "translate_to_en",
        question: "Imobilize a coluna cervical antes de mover o paciente.",
        correct: "Immobilize the cervical spine before moving the patient.",
      },
      {
        type: "fill_blank",
        question: "The patient has a tension _____. Prepare for needle decompression. (pneumotórax)",
        correct: "pneumothorax",
      },
      {
        type: "fill_blank",
        question: "Glasgow Coma Scale score is 8. The patient needs _____. (intubação)",
        correct: "intubation",
      },
      {
        type: "listen_type",
        audioText: "Activate the massive transfusion protocol for this trauma patient.",
        question: "Digite o que ouviu",
        correct: "Activate the massive transfusion protocol for this trauma patient.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'traumatic brain injury'",
        expected: "traumatic brain injury",
      },
      {
        type: "multiple_choice",
        question: "What is the normal Glasgow Coma Scale range?",
        options: ["1-10", "3-15", "0-20", "5-25"],
        correct: "3-15",
      },
      {
        type: "translate_to_pt",
        question: "The patient shows signs of increased intracranial pressure.",
        correct: "O paciente mostra sinais de pressão intracraniana aumentada.",
      },
    ],
  },

  {
    id: "emergency-6",
    title: "Critical Care & Code Situations - Advanced",
    description: "Cuidados críticos e situações de código",
    level: "Advanced",
    xp: 55,
    exercises: [
      {
        type: "matching",
        pairs: [
          { pt: "código azul", en: "code blue" },
          { pt: "código vermelho", en: "code red" },
          { pt: "RCP", en: "CPR" },
          { pt: "desfibrilação", en: "defibrillation" },
          { pt: "ventilação mecânica", en: "mechanical ventilation" },
          { pt: "choque cardiogênico", en: "cardiogenic shock" },
        ],
      },
      {
        type: "translate_to_en",
        question: "Código azul na UTI, leito 3. Todos os membros da equipe compareçam imediatamente.",
        correct: "Code blue in ICU, bed 3. All team members respond immediately.",
      },
      {
        type: "translate_to_en",
        question: "O paciente está em fibrilação ventricular. Desfibrilar agora.",
        correct: "The patient is in ventricular fibrillation. Defibrillate now.",
      },
      {
        type: "fill_blank",
        question: "Continue chest compressions at a rate of 100-120 per _____. (minuto)",
        correct: "minute",
      },
      {
        type: "fill_blank",
        question: "Push one milligram of _____ IV. (epinefrina)",
        correct: "epinephrine",
      },
      {
        type: "listen_type",
        audioText: "Charging to 200 joules. All clear. Shock delivered.",
        question: "Digite o que ouviu",
        correct: "Charging to 200 joules. All clear. Shock delivered.",
      },
      {
        type: "speak",
        question: "Pronuncie com urgência: 'Start chest compressions!'",
        expected: "Start chest compressions!",
      },
      {
        type: "multiple_choice",
        question: "What rhythm requires immediate defibrillation?",
        options: [
          "Asystole",
          "Pulseless Electrical Activity",
          "Ventricular Fibrillation",
          "Sinus Bradycardia"
        ],
        correct: "Ventricular Fibrillation",
      },
      {
        type: "translate_to_pt",
        question: "Return of spontaneous circulation after 4 minutes of CPR.",
        correct: "Retorno da circulação espontânea após 4 minutos de RCP.",
      },
    ],
  },
];
