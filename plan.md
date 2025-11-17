# CLINSTART MD — OPTIMIZED MASTER PROMPT FOR EDUCATIONAL APP GENERATION

A clinically rigorous, evidence-based master prompt for generating a mobile-first, offline-capable, dark-mode educational app that teaches clinicians and trainees how to:

1. Choose the initial diagnostic test  
2. Choose the most accurate (confirmatory) test  
3. Perform immediate stabilization (ABCs)  

…for the most commonly encountered diseases across major specialties and the highest-yield ED presentations.

---

## MASTER PROMPT — ClinStart MD Educational App Generator (SPECIALIZED VERSION)

## Role & Mission
You are a cross-functional team (PM, Staff Engineer, Senior Instructional Designer, EM/IM/FM SMEs, subspecialty SMEs such as Cardiology, Pulmonology, Neurology, GI, Renal, Endocrine, ID, OB/Gyn, UX Writer, QA).  
Your mission is to design an interactive clinical reasoning and stabilization platform that teaches:

**ClinStart MD: First-Line Diagnosis & Stabilization Atlas**

This app must:
- Support learners from MS3 → residents → early attendings  
- Focus on high-yield, clinically common conditions  
- Cleanly separate: INITIAL TEST vs MOST ACCURATE TEST vs ABC STABILIZATION  
- Use only synthetic data  
- Be mobile-first, dark mode, offline-ready  
- Maintain evidence-based consistency with major exam and guideline-backed logic  
- Offer cross-specialty diagnostic and stabilization algorithms  

---

## Inputs (Fill These)

Primary Topics:
- Initial test  
- Most accurate (confirmatory) test  
- Immediate stabilization (ABCs)  
- For common and high-yield clinical diseases and ED presentations:
  - Cardiology: ACS, CHF, AF with RVR, hypertensive emergency  
  - Pulmonology: COPD, asthma, pneumonia, PE, pneumothorax  
  - Neurology: Stroke/TIA, status epilepticus, meningitis  
  - GI: Upper/lower GI bleed, cholangitis, pancreatitis  
  - Endocrine: DKA, HHS, adrenal crisis, thyroid storm  
  - ID: Sepsis, febrile neutropenia, cellulitis vs nec fasc  
  - Renal: AKI, hyperkalemia, severe hyponatremia  
  - Hem/Onc: DVT, tumor lysis (conceptual), acute leukemic presentations  
  - OB/Gyn (select emergencies): ectopic pregnancy, preeclampsia, postpartum hemorrhage  
  - Pediatrics (select): bronchiolitis, croup, febrile infant  
  - ED Chief Complaints: chest pain, dyspnea, abdominal pain, syncope, AMS, fever, trauma survey, palpitations, weakness

Target Learner Levels: {{LEVELS}}  
Learner Context: {{CONTEXT}}  
Learning Outcomes: {{LEARNING_OBJECTIVES}}

Constraints:
- Mobile-first  
- Dark mode  
- Offline-ready  
- Synthetic cases only  
- Initial vs Most Accurate vs Stabilization must always be consistent and non-contradictory  
- Evidence-based alignment with ACLS, ATLS (conceptual), AHA/ACC, IDSA, CHEST, etc.

References/Standards: {{REFERENCES}}  
Brand/Voice: {{VOICE_TONE}}  
Locale/Regional Guidelines: {{LOCALE}}

---

## 1. Executive Summary & Naming

Problem: Trainees struggle with “what to do first,” “which test to order first,” “which test is most accurate,” and “what stabilization must occur immediately.”  
ClinStart MD answers these with structured, interactive, rapid-access cards, algorithms, and case simulations.

Alternative names:
- FirstCall MD – “Know what to do first.”  
- Stabilize & Diagnose – “ABCs to gold-standard testing.”  
- StartSmart Clinical – “The first 5 minutes, clarified.”

---

## 2. Personas & Use Cases

Personas:
- IM intern on night float managing chest pain or SOB  
- EM resident refining initial workup order and stabilization sequences  
- MS4 practicing exam-style “initial vs most accurate test” reasoning  
- Hospitalist providing consult recommendations  

Use cases:
- Morning report  
- Pre-round preparation  
- ED shift decision practice  
- Board review  
- Clinical algorithms reference  

---

## 3. Curriculum Map & Knowledge Graph

Core Structure for Each Disease:
- Immediate ABC Stabilization  
- Initial Diagnostic Test(s)  
- Most Accurate / Confirmatory Test(s)  
- Red flags  
- Pitfalls  
- Special caveats  
- Disposition clues

Organized by:
- Specialty  
- Chief complaint  
- Algorithms  
- Case simulations  

Knowledge Graph Links:
- Disease → Red Flags → ABC Needs → Initial Test → Confirmatory Test  
- Tags: Specialty, Geography, Complexity, Bloom Level  

---

## 4. Interactive Specs

### Three-Column Clinical Cards
- Column 1: Immediate Stabilization  
- Column 2: Initial Diagnostic Test  
- Column 3: Most Accurate Test  
- Supporting sections: Red Flags, Pitfalls, Notes

### Algorithm Flowcharts
- Chief Complaint → Red Flags → Stabilize → Initial Tests → Decide on Confirmatory Tests  

### Comparison Tables
- Condition vs Initial Test vs Most Accurate Test  
- Example conditions: ACS, PE, DVT, stroke, pancreatitis, cholangitis, meningitis, etc.

### Case-Based Simulators
- Present synthetic ED scenario  
- User selects stabilization, initial test, and confirmatory test  
- App provides feedback and reasoning  

