// src/data/portfolioData.js

export const personal = {
  name:      'Ittyavira C Abraham',
  title:     'AI Engineer & Python Developer',
  subtitle:  'Building intelligent systems with ML, Deep Learning, NLP & Generative AI',
  bio:       'Building intelligent systems with ML, Deep Learning, NLP & Generative AI. Passionate about turning complex data into production-ready AI solutions.',
  email:     'ittyavirac.abraham@gmail.com',
  github:    'https://github.com/itty11',
  linkedin:  'https://www.linkedin.com/in/ittyavira-c-abraham-5435621b7/',
  leetcode:  'https://leetcode.com/u/good_master11/',       
  hackerrank:'https://www.hackerrank.com/profile/ittyavirac_abra1',
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
    items: ['TensorFlow', 'Keras', 'PyTorch', 'LSTM', 'SARIMA', 'Time Series Forecasting'],
  },
  {
    category: 'Generative AI & NLP',
    color: 'amber',
    items: ['NLP', 'Transformers', 'Generative AI', 'RAG', 'Prompt Engineering', 'LangChain', 'Hugging Face', 'OpenAI APIs'],
  },
  {
    category: 'Computer Vision',
    color: 'purple',
    items: ['OpenCV', 'FAISS', 'SORT Tracking', 'CLAHE', 'Face Recognition', 'Docker'],
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
    role:    'AI Engineer Intern',
    company: 'Cyber Intelligence Corps (CIC)',
    period:  'May, 2026 – Present',
    points:  [
      'Building computer vision and AI surveillance systems using OpenCV and deep learning.',
      'Working on facial recognition pipeline using FAISS for real-time identity matching.',
      'Developing Leave Management and Attendance Dashboard backend using FastAPI with RBAC.',
    ],
    current: true,   
  },

  {
    role:    'AI/ML Intern',
    company: 'Edunet Foundations and Microsoft (AICTE)',
    period:  'April, 2025 - May, 2025',
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
    year:   '2023 - 2025',
  },
  {
    degree: 'BCA',
    school: 'IFIM College',
    year:   '2019 - 2023',
  },
];

export const certifications = [
  {
    name:  'Google Cloud',
    tag:   'GCP',
    color: 'green',
    link:  'https://www.skills.google/public_profiles/ad4fa8bc-5558-4d40-a62a-df80872b9e77',
  },
  {
    name:  'Microsoft AI & ML Engineering',
    tag:   'Azure',
    color: 'blue',
    link:  'https://coursera.org/share/639e7131094995077dce215906c37366',
  },
  {
    name:  'IBM Generative AI for LLMs',
    tag:   'LangChain',
    color: 'amber',
    link:  'https://coursera.org/share/5a4ca063031b9d7c4aacb61496619d7c',
  },
];

export const publications = [
  {
    title:    'Role of Data Mining in Customer Relationship Management: A Conceptual Review',
    journal:  'International Journal of Research (IJR)',
    date:     'Apr 6, 2022',
    link:     'https://ijrjournal.com/index.php/ijr/article/view/450',
    description: 'Explores how Data Mining enhances Customer Relationship Management (CRM) by enabling organizations to transform customer data into meaningful business insights. Examines predictive analytics, classification, clustering, association analysis, and pattern discovery to support customer behavior analysis, trend forecasting, and data-driven decision making.',
    tags: [
      'Data Mining', 'CRM', 'Machine Learning',
      'Predictive Analytics', 'Business Intelligence',
      'Customer Analytics', 'Churn Prediction',
    ],
  },
];