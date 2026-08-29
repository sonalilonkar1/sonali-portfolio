export const projects = [
  {
    id: 1,
    name: "TraceAdvisor – ML-Driven Cloud Resource Recommendation System",
    meta: "Python · ML · Google Cluster Traces · Azure Workloads · BigQuery · 2026",
    tagline:
      "Trace-driven ML system for recommending CPU, memory, and GPU resources before recurring cloud workloads execute.",
    category: "ml",
    bullets: [
      "Problem: Cloud and AI workloads are frequently over-provisioned because users must request CPU, memory, and GPU resources before execution without knowing their actual peak demand.",
      "Solution: Developed a trace-driven advisory approach that learns from historical executions and generates risk-aware pre-execution resource recommendations using percentile baselines, workload characteristics, and ML-based demand prediction.",
      "My role: Responsible for modeling, calibration, and evaluation—developing the evaluation protocol, preparing BigQuery trace datasets, establishing reproducible experiments, and evaluating ModServe and Google Cluster workload baselines using chronological replay.",
      "Tech highlights: Python · Google ClusterData 2019 · Azure workload traces · BigQuery · P90/P95/P99 modeling · ML regression · chronological trace replay · resource utilization & violation analysis"
    ],
    links: [
      {
        text: "Source (GitHub)",
        url: "https://github.com/sonalilonkar1/masters-project"
      }
    ]
  },

  {
    id: 2,
    name: "ReceiptIQ – AI-Powered Receipt Intelligence System",
    meta: "Python · OCR · LLM Agents · SQLite · Tesseract · May 2026",
    tagline:
      "Multimodal AI system that extracts, analyzes, validates, and audits receipt data through an intelligent agent workflow.",
    category: "ml",
    bullets: [
      "Problem: Receipt and invoice processing requires extracting noisy visual data, answering analytical questions, and safely handling user corrections without compromising financial data integrity.",
      "Solution: Built an AI-powered receipt intelligence system combining OCR, LLM-based intent routing, agent orchestration, database analytics, and web verification for receipt extraction and spending analysis.",
      "My role: Implemented the end-to-end agent workflow including OCR processing, structured receipt storage, analytical queries, security checks, edit guardrails, audit trails, and automated benchmarking/testing.",
      "Tech highlights: Python · Tesseract OCR · LLM orchestration · Phi/Mistral · SQLite · prompt caching · injection detection · agent tools · SROIE/CORD receipt datasets"
    ],
    links: [
      {
        text: "Source (GitHub)",
        url: "https://github.com/sonalilonkar1/ReceiptIQ"
      }
    ]
  },

  {
    id: 3,
    name: "Transcripto – Cloud-Native AI Audio Transcription Platform",
    meta: "AWS · FastAPI · Whisper · PyTorch · SQS · S3 · DynamoDB · 2026",
    tagline:
      "Asynchronous cloud platform for processing audio transcription jobs with distributed Whisper inference workers.",
    category: "ml",
    bullets: [
      "Problem: ML-based audio transcription can be compute-intensive and slow, making synchronous request processing unsuitable for long-running audio workloads.",
      "Solution: Built a cloud-native asynchronous architecture where audio is uploaded directly to S3, jobs are queued through SQS, distributed workers run Whisper inference, and DynamoDB tracks processing state.",
      "My role: Served as Infrastructure Lead for the team project, focusing on the AWS infrastructure and integration required to support the asynchronous API, storage, queueing, worker, and job-tracking architecture.",
      "Tech highlights: AWS EC2 · S3 · SQS · DynamoDB · FastAPI · OpenAI Whisper · PyTorch · asynchronous processing · presigned uploads"
    ],
    links: [
      {
        text: "Source (GitHub)",
        url: "https://github.com/AB-SJSU/Transcripto"
      }
    ]
  },

  {
    id: 4,
    name: "Deep Learning - Volatility Forecasting (DL_Project)",
    meta: "PyTorch Lightning · TFT · Informer · N-BEATS · GRU/LSTM · December 2025",
    tagline:
      "Multi-horizon (1/5/22 day) volatility forecasting with deep learning models and statistical baselines.",
    category: "ml",
    bullets: [
      "Problem: Multi-horizon volatility forecasting is challenging due to non-stationarity and requires fair benchmarking against strong statistical baselines.",
      "Solution: Implemented TFT, Informer, N-BEATS, GRU/LSTM, and MLP baselines; benchmarked against HAR/HARX (statsmodels), GARCH (arch), XGBoost, and used walk-forward validation.",
      "My role: Built the end-to-end pipeline—data storage in Parquet, experiment automation (YAML/Makefile/scripts), training/evaluation loops, and report generation for comparisons.",
      "Tech highlights: PyTorch Lightning · TFT/Informer/N-BEATS · GRU/LSTM · HAR/HARX · GARCH · XGBoost · walk-forward CV · Parquet (pyarrow)"
    ],
    links: [{ text: "Source (GitHub)", url: "https://github.com/sonalilonkar1/vol-forecasting" }]
  },

  {
    id: 5,
    name: "Toxic Comment Classification: Interpretable Benchmark for Data Mining",
    meta: "DistilBERT · Transformers · PyTorch · TF-IDF · SHAP · December 2025",
    tagline:
      "Multi-label toxicity classification across 6 dimensions with comprehensive evaluation and interpretability.",
    category: "ml",
    bullets: [
      "Problem: Toxicity detection needs strong accuracy across multiple labels while remaining interpretable and robust to data drift/out-of-domain text.",
      "Solution: Built a multi-label pipeline comparing DistilBERT vs TF-IDF baselines (LogReg/SVM/RF/XGBoost) and LSTM variants; used temporal splits, hyperparameter search, PR-AUC/F1, and calibration checks.",
      "My role: Implemented training/evaluation scripts, SHAP-based interpretability, out-of-domain testing, and delivered a production-style demo via Flask REST API + Streamlit; automated dataset acquisition with Kaggle API.",
      "Tech highlights: DistilBERT · Hugging Face Transformers · PyTorch · TF-IDF baselines · PR-AUC/F1 · calibration · SHAP · Flask API · Streamlit"
    ],
    links: [{ text: "Source (GitHub)", url: "https://github.com/sonalilonkar1/toxic_comments_classification" }]
  },

  {
    id: 6,
    name: "Predicting Historical Stock Prices With Machine Learning (ML_Project)",
    meta: "Python · PyTorch · XGBoost · LSTM · StandardScaler · December 2025",
    tagline:
      "Short-horizon return prediction on NYSE stocks using sliding-window features and classical ML regressors.",
    category: "ml",
    bullets: [
      "Problem: Short-horizon return prediction is noisy and easy to overfit—models need careful feature construction and validation.",
      "Solution: Engineered sliding-window (2–5 day) features and compared classical regressors (Linear/Ridge/Poly, RF/GB, MLP, XGBoost) against an LSTM regressor in PyTorch.",
      "My role: Built reproducible data prep + training workflow with StandardScaler, 5-fold walk-forward cross-validation, and automated runs using Makefile + shell scripts; compiled results into benchmarking reports.",
      "Tech highlights: Python · scikit-learn · XGBoost · PyTorch · LSTM · StandardScaler · walk-forward CV · reproducible reports"
    ],
    links: [{ text: "Source (GitHub)", url: "https://github.com/sonalilonkar1/nyse-ml-pipeline" }]
  },

  {
    id: 7,
    name: "Supermemory Assistant - AI-Powered Personal Assistant",
    meta: "Flask · Next.js · Python · TypeScript · Gemini API · Supermemory API · December 2025",
    tagline:
      "Full-stack AI assistant with dynamic personas and persistent long-term memory.",
    category: "backend",
    bullets: [
      "Problem: Standard chat assistants lose context and don’t retain user preferences or long-term history across sessions.",
      "Solution: Built a full-stack assistant with personas and persistent memory—using Gemini for responses and Supermemory for memory storage, classification, and contextual recall.",
      "My role: Implemented the Flask + Next.js application, integrated external APIs, and added capabilities like file uploads with OCR, web search, calendar integration, and automation via connectors/workflows.",
      "Tech highlights: Flask · Next.js · Python/TypeScript · Gemini API · Supermemory API · OCR uploads · web search · calendar integration"
    ],
    links: [{ text: "Source (GitHub)", url: "https://github.com/sonalilonkar1/supermemory-assistant" }]
  },

  {
    id: 8,
    name: "Campus peer-to-peer marketplace MVP for Software Systems",
    meta: "React · Spring Boot 3 · MySQL · AWS RDS · EC2 · Flyway · December 2025",
    tagline:
      "Campus peer-to-peer marketplace with React frontend and Spring Boot 3 backend.",
    category: "backend",
    bullets: [
      "Problem: Students need a simple, trusted way to list and discover items/services within a campus community.",
      "Solution: Built an MVP marketplace with a React frontend and Spring Boot 3 REST backend backed by a normalized MySQL schema.",
      "My role: Designed schema + APIs, implemented core flows end-to-end, deployed MySQL on AWS RDS and services on EC2, and used Flyway/Swagger/Postman/Docker for rapid iteration.",
      "Tech highlights: React · Spring Boot 3 (Java 17) · MySQL · Flyway · AWS RDS/EC2 · Docker · Swagger · Postman"
    ],
    links: [{ text: "Source (GitHub)", url: "https://github.com/sonalilonkar1/cmpe202-Campus-Marketplace" }]
  },

  {
    id: 9,
    name: "ReliefCircle – Cloud-Native Donation & Charity Management Platform",
    meta: "Spring Boot · MySQL · AWS · SNS · May 2025",
    tagline: "Cloud-native platform to run donation campaigns and track funds end-to-end.",
    category: "backend",
    bullets: [
      "Problem: Small charities struggle to track campaigns, donors, and payments across spreadsheets and manual workflows.",
      "Solution: Built a Spring Boot backend with REST APIs for charities, campaigns, donors, and transactions + role-based access.",
      "My role: Owned backend architecture + MySQL schema design; integrated payment flow and notification events.",
      "Tech highlights: Java 17 · Spring Boot · MySQL · AWS (EC2/RDS) · SNS notifications"
    ],
    links: [{ text: "Source (GitHub)", url: "https://github.com/sonalilonkar1/ReliefCircle" }]
  },

  {
    id: 10,
    name: "Distributed Twitter Clone – Scalable Microservice-Based System",
    meta: "Flask · MongoDB · REST · April 2025",
    tagline: "Distributed social platform using Flask, MongoDB, and REST APIs.",
    category: "backend",
    bullets: [
      "Problem: Social timelines are read-heavy and need to stay responsive while supporting continuous writes and user-graph operations.",
      "Solution: Built REST services with Flask + MongoDB and applied scaling concepts such as sharding, load balancing, and fault-tolerant service design for higher availability.",
      "My role: Implemented the core API flows and data layer; designed the service structure and validated behavior under scaling/failure scenarios as part of a microservice-based approach.",
      "Tech highlights: Flask · MongoDB · REST APIs · sharding · load balancing · fault-tolerant microservices"
    ],
    links: [{ text: "Source (GitHub)", url: "https://github.com/sonalilonkar1/CMPE_272_TwitterClone" }]
  }

  
];