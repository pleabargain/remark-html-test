graph TD
    A[Quality Assurance Strategy] --> B[Testing Levels]
    A --> C[Testing Types]
    A --> D[Quality Metrics]
    A --> E[Tools & Automation]
    
    B --> F[Unit Testing]
    B --> G[Integration Testing]
    B --> H[System Testing]
    B --> I[User Acceptance]
    
    C --> J[Functional Testing]
    C --> K[Performance Testing]
    C --> L[Security Testing]
    C --> M[Usability Testing]
    
    D --> N[Code Coverage]
    D --> O[Bug Metrics]
    D --> P[Performance KPIs]
    
    E --> Q[Test Automation]
    E --> R[CI/CD Pipeline]
    E --> S[Monitoring Tools]
    
    %% Quality Gates
    T[Quality Gates] --> U[Code Review]
    T --> V[Automated Tests]
    T --> W[Security Scan]
    T --> X[Performance Check]
    A --> T
    
    style A fill:#f96,stroke:#333,stroke-width:4px
    style B fill:#bbf,stroke:#333,stroke-width:2px
    style C fill:#bbf,stroke:#333,stroke-width:2px
    style D fill:#bbf,stroke:#333,stroke-width:2px
    style E fill:#bbf,stroke:#333,stroke-width:2px
    style T fill:#bbf,stroke:#333,stroke-width:2px
