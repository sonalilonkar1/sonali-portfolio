export const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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