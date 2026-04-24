// src/data/portfolioData.js

export const personal = {
  name:      'Ittyavira C Abraham',
  title:     'AI Engineer & Python Developer',
  subtitle:  'Building intelligent systems with ML, Deep Learning, NLP & Generative AI',
  bio:       'Building intelligent systems with ML, Deep Learning, NLP & Generative AI. Passionate about turning complex data into production-ready AI solutions.',
  email:     'ittyavirac.abraham@gmail.com',
  github:    'https://github.com/itty11',
  linkedin:  'https://www.linkedin.com/in/ittyavira-c-abraham-5435621b7/',
  resume:    'Ittyavira_C_Abraham_AI_Engineer_Resume.pdf',
  location:  'India',
  available:  true,
};

export const skills = [
  {
    category: 'Machine Learning',
    color: 'blue',
    items: ['Linear Regression', 'Logistic Regression', 'kNN', 'SVM', 'Random Forest', 'XGBoost', 'PCA', 'K-Means'],
  },
  {
    category: 'Deep Learning',
    color: 'purple',
    items: ['TensorFlow', 'LSTM', 'SARIMA', 'Time Series Forecasting'],
  },
  {
    category: 'Generative AI & NLP',
    color: 'amber',
    items: ['NLP', 'Transformers', 'Generative AI', 'RAG', 'Prompt Engineering', 'LangChain', 'Hugging Face', 'OpenAI APIs'],
  },
  {
    category: 'Backend & APIs',
    color: 'green',
    items: ['Python', 'FastAPI', 'Django', 'Streamlit', 'API Development'],
  },
  {
    category: 'Frontend',
    color: 'teal',
    items: ['React', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'HTML / CSS / SCSS'],
  },
  {
    category: 'Data & Cloud',
    color: 'coral',
    items: ['PostgreSQL', 'MongoDB', 'SQL', 'GCP', 'Azure', 'Git & GitHub', 'Data Preprocessing'],
  },
];

export const projects = [
  {
    title:       'RAG Chatbot System',
    description: 'Built a production-ready Retrieval-Augmented Generation (RAG) chatbot that answers questions from documents using semantic search, vector embeddings, and LLMs via LangChain.',
    tags:        ['LangChain', 'Gradio', 'GenAI', 'RAG', 'Python'],
    color:       'amber',
    icon:        'RAG',
    github:      'https://github.com/itty11/AI-RAG-Assistant-using-LangChain-Final-Project-IBM-GenAI-Capstone-',
    demo:        null,
  },
  {
    title:       'AI Resume Enhancer',
    description: 'Built an AI-powered resume analysis system using transformer models to evaluate resumes against job descriptions, identify missing skills, and suggest improvements.',
    tags:        ['Transformers', 'Hugging Face', 'LangChain', 'Gradio'],
    color:       'blue',
    icon:        'AI',
    github:      'https://github.com/itty11/Resume-Enhancer-using-Hugging-Face-Transformers',
    demo:        null,
  },
  {
    title:       'Smart Health Risk Predictor',
    description: 'Developed a multi-disease prediction system using Logistic Regression, Random Forest, and XGBoost, with feature engineering and performance comparison across datasets.',
    tags:        ['Logistic Regression', 'Random Forest', 'XGBoost', 'scikit-learn'],
    color:       'green',
    icon:        'ML',
    github:      'https://github.com/itty11/Smart-Health-Risk-Predictor',
    demo:        null,
  },
  {
    title:       'BERT News Classifier',
    description: 'Fine-tuned a BERT-based transformer model for news classification, achieving high accuracy in detecting fake vs real news using NLP techniques.',
    tags:        ['BERT', 'NLP', 'Jupyter Notebook', 'Classification'],
    color:       'purple',
    icon:        'NLP',
    github:      'https://github.com/itty11/BERT-based-News-Classifier',
    demo:        null,
  },
];

export const experience = [
  {
    role:    'AI Engineer',
    company: 'Edunet Foundations and Microsoft (AICTE)',
    period:  '2025',
    points:  [
      'Applied supervised and unsupervised learning techniques using Azure AI services.',
      'Worked on AI-based problem solving under industry mentorship.',
      'Completed internship under a collaborative initiative by AICTE and Microsoft.',
    ],
    current: false,
  },
];

export const education = [
  {
    degree: 'MCA with Artificial Intelligence',
    school: 'Amrita Vishwa Vidyapeetham',
    year:   '2025',
  },
  {
    degree: 'BCA',
    school: 'IFIM College',
    year:   '2023',
  },
];

export const certifications = [
  { name: 'Google Cloud',                  tag: 'GCP',       color: 'green'  },
  { name: 'Microsoft AI & ML Engineering', tag: 'Azure',     color: 'blue'   },
  { name: 'IBM Generative AI for LLMs',    tag: 'LangChain', color: 'amber'  },
];