export const projects = [
  {
    id: 1,
    name: "Deep Learning - Volatility Forecasting (DL_Project)",
    meta: "PyTorch Lightning · TFT · Informer · N-BEATS · GRU/LSTM · December 2025",
    tagline: "Multi-horizon (1/5/22 day) volatility forecasting with deep learning models and statistical baselines.",
    category: "ml",
    bullets: [
      "Implemented multi-horizon (1/5/22 day) volatility forecasting with TFT, Informer, N-BEATS, GRU/LSTM and MLP baselines using PyTorch Lightning.",
      "Benchmarked deep models against statistical baselines (HAR/HARX via statsmodels; GARCH via arch) and gradient boosted trees (XGBoost) with walk-forward validation.",
      "Automated batch experiments using YAML configs (PyYAML), Makefile targets, and shell scripts; stored datasets efficiently in Parquet (pyarrow).",
      "Evaluated strategy robustness via portfolio backtesting with transaction costs and statistical significance testing; generated plots/reports for model comparisons."
    ],
    links: [
      { text: "Source (GitHub)", url: "https://github.com/sonalilonkar1/vol-forecasting" }
    ]
  },
  {
    id: 2,
    name: "Toxic Comment Classification: Interpretable Benchmark for Data Mining",
    meta: "DistilBERT · Transformers · PyTorch · TF-IDF · SHAP · December 2025",
    tagline: "Multi-label toxicity classification across 6 dimensions with comprehensive evaluation and interpretability.",
    category: "ml",
    bullets: [
      "Built multi-label toxicity classification across 6 dimensions; compared DistilBERT (Transformers + PyTorch) vs TF-IDF baselines (LogReg/SVM/RF/XGBoost) and LSTM variants.",
      "Used temporal splits, hyperparameter search, and comprehensive metrics (PR-AUC, F1, calibration); added interpretability with SHAP and extended evaluation (out-of-domain tests).",
      "Delivered a production-style pipeline with a Flask REST API and Streamlit demo; automated dataset acquisition via Kaggle API and scripted training/evaluation runs."
    ],
    links: [
      { text: "Source (GitHub)", url: "https://github.com/sonalilonkar1/toxic_comments_classification" }
    ]
  },
  {
    id: 3,
    name: "Predicting Historical Stock Prices With Machine Learning (ML_Project)",
    meta: "Python · PyTorch · XGBoost · LSTM · StandardScaler · December 2025",
    tagline: "Short-horizon return prediction on NYSE stocks using sliding-window features and classical ML regressors.",
    category: "ml",
    bullets: [
      "Engineered sliding-window features (2–5 day windows) and trained classical ML regressors (Linear/Ridge/Poly, RF/GB, MLP, XGBoost) plus an LSTM regressor in PyTorch.",
      "Implemented 5-fold walk-forward cross-validation with feature normalization (StandardScaler) and automated data prep/training via Makefile and shell scripts.",
      "Aggregated results into reproducible reports to support benchmarking and model selection."
    ],
    links: [
      { text: "Source (GitHub)", url: "https://github.com/sonalilonkar1/nyse-ml-pipeline" }
    ]
  },
  {
    id: 4,
    name: "Supermemory Assistant - AI-Powered Personal Assistant",
    meta: "Flask · Next.js · Python · TypeScript · Gemini API · Supermemory API · December 2025",
    tagline: "Full-stack AI assistant with dynamic personas and persistent long-term memory.",
    category: "backend",
    bullets: [
      "Built a full-stack AI assistant with dynamic personas and persistent long-term memory using Flask and Next.js.",
      "Integrated Gemini API for intelligent responses and Supermemory API for memory storage, classification, and contextual recall. Also added file uploads with OCR, web search, calendar integration, and automated workflows via external service connectors."
    ],
    links: [
      { text: "Source (GitHub)", url: "https://github.com/sonalilonkar1/supermemory-assistant" }
    ]
  },
  {
    id: 5,
    name: "Campus peer-to-peer marketplace MVP for Software Systems",
    meta: "React · Spring Boot 3 · MySQL · AWS RDS · EC2 · Flyway · December 2025",
    tagline: "Campus peer-to-peer marketplace with React frontend and Spring Boot 3 backend.",
    category: "backend",
    bullets: [
      "Designed and built a campus peer-to-peer marketplace with a React frontend and Spring Boot 3 (Java 17) backend; modeling a normalized MySQL schema, deploying the DB on Amazon RDS and APIs on EC2, and using Flyway, Swagger, Docker, and Postman for rapid iteration."
    ],
    links: [
      { text: "Source (GitHub)", url: "https://github.com/sonalilonkar1/cmpe202-Campus-Marketplace" }
    ]
  },
  {
    id: 6,
    name: "ReliefCircle – Cloud-Native Donation & Charity Management Platform",
    meta: "Spring Boot · MySQL · AWS · SNS · May 2025",
    tagline: "Scalable distributed platform for managing charities, donation campaigns, and donors.",
    category: "backend",
    bullets: [
      "Designed a scalable distributed platform using Java Spring Boot, MySQL, and AWS.",
      "Implemented role-based authentication, payment integration, and real-time notifications (AWS SNS)."
    ],
    links: [
      { text: "Source (GitHub)", url: "https://github.com/sonalilonkar1/ReliefCircle" }
    ]
  },
  {
    id: 7,
    name: "Distributed Twitter Clone – Scalable Microservice-Based System",
    meta: "Flask · MongoDB · REST · April 2025",
    tagline: "Distributed social platform using Flask, MongoDB, and REST APIs.",
    category: "backend",
    bullets: [
      "Built a distributed social platform using Flask, MongoDB, and REST APIs.",
      "Implemented data sharding, load balancing, and fault-tolerant microservices for high availability."
    ],
    links: [
      { text: "Source (GitHub)", url: "https://github.com/sonalilonkar1/CMPE_272_TwitterClone" }
    ]
  }
];

