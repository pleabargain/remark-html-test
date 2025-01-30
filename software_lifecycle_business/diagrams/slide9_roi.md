graph TD
    A[ROI & Performance Analysis] --> B[Revenue Metrics]
    A --> C[Cost Metrics]
    A --> D[Performance Metrics]
    A --> E[User Metrics]
    
    B --> F[Sales Revenue]
    B --> G[Subscription Revenue]
    B --> H[Service Revenue]
    
    C --> I[Development Costs]
    C --> J[Operational Costs]
    C --> K[Marketing Costs]
    
    D --> L[System Performance]
    L --> M[Response Time]
    L --> N[Uptime]
    L --> O[Error Rate]
    
    E --> P[User Engagement]
    E --> Q[Customer Satisfaction]
    E --> R[User Retention]
    
    %% ROI Calculations
    S[ROI Metrics] --> T[Cost Savings]
    S --> U[Revenue Growth]
    S --> V[Market Share]
    A --> S
    
    style A fill:#f96,stroke:#333,stroke-width:4px
    style B fill:#bbf,stroke:#333,stroke-width:2px
    style C fill:#bbf,stroke:#333,stroke-width:2px
    style D fill:#bbf,stroke:#333,stroke-width:2px
    style E fill:#bbf,stroke:#333,stroke-width:2px
    style S fill:#bfb,stroke:#333,stroke-width:2px
