import logoAinubes from '@/images/logos/ainubes.png'
import logoIdaTech from '@/images/logos/idaTech.svg'
import logoJobInTech from '@/images/logos/jobInTech.svg'
import logoRedGato from '@/images/logos/redgato-favicon.svg'
import logoBts from '@/images/logos/bts.svg'
import logoUmp from '@/images/logos/ump.svg'
import idaTech from '@/images/logos/idaTech.svg'
import aqlam from '@/images/logos/aqlam.svg'
import labXpert from '@/images/logos/labXpert.svg'

export const personalInfo = {
    name: "Yassin Ezaouibi",
    role: "Applied Mathematics & AI Student",
    roleVariants: [
        "Applied Mathematics & AI",
        "Machine Learning Engineer",
        "Data Science Researcher",
        "Anomaly Detection Specialist",
    ],
    availableFor: "PFE Internship · Feb 2027",
    email: "zouibiyassin03@gmail.com",
    cvUrl: "/yassin-ezaouibi-resume.pdf",
    description: `I'm Yassin Ezaouibi — an Applied Mathematics & AI Engineering student at UMP, where my studies span mathematical optimization, probability theory, statistics, fractal mathematics, financial mathematics, and machine learning. I bridge rigorous math foundations with real-world AI engineering: I built and deployed an anomaly detection model for industrial energy consumption during a 6-month internship at Ainubes GmbH. I'm looking for a PFE research internship (starting February 2027) at a company pushing the frontier of data-driven intelligence.`,
    about: {
        title: "Applied Mathematics student building real AI — from theory to deployed models.",
        sections: [
            {
                title: "Mathematics First",
                content: "My foundation is mathematical. At UMP's Faculty of Applied Mathematics for Machine Intelligence, I study optimization theory, probability, stochastic analysis, fractal geometry, mathematical finance, topology, cryptography, and quantum computing — the rigorous underpinnings that make AI models not just work, but work reliably and explainably."
            },
            {
                title: "From Theory to Production",
                content: "During a 6-month internship at Ainubes GmbH (Aug 2025 – Feb 2026), I developed and deployed an AI model that detects anomalies in residential energy consumption time series across a large German housing dataset. I also worked on Archivfy, an intelligent document platform with OCR-based classification and semantic search."
            },
            {
                title: "Research & Engineering Mindset",
                content: "I come to AI from a software engineering background — Java, Spring Boot, MERN — which gives me an unusual ability to move between writing a research-grade statistical model and shipping a production-ready API. I write about AI on Medium, open-source my experiments on GitHub, and continuously work on deepening my ML and mathematical toolkit."
            },
            {
                title: "What I'm Building Toward",
                content: "My goal is a PFE internship (end-of-study project, starting February 2027) at a leading Moroccan or international company working on serious data problems — whether in energy, banking, telecom, or research. After that, I want to contribute to AI teams building systems that have measurable, real-world impact."
            }
        ]
    },
    social: {
        github: "https://github.com/YassinEzaouibi",
        medium: "https://medium.com/@ezaouibiyassin",
        linkedin: "https://www.linkedin.com/in/ezaouibi-yassin/"
    }
}

export const skills = [
    {
        category: "Mathematics & Theory",
        emoji: "∑",
        color: "zinc",
        items: [
            // Foundations (S1)
            "Mathematical Analysis",
            "Linear Algebra & Numerical Methods",
            "Probability Theory",
            // Stochastic & Finance (S2)
            "Stochastic Analysis (Finance)",
            "Integral Equations (Stochastic)",
            "Markov Chains",
            // Fractal & Optimization (S1)
            "Fractal Structures & Digital Engineering",
            "Optimization & Decision Theory",
            // Statistics & Modeling (S2-S3)
            "Inferential Statistics",
            "Deterministic & Stochastic Modeling",
            // Advanced (S2-S3 + user request)
            "Topology",
            "Cryptography & Quantum Cryptography",
            "Quantum Computing Mathematics",
            "Mathematical Finance",
        ]
    },
    {
        category: "Machine Learning & AI",
        emoji: "🧠",
        color: "zinc",
        items: [
            "Scikit-learn",
            "PyTorch",
            "TensorFlow / Keras",
            "Time Series Analysis",
            "Anomaly Detection",
            "Deep Learning",
            "Statistical Learning",
            "NLP (intro)",
        ]
    },
    {
        category: "Data Engineering",
        emoji: "📊",
        color: "zinc",
        items: [
            "Python",
            "Pandas & NumPy",
            "Matplotlib & Seaborn",
            "SQL",
            "Data Wrangling",
            "Signal Processing",
            "ETL Pipelines",
            "MongoDB",
        ]
    },
    {
        category: "MLOps & Deployment",
        emoji: "⚙️",
        color: "zinc",
        items: [
            "FastAPI",
            "Streamlit",
            "Docker",
            "Git & GitHub",
            "REST APIs",
            "Jupyter / Colab",
        ]
    },
    {
        category: "Software Engineering",
        emoji: "💻",
        color: "zinc",
        items: [
            "Java & Spring Boot",
            "React / Next.js",
            "Node.js",
            "Angular",
            "PostgreSQL",
        ]
    }
]

