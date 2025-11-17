# ClinStart MD

**First-Line Diagnosis & Stabilization Atlas for Clinicians**

A mobile-first, offline-capable, dark-mode educational web application that teaches clinicians and medical trainees the critical three-step clinical approach:

1. **Stabilize (ABCs)** - Immediate life-saving interventions
2. **Initial Diagnostic Test** - Fast, sensitive screening tests
3. **Most Accurate Test** - Gold-standard confirmatory diagnostics

## Features

### Core Functionality
- 🏥 **30+ High-Yield Conditions** across major specialties (Cardiology, Pulmonology, Neurology, GI, Endocrinology, ID, Nephrology, Heme/Onc, OB/Gyn, Pediatrics)
- 📊 **Three-Column Clinical Cards** - Clear separation of Stabilization → Initial Tests → Most Accurate Tests
- 🔍 **Browse by Specialty or Chief Complaint** - Intuitive navigation
- 📚 **Interactive Case Simulations** - Practice clinical decision-making with realistic scenarios
- ✅ **Assessment Module** - MCQs with detailed explanations to test knowledge
- 📖 **Medical Glossary** - Quick reference for terms, tests, and abbreviations

### Technical Features
- 🌙 **Dark Mode** - Eye-friendly for late-night studying (default)
- 📱 **Mobile-First Responsive Design** - Works seamlessly on all devices
- ⚡ **Offline Support** - Progressive Web App with service worker
- 🎨 **Modern UI** - Built with Tailwind CSS and shadcn/ui components
- 📈 **Progress Tracking** - Track completed cases and assessment performance
- ⭐ **Favorites** - Bookmark important conditions

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (headless components)
- **Routing**: React Router v6
- **State Management**: Zustand with persistence
- **Offline**: Service Worker + IndexedDB (via Dexie)
- **Build Tool**: Vite
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd CLINSTART-MD
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
CLINSTART-MD/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Base UI components (Button, Card, Input, etc.)
│   │   ├── layout/       # Layout components (Header, Layout)
│   │   └── ThreeColumnCard.tsx
│   ├── data/             # Medical condition data
│   │   ├── conditions.ts # 30+ disease conditions
│   │   ├── cases.ts      # Case scenarios
│   │   ├── questions.ts  # Assessment questions
│   │   └── glossary.ts   # Medical terms
│   ├── hooks/            # Custom React hooks
│   │   └── useTheme.tsx  # Dark mode theme provider
│   ├── lib/              # Utility functions
│   │   └── utils.ts
│   ├── pages/            # Route pages
│   │   ├── Home.tsx
│   │   ├── Specialties.tsx
│   │   ├── ChiefComplaints.tsx
│   │   ├── Condition.tsx
│   │   ├── Cases.tsx
│   │   ├── CaseDetail.tsx
│   │   ├── Assessment.tsx
│   │   └── Glossary.tsx
│   ├── stores/           # Zustand stores
│   │   └── useStore.ts
│   ├── types/            # TypeScript types
│   │   └── index.ts
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Usage

### For Medical Students & Residents

1. **Study by Specialty**: Browse conditions organized by medical specialty
2. **Search by Symptom**: Find relevant conditions by chief complaint
3. **Review Conditions**: Learn the three-step approach for each condition
4. **Practice Cases**: Test your clinical reasoning with interactive scenarios
5. **Take Assessments**: Validate your knowledge with board-style questions
6. **Track Progress**: Monitor your performance and revisit challenging topics

### For Educators

This app can be used as a teaching tool to:
- Reinforce the systematic approach to clinical diagnosis
- Highlight common pitfalls and red flags
- Provide standardized, evidence-based content
- Facilitate discussion during morning report or case conferences

## Educational Philosophy

ClinStart MD teaches a universal three-step clinical reasoning framework:

### 1. Stabilize (ABCs)
- Airway, Breathing, Circulation
- Immediate life-saving interventions
- Treat emergent arrhythmias, shock, hypoxemia

### 2. Initial Diagnostic Test
- Fast, accessible, sensitive
- Examples: ECG for chest pain, CT head for stroke, CXR for dyspnea
- Guides next steps and rules out emergencies

### 3. Most Accurate Test
- Gold-standard, definitive diagnosis
- Examples: Coronary angiography, MRI, Endoscopy
- May be invasive or resource-intensive

## Data Sources

All medical content is based on:
- Current clinical guidelines (AHA/ACC, IDSA, CHEST, etc.)
- ACLS and ATLS principles
- Board exam content (USMLE, ABEM, ABIM)
- Evidence-based medicine

**Note**: This is an educational tool only and not a substitute for clinical judgment or formal medical training.

## Key Features by Page

### Home
- Quick search functionality
- Navigation to all main sections
- Featured high-yield conditions
- Learning framework overview

### Specialties
- Organized by medical specialty
- Shows condition count per specialty
- Quick access to all conditions in each specialty

### Chief Complaints
- Organized by presenting symptom
- Helps with differential diagnosis approach
- Maps symptoms to relevant conditions

### Condition Pages
- **Three-Column Layout**: Stabilization | Initial Tests | Most Accurate Tests
- **Red Flags**: Warning signs requiring immediate attention
- **Pitfalls**: Common mistakes to avoid
- **Clinical Notes**: Evidence-based pearls
- **Favorites**: Bookmark for quick access

### Case Simulations
- Realistic patient presentations
- Vital signs and clinical context
- Interactive selection of stabilization, tests, and diagnosis
- Immediate feedback with explanations

### Assessment
- Board-style MCQs
- Difficulty levels (easy, medium, hard)
- Detailed explanations for each answer
- Performance tracking
- Success rate calculation

### Glossary
- Searchable medical terms
- Clear definitions
- Links to related conditions

## Accessibility

- WCAG 2.2 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast dark mode
- Responsive text sizing

## Contributing

This is an educational project. Contributions are welcome:
- Report bugs or issues
- Suggest new conditions or features
- Improve medical content accuracy
- Enhance UI/UX

## License

Educational use only. All medical content is for educational purposes and should not replace professional medical advice.

## Disclaimer

**IMPORTANT**: This application is for educational purposes only. It is not intended to be used as a clinical decision-making tool. Always follow local protocols, consult with senior physicians, and use clinical judgment when managing real patients.

## Roadmap

### Current Version (M0)
- ✅ 30+ conditions across major specialties
- ✅ Core three-column framework
- ✅ Case simulations
- ✅ Assessment module
- ✅ Dark mode
- ✅ Offline support (PWA)

### Future Enhancements (M1-M3)
- Additional specialties (Psych, Rheum, Derm)
- Expanded case library
- Algorithm flowcharts
- Spaced repetition system
- Personalized learning paths
- Mobile app (React Native)
- Collaborative study groups

## Support

For questions or feedback:
- Open an issue in the repository
- Review the documentation

---

**Built with ❤️ for medical education**

*"Know what to do first."*
