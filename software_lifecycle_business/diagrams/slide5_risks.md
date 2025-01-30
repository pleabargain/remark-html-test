graph TD
    A[Risk Assessment] --> B[Technical Risks]
    A --> C[Business Risks]
    A --> D[Operational Risks]
    A --> E[Market Risks]
    
    B --> F[Security Vulnerabilities]
    B --> G[Technical Debt]
    B --> H[Integration Issues]
    
    C --> I[Budget Overrun]
    C --> J[Resource Shortage]
    C --> K[Scope Creep]
    
    D --> L[Team Turnover]
    D --> M[Communication Gaps]
    D --> N[Process Bottlenecks]
    
    E --> O[Market Changes]
    E --> P[Competitor Actions]
    E --> Q[Regulatory Changes]
    
    %% Mitigation Strategies
    F --> R[Regular Security Audits]
    G --> S[Code Reviews & Refactoring]
    I --> T[Budget Buffers]
    L --> U[Knowledge Management]
    O --> V[Market Monitoring]
    
    style A fill:#f96,stroke:#333,stroke-width:4px
    style B fill:#bbf,stroke:#333,stroke-width:2px
    style C fill:#bbf,stroke:#333,stroke-width:2px
    style D fill:#bbf,stroke:#333,stroke-width:2px
    style E fill:#bbf,stroke:#333,stroke-width:2px
