// ========================================
// Feature Detail Data (Korean / English)
// ========================================

const featureDetails = {
    'multi-agent': {
        icon: '🤖',
        title: { ko: '7개 멀티에이전트 통합', en: '7 Multi-Agent Framework Integration' },
        body: {
            ko: `
                <p>100K-AX Expert Platform은 <strong>7개의 서로 다른 AI 에이전트 프레임워크</strong>를 통합 오케스트레이션하여 복잡한 AI 컨설팅을 자동화합니다. Native 순차 오케스트레이터를 중심으로 LangGraph의 상태 기반 워크플로우, CrewAI의 역할 기반 협업, AutoGen AG2의 그룹 채팅, DSPy의 프롬프트 자동 최적화, LangChain의 체인 기반 추론, LlamaIndex의 RAG 기반 문서 검색을 모두 지원합니다.</p>

                <h3>프레임워크 상세</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>프레임워크</th><th>유형</th><th>에이전트/모듈</th><th>주요 특징</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Native</strong></td><td>Sequential</td><td>5 에이전트</td><td>자체 구현, 순차 실행 및 상태 관리</td></tr>
                            <tr><td><strong>LangGraph</strong></td><td>StateGraph</td><td>8 노드</td><td>조건부 엣지, 품질 기반 자동 재시도</td></tr>
                            <tr><td><strong>CrewAI</strong></td><td>Role-Based</td><td>5 에이전트, 6 태스크</td><td>Sequential/Hierarchical 프로세스</td></tr>
                            <tr><td><strong>AutoGen AG2</strong></td><td>GroupChat</td><td>5 에이전트</td><td>RoundRobin/Selector 모드, 합의 기반</td></tr>
                            <tr><td><strong>DSPy</strong></td><td>Signatures</td><td>5 Signature, 5 CoT</td><td>자동 프롬프트 최적화</td></tr>
                            <tr><td><strong>LangChain</strong></td><td>LCEL</td><td>5 Chain</td><td>ChatHistory, Callbacks 시스템</td></tr>
                            <tr><td><strong>LlamaIndex</strong></td><td>RAG Workflow</td><td>15 문서, 4 ISO</td><td>VectorStore, SentenceSplitter</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>핵심 역량</h3>
                <ul>
                    <li><strong>Native 순차 오케스트레이터</strong> — Strategy Analyst → Use Case Designer → ROI Analyst → Risk Assessor → Report Generator 5단계 자동 실행</li>
                    <li><strong>LangGraph StateGraph</strong> — 조건부 분기, 품질 기반 자동 재시도, 워크플로우 상태 중앙 관리</li>
                    <li><strong>CrewAI 역할 기반 협업</strong> — 에이전트별 전문성 분리, Sequential/Hierarchical 프로세스 지원</li>
                    <li><strong>AutoGen AG2 그룹챗</strong> — 다중 에이전트 토론, 합의 기반 의사결정</li>
                    <li><strong>DSPy 프롬프트 최적화</strong> — Chain-of-Thought 추론, 답변 품질 자동 평가 및 최적화</li>
                    <li><strong>LangChain LCEL 파이프라인</strong> — 메모리 관리, 콜백 시스템, 엔드-투-엔드 추론 체인</li>
                    <li><strong>LlamaIndex RAG</strong> — 15개 ISO 표준 문서의 실시간 벡터 검색 및 인용</li>
                </ul>
            `,
            en: `
                <p>The 100K-AX Expert Platform integrates <strong>7 different AI agent frameworks</strong> into a unified orchestration system for automating complex AI consulting. Centered on a Native sequential orchestrator, it supports LangGraph's state-based workflows, CrewAI's role-based collaboration, AutoGen AG2's group chat, DSPy's prompt auto-optimization, LangChain's chain-based reasoning, and LlamaIndex's RAG-based document retrieval.</p>

                <h3>Framework Details</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Framework</th><th>Type</th><th>Agents/Modules</th><th>Key Feature</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Native</strong></td><td>Sequential</td><td>5 Agents</td><td>Custom orchestrator, state management</td></tr>
                            <tr><td><strong>LangGraph</strong></td><td>StateGraph</td><td>8 Nodes</td><td>Conditional edges, quality-based retry</td></tr>
                            <tr><td><strong>CrewAI</strong></td><td>Role-Based</td><td>5 Agents, 6 Tasks</td><td>Sequential/Hierarchical processes</td></tr>
                            <tr><td><strong>AutoGen AG2</strong></td><td>GroupChat</td><td>5 Agents</td><td>RoundRobin/Selector, consensus-based</td></tr>
                            <tr><td><strong>DSPy</strong></td><td>Signatures</td><td>5 Signatures, 5 CoT</td><td>Automatic prompt optimization</td></tr>
                            <tr><td><strong>LangChain</strong></td><td>LCEL</td><td>5 Chains</td><td>ChatHistory, Callbacks system</td></tr>
                            <tr><td><strong>LlamaIndex</strong></td><td>RAG Workflow</td><td>15 Docs, 4 ISO</td><td>VectorStore, SentenceSplitter</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Key Capabilities</h3>
                <ul>
                    <li><strong>Native Sequential Orchestrator</strong> — 5-step auto execution: Strategy → Use Case → ROI → Risk → Report</li>
                    <li><strong>LangGraph StateGraph</strong> — Conditional branching, quality-based auto-retry, centralized state</li>
                    <li><strong>CrewAI Role-Based</strong> — Agent specialization, Sequential/Hierarchical process support</li>
                    <li><strong>AutoGen AG2 GroupChat</strong> — Multi-agent discussion, consensus-based decision-making</li>
                    <li><strong>DSPy Prompt Optimization</strong> — Chain-of-Thought reasoning, automatic quality evaluation</li>
                    <li><strong>LangChain LCEL Pipeline</strong> — Memory management, callbacks, end-to-end reasoning chains</li>
                    <li><strong>LlamaIndex RAG</strong> — Real-time vector search and citation of 15 ISO standard documents</li>
                </ul>
            `
        }
    },

    'ax-discovery': {
        icon: '🔍',
        title: { ko: 'AX 디스커버리', en: 'AX Discovery' },
        body: {
            ko: `
                <p>AX Discovery는 기업의 현재 업무 프로세스를 분석하여 <strong>AI 자동화 기회를 자동으로 식별</strong>하는 고급 분석 엔진입니다. 4차원 분석 모델을 통해 각 업무 프로세스에 대한 점수를 산출하고 우선순위를 매기며, <strong>10개 부서별 사전 정의된 AX 과제 템플릿</strong>과 7개 산업 도메인 지식 베이스를 활용하여 도메인별 맞춤 기회 발굴을 지원합니다.</p>

                <h3>4D 분석 모델</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>차원</th><th>가중치</th><th>평가 내용</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>자동화 잠재력</strong> (Automation Potential)</td><td>30%</td><td>반복성, 규칙 기반 여부, 데이터 가용성</td></tr>
                            <tr><td><strong>영향도</strong> (Impact Score)</td><td>30%</td><td>비용 절감, 품질 향상, 속도 개선 효과</td></tr>
                            <tr><td><strong>구현 용이성</strong> (Feasibility)</td><td>25%</td><td>기술 난이도, 데이터 준비도, 조직 수용성</td></tr>
                            <tr><td><strong>ROI 추정</strong> (ROI Estimate)</td><td>15%</td><td>예상 투자 대비 수익률</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>10개 부서별 AX 템플릿</h3>
                <div class="modal-chips">
                    <span class="modal-chip">경영기획</span>
                    <span class="modal-chip">인사</span>
                    <span class="modal-chip">재무</span>
                    <span class="modal-chip">마케팅</span>
                    <span class="modal-chip">영업</span>
                    <span class="modal-chip">생산</span>
                    <span class="modal-chip">물류</span>
                    <span class="modal-chip">R&D</span>
                    <span class="modal-chip">IT</span>
                    <span class="modal-chip">고객서비스</span>
                </div>

                <h3>핵심 역량</h3>
                <ul>
                    <li><strong>자동 기회 발굴</strong> — 업무 프로세스를 입력하면 AI 적용 기회를 자동으로 식별·점수화</li>
                    <li><strong>150~275개 사전 정의 과제</strong> — 부서당 15~50개의 검증된 AX 유스케이스 템플릿 제공</li>
                    <li><strong>도메인별 맞춤 분석</strong> — 산업별 LoRA 어댑터 동적 로딩으로 도메인 특화 전문성 제공</li>
                    <li><strong>우선순위 자동 정렬</strong> — 다중 가중치 모델 기반 Top-N 기회 자동 제시</li>
                    <li><strong>9개 REST API</strong> — POST /discover, GET /templates, GET /domains, GET /best-practices 등</li>
                </ul>
            `,
            en: `
                <p>AX Discovery is an advanced analysis engine that <strong>automatically identifies AI automation opportunities</strong> by analyzing a company's current business processes. Using a 4-dimensional analysis model, it scores and prioritizes each process, leveraging <strong>pre-defined AX task templates for 10 departments</strong> and knowledge bases across 7 industry domains.</p>

                <h3>4D Analysis Model</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Dimension</th><th>Weight</th><th>Evaluation</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Automation Potential</strong></td><td>30%</td><td>Repetitiveness, rule-based, data availability</td></tr>
                            <tr><td><strong>Impact Score</strong></td><td>30%</td><td>Cost reduction, quality improvement, speed gain</td></tr>
                            <tr><td><strong>Feasibility</strong></td><td>25%</td><td>Technical difficulty, data readiness, organizational acceptance</td></tr>
                            <tr><td><strong>ROI Estimate</strong></td><td>15%</td><td>Expected return on investment ratio</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>10 Department AX Templates</h3>
                <div class="modal-chips">
                    <span class="modal-chip">Strategy Planning</span>
                    <span class="modal-chip">HR</span>
                    <span class="modal-chip">Finance</span>
                    <span class="modal-chip">Marketing</span>
                    <span class="modal-chip">Sales</span>
                    <span class="modal-chip">Production</span>
                    <span class="modal-chip">Logistics</span>
                    <span class="modal-chip">R&D</span>
                    <span class="modal-chip">IT</span>
                    <span class="modal-chip">Customer Service</span>
                </div>

                <h3>Key Capabilities</h3>
                <ul>
                    <li><strong>Automatic Discovery</strong> — Input business processes to auto-identify and score AI opportunities</li>
                    <li><strong>150-275 Pre-defined Tasks</strong> — 15-50 validated AX use case templates per department</li>
                    <li><strong>Domain-specific Analysis</strong> — Dynamic LoRA adapter loading for domain expertise</li>
                    <li><strong>Auto Priority Ranking</strong> — Multi-weight model-based Top-N opportunity ranking</li>
                    <li><strong>9 REST APIs</strong> — POST /discover, GET /templates, GET /domains, GET /best-practices, etc.</li>
                </ul>
            `
        }
    },

    'iso-standards': {
        icon: '📋',
        title: { ko: 'ISO 국제표준 내장', en: 'Built-in ISO International Standards' },
        body: {
            ko: `
                <p>100K-AX Expert Platform은 AI 시스템의 신뢰성과 준수성을 보장하기 위해 <strong>4개의 주요 ISO 국제표준을 내장</strong>하고 있습니다. 모든 표준은 15개의 구조화된 문서와 함께 제공되며, LlamaIndex RAG를 통해 실시간 검색 및 인용이 가능합니다.</p>

                <h3>내장 표준 상세</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>표준</th><th>명칭</th><th>핵심 항목</th><th>체크리스트</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>ISO/IEC 42001</strong></td><td>AI 관리 시스템 (AIMS)</td><td>AI 정책, 리스크 등록부, 영향 평가</td><td>15~20개 항목</td></tr>
                            <tr><td><strong>ISO/IEC 23053</strong></td><td>ML 기반 AI 프레임워크</td><td>ML 생명주기, 구성요소, 품질 관리</td><td>15개 항목</td></tr>
                            <tr><td><strong>ISO/IEC 24030</strong></td><td>AI 시스템 역량 평가</td><td>성숙도(1~5), 공정성, 위험 평가</td><td>설문 30문항</td></tr>
                            <tr><td><strong>ISO/IEC 38500</strong></td><td>IT 거버넌스</td><td>EDM 사이클, 6대 원칙, RACI</td><td>20개 항목</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>핵심 역량</h3>
                <ul>
                    <li><strong>ISO 42001 AIMS</strong> — AI 관리 체계 수립, 체크리스트 기반 정책 관리, 리스크 등록부 자동 생성</li>
                    <li><strong>ISO 23053 ML 프레임워크</strong> — 데이터→모델→배포→운영 전 생명주기 관리, 구성 요소 매핑</li>
                    <li><strong>ISO 24030 역량 평가</strong> — 5단계 성숙도 진단, 공정성 메트릭, 인벤토리 관리, 개선 로드맵 자동 생성</li>
                    <li><strong>ISO 38500 IT 거버넌스</strong> — EDM(Evaluate-Direct-Monitor) 사이클, 6대 원칙 관리, 경영진 대시보드</li>
                    <li><strong>RAG 기반 실시간 검색</strong> — LlamaIndex를 통한 15개 표준 문서의 실시간 검색 및 인용 추적</li>
                    <li><strong>자동 이행 보고서</strong> — 표준 준수 현황을 자동 분석하여 이행 보고서 생성</li>
                </ul>

                <h3>6대 거버넌스 원칙 (ISO 38500)</h3>
                <div class="modal-chips">
                    <span class="modal-chip">Responsibility</span>
                    <span class="modal-chip">Strategy</span>
                    <span class="modal-chip">Acquisition</span>
                    <span class="modal-chip">Performance</span>
                    <span class="modal-chip">Conformance</span>
                    <span class="modal-chip">Human Behavior</span>
                </div>
            `,
            en: `
                <p>The 100K-AX Expert Platform embeds <strong>4 major ISO international standards</strong> to ensure trustworthiness and compliance of AI systems. All standards come with 15 structured documents and are searchable and citable in real-time via LlamaIndex RAG.</p>

                <h3>Standard Details</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Standard</th><th>Name</th><th>Key Areas</th><th>Checklist</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>ISO/IEC 42001</strong></td><td>AI Management System</td><td>AI Policy, Risk Registry, Impact Assessment</td><td>15-20 items</td></tr>
                            <tr><td><strong>ISO/IEC 23053</strong></td><td>ML-based AI Framework</td><td>ML Lifecycle, Components, Quality</td><td>15 items</td></tr>
                            <tr><td><strong>ISO/IEC 24030</strong></td><td>AI Capability Assessment</td><td>Maturity (1-5), Fairness, Risk</td><td>30 questions</td></tr>
                            <tr><td><strong>ISO/IEC 38500</strong></td><td>IT Governance</td><td>EDM Cycle, 6 Principles, RACI</td><td>20 items</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Key Capabilities</h3>
                <ul>
                    <li><strong>ISO 42001 AIMS</strong> — AI management framework, checklist-based policy management, auto risk registry</li>
                    <li><strong>ISO 23053 ML Framework</strong> — Full lifecycle management: Data→Model→Deploy→Operate</li>
                    <li><strong>ISO 24030 Assessment</strong> — 5-level maturity diagnosis, fairness metrics, auto improvement roadmap</li>
                    <li><strong>ISO 38500 Governance</strong> — EDM (Evaluate-Direct-Monitor) cycle, 6 core principles, executive dashboard</li>
                    <li><strong>RAG-based Real-time Search</strong> — Real-time search and citation tracking of 15 standard documents via LlamaIndex</li>
                    <li><strong>Auto Compliance Reports</strong> — Automatically analyze and generate compliance status reports</li>
                </ul>

                <h3>6 Governance Principles (ISO 38500)</h3>
                <div class="modal-chips">
                    <span class="modal-chip">Responsibility</span>
                    <span class="modal-chip">Strategy</span>
                    <span class="modal-chip">Acquisition</span>
                    <span class="modal-chip">Performance</span>
                    <span class="modal-chip">Conformance</span>
                    <span class="modal-chip">Human Behavior</span>
                </div>
            `
        }
    },

    'analytics': {
        icon: '📊',
        title: { ko: '고급 분석 & 보고서', en: 'Advanced Analytics & Reports' },
        body: {
            ko: `
                <p>100K-AX Expert Platform은 AI 도입 의사결정을 위한 <strong>다양한 고급 정량 분석</strong> 및 <strong>자동 보고서 생성</strong> 기능을 제공합니다. ROI 분석, 리스크 평가, 성숙도 진단, 시나리오 분석 결과를 시각화와 함께 경영진/실무자 맞춤 보고서로 자동 생성합니다.</p>

                <h3>분석 모듈 상세</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>분석 유형</th><th>지표/방법</th><th>산출물</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>ROI 분석</strong></td><td>NPV, IRR, Payback Period, 민감도 분석</td><td>투자 의사결정 보고서</td></tr>
                            <tr><td><strong>FMEA 리스크</strong></td><td>발생확률(O) x 영향도(S) x 감지도(D), RPN</td><td>리스크 평가 보고서</td></tr>
                            <tr><td><strong>Monte Carlo</strong></td><td>10,000회 반복 시뮬레이션, 95% CI</td><td>위험도 분포 차트</td></tr>
                            <tr><td><strong>성숙도 평가</strong></td><td>CMMI 5단계, 4차원 (전략/조직/데이터/프로세스)</td><td>Radar Chart, 갭 분석</td></tr>
                            <tr><td><strong>시나리오 분석</strong></td><td>보수적 / 균형 / 적극적 3가지 모델</td><td>비교 분석 차트</td></tr>
                            <tr><td><strong>자동 보고서</strong></td><td>경영진용 + 실무자용 분리</td><td>DOCX / PDF / PPTX</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>핵심 역량</h3>
                <ul>
                    <li><strong>ROI 정량화</strong> — NPV(순현재가), IRR(내부수익률), Payback Period, Break-even Point 자동 계산</li>
                    <li><strong>FMEA 위험 매트릭스</strong> — Failure Mode 식별, RPN(Risk Priority Number) 산정, 대응 전략 자동 제안</li>
                    <li><strong>Monte Carlo 시뮬레이션</strong> — 10,000회 이상 반복으로 위험도 분포 분석, 95% 신뢰도 구간 제시</li>
                    <li><strong>CMMI 성숙도 진단</strong> — 5단계(초기→반복→정의→관리→최적화), 현황-목표 갭 분석</li>
                    <li><strong>다국어 보고서</strong> — 한/영 자동 생성, 시각화 차트 내장, 경영진/실무자 맞춤</li>
                </ul>

                <h3>CMMI 성숙도 4대 차원</h3>
                <div class="modal-chips">
                    <span class="modal-chip">전략 & 비전</span>
                    <span class="modal-chip">조직 & 인력</span>
                    <span class="modal-chip">데이터 & 기술</span>
                    <span class="modal-chip">프로세스 & 거버넌스</span>
                </div>
            `,
            en: `
                <p>The 100K-AX Expert Platform provides <strong>various advanced quantitative analyses</strong> and <strong>automated report generation</strong> for AI adoption decision-making. It auto-generates executive/practitioner-tailored reports with visualizations from ROI analysis, risk assessment, maturity diagnosis, and scenario analysis.</p>

                <h3>Analysis Module Details</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Analysis Type</th><th>Metrics/Methods</th><th>Output</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>ROI Analysis</strong></td><td>NPV, IRR, Payback Period, Sensitivity</td><td>Investment Decision Report</td></tr>
                            <tr><td><strong>FMEA Risk</strong></td><td>Occurrence(O) x Severity(S) x Detection(D), RPN</td><td>Risk Assessment Report</td></tr>
                            <tr><td><strong>Monte Carlo</strong></td><td>10,000+ iterations, 95% CI</td><td>Risk Distribution Chart</td></tr>
                            <tr><td><strong>Maturity</strong></td><td>CMMI 5-level, 4 dimensions</td><td>Radar Chart, Gap Analysis</td></tr>
                            <tr><td><strong>Scenario</strong></td><td>Conservative / Balanced / Aggressive</td><td>Comparative Analysis Chart</td></tr>
                            <tr><td><strong>Auto Reports</strong></td><td>Executive + Practitioner separation</td><td>DOCX / PDF / PPTX</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Key Capabilities</h3>
                <ul>
                    <li><strong>ROI Quantification</strong> — Auto-calculate NPV, IRR, Payback Period, Break-even Point</li>
                    <li><strong>FMEA Risk Matrix</strong> — Failure Mode identification, RPN scoring, auto mitigation strategies</li>
                    <li><strong>Monte Carlo Simulation</strong> — 10,000+ iterations for risk distribution, 95% confidence intervals</li>
                    <li><strong>CMMI Maturity Diagnosis</strong> — 5 levels (Initial→Repeatable→Defined→Managed→Optimized), gap analysis</li>
                    <li><strong>Multi-language Reports</strong> — Korean/English auto-generation, embedded charts, role-based targeting</li>
                </ul>

                <h3>CMMI Maturity 4 Dimensions</h3>
                <div class="modal-chips">
                    <span class="modal-chip">Strategy & Vision</span>
                    <span class="modal-chip">Organization & People</span>
                    <span class="modal-chip">Data & Technology</span>
                    <span class="modal-chip">Process & Governance</span>
                </div>
            `
        }
    },

    'domains': {
        icon: '🏭',
        title: { ko: '7개 산업 도메인', en: '7 Industry Domains' },
        body: {
            ko: `
                <p>100K-AX Expert Platform은 <strong>7개의 주요 산업 도메인</strong>에 특화된 AI 컨설팅을 제공합니다. 각 도메인마다 산업별 규제, 핵심 프로세스, Best Practice를 담은 전문 지식 베이스(KB)를 구축하고 있으며, Fine-tuned LoRA 어댑터를 통해 도메인 전문성을 동적으로 추가합니다.</p>

                <h3>도메인별 상세</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>도메인</th><th>주요 AX 과제</th><th>규제/표준</th><th>과제 수</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>제조</strong></td><td>품질검사 자동화, 예지정비, 공정최적화, 수요예측</td><td>ISO 9001, IATF 16949</td><td>~50개</td></tr>
                            <tr><td><strong>금융</strong></td><td>신용평가, 이상거래탐지, 투자분석, 고객서비스</td><td>Basel III, 금융위 규제</td><td>~30개</td></tr>
                            <tr><td><strong>공공</strong></td><td>행정절차 자동화, 민원처리, 조달최적화, 정책분석</td><td>행정절차법, 전자정부법</td><td>~25개</td></tr>
                            <tr><td><strong>유통/물류</strong></td><td>SCM 최적화, 수요예측, 재고관리, 배송최적화</td><td>물류정책, SCM 표준</td><td>~40개</td></tr>
                            <tr><td><strong>의료</strong></td><td>의료영상분석, 신약개발, 개인맞춤의료, 환자모니터링</td><td>의료법, 개인정보보호법</td><td>~30개</td></tr>
                            <tr><td><strong>교육</strong></td><td>학습분석, 개인맞춤교육, 교육과정최적화, 평가자동화</td><td>교육기본법, OECD 교육</td><td>~20개</td></tr>
                            <tr><td><strong>국방/방산</strong></td><td>보안체계, 군수계획, 자산관리, 운영 자동화</td><td>방위사업법, 보안규정</td><td>~25개</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>핵심 역량</h3>
                <ul>
                    <li><strong>도메인 전문 KB</strong> — 각 산업별 규제, 프로세스, Best Practice 데이터베이스 구축</li>
                    <li><strong>LoRA 어댑터</strong> — 산업별 Fine-tuned 어댑터 동적 로딩으로 도메인 특화 분석 제공</li>
                    <li><strong>총 200개+ AX 과제 템플릿</strong> — 7개 도메인 x 10개 부서 교차 적용 가능</li>
                    <li><strong>산업별 규제 내장</strong> — 도메인별 규제 요건 자동 체크 및 컴플라이언스 안내</li>
                    <li><strong>Best Practice 추천</strong> — 유사 업종·규모 기업의 성공 사례 기반 맞춤 제안</li>
                </ul>
            `,
            en: `
                <p>The 100K-AX Expert Platform provides AI consulting <strong>specialized in 7 major industry domains</strong>. For each domain, it builds specialized knowledge bases (KB) containing industry regulations, key processes, and best practices, with Fine-tuned LoRA adapters for dynamic domain expertise.</p>

                <h3>Domain Details</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Domain</th><th>Key AX Tasks</th><th>Regulations</th><th>Templates</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Manufacturing</strong></td><td>Quality inspection, predictive maintenance, process optimization</td><td>ISO 9001, IATF 16949</td><td>~50</td></tr>
                            <tr><td><strong>Finance</strong></td><td>Credit scoring, fraud detection, investment analysis</td><td>Basel III, FSC regulations</td><td>~30</td></tr>
                            <tr><td><strong>Public Sector</strong></td><td>Admin automation, citizen services, procurement</td><td>Admin Procedure Act</td><td>~25</td></tr>
                            <tr><td><strong>Logistics</strong></td><td>SCM optimization, demand forecasting, delivery optimization</td><td>Logistics policies</td><td>~40</td></tr>
                            <tr><td><strong>Healthcare</strong></td><td>Medical imaging, drug development, personalized medicine</td><td>Medical Act, Privacy Act</td><td>~30</td></tr>
                            <tr><td><strong>Education</strong></td><td>Learning analytics, personalized learning, assessment automation</td><td>Education Act, OECD</td><td>~20</td></tr>
                            <tr><td><strong>Defense</strong></td><td>Security systems, logistics planning, asset management</td><td>Defense Acquisition Act</td><td>~25</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Key Capabilities</h3>
                <ul>
                    <li><strong>Domain Expert KB</strong> — Industry-specific regulation, process, and best practice databases</li>
                    <li><strong>LoRA Adapters</strong> — Fine-tuned adapters dynamically loaded for domain-specific analysis</li>
                    <li><strong>200+ AX Task Templates</strong> — Cross-applicable across 7 domains x 10 departments</li>
                    <li><strong>Built-in Regulations</strong> — Auto-check domain regulatory requirements and compliance guidance</li>
                    <li><strong>Best Practice Recommendations</strong> — Tailored suggestions based on similar industry/scale success cases</li>
                </ul>
            `
        }
    },

    'local-ai': {
        icon: '🦙',
        title: { ko: '로컬 AI & 하이브리드', en: 'Local AI & Hybrid' },
        body: {
            ko: `
                <p>100K-AX Expert Platform은 기업 데이터의 완전한 보안을 위해 <strong>온프레미스 로컬 AI 운영을 최우선</strong>으로 지원합니다. Ollama 기반 로컬 LLM을 기본으로 운영하며, 완전 Air-gapped 환경에서도 작동합니다. 데이터 민감도에 따라 로컬/클라우드 LLM을 자동 라우팅하는 하이브리드 아키텍처를 제공합니다.</p>

                <h3>AI Appliance 라인업</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>구성</th><th>대상</th><th>GPU</th><th>메모리</th><th>동시 사용자</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>100K-AX-S</strong></td><td>소기업 (50명 이하)</td><td>RTX 5090 x1</td><td>48GB</td><td>~10명</td></tr>
                            <tr><td><strong>100K-AX-M</strong></td><td>중기업 (50~200명)</td><td>RTX 5090 x2</td><td>96GB</td><td>~30명</td></tr>
                            <tr><td><strong>100K-AX-L</strong></td><td>중견기업 (200명+)</td><td>RTX 5090 x4</td><td>192GB</td><td>~100명</td></tr>
                            <tr><td><strong>100K-AX-E</strong></td><td>대기업/기관</td><td>H100 x2+</td><td>커스텀</td><td>커스텀</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>하이브리드 LLM 라우팅</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>데이터 민감도</th><th>라우팅 경로</th><th>사용 LLM</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Critical / High</strong></td><td>로컬 전용</td><td>Ollama (llama3.2, Qwen 2.5)</td></tr>
                            <tr><td><strong>Medium</strong></td><td>로컬 우선</td><td>로컬 → 필요시 온라인 폴백</td></tr>
                            <tr><td><strong>Low / Public</strong></td><td>온라인 우선</td><td>Claude / GPT-4 (비용 최적화)</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>핵심 역량</h3>
                <ul>
                    <li><strong>Ollama 로컬 LLM</strong> — llama3.2:3b(기본), Qwen 2.5 72B, DeepSeek-R1 70B 지원</li>
                    <li><strong>Air-gapped 완전 지원</strong> — 인터넷 단절 환경에서 독립 운영, USB 오프라인 업데이트</li>
                    <li><strong>자동 라우팅</strong> — 데이터 민감도 기반 로컬/클라우드 경로 자동 선택</li>
                    <li><strong>AES-256-GCM 암호화</strong> — 저장 시 암호화(at rest), TLS 1.3 전송 중 암호화(in transit)</li>
                    <li><strong>RBAC 접근 제어</strong> — 역할 기반 권한 관리, 종합 감사 로깅</li>
                    <li><strong>RTX 5090 AI Appliance</strong> — 4U 랙마운트 하드웨어, 기업 규모별 S/M/L/E 4단계 구성</li>
                </ul>
            `,
            en: `
                <p>The 100K-AX Expert Platform <strong>prioritizes on-premise local AI operation</strong> for complete security of enterprise data. It runs local LLMs based on Ollama and works in completely air-gapped environments. A hybrid architecture automatically routes between local/cloud LLMs based on data sensitivity.</p>

                <h3>AI Appliance Lineup</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Config</th><th>Target</th><th>GPU</th><th>Memory</th><th>Users</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>100K-AX-S</strong></td><td>Small (&le;50)</td><td>RTX 5090 x1</td><td>48GB</td><td>~10</td></tr>
                            <tr><td><strong>100K-AX-M</strong></td><td>Medium (50-200)</td><td>RTX 5090 x2</td><td>96GB</td><td>~30</td></tr>
                            <tr><td><strong>100K-AX-L</strong></td><td>Mid-size (200+)</td><td>RTX 5090 x4</td><td>192GB</td><td>~100</td></tr>
                            <tr><td><strong>100K-AX-E</strong></td><td>Enterprise</td><td>H100 x2+</td><td>Custom</td><td>Custom</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Hybrid LLM Routing</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Data Sensitivity</th><th>Routing</th><th>LLM Used</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Critical / High</strong></td><td>Local Only</td><td>Ollama (llama3.2, Qwen 2.5)</td></tr>
                            <tr><td><strong>Medium</strong></td><td>Local First</td><td>Local → Online fallback if needed</td></tr>
                            <tr><td><strong>Low / Public</strong></td><td>Online First</td><td>Claude / GPT-4 (cost optimized)</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Key Capabilities</h3>
                <ul>
                    <li><strong>Ollama Local LLM</strong> — llama3.2:3b (default), Qwen 2.5 72B, DeepSeek-R1 70B support</li>
                    <li><strong>Full Air-gapped Support</strong> — Independent operation without internet, USB offline updates</li>
                    <li><strong>Auto Routing</strong> — Data sensitivity-based automatic local/cloud path selection</li>
                    <li><strong>AES-256-GCM Encryption</strong> — At-rest encryption, TLS 1.3 in-transit encryption</li>
                    <li><strong>RBAC Access Control</strong> — Role-based permission management, comprehensive audit logging</li>
                    <li><strong>RTX 5090 AI Appliance</strong> — 4U rack-mount hardware, S/M/L/E configs by enterprise size</li>
                </ul>
            `
        }
    },

    // ========================================
    // Architecture Workflow Steps
    // ========================================

    'arch-task-analysis': {
        icon: '📋',
        title: { ko: 'Step 1: 업무 분석', en: 'Step 1: Task Analysis' },
        body: {
            ko: `
                <p>첫 번째 단계에서는 기업의 <strong>AI 성숙도를 4개 차원</strong>에서 진단하고, 산업별 유스케이스 기반으로 AI 적용 기회를 발굴합니다. 비즈니스 가치 사슬 분석을 통해 고영향 AI 기회를 도출하며, 단기(Quick Win) / 중기(핵심 역량) / 장기(비즈니스 혁신) 3단계 로드맵을 수립합니다.</p>

                <h3>성숙도 평가 4대 차원</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>차원</th><th>평가 범위</th><th>점수 범위</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>전략 & 비전</strong></td><td>AI 전략 수립, 경영진 지원도, 비전 명확성</td><td>2.0 ~ 3.5</td></tr>
                            <tr><td><strong>조직 & 역량</strong></td><td>AI 전문 인력, 조직 수용성, 교육 체계</td><td>1.0 ~ 4.0</td></tr>
                            <tr><td><strong>데이터 & 기술</strong></td><td>데이터 자산, IT 인프라, 클라우드/GPU 보유</td><td>1.0 ~ 4.5</td></tr>
                            <tr><td><strong>프로세스 & 거버넌스</strong></td><td>업무 표준화, AI 거버넌스, 변화 관리</td><td>1.5 ~ 4.5</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>입력 / 출력</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>구분</th><th>내용</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>입력</strong></td><td>기업 프로필 (산업, 규모, 재무, IT 인프라, 데이터 자산, AI 인력, 경영진 지원도)</td></tr>
                            <tr><td><strong>출력</strong></td><td>성숙도 점수 (4차원 × 5단계), AI 기회 목록 (적합도 0~100점), 3단계 로드맵</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>핵심 처리 과정</h3>
                <ul>
                    <li><strong>성숙도 진단</strong> — CMMI 5단계 모델(초기→반복→정의→관리→최적화) 기반 4차원 정량 평가</li>
                    <li><strong>기회 발굴</strong> — 산업별 유스케이스 템플릿 매칭, 적합도 점수(Base 50 + 데이터 20 + 인프라 15 + 인력 10 + 경험 5)</li>
                    <li><strong>로드맵 생성</strong> — 단기(0~6개월) / 중기(6~18개월) / 장기(18~36개월) 3단계 자동 배치</li>
                    <li><strong>StrategyAnalystAgent</strong> — _assess_maturity(), _identify_opportunities(), _plan_roadmap() 순차 실행</li>
                </ul>

                <h3>로드맵 타임라인</h3>
                <div class="modal-chips">
                    <span class="modal-chip">0~6개월: Quick Win</span>
                    <span class="modal-chip">6~18개월: 핵심 역량 구축</span>
                    <span class="modal-chip">18~36개월: 비즈니스 혁신</span>
                </div>
            `,
            en: `
                <p>The first step <strong>diagnoses AI maturity across 4 dimensions</strong>, discovers AI application opportunities based on industry use cases, conducts business value chain analysis to identify high-impact opportunities, and establishes a 3-phase roadmap covering Quick Wins, core capability building, and business transformation.</p>

                <h3>4 Maturity Dimensions</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Dimension</th><th>Evaluation Scope</th><th>Score Range</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Strategy & Vision</strong></td><td>AI strategy, executive support, vision clarity</td><td>2.0 ~ 3.5</td></tr>
                            <tr><td><strong>Organization & Capability</strong></td><td>AI talent, organizational readiness, training</td><td>1.0 ~ 4.0</td></tr>
                            <tr><td><strong>Data & Technology</strong></td><td>Data assets, IT infra, cloud/GPU availability</td><td>1.0 ~ 4.5</td></tr>
                            <tr><td><strong>Process & Governance</strong></td><td>Standardization, AI governance, change mgmt</td><td>1.5 ~ 4.5</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Inputs / Outputs</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Type</th><th>Details</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Input</strong></td><td>Company profile (industry, size, finance, IT infra, data assets, AI staff, executive support)</td></tr>
                            <tr><td><strong>Output</strong></td><td>Maturity scores (4 dims × 5 levels), AI opportunity list (fit 0-100), 3-phase roadmap</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Key Processes</h3>
                <ul>
                    <li><strong>Maturity Assessment</strong> — CMMI 5-level model-based quantitative evaluation across 4 dimensions</li>
                    <li><strong>Opportunity Discovery</strong> — Industry template matching, fit score (Base 50 + Data 20 + Infra 15 + Staff 10 + Experience 5)</li>
                    <li><strong>Roadmap Generation</strong> — Auto-allocation across 3 phases: Short (0-6mo), Mid (6-18mo), Long (18-36mo)</li>
                    <li><strong>StrategyAnalystAgent</strong> — Sequential execution: _assess_maturity() → _identify_opportunities() → _plan_roadmap()</li>
                </ul>

                <h3>Roadmap Timeline</h3>
                <div class="modal-chips">
                    <span class="modal-chip">0-6mo: Quick Wins</span>
                    <span class="modal-chip">6-18mo: Core Capabilities</span>
                    <span class="modal-chip">18-36mo: Business Transformation</span>
                </div>
            `
        }
    },

    'arch-agent-select': {
        icon: '🔧',
        title: { ko: 'Step 2: 에이전트 선택', en: 'Step 2: Agent Selection' },
        body: {
            ko: `
                <p>두 번째 단계에서는 발굴된 고우선순위 유스케이스를 <strong>실행 가능한 기술 솔루션으로 변환</strong>합니다. 비즈니스/기능/비기능/데이터/통합 5대 요구사항을 정의하고, 4계층 기술 아키텍처를 설계하며, AI 윤리·편향 검사·컴플라이언스를 포함한 거버넌스 프레임워크를 수립합니다.</p>

                <h3>4계층 기술 아키텍처</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>계층</th><th>구성 요소</th><th>기술 스택</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>데이터 계층</strong></td><td>Data Lake, Feature Store, 파이프라인</td><td>Apache Spark, Delta Lake, Airflow</td></tr>
                            <tr><td><strong>ML 계층</strong></td><td>모델 학습, 실험 추적, 모델 레지스트리</td><td>MLflow, Kubeflow</td></tr>
                            <tr><td><strong>서빙 계층</strong></td><td>모델 서빙, API 게이트웨이, 로드밸런서</td><td>TorchServe/Triton, Kong, K8s</td></tr>
                            <tr><td><strong>모니터링 계층</strong></td><td>성능 모니터링, 드리프트 감지, 알림</td><td>Evidently AI, Prometheus, Grafana</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>비기능 요구사항 (SLA)</h3>
                <div class="modal-chips">
                    <span class="modal-chip">응답시간: 1,000ms</span>
                    <span class="modal-chip">처리량: 100 req/sec</span>
                    <span class="modal-chip">가용성: 99.9%</span>
                </div>

                <h3>핵심 처리 과정</h3>
                <ul>
                    <li><strong>요구사항 정의</strong> — 비즈니스 목표, 성공 기준, KPI, 기능/비기능/데이터/통합 5대 요구사항 정의</li>
                    <li><strong>아키텍처 설계</strong> — 데이터→ML→서빙→모니터링 4계층 기술 아키텍처 자동 생성</li>
                    <li><strong>거버넌스 수립</strong> — AI 모델 오너, 데이터 스튜어드, 윤리 담당자 역할 정의</li>
                    <li><strong>윤리 검사 내장</strong> — 사전 편향 리뷰, XAI 의무화, 완전 감사 추적, Human-in-the-Loop 체계</li>
                    <li><strong>리스크 분류</strong> — Low/Medium/High 3단계 분류, 완화 전략 자동 제안</li>
                </ul>

                <h3>거버넌스 역할</h3>
                <div class="modal-chips">
                    <span class="modal-chip">AI Model Owner</span>
                    <span class="modal-chip">Data Steward</span>
                    <span class="modal-chip">Ethics Officer</span>
                </div>
            `,
            en: `
                <p>The second step <strong>transforms high-priority use cases into implementable technical solutions</strong>. It defines 5 requirement categories (business, functional, non-functional, data, integration), designs a 4-layer technical architecture, and establishes a governance framework with AI ethics, bias checking, and compliance.</p>

                <h3>4-Layer Technical Architecture</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Layer</th><th>Components</th><th>Tech Stack</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Data Layer</strong></td><td>Data Lake, Feature Store, Pipeline</td><td>Apache Spark, Delta Lake, Airflow</td></tr>
                            <tr><td><strong>ML Layer</strong></td><td>Model Training, Experiment Tracking, Registry</td><td>MLflow, Kubeflow</td></tr>
                            <tr><td><strong>Serving Layer</strong></td><td>Model Serving, API Gateway, Load Balancer</td><td>TorchServe/Triton, Kong, K8s</td></tr>
                            <tr><td><strong>Monitoring Layer</strong></td><td>Performance, Drift Detection, Alerting</td><td>Evidently AI, Prometheus, Grafana</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Non-Functional Requirements (SLA)</h3>
                <div class="modal-chips">
                    <span class="modal-chip">Response: 1,000ms</span>
                    <span class="modal-chip">Throughput: 100 req/sec</span>
                    <span class="modal-chip">Availability: 99.9%</span>
                </div>

                <h3>Key Processes</h3>
                <ul>
                    <li><strong>Requirements Definition</strong> — Business objectives, success criteria, KPIs, 5 requirement categories</li>
                    <li><strong>Architecture Design</strong> — Auto-generate 4-layer architecture: Data→ML→Serving→Monitoring</li>
                    <li><strong>Governance Setup</strong> — Define roles: AI Model Owner, Data Steward, Ethics Officer</li>
                    <li><strong>Built-in Ethics</strong> — Pre-development bias review, mandatory XAI, full audit trail, Human-in-the-Loop</li>
                    <li><strong>Risk Classification</strong> — 3-level classification (Low/Medium/High), auto mitigation strategies</li>
                </ul>

                <h3>Governance Roles</h3>
                <div class="modal-chips">
                    <span class="modal-chip">AI Model Owner</span>
                    <span class="modal-chip">Data Steward</span>
                    <span class="modal-chip">Ethics Officer</span>
                </div>
            `
        }
    },

    'arch-collab': {
        icon: '🤝',
        title: { ko: 'Step 3: 협업 분석', en: 'Step 3: Collaborative Analysis' },
        body: {
            ko: `
                <p>세 번째 단계에서는 <strong>ROI Analyst와 Risk Assessor 에이전트가 3가지 시나리오를 병렬로 분석</strong>합니다. 보수적/균형/적극적 각 시나리오별로 종합 ROI 지표(NPV, IRR, 회수기간)와 4개 카테고리 리스크 평가를 수행하며, 가중 점수(ROI×0.6 + Risk×0.4)로 최적 시나리오를 선정합니다. 전문가 리뷰 및 승인 단계가 포함된 Human-AI 하이브리드 거버넌스 모델입니다.</p>

                <h3>3가지 시나리오 비교</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>시나리오</th><th>예산 비율</th><th>기간</th><th>리스크 수용도</th><th>전략</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>보수적</strong></td><td>60%</td><td>18개월</td><td>Low</td><td>Quick Win 집중</td></tr>
                            <tr><td><strong>균형</strong></td><td>100%</td><td>24개월</td><td>Medium</td><td>균형 잡힌 접근</td></tr>
                            <tr><td><strong>적극적</strong></td><td>150%</td><td>36개월</td><td>High</td><td>전면 혁신</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>ROI 분석 지표</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>지표</th><th>산출 공식</th><th>의사결정 기준</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>ROI %</strong></td><td>(3년 이익 - 총비용) / 총비용 × 100</td><td>>50%: 강력 추천, >20%: 추천</td></tr>
                            <tr><td><strong>Payback</strong></td><td>초기투자 / (연간이익 / 12)</td><td><24개월: 양호</td></tr>
                            <tr><td><strong>NPV</strong></td><td>-투자 + Σ(연이익/(1+0.1)^년)</td><td>>0: 투자 가치</td></tr>
                            <tr><td><strong>IRR</strong></td><td>(연이익×년수-투자) / 투자 / 년수 × 100</td><td>>10%: 양호</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>4대 리스크 카테고리</h3>
                <ul>
                    <li><strong>기술 리스크</strong> — 데이터 품질, 인프라 부족, 레거시 통합 난이도 (확률×영향=1~25점)</li>
                    <li><strong>조직 리스크</strong> — AI 인력 부족, 변화 저항, 조직 문화 (High≥15, Medium 10~14, Low<10)</li>
                    <li><strong>비즈니스 리스크</strong> — ROI 미달, 범위 확장, 시장 변동</li>
                    <li><strong>운영 리스크</strong> — 모델 드리프트, 보안 취약점, 운영 비용 증가</li>
                </ul>

                <h3>시나리오 최종 점수</h3>
                <div class="modal-chips">
                    <span class="modal-chip">ROI Score × 0.6</span>
                    <span class="modal-chip">+</span>
                    <span class="modal-chip">Risk Score × 0.4</span>
                    <span class="modal-chip">=</span>
                    <span class="modal-chip">종합 점수 (0~10)</span>
                </div>
            `,
            en: `
                <p>In the third step, <strong>ROI Analyst and Risk Assessor agents analyze 3 scenarios in parallel</strong>. For each Conservative/Balanced/Aggressive scenario, comprehensive ROI metrics (NPV, IRR, Payback) and 4-category risk assessments are performed. The optimal scenario is selected via a weighted score (ROI×0.6 + Risk×0.4). This is a Human-AI hybrid governance model with expert review and approval.</p>

                <h3>3 Scenario Comparison</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Scenario</th><th>Budget</th><th>Timeline</th><th>Risk Appetite</th><th>Strategy</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Conservative</strong></td><td>60%</td><td>18 months</td><td>Low</td><td>Quick Win focus</td></tr>
                            <tr><td><strong>Balanced</strong></td><td>100%</td><td>24 months</td><td>Medium</td><td>Balanced approach</td></tr>
                            <tr><td><strong>Aggressive</strong></td><td>150%</td><td>36 months</td><td>High</td><td>Full transformation</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>ROI Analysis Metrics</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Metric</th><th>Formula</th><th>Decision Criteria</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>ROI %</strong></td><td>(3yr Benefits - Total Cost) / Total Cost × 100</td><td>>50%: Strongly Recommended</td></tr>
                            <tr><td><strong>Payback</strong></td><td>Initial Investment / (Annual Benefit / 12)</td><td><24 months: Good</td></tr>
                            <tr><td><strong>NPV</strong></td><td>-Investment + Σ(Annual/(1+0.1)^yr)</td><td>>0: Worth investing</td></tr>
                            <tr><td><strong>IRR</strong></td><td>(Annual×yrs-Investment) / Investment / yrs × 100</td><td>>10%: Good</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>4 Risk Categories</h3>
                <ul>
                    <li><strong>Technical Risk</strong> — Data quality, infrastructure gaps, legacy integration (Probability×Impact = 1-25)</li>
                    <li><strong>Organizational Risk</strong> — AI talent shortage, change resistance, culture (High≥15, Medium 10-14, Low<10)</li>
                    <li><strong>Business Risk</strong> — ROI shortfall, scope creep, market volatility</li>
                    <li><strong>Operational Risk</strong> — Model drift, security vulnerabilities, cost overruns</li>
                </ul>

                <h3>Scenario Final Score</h3>
                <div class="modal-chips">
                    <span class="modal-chip">ROI Score × 0.6</span>
                    <span class="modal-chip">+</span>
                    <span class="modal-chip">Risk Score × 0.4</span>
                    <span class="modal-chip">=</span>
                    <span class="modal-chip">Total Score (0-10)</span>
                </div>
            `
        }
    },

    'arch-synthesis': {
        icon: '📑',
        title: { ko: 'Step 4: 결과 종합', en: 'Step 4: Result Synthesis' },
        body: {
            ko: `
                <p>최종 단계에서는 모든 분석 결과를 종합하여 <strong>3가지 형식의 전문 컨설팅 보고서를 자동 생성</strong>합니다. ISO 표준 기반 품질 검증을 거쳐 경영진용 요약, 실무자용 상세, 전략 제안서 형태로 출력하며, Hybrid LLM(Claude 우선, Ollama 폴백)으로 전문가 수준의 한국어 문서를 생성합니다.</p>

                <h3>보고서 3가지 형식</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>보고서 유형</th><th>대상</th><th>구성</th><th>특징</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Executive Summary</strong></td><td>경영진</td><td>5개 섹션 (개요/평가/제안/효과/로드맵)</td><td>핵심만 압축, 의사결정 지원</td></tr>
                            <tr><td><strong>Full Report</strong></td><td>실무자</td><td>6개 챕터 + 부록 (용어집/템플릿/참고)</td><td>상세 분석, 기술적 깊이</td></tr>
                            <tr><td><strong>Strategy Proposal</strong></td><td>의사결정자</td><td>7개 섹션 (전략/현황/제안/실행/자원/효과/후속)</td><td>비즈니스 중심, 실행 가능</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>데이터 종합 파이프라인</h3>
                <ul>
                    <li><strong>성숙도 평가 결과</strong> — 4차원 점수, 전체 레벨, 차원별 개선 권고사항 통합</li>
                    <li><strong>유스케이스 설계</strong> — 발굴된 전체 기회 목록, Top-3 상세 설계, 아키텍처 도면</li>
                    <li><strong>시나리오 분석</strong> — 3가지 시나리오 ROI/리스크 프로필, 승인된 최적 시나리오 상세</li>
                    <li><strong>권고사항 컴파일</strong> — 성숙도 평가 + 리스크 Top-5에서 최대 10개 핵심 권고 추출</li>
                    <li><strong>기대 효과</strong> — 선택 시나리오의 연간 이익, 3년 전망치, ROI 지표 통합</li>
                    <li><strong>로드맵</strong> — 단기/중기/장기 활동, 타임라인, 마일스톤 배치</li>
                </ul>

                <h3>LLM 보고서 생성 설정</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>항목</th><th>설정</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>기본 LLM</strong></td><td>Claude (온라인 우선), Ollama (로컬 폴백)</td></tr>
                            <tr><td><strong>Temperature</strong></td><td>0.7 (정확성과 창의성 균형)</td></tr>
                            <tr><td><strong>출력 형식</strong></td><td>구조화된 섹션, 3~4단락 × 5~7줄, 전문 한국어</td></tr>
                            <tr><td><strong>출력 포맷</strong></td><td>DOCX / PDF / PPTX 자동 변환</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>품질 검증</h3>
                <div class="modal-chips">
                    <span class="modal-chip">ISO 표준 포맷 준수</span>
                    <span class="modal-chip">데이터 일관성 검사</span>
                    <span class="modal-chip">완전성 검증</span>
                    <span class="modal-chip">UUID 기반 보고서 관리</span>
                </div>
            `,
            en: `
                <p>The final step synthesizes all analysis results and <strong>auto-generates professional consulting reports in 3 formats</strong>. After ISO-based quality validation, it outputs executive summary, detailed practitioner report, and strategy proposal formats, using Hybrid LLM (Claude preferred, Ollama fallback) for professional-grade documentation.</p>

                <h3>3 Report Formats</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Report Type</th><th>Audience</th><th>Structure</th><th>Focus</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Executive Summary</strong></td><td>C-Suite</td><td>5 sections (Overview/Assessment/Proposals/Benefits/Roadmap)</td><td>Concise, decision support</td></tr>
                            <tr><td><strong>Full Report</strong></td><td>Practitioners</td><td>6 chapters + appendices (glossary/templates/refs)</td><td>Detailed technical depth</td></tr>
                            <tr><td><strong>Strategy Proposal</strong></td><td>Decision Makers</td><td>7 sections (Strategy/Status/Proposal/Execution/Resources/Benefits/Next)</td><td>Business-focused, actionable</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Data Compilation Pipeline</h3>
                <ul>
                    <li><strong>Maturity Assessment</strong> — 4-dimension scores, overall level, dimension-specific improvement recommendations</li>
                    <li><strong>Use Case Designs</strong> — Full opportunity list, Top-3 detailed designs, architecture blueprints</li>
                    <li><strong>Scenario Analysis</strong> — 3 scenario ROI/risk profiles, approved optimal scenario details</li>
                    <li><strong>Recommendations</strong> — Up to 10 key recommendations extracted from maturity + Top-5 risks</li>
                    <li><strong>Expected Benefits</strong> — Annual benefits, 3-year projections, ROI metrics from selected scenario</li>
                    <li><strong>Roadmap</strong> — Short/mid/long-term activities, timelines, milestones</li>
                </ul>

                <h3>LLM Report Settings</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Setting</th><th>Value</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Primary LLM</strong></td><td>Claude (online preferred), Ollama (local fallback)</td></tr>
                            <tr><td><strong>Temperature</strong></td><td>0.7 (balanced accuracy & creativity)</td></tr>
                            <tr><td><strong>Output</strong></td><td>Structured sections, 3-4 paragraphs × 5-7 lines, professional</td></tr>
                            <tr><td><strong>Formats</strong></td><td>DOCX / PDF / PPTX auto-conversion</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Quality Validation</h3>
                <div class="modal-chips">
                    <span class="modal-chip">ISO Format Compliance</span>
                    <span class="modal-chip">Data Consistency Check</span>
                    <span class="modal-chip">Completeness Validation</span>
                    <span class="modal-chip">UUID-based Report Mgmt</span>
                </div>
            `
        }
    }
};