export const experience = [
    {
        company: 'Ainubes GmbH',
        title: 'AI Engineer — Data & Machine Learning',
        type: 'Internship (PFA)',
        logo: logoAinubes,
        start: 'Aug 2025',
        end: 'Feb 2026',
        description: 'Built production-scale AI systems at a German data company: anomaly detection model for residential energy time series across a large German housing dataset, and Archivfy — an intelligent document platform with OCR-based classification and semantic search.',
        tags: ['Python', 'Time Series', 'Anomaly Detection', 'OCR', 'Document AI'],
        highlight: true,
    },
    {
        company: 'IDEA TECH',
        title: 'Full Stack Developer (MERN)',
        type: 'Internship',
        logo: logoIdaTech,
        start: 'Jan 2024',
        end: 'Feb 2024',
        tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    {
        company: 'JobInTech - Simplon',
        title: 'Backend Developer (Java)',
        type: 'Bootcamp',
        logo: logoJobInTech,
        start: 'Apr 2023',
        end: 'Jan 2024',
        tags: ['Java', 'Spring Boot', 'REST APIs'],
    },
    {
        company: 'redgato',
        title: 'Full Stack Developer (Java - Angular)',
        type: 'Internship',
        logo: logoRedGato,
        start: 'Jan 2023',
        end: 'Mar 2023',
        tags: ['Java', 'Angular', 'Spring Boot'],
    },
]

export const education = [
    {
        company: 'UMP — Faculté Pluridisciplinaire de Nador',
        title: "Master's — Mathématiques Appliquées à l'Intelligence Machine",
        type: 'University',
        logo: logoUmp,
        start: 'Oct 2025',
        end: 'Jul 2027',
    },
    {
        company: 'UMP — Faculté Pluridisciplinaire de Nador',
        title: "Licence — Mathématiques Appliquées à l'Intelligence Machine",
        type: 'University',
        logo: logoUmp,
        start: 'Oct 2024',
        end: 'Jul 2025',
    },
    {
        company: 'Brevet de Technicien Supérieur (BTS)',
        title: 'Information Systems Development',
        type: 'University',
        logo: logoBts,
        start: 'Sep 2021',
        end: 'Jul 2023',
    },
]

export const projects = [
    {
        name: 'Anomaly Detection — German Housing Energy (Ainubes)',
        description:
            'Production-scale AI system developed at Ainubes GmbH to detect anomalies in residential energy consumption time series across a large German housing dataset. Built from scratch with proprietary data — custom feature engineering, statistical and ML-based detection models, and real-time alerting for energy inefficiencies.',
        link: { href: 'https://github.com/YassinEzaouibi', label: 'GitHub' },
        logo: logoAinubes,
        techStack: ['Python', 'Time Series', 'Scikit-learn', 'Anomaly Detection', 'Signal Processing'],
        type: 'AI/ML',
        featured: true,
    },
    {
        name: 'Archivfy — Intelligent Document Platform (Ainubes)',
        description:
            'AI-powered document management platform developed at Ainubes: automatic classification of uploaded documents by date, year, quarter, and month; OCR-based semantic search so clients can retrieve documents by keyword from any file format.',
        link: { href: 'https://github.com/YassinEzaouibi', label: 'GitHub' },
        logo: logoAinubes,
        techStack: ['Python', 'OCR', 'Document AI', 'NLP', 'Cloud Storage'],
        type: 'AI/ML',
        featured: true,
    },
    {
        name: 'Time Series Anomaly Detection',
        description:
            'Open-source exploration of anomaly detection algorithms for time series data — including statistical, isolation forest, and LSTM-based approaches, with benchmark comparisons.',
        link: { href: 'https://github.com/YassinEzaouibi', label: 'GitHub' },
        logo: logoUmp,
        techStack: ['Python', 'PyTorch', 'Scikit-learn', 'Pandas', 'Matplotlib'],
        type: 'AI/ML',
        featured: true,
    },
    {
        name: 'Hikma Invest',
        description:
            'A secure investment platform to help achieve financial life goals — retirement planning, education funding, and property purchase — with portfolio analytics.',
        link: { href: 'https://github.com/YassinEzaouibi/my-floussi-front', label: 'My Floussi' },
        logo: idaTech,
        techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
        type: 'Web',
    },
    {
        name: 'Aqlam',
        description:
            'A social platform for book lovers — connect with readers, share reviews, join book clubs, and discover your next read. Full-stack with Spring Boot backend.',
        link: {
            href: 'https://github.com/YassinEzaouibi/Aqlam-backend',
            label: 'Aqlam Backend'
        },
        logo: aqlam,
        techStack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
        type: 'Web',
    },
    {
        name: 'Lab Xpert',
        description:
            'A management platform for medical laboratories — streamlining operations, improving efficiency, and ensuring accuracy in test processing with role-based access control.',
        link: {
            href: 'https://github.com/YassinEzaouibi/Lab-xpert-spring-boot-security',
            label: 'Lab Xpert Backend'
        },
        logo: labXpert,
        techStack: ['Java', 'Spring Security', 'JWT', 'REST APIs'],
        type: 'Web',
    },
]
