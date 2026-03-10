# 100K-AX Expert Platform - Introduction Webpage

> **산업 도메인 업무 전문가 10만 명을 AX(AI Transformation) 전문가로 양성하는 통합 플랫폼 소개 웹페이지**

🌐 **Live Demo**: [https://wdlab1958.github.io/Webpage-100K-AXExpert/](https://wdlab1958.github.io/Webpage-100K-AXExpert/)

## Overview

100K-AX Expert Platform은 AI 기술을 직접 개발하는 엔지니어가 아니라, 자기 업무에 AI를 접목하여 비용을 절감하고 품질을 높이는 **실무 AX 전문가**를 양성하는 통합 플랫폼입니다.

The 100K-AX Expert Platform is an integrated platform for training practical AX (AI Transformation) experts who apply AI to their own work to reduce costs and improve quality across industry domains.

## Key Features

| Feature | Description |
|---------|-------------|
| **7 Multi-Agent Frameworks** | Native, LangGraph, CrewAI, AutoGen AG2, DSPy, LangChain, LlamaIndex 통합 오케스트레이션 |
| **5-Stage Consulting** | AI 비전 & 전략 → 유스케이스 설계 → 플랫폼 구축 → 파일럿 & 확산 → 운영 & 개선 |
| **5-Level Certification** | 입문자(Beginner) → 실무자(Practitioner) → 전문가(Specialist) → 숙련가(Expert) → 마스터(Master) |
| **ISO Standards** | ISO/IEC 42001, 23053, 24030, 38500 내장 |
| **7 Industry Domains** | 제조, 금융, 공공, 물류, 의료, 교육, 국방 |
| **Local AI Security** | Ollama 기반 로컬 LLM, 에어갭 배포 지원, AES-256-GCM 암호화 |
| **Advanced Analytics** | AI 성숙도 평가, ROI 분석, 위험 분석(FMEA, Monte Carlo), 자동 보고서 생성 |

## Page Sections

1. **Hero** - 3D 파티클 애니메이션 + 플랫폼 소개
2. **플랫폼 개요** - AX 전문가 정의, 미션, 역량, 보안
3. **5단계 AX 컨설팅 프레임워크** - 타임라인 형태 시각화
4. **핵심 기능** - 6개 상세 기능 카드
5. **기술 아키텍처** - 워크플로우 다이어그램 + 8개 기술 스택
6. **통계** - 애니메이션 카운터 (10만명, 7 프레임워크, 171 API, 5단계 인증)
7. **AX 전문가 인증 체계** - 5단계 인증 카드
8. **CTA** - 데모 요청 / 상담 신청
9. **Footer**

## Tech Stack (Webpage)

- **HTML5** - Semantic markup
- **CSS3** - Glassmorphism, CSS Variables, Responsive Grid/Flexbox
- **JavaScript (Vanilla)** - No framework dependencies
- **Three.js** - 3D hero particle animation
- **i18n** - Korean/English language toggle (localStorage)

## Language Switching

네비게이션 바의 🌐 버튼을 클릭하여 한국어/영어를 즉시 전환할 수 있습니다.
Click the 🌐 button in the navigation bar to switch between Korean and English.

## Design

- Dark theme with glassmorphism cards
- Gradient text and glow effects
- Three.js 3D particle background with mouse parallax
- Staggered scroll animations (Intersection Observer)
- 3D card tilt effect on hover
- Fully responsive (Desktop / Tablet / Mobile)

## File Structure

```
Webpage-100K-AXExpert/
├── index.html          # Main HTML page
├── styles.css          # Primary stylesheet (dark theme, responsive)
├── modal.css           # Modal dialog styles
├── animation3d.js      # Three.js 3D animations & card tilt
├── i18n.js             # Korean/English language switching
├── script.js           # Navigation, scroll animations, counters
└── README.md           # This file
```

## Source Project

This webpage introduces the [100K-AX Expert Platform](https://github.com/wdlab1958) — a FastAPI-based enterprise AI consulting platform with 171 API endpoints, 7 multi-agent framework orchestration, and ISO standard integration.

## Deployment

Deployed via **GitHub Pages** from the `main` branch.

## License

© 2026 100K-AX Expert Platform. All rights reserved.
