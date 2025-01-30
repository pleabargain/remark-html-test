graph TD
    A[Deployment & Launch] --> B[Pre-Launch Phase]
    A --> C[Launch Phase]
    A --> D[Post-Launch Phase]
    
    B --> E[Infrastructure Setup]
    B --> F[Environment Config]
    B --> G[Data Migration]
    B --> H[Security Audit]
    
    C --> I[Deployment Pipeline]
    I --> J[Build]
    J --> K[Test]
    K --> L[Stage]
    L --> M[Production]
    
    C --> N[Launch Activities]
    N --> O[User Training]
    N --> P[Documentation]
    N --> Q[Support Setup]
    
    D --> R[Monitoring]
    D --> S[Performance Tracking]
    D --> T[User Feedback]
    D --> U[Issue Resolution]
    
    style A fill:#f96,stroke:#333,stroke-width:4px
    style B fill:#bbf,stroke:#333,stroke-width:2px
    style C fill:#bbf,stroke:#333,stroke-width:2px
    style D fill:#bbf,stroke:#333,stroke-width:2px
    style I fill:#bfb,stroke:#333,stroke-width:2px