---

## 5. Assessment & Mastery

Item types:
- MCQs (board-style)  
- Drag-and-drop matching (condition ↔ initial test; condition ↔ confirmatory test)  
- Sequence questions: correct stabilization order  
- Pitfall questions (what NOT to do first)

Provide 10–20 sample items with rationales.

---

## 6. Clinical Reasoning Framework

Teach the universal 3-step logic:

1. Stabilize (ABCs):
   - Airway, Breathing, Circulation  
   - Oxygen/hypoxia correction  
   - IV access  
   - Glucose, naloxone in AMS when appropriate  
   - Treat emergent arrhythmias/shock patterns conceptually

2. Initial Diagnostic Test:
   - Fast, accessible, sensitive enough, gives direction  
   - Examples:
     - Chest pain → ECG first  
     - SOB → SpO2, CXR first  
     - Stroke → Non-contrast head CT first  
     - Suspected PE → risk score → D-dimer or CTPA based on risk

3. Most Accurate / Confirmatory Test:
   - Gold-standard, more resource-intensive  
   - Examples:
     - ACS → Coronary angiography  
     - PE → CTPA  
     - Cholangitis → ERCP/MRCP based on scenario  
     - Stroke → MRI diffusion (most accurate), but NOT first

Pitfalls to highlight:
- Confusing “most accurate” with “first test”  
- Skipping ABCs  
- Over-ordering tests unrelated to initial stabilization  
- Using imaging without ruling out immediate threats  

---

## 7. Accessibility & Safety

- WCAG 2.2 AA compliance  
- Synthetic cases only  
- No patient-identifying data  
- Educational-only; not a clinical decision tool  
- Diverse, inclusive examples  

---

## 8. Tech Architecture

Stack:
- React, TypeScript  
- Tailwind, shadcn/ui  
- React Router  
- Zustand/Redux  
- D3/Recharts for algorithms and flows  
- IndexedDB + Service Worker for offline

Structure:
- /home  
- /specialties  
- /chief-complaints  
- /conditions  
- /cases  
- /assessment  
- /glossary  
- /settings  

---

## 9. Data Model (JSON Structure Shown in Plain Text to Avoid Markdown Breaking)

Condition object example (indented instead of fenced code):

    {
      "id": "acs",
      "name": "Acute Coronary Syndrome",
      "specialty": "cardiology",
      "initial_tests": ["ECG", "Troponin", "Chest X-ray (selective)", "Basic labs"],
      "most_accurate_tests": ["Coronary angiography"],
      "stabilization": ["Oxygen if hypoxemic", "Aspirin", "Nitroglycerin if appropriate"],
      "red_flags": ["Hypotension", "New HF", "Syncope"],
      "pitfalls": ["Delaying ECG", "Using single troponin"],
      "notes": "ECG is always the first test in chest pain suspicious for ACS."
    }

Similar JSON patterns apply to:
- Chief complaint objects  
- Assessment questions  
- Case templates  

---

## 10. Screen Specs & Text Wireframes

### Home  
- Search bar  
- Buttons: Specialties, Chief Complaints, Cases, Assessments  

### Condition Screen  
- Title  
- Three Panels (Stabilization → Initial Test → Most Accurate Test)  
- Red Flags  
- Pitfalls  

### Case Simulator  
- Scenario text  
- Vitals stream  
- Buttons: Stabilize, Order Initial Test, Order Most Accurate Test  
- Feedback section  

### Assessment  
- MCQs  
- Summary of performance  

---

## 11. Copy & Content Kit

Example microcopy:

ACS:
- Initial test: “ECG — never delay it.”  
- Most accurate test: “Coronary angiography reveals the culprit lesion.”  
- Stabilization: “Provide oxygen only if hypoxemic; begin aspirin early.”

Stroke:
- Initial test: “Non-contrast CT to distinguish ischemic from hemorrhagic stroke.”  
- Most accurate test: “MRI diffusion-weighted imaging for highest sensitivity.”  
- Stabilization: “Airway protection, blood pressure management per guidelines.”

PE:
- Initial test: “Risk stratify → D-dimer if low/intermediate risk.”  
- Most accurate: “CTPA.”  
- Stabilization: “Assess ABCs; treat shock, consider thrombolytics (education only).”

Include: glossary, templates, and tables for common conditions.

---

## 12. Analytics & A/B Plan
- Compare algorithm layout vs vertical card layout  
- Evaluate usability of 3-panel design  
- Explore assessment pacing  

---

## 13. QA Checklist
- Ensure all initial tests and confirmatory tests align with guidelines  
- Validate ABCs logic across all specialties  
- Guarantee no contradictions  
- Ensure synthetic-only data usage  

---

## 14. Roadmap
- M0: EM + IM + 30 conditions  
- M1: Add Peds / OB / Psych emergencies  
- M2: Expand algorithms + adaptive quizzes  
- M3: Personalization + spaced repetition  

Acceptance criteria:  
Users correctly identify initial test, most accurate test, and stabilization order for ≥80% of conditions.

---

## Style & Rigor Requirements
- High-yield  
- Algorithmic  
- Evidence-based  
- Clear, structured, no contradictions  
- Exam-compatible reasoning  

---

## Acceptance Criteria
- Learner can (1) stabilize, (2) choose initial test, (3) identify most accurate test for common diseases.  
- Entire app is consistent with a unified ClinStart MD reasoning map.

---

## Now Generate
Using the inputs above, produce all deliverables in the required order.  
If any input is missing, make reasonable clinical assumptions and label defaults.
