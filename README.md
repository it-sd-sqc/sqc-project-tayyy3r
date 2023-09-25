# Practical Mechanical Definitions
Andrew Thayer

Mockup of project for SQC.

## ER Diagrams
```mermaid
---
title: Practical Mechanical Definitions ER Diagram
---

erDiagram

    CHAPTERS{
        serial id PK
        text title "Chapter title"
        text body "Chapter text"
    }

    WORDS{
        serial id PK
        text word "The word in question"
        text definition "The word's definition"
    }
