// lib/data/pharmacologyLessons.ts

export const pharmacologyLessons = [
  {
    id: "pharma-1",
    title: "Basic Medication Terminology",
    description: "Terminologia básica de medicamentos",
    level: "Beginner",
    xp: 30,
    hearts: 5,
    exercises: [
      {
        type: "matching",
        question: "Combine os termos farmacológicos",
        pairs: [
          { pt: "medicamento", en: "medication" },
          { pt: "dose", en: "dose" },
          { pt: "via oral", en: "oral route" },
          { pt: "intravenoso", en: "intravenous" },
          { pt: "comprimido", en: "tablet" },
          { pt: "cápsula", en: "capsule" },
          { pt: "xarope", en: "syrup" },
        ],
      },
      {
        type: "multiple_choice",
        question: "What does 'PO' stand for in prescriptions?",
        options: ["Per os (by mouth)", "Post operation", "Partial order", "Prescribed once"],
        correct: "Per os (by mouth)",
      },
      {
        type: "translate_to_en",
        question: "Tome um comprimido duas vezes ao dia.",
        correct: "Take one tablet twice a day.",
      },
      {
        type: "translate_to_en",
        question: "Este medicamento deve ser tomado com alimentos.",
        correct: "This medication should be taken with food.",
      },
      {
        type: "fill_blank",
        question: "Take the _____ with a full glass of water. (comprimido)",
        correct: "tablet",
      },
      {
        type: "fill_blank",
        question: "This medication is administered via the _____ route. (intravenosa)",
        correct: "intravenous",
      },
      {
        type: "listen_type",
        audioText: "Take this medication three times daily with meals.",
        question: "Digite o que ouviu",
        correct: "Take this medication three times daily with meals.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'prescription'",
        expected: "prescription",
        hint: "prih-SKRIP-shun",
      },
      {
        type: "multiple_choice",
        question: "What does 'BID' mean in prescriptions?",
        options: ["Once daily", "Twice daily", "Three times daily", "Four times daily"],
        correct: "Twice daily",
      },
    ],
  },

  {
    id: "pharma-2",
    title: "Common Drug Classes",
    description: "Classes comuns de medicamentos",
    level: "Beginner",
    xp: 35,
    exercises: [
      {
        type: "matching",
        question: "Combine as classes de medicamentos",
        pairs: [
          { pt: "analgésico", en: "analgesic" },
          { pt: "antibiótico", en: "antibiotic" },
          { pt: "anti-inflamatório", en: "anti-inflammatory" },
          { pt: "anti-hipertensivo", en: "antihypertensive" },
          { pt: "antidiabético", en: "antidiabetic" },
          { pt: "anticoagulante", en: "anticoagulant" },
          { pt: "broncodilatador", en: "bronchodilator" },
        ],
      },
      {
        type: "multiple_choice",
        question: "What type of medication is used to reduce fever?",
        options: ["Antipyretic", "Antibiotic", "Antihistamine", "Antacid"],
        correct: "Antipyretic",
      },
      {
        type: "translate_to_en",
        question: "O médico prescreveu um antibiótico de amplo espectro.",
        correct: "The doctor prescribed a broad-spectrum antibiotic.",
      },
      {
        type: "translate_to_pt",
        question: "This medication belongs to the beta-blocker class.",
        correct: "Este medicamento pertence à classe dos betabloqueadores.",
      },
      {
        type: "fill_blank",
        question: "Aspirin is both an _____ and an antiplatelet agent. (analgésico)",
        correct: "analgesic",
      },
      {
        type: "fill_blank",
        question: "This _____ helps open the airways. (broncodilatador)",
        correct: "bronchodilator",
      },
      {
        type: "listen_type",
        audioText: "The patient is on anticoagulation therapy.",
        question: "Digite o que ouviu",
        correct: "The patient is on anticoagulation therapy.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'antibiotic'",
        expected: "antibiotic",
        hint: "an-tee-by-AH-tik",
      },
      {
        type: "multiple_choice",
        question: "Which medication class is used to treat bacterial infections?",
        options: ["Antivirals", "Antibiotics", "Antifungals", "Antihistamines"],
        correct: "Antibiotics",
      },
    ],
  },

  {
    id: "pharma-3",
    title: "Dosage & Administration",
    description: "Dosagem e administração de medicamentos",
    level: "Intermediate",
    xp: 40,
    exercises: [
      {
        type: "matching",
        pairs: [
          { pt: "miligrama", en: "milligram" },
          { pt: "micrograma", en: "microgram" },
          { pt: "mililitro", en: "milliliter" },
          { pt: "unidade", en: "unit" },
          { pt: "gotejamento", en: "drip" },
          { pt: "infusão contínua", en: "continuous infusion" },
          { pt: "dose única", en: "single dose" },
          { pt: "dose de manutenção", en: "maintenance dose" },
        ],
      },
      {
        type: "multiple_choice",
        question: "What does 'PRN' mean in medication orders?",
        options: ["Every day", "As needed", "Before meals", "At bedtime"],
        correct: "As needed",
      },
      {
        type: "translate_to_en",
        question: "Administre 500mg de paracetamol via oral a cada 6 horas se necessário.",
        correct: "Administer 500mg of paracetamol orally every 6 hours as needed.",
      },
      {
        type: "translate_to_en",
        question: "A infusão deve ser administrada durante 30 minutos.",
        correct: "The infusion should be administered over 30 minutes.",
      },
      {
        type: "fill_blank",
        question: "Give 10 _____ of insulin subcutaneously. (unidades)",
        correct: "units",
      },
      {
        type: "fill_blank",
        question: "Increase the _____ rate to 125 mL per hour. (infusão)",
        correct: "infusion",
      },
      {
        type: "listen_type",
        audioText: "Administer one gram IV push over five minutes.",
        question: "Digite o que ouviu",
        correct: "Administer one gram IV push over five minutes.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'subcutaneous injection'",
        expected: "subcutaneous injection",
        hint: "sub-kyoo-TAY-nee-us",
      },
      {
        type: "multiple_choice",
        question: "What does 'IM' route mean?",
        options: ["In mouth", "Intramuscular", "Immediate", "Internal medicine"],
        correct: "Intramuscular",
      },
      {
        type: "translate_to_pt",
        question: "The loading dose is 1 gram followed by 500mg every 12 hours.",
        correct: "A dose de ataque é 1 grama seguida de 500mg a cada 12 horas.",
      },
    ],
  },

  {
    id: "pharma-4",
    title: "Side Effects & Adverse Reactions",
    description: "Efeitos colaterais e reações adversas",
    level: "Intermediate",
    xp: 45,
    exercises: [
      {
        type: "matching",
        pairs: [
          { pt: "efeito colateral", en: "side effect" },
          { pt: "reação adversa", en: "adverse reaction" },
          { pt: "alergia medicamentosa", en: "drug allergy" },
          { pt: "anafilaxia", en: "anaphylaxis" },
          { pt: "toxicidade", en: "toxicity" },
          { pt: "interação medicamentosa", en: "drug interaction" },
          { pt: "contraindicação", en: "contraindication" },
        ],
      },
      {
        type: "multiple_choice",
        question: "What is the most serious type of allergic reaction?",
        options: ["Rash", "Nausea", "Anaphylaxis", "Headache"],
        correct: "Anaphylaxis",
      },
      {
        type: "translate_to_en",
        question: "O paciente apresentou reação alérgica grave à penicilina.",
        correct: "The patient had a severe allergic reaction to penicillin.",
      },
      {
        type: "translate_to_en",
        question: "Este medicamento é contraindicado na gravidez.",
        correct: "This medication is contraindicated in pregnancy.",
      },
      {
        type: "fill_blank",
        question: "Common _____ effects include drowsiness and dry mouth. (colaterais)",
        correct: "side",
      },
      {
        type: "fill_blank",
        question: "Monitor for signs of _____ such as nausea and confusion. (toxicidade)",
        correct: "toxicity",
      },
      {
        type: "listen_type",
        audioText: "Report any adverse reactions to your healthcare provider immediately.",
        question: "Digite o que ouviu",
        correct: "Report any adverse reactions to your healthcare provider immediately.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'anaphylaxis'",
        expected: "anaphylaxis",
        hint: "an-uh-fuh-LAK-sis",
      },
      {
        type: "multiple_choice",
        question: "What should you do first if a patient shows signs of anaphylaxis?",
        options: [
          "Document in chart",
          "Call family",
          "Administer epinephrine",
          "Give antihistamine"
        ],
        correct: "Administer epinephrine",
      },
      {
        type: "translate_to_pt",
        question: "There is a potential interaction between these two medications.",
        correct: "Há uma interação potencial entre esses dois medicamentos.",
      },
    ],
  },

  {
    id: "pharma-5",
    title: "Cardiovascular & CNS Medications - Advanced",
    description: "Medicamentos cardiovasculares e do sistema nervoso",
    level: "Advanced",
    xp: 50,
    exercises: [
      {
        type: "matching",
        pairs: [
          { pt: "betabloqueador", en: "beta-blocker" },
          { pt: "inibidor da ECA", en: "ACE inhibitor" },
          { pt: "antagonista do cálcio", en: "calcium channel blocker" },
          { pt: "diurético", en: "diuretic" },
          { pt: "anticonvulsivante", en: "anticonvulsant" },
          { pt: "antidepressivo", en: "antidepressant" },
        ],
      },
      {
        type: "translate_to_en",
        question: "O paciente está em uso de metoprolol 50mg duas vezes ao dia.",
        correct: "The patient is taking metoprolol 50mg twice daily.",
      },
      {
        type: "translate_to_en",
        question: "Foi iniciado tratamento com inibidor da ECA para controle da hipertensão.",
        correct: "Treatment with ACE inhibitor was started for hypertension control.",
      },
      {
        type: "fill_blank",
        question: "This _____ helps reduce blood pressure by removing excess fluid. (diurético)",
        correct: "diuretic",
      },
      {
        type: "fill_blank",
        question: "The patient's seizures are controlled with an _____. (anticonvulsivante)",
        correct: "anticonvulsant",
      },
      {
        type: "listen_type",
        audioText: "Titrate the beta-blocker to achieve a heart rate of 60 to 70 beats per minute.",
        question: "Digite o que ouviu",
        correct: "Titrate the beta-blocker to achieve a heart rate of 60 to 70 beats per minute.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'ACE inhibitor'",
        expected: "ACE inhibitor",
        hint: "ace in-HIB-i-tor",
      },
      {
        type: "multiple_choice",
        question: "What is a common side effect of ACE inhibitors?",
        options: ["Diarrhea", "Dry cough", "Constipation", "Weight gain"],
        correct: "Dry cough",
      },
      {
        type: "translate_to_pt",
        question: "Monitor serum potassium levels in patients on ACE inhibitors.",
        correct: "Monitore os níveis séricos de potássio em pacientes usando inibidores da ECA.",
      },
    ],
  },

  {
    id: "pharma-6",
    title: "Antimicrobials & Chemotherapy - Advanced",
    description: "Antimicrobianos e quimioterapia",
    level: "Advanced",
    xp: 55,
    exercises: [
      {
        type: "matching",
        pairs: [
          { pt: "antibiótico de amplo espectro", en: "broad-spectrum antibiotic" },
          { pt: "resistência antimicrobiana", en: "antimicrobial resistance" },
          { pt: "antifúngico", en: "antifungal" },
          { pt: "antiviral", en: "antiviral" },
          { pt: "quimioterapia", en: "chemotherapy" },
          { pt: "agente citotóxico", en: "cytotoxic agent" },
        ],
      },
      {
        type: "translate_to_en",
        question: "A cultura revelou resistência aos antibióticos de primeira linha.",
        correct: "The culture revealed resistance to first-line antibiotics.",
      },
      {
        type: "translate_to_en",
        question: "O paciente iniciará o primeiro ciclo de quimioterapia na próxima semana.",
        correct: "The patient will start the first chemotherapy cycle next week.",
      },
      {
        type: "fill_blank",
        question: "This _____ is effective against fungal infections. (antifúngico)",
        correct: "antifungal",
      },
      {
        type: "fill_blank",
        question: "Monitor for _____ suppression during chemotherapy. (medula óssea)",
        correct: "bone marrow",
      },
      {
        type: "listen_type",
        audioText: "Complete the full course of antibiotics even if symptoms improve.",
        question: "Digite o que ouviu",
        correct: "Complete the full course of antibiotics even if symptoms improve.",
      },
      {
        type: "speak",
        question: "Pronuncie: 'antimicrobial resistance'",
        expected: "antimicrobial resistance",
      },
      {
        type: "multiple_choice",
        question: "What does MRSA stand for?",
        options: [
          "Medical Resistant Staphylococcus Aureus",
          "Methicillin-Resistant Staphylococcus Aureus",
          "Multiple Resistant Streptococcus Aureus",
          "Minimal Risk Staphylococcus Aureus"
        ],
        correct: "Methicillin-Resistant Staphylococcus Aureus",
      },
      {
        type: "translate_to_pt",
        question: "The patient requires prophylactic antibiotics before the procedure.",
        correct: "O paciente necessita de antibióticos profiláticos antes do procedimento.",
      },
    ],
  },
];
