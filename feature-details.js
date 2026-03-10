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
    },

    // ========================================
    // Tech Stack Detail Data
    // ========================================

    // ========================================
    // Certification Level Detail Data
    // ========================================

    'cert-beginner': {
        icon: '🌱',
        title: { ko: 'Level 1: 입문자 (AX Beginner)', en: 'Level 1: AX Beginner' },
        body: {
            ko: `
                <p><strong>AX Beginner</strong>는 AI 전환(AX)의 첫걸음을 내딛는 단계입니다. AI의 기본 개념을 이해하고, 자신의 업무에서 AI를 적용할 수 있는 <strong>AX 마인드셋</strong>을 형성합니다. 플랫폼의 기초 도구를 활용하여 간단한 AX 과제를 수행합니다.</p>

                <h3>도달 기준</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>평가 항목</th><th>기준</th><th>설명</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>완료 과제 수</strong></td><td>5건 이상</td><td>기본 AX 과제 완료</td></tr>
                            <tr><td><strong>ROI 달성 과제</strong></td><td>0건 (없음)</td><td>ROI 달성 요구 없음</td></tr>
                            <tr><td><strong>부서 전환율</strong></td><td>0% (없음)</td><td>전환율 요구 없음</td></tr>
                            <tr><td><strong>외부 컨설팅</strong></td><td>불필요</td><td>외부 경험 요구 없음</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>학습 내용</h3>
                <ul>
                    <li><strong>AI/AX 개념 이해</strong> — AI, 머신러닝, 생성형AI의 기본 개념과 AX(AI Transformation)의 의미</li>
                    <li><strong>플랫폼 기본 사용법</strong> — 100K-AX Expert 플랫폼의 인터페이스와 기본 기능 습득</li>
                    <li><strong>AX 마인드셋 형성</strong> — "내 업무에서 AI로 무엇을 바꿀 수 있는가?" 사고 훈련</li>
                    <li><strong>기초 과제 수행</strong> — 간단한 업무 자동화 기회 식별 및 기본 분석 실습</li>
                </ul>

                <h3>획득 가능 배지</h3>
                <div class="modal-chips">
                    <span class="modal-chip">첫 AX 과제 완료</span>
                    <span class="modal-chip">첫 ROI 달성</span>
                </div>
            `,
            en: `
                <p><strong>AX Beginner</strong> is the first step in AI Transformation (AX). You understand basic AI concepts and develop an <strong>AX mindset</strong> to apply AI in your own work. Perform simple AX tasks using the platform's basic tools.</p>

                <h3>Qualification Criteria</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Metric</th><th>Requirement</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Completed Tasks</strong></td><td>5 or more</td><td>Basic AX tasks completed</td></tr>
                            <tr><td><strong>ROI-Achieved Tasks</strong></td><td>0 (none)</td><td>No ROI achievement required</td></tr>
                            <tr><td><strong>Dept. Conversion Rate</strong></td><td>0% (none)</td><td>No conversion rate required</td></tr>
                            <tr><td><strong>External Consulting</strong></td><td>Not required</td><td>No external experience needed</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Learning Content</h3>
                <ul>
                    <li><strong>AI/AX Concepts</strong> — Basic concepts of AI, ML, GenAI and the meaning of AX (AI Transformation)</li>
                    <li><strong>Platform Basics</strong> — 100K-AX Expert platform interface and basic features</li>
                    <li><strong>AX Mindset Formation</strong> — Training to think "What can AI change in my work?"</li>
                    <li><strong>Basic Task Execution</strong> — Identifying simple automation opportunities and basic analysis practice</li>
                </ul>

                <h3>Earnable Badges</h3>
                <div class="modal-chips">
                    <span class="modal-chip">First AX Task Complete</span>
                    <span class="modal-chip">First ROI Achievement</span>
                </div>
            `
        }
    },

    'cert-practitioner': {
        icon: '🌿',
        title: { ko: 'Level 2: 실무자 (AX Practitioner)', en: 'Level 2: AX Practitioner' },
        body: {
            ko: `
                <p><strong>AX Practitioner</strong>는 <strong>독립적으로 AX 과제를 수행</strong>할 수 있는 단계입니다. 업무별 AI 적용 사례를 학습하고, 실제 업무에서 AI를 활용한 프로젝트를 주도적으로 수행합니다. ROI를 측정하고 성과를 입증하기 시작합니다.</p>

                <h3>도달 기준</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>평가 항목</th><th>기준</th><th>설명</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>완료 과제 수</strong></td><td>20건 이상</td><td>다양한 AX 과제 수행 경험</td></tr>
                            <tr><td><strong>ROI 달성 과제</strong></td><td>10건 이상</td><td>실질적 성과를 입증한 과제</td></tr>
                            <tr><td><strong>부서 전환율</strong></td><td>0% (없음)</td><td>전환율 요구 없음</td></tr>
                            <tr><td><strong>외부 컨설팅</strong></td><td>불필요</td><td>외부 경험 요구 없음</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>역량 개발 영역</h3>
                <ul>
                    <li><strong>업무 AI 적용</strong> — 자신의 업무 프로세스에서 AI 적용 가능 영역 식별 및 실행</li>
                    <li><strong>ROI 측정</strong> — AX 프로젝트의 투자 대비 효과를 수치로 산출하는 능력</li>
                    <li><strong>프로젝트 수행</strong> — 간단한 AX 프로젝트를 계획부터 완료까지 독립 수행</li>
                    <li><strong>도구 활용</strong> — 플랫폼의 분석 도구와 에이전트 프레임워크 기초 활용</li>
                </ul>

                <h3>역량 레이더 성장 영역</h3>
                <div class="modal-chips">
                    <span class="modal-chip">AX 기회 발굴</span>
                    <span class="modal-chip">ROI 분석</span>
                    <span class="modal-chip">보고서 작성</span>
                    <span class="modal-chip">10건 과제 달성 배지</span>
                </div>
            `,
            en: `
                <p><strong>AX Practitioner</strong> can <strong>independently execute AX tasks</strong>. Learns AI application cases by business function and proactively conducts AI-powered projects in actual work. Begins measuring ROI and demonstrating results.</p>

                <h3>Qualification Criteria</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Metric</th><th>Requirement</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Completed Tasks</strong></td><td>20 or more</td><td>Diverse AX task experience</td></tr>
                            <tr><td><strong>ROI-Achieved Tasks</strong></td><td>10 or more</td><td>Tasks with proven tangible results</td></tr>
                            <tr><td><strong>Dept. Conversion Rate</strong></td><td>0% (none)</td><td>No conversion rate required</td></tr>
                            <tr><td><strong>External Consulting</strong></td><td>Not required</td><td>No external experience needed</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Competency Development Areas</h3>
                <ul>
                    <li><strong>Work AI Application</strong> — Identifying and executing AI-applicable areas in your work processes</li>
                    <li><strong>ROI Measurement</strong> — Quantifying return on investment for AX projects</li>
                    <li><strong>Project Execution</strong> — Independently managing simple AX projects from planning to completion</li>
                    <li><strong>Tool Proficiency</strong> — Basic use of platform analysis tools and agent frameworks</li>
                </ul>

                <h3>Skill Radar Growth Areas</h3>
                <div class="modal-chips">
                    <span class="modal-chip">AX Discovery</span>
                    <span class="modal-chip">ROI Analysis</span>
                    <span class="modal-chip">Report Writing</span>
                    <span class="modal-chip">10 Tasks Badge</span>
                </div>
            `
        }
    },

    'cert-specialist': {
        icon: '🌳',
        title: { ko: 'Level 3: 전문가 (AX Specialist)', en: 'Level 3: AX Specialist' },
        body: {
            ko: `
                <p><strong>AX Specialist</strong>는 <strong>부서 내 AX 리더 역할</strong>을 수행하는 단계입니다. 도메인 특화 AX를 설계하고, 복합 프로젝트를 리드하며, 부서 전환율 30% 이상을 달성합니다. 리스크 분석과 변화 관리 역량도 갖춥니다.</p>

                <h3>도달 기준</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>평가 항목</th><th>기준</th><th>설명</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>완료 과제 수</strong></td><td>50건 이상</td><td>충분한 실무 경험 축적</td></tr>
                            <tr><td><strong>ROI 달성 과제</strong></td><td>25건 이상</td><td>절반 이상의 과제에서 ROI 달성</td></tr>
                            <tr><td><strong>부서 전환율</strong></td><td>30% 이상</td><td>부서 업무의 30%를 AI로 전환</td></tr>
                            <tr><td><strong>외부 컨설팅</strong></td><td>불필요</td><td>외부 경험 요구 없음</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>전문 역량</h3>
                <ul>
                    <li><strong>도메인 특화 AX 설계</strong> — 제조/금융/의료 등 자신의 산업 도메인에 최적화된 AX 전략 수립</li>
                    <li><strong>복합 프로젝트 리드</strong> — 다수의 이해관계자가 참여하는 프로젝트 주도</li>
                    <li><strong>리스크 분석</strong> — 4대 리스크 카테고리(기술/조직/비즈니스/운영) 평가 능력</li>
                    <li><strong>부서 변화 관리</strong> — 부서 단위 AI 전환 추진 및 저항 관리</li>
                </ul>

                <h3>6차원 역량 레이더</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>역량 차원</th><th>설명</th><th>목표 수준</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>AX 기회 발굴</strong></td><td>업무 프로세스 분석, AI 적용점 식별</td><td>60점 이상</td></tr>
                            <tr><td><strong>ROI 분석</strong></td><td>비용 대비 효과 산출, NPV/IRR 계산</td><td>50점 이상</td></tr>
                            <tr><td><strong>리스크 평가</strong></td><td>위험 요소 식별, 완화 전략 수립</td><td>50점 이상</td></tr>
                            <tr><td><strong>실행 설계</strong></td><td>구현 아키텍처, 타임라인 설계</td><td>40점 이상</td></tr>
                            <tr><td><strong>변화 관리</strong></td><td>조직 변화 추진, 교육 설계</td><td>40점 이상</td></tr>
                            <tr><td><strong>보고서 작성</strong></td><td>전문 컨설팅 보고서 생성</td><td>50점 이상</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>획득 배지</h3>
                <div class="modal-chips">
                    <span class="modal-chip">50건 과제 달성</span>
                    <span class="modal-chip">전환율 30% 달성</span>
                </div>
            `,
            en: `
                <p><strong>AX Specialist</strong> serves as the <strong>AX leader within a department</strong>. Designs domain-specific AX, leads complex projects, and achieves 30%+ department conversion rate. Also equipped with risk analysis and change management competencies.</p>

                <h3>Qualification Criteria</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Metric</th><th>Requirement</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Completed Tasks</strong></td><td>50 or more</td><td>Substantial practical experience</td></tr>
                            <tr><td><strong>ROI-Achieved Tasks</strong></td><td>25 or more</td><td>ROI achieved in 50%+ of tasks</td></tr>
                            <tr><td><strong>Dept. Conversion Rate</strong></td><td>30% or higher</td><td>30% of dept. work converted to AI</td></tr>
                            <tr><td><strong>External Consulting</strong></td><td>Not required</td><td>No external experience needed</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Expert Competencies</h3>
                <ul>
                    <li><strong>Domain-Specific AX Design</strong> — Optimized AX strategies for your industry (manufacturing/finance/healthcare, etc.)</li>
                    <li><strong>Complex Project Leadership</strong> — Leading projects with multiple stakeholders</li>
                    <li><strong>Risk Analysis</strong> — Evaluating 4 risk categories (technical/organizational/business/operational)</li>
                    <li><strong>Departmental Change Mgmt</strong> — Driving department-level AI transformation and managing resistance</li>
                </ul>

                <h3>6-Dimension Skill Radar</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Skill Dimension</th><th>Description</th><th>Target Level</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>AX Discovery</strong></td><td>Process analysis, AI opportunity identification</td><td>60+ points</td></tr>
                            <tr><td><strong>ROI Analysis</strong></td><td>Cost-benefit calculation, NPV/IRR</td><td>50+ points</td></tr>
                            <tr><td><strong>Risk Assessment</strong></td><td>Risk identification, mitigation strategy</td><td>50+ points</td></tr>
                            <tr><td><strong>Implementation Design</strong></td><td>Architecture, timeline planning</td><td>40+ points</td></tr>
                            <tr><td><strong>Change Management</strong></td><td>Organizational change, training design</td><td>40+ points</td></tr>
                            <tr><td><strong>Report Writing</strong></td><td>Professional consulting report generation</td><td>50+ points</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Badges Earned</h3>
                <div class="modal-chips">
                    <span class="modal-chip">50 Tasks Achievement</span>
                    <span class="modal-chip">30% Conversion Rate</span>
                </div>
            `
        }
    },

    'cert-expert': {
        icon: '🏔️',
        title: { ko: 'Level 4: 숙련가 (AX Expert)', en: 'Level 4: AX Expert' },
        body: {
            ko: `
                <p><strong>AX Expert</strong>는 <strong>기업 전사 AX 전략을 수립</strong>할 수 있는 단계입니다. 100건 이상의 과제를 수행하고, 50% 이상의 전환율을 달성한 검증된 전문가입니다. 멀티에이전트 시스템을 설계하고, 조직 전체의 변화를 관리합니다.</p>

                <h3>도달 기준</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>평가 항목</th><th>기준</th><th>설명</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>완료 과제 수</strong></td><td>100건 이상</td><td>광범위한 AX 프로젝트 경험</td></tr>
                            <tr><td><strong>ROI 달성 과제</strong></td><td>50건 이상</td><td>절반 이상의 과제에서 ROI 입증</td></tr>
                            <tr><td><strong>부서 전환율</strong></td><td>50% 이상</td><td>부서 업무의 절반을 AI로 전환</td></tr>
                            <tr><td><strong>외부 컨설팅</strong></td><td>불필요</td><td>외부 경험 요구 없음</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>핵심 역량</h3>
                <ul>
                    <li><strong>전사 AX 전략 수립</strong> — 기업 전체의 AI 전환 비전, 로드맵, 거버넌스 설계</li>
                    <li><strong>멀티에이전트 시스템 설계</strong> — 7개 프레임워크를 활용한 복합 에이전트 아키텍처 구축</li>
                    <li><strong>3 시나리오 ROI 분석</strong> — Conservative/Balanced/Aggressive 시나리오별 투자 분석</li>
                    <li><strong>조직 변화 관리</strong> — 기업 전사 단위의 변화 저항 관리 및 교육 프로그램 설계</li>
                    <li><strong>ISO 표준 기반 컨설팅</strong> — ISO 42001/23894/25059/38507 기반 전문 컨설팅</li>
                </ul>

                <h3>도달률 계산 방식</h3>
                <p>다음 등급까지의 달성률은 <strong>3가지 지표의 가중 평균</strong>으로 산출됩니다:</p>
                <div class="modal-chips">
                    <span class="modal-chip">과제 달성률 = 완료 / 100</span>
                    <span class="modal-chip">ROI 달성률 = ROI과제 / 50</span>
                    <span class="modal-chip">전환율 달성률 = 전환율 / 50%</span>
                    <span class="modal-chip">종합 = 평균 × 100%</span>
                </div>

                <h3>획득 배지</h3>
                <div class="modal-chips">
                    <span class="modal-chip">100건 과제 달성</span>
                    <span class="modal-chip">ROI 50건 달성</span>
                    <span class="modal-chip">AX Expert 달성</span>
                </div>
            `,
            en: `
                <p><strong>AX Expert</strong> can <strong>formulate enterprise-wide AX strategy</strong>. A proven expert with 100+ completed tasks and 50%+ conversion rate. Designs multi-agent systems and manages organization-wide transformation.</p>

                <h3>Qualification Criteria</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Metric</th><th>Requirement</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Completed Tasks</strong></td><td>100 or more</td><td>Extensive AX project experience</td></tr>
                            <tr><td><strong>ROI-Achieved Tasks</strong></td><td>50 or more</td><td>ROI proven in 50%+ of tasks</td></tr>
                            <tr><td><strong>Dept. Conversion Rate</strong></td><td>50% or higher</td><td>Half of dept. work converted to AI</td></tr>
                            <tr><td><strong>External Consulting</strong></td><td>Not required</td><td>No external experience needed</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Core Competencies</h3>
                <ul>
                    <li><strong>Enterprise AX Strategy</strong> — Designing company-wide AI transformation vision, roadmap, governance</li>
                    <li><strong>Multi-Agent System Design</strong> — Building complex agent architectures using 7 frameworks</li>
                    <li><strong>3-Scenario ROI Analysis</strong> — Conservative/Balanced/Aggressive investment analysis</li>
                    <li><strong>Organizational Change Mgmt</strong> — Enterprise-level resistance management and training program design</li>
                    <li><strong>ISO Standards Consulting</strong> — Professional consulting based on ISO 42001/23894/25059/38507</li>
                </ul>

                <h3>Completion Rate Calculation</h3>
                <p>Progress to the next level is calculated as the <strong>weighted average of 3 metrics</strong>:</p>
                <div class="modal-chips">
                    <span class="modal-chip">Task Rate = Completed / 100</span>
                    <span class="modal-chip">ROI Rate = ROI Tasks / 50</span>
                    <span class="modal-chip">Conversion Rate = Rate / 50%</span>
                    <span class="modal-chip">Total = Average × 100%</span>
                </div>

                <h3>Badges Earned</h3>
                <div class="modal-chips">
                    <span class="modal-chip">100 Tasks Achievement</span>
                    <span class="modal-chip">ROI 50 Tasks Achievement</span>
                    <span class="modal-chip">AX Expert Badge</span>
                </div>
            `
        }
    },

    'cert-master': {
        icon: '👑',
        title: { ko: 'Level 5: 마스터 (AX Master)', en: 'Level 5: AX Master' },
        body: {
            ko: `
                <p><strong>AX Master</strong>는 인증 체계의 <strong>최고 단계</strong>로, 산업 도메인 AX 전문가입니다. Expert 수준의 모든 기준을 충족하면서, <strong>외부 컨설팅 경험</strong>까지 보유한 검증된 리더입니다. 산업 생태계 혁신, 국가 정책 자문, 후배 AX 전문가 양성을 담당합니다.</p>

                <h3>도달 기준</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>평가 항목</th><th>기준</th><th>설명</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>완료 과제 수</strong></td><td>100건 이상</td><td>Expert 수준과 동일</td></tr>
                            <tr><td><strong>ROI 달성 과제</strong></td><td>50건 이상</td><td>Expert 수준과 동일</td></tr>
                            <tr><td><strong>부서 전환율</strong></td><td>50% 이상</td><td>Expert 수준과 동일</td></tr>
                            <tr><td><strong>외부 컨설팅</strong></td><td>필수 ✓</td><td>타 기업/기관 AX 컨설팅 수행 경험</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Expert → Master 핵심 차이점</h3>
                <p>Expert와 동일한 수치 기준에 <strong>외부 컨설팅 경험(external_consulting = true)</strong>이 추가됩니다. 이는 자신의 조직을 넘어 타 기업/기관에 AX 전략을 자문할 수 있는 역량을 검증합니다.</p>

                <h3>마스터 전문 역할</h3>
                <ul>
                    <li><strong>산업 생태계 혁신</strong> — 산업 전체의 AI 전환 트렌드를 선도하고, 업종별 AX 표준을 제시</li>
                    <li><strong>외부 AX 컨설팅</strong> — 타 기업/기관에 AX 전략 수립, 실행, 검증 자문 제공</li>
                    <li><strong>국가 정책 자문</strong> — AI 전환 관련 정부 정책 수립에 자문 참여</li>
                    <li><strong>AX 멘토링 및 강의</strong> — 후배 AX 전문가(Beginner~Expert) 양성 및 교육 프로그램 운영</li>
                    <li><strong>기업 대시보드 총괄</strong> — 전사 인증 분포, 부서별 전환율, ROI 총계를 모니터링</li>
                </ul>

                <h3>전체 인증 등급 비교</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>등급</th><th>과제 수</th><th>ROI 과제</th><th>전환율</th><th>외부 컨설팅</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Beginner</strong></td><td>5건+</td><td>-</td><td>-</td><td>-</td></tr>
                            <tr><td><strong>Practitioner</strong></td><td>20건+</td><td>10건+</td><td>-</td><td>-</td></tr>
                            <tr><td><strong>Specialist</strong></td><td>50건+</td><td>25건+</td><td>30%+</td><td>-</td></tr>
                            <tr><td><strong>Expert</strong></td><td>100건+</td><td>50건+</td><td>50%+</td><td>-</td></tr>
                            <tr><td><strong>Master</strong></td><td>100건+</td><td>50건+</td><td>50%+</td><td>필수 ✓</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>최종 획득 배지</h3>
                <div class="modal-chips">
                    <span class="modal-chip">AX Master 달성</span>
                    <span class="modal-chip">Grand Master</span>
                    <span class="modal-chip">산업 도메인 AX 전문가</span>
                </div>
            `,
            en: `
                <p><strong>AX Master</strong> is the <strong>highest level</strong> of the certification system — an industry domain AX expert. Meets all Expert-level criteria plus <strong>external consulting experience</strong>. Responsible for industry ecosystem innovation, national policy advisory, and mentoring junior AX professionals.</p>

                <h3>Qualification Criteria</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Metric</th><th>Requirement</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Completed Tasks</strong></td><td>100 or more</td><td>Same as Expert level</td></tr>
                            <tr><td><strong>ROI-Achieved Tasks</strong></td><td>50 or more</td><td>Same as Expert level</td></tr>
                            <tr><td><strong>Dept. Conversion Rate</strong></td><td>50% or higher</td><td>Same as Expert level</td></tr>
                            <tr><td><strong>External Consulting</strong></td><td>Required ✓</td><td>AX consulting experience at other organizations</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Expert → Master Key Difference</h3>
                <p>Same numeric criteria as Expert, plus <strong>external consulting experience (external_consulting = true)</strong>. This verifies the ability to advise AX strategy beyond your own organization.</p>

                <h3>Master Professional Roles</h3>
                <ul>
                    <li><strong>Industry Ecosystem Innovation</strong> — Leading AI transformation trends across the industry, setting AX standards</li>
                    <li><strong>External AX Consulting</strong> — Advising other organizations on AX strategy, execution, and validation</li>
                    <li><strong>National Policy Advisory</strong> — Participating in government AI policy formulation</li>
                    <li><strong>AX Mentoring & Teaching</strong> — Training junior AX professionals (Beginner~Expert) and running education programs</li>
                    <li><strong>Enterprise Dashboard Oversight</strong> — Monitoring company-wide certification distribution, conversion rates, and ROI</li>
                </ul>

                <h3>Full Certification Level Comparison</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Level</th><th>Tasks</th><th>ROI Tasks</th><th>Conv. Rate</th><th>External</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Beginner</strong></td><td>5+</td><td>-</td><td>-</td><td>-</td></tr>
                            <tr><td><strong>Practitioner</strong></td><td>20+</td><td>10+</td><td>-</td><td>-</td></tr>
                            <tr><td><strong>Specialist</strong></td><td>50+</td><td>25+</td><td>30%+</td><td>-</td></tr>
                            <tr><td><strong>Expert</strong></td><td>100+</td><td>50+</td><td>50%+</td><td>-</td></tr>
                            <tr><td><strong>Master</strong></td><td>100+</td><td>50+</td><td>50%+</td><td>Required ✓</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Final Badges</h3>
                <div class="modal-chips">
                    <span class="modal-chip">AX Master Achievement</span>
                    <span class="modal-chip">Grand Master</span>
                    <span class="modal-chip">Industry Domain AX Expert</span>
                </div>
            `
        }
    },

    'tech-langgraph': {
        icon: '🔄',
        title: { ko: 'LangGraph — 상태 기반 워크플로우 엔진', en: 'LangGraph — State-based Workflow Engine' },
        body: {
            ko: `
                <p><strong>LangGraph</strong>는 플랫폼의 <strong>상태 기반 멀티에이전트 워크플로우 엔진</strong>으로, StateGraph를 통해 8개 노드 간의 복잡한 실행 흐름을 제어합니다. 조건부 엣지(Conditional Edge)를 활용하여 품질 검증 실패 시 자동 재시도하며, 각 노드의 실행 상태를 추적합니다.</p>

                <h3>플랫폼 전문 임무</h3>
                <p>AX 컨설팅의 <strong>5단계 분석 파이프라인을 상태 그래프로 모델링</strong>하여, 산업 분석 → 성숙도 평가 → 유스케이스 발굴 → ROI 분석 → 보고서 생성까지의 전체 흐름을 자동화합니다. 각 단계의 출력이 다음 단계의 입력으로 정확히 전달되도록 상태를 관리합니다.</p>

                <h3>핵심 구성 요소</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>구성 요소</th><th>역할</th><th>상세</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>StateGraph</strong></td><td>워크플로우 정의</td><td>8개 노드, 조건부 엣지로 분기 제어</td></tr>
                            <tr><td><strong>ConsultingState</strong></td><td>상태 스키마</td><td>TypedDict 기반, 단계별 결과 누적 관리</td></tr>
                            <tr><td><strong>quality_gate</strong></td><td>품질 검증 노드</td><td>점수 기반 자동 재시도 (max 2회)</td></tr>
                            <tr><td><strong>Conditional Edge</strong></td><td>분기 제어</td><td>품질 통과/실패에 따른 동적 라우팅</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>워크플로우 노드 구성</h3>
                <div class="modal-chips">
                    <span class="modal-chip">initialize</span>
                    <span class="modal-chip">industry_analysis</span>
                    <span class="modal-chip">maturity_assessment</span>
                    <span class="modal-chip">usecase_discovery</span>
                    <span class="modal-chip">roi_analysis</span>
                    <span class="modal-chip">risk_assessment</span>
                    <span class="modal-chip">quality_gate</span>
                    <span class="modal-chip">report_generation</span>
                </div>
            `,
            en: `
                <p><strong>LangGraph</strong> serves as the platform's <strong>state-based multi-agent workflow engine</strong>, controlling complex execution flows across 8 nodes via StateGraph. It uses Conditional Edges for automatic retry on quality validation failure and tracks execution state at each node.</p>

                <h3>Platform Mission</h3>
                <p>Models the <strong>5-stage AX consulting analysis pipeline as a state graph</strong>, automating the entire flow from industry analysis → maturity assessment → use case discovery → ROI analysis → report generation. Manages state to ensure each stage's output is precisely passed as input to the next.</p>

                <h3>Core Components</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Component</th><th>Role</th><th>Details</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>StateGraph</strong></td><td>Workflow Definition</td><td>8 nodes, conditional edges for branch control</td></tr>
                            <tr><td><strong>ConsultingState</strong></td><td>State Schema</td><td>TypedDict-based, cumulative stage results</td></tr>
                            <tr><td><strong>quality_gate</strong></td><td>Quality Check Node</td><td>Score-based auto-retry (max 2 times)</td></tr>
                            <tr><td><strong>Conditional Edge</strong></td><td>Branch Control</td><td>Dynamic routing on pass/fail quality</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Workflow Nodes</h3>
                <div class="modal-chips">
                    <span class="modal-chip">initialize</span>
                    <span class="modal-chip">industry_analysis</span>
                    <span class="modal-chip">maturity_assessment</span>
                    <span class="modal-chip">usecase_discovery</span>
                    <span class="modal-chip">roi_analysis</span>
                    <span class="modal-chip">risk_assessment</span>
                    <span class="modal-chip">quality_gate</span>
                    <span class="modal-chip">report_generation</span>
                </div>
            `
        }
    },

    'tech-crewai': {
        icon: '🤖',
        title: { ko: 'CrewAI — 역할 기반 에이전트 협업', en: 'CrewAI — Role-based Agent Collaboration' },
        body: {
            ko: `
                <p><strong>CrewAI</strong>는 플랫폼에서 <strong>5명의 전문 에이전트가 6개의 태스크를 역할 분담하여 협업</strong>하는 프레임워크입니다. 각 에이전트에게 명확한 역할(Role), 목표(Goal), 배경(Backstory)을 부여하여 산업 도메인 전문가처럼 동작합니다.</p>

                <h3>플랫폼 전문 임무</h3>
                <p><strong>AX 컨설팅팀을 AI로 재현</strong>합니다. 산업 분석가, 성숙도 평가사, 기회 발굴가, 전략 설계사, 보고서 작성가가 각자의 전문 영역에서 분석하고 결과를 다음 에이전트에게 전달하는 Sequential/Hierarchical 프로세스를 운영합니다.</p>

                <h3>에이전트 구성</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>에이전트</th><th>역할</th><th>담당 태스크</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Industry Analyst</strong></td><td>산업 분석가</td><td>산업 동향, 경쟁 환경, AI 적용 현황 분석</td></tr>
                            <tr><td><strong>Maturity Assessor</strong></td><td>성숙도 평가사</td><td>4차원 AI 성숙도 레벨 평가</td></tr>
                            <tr><td><strong>Opportunity Hunter</strong></td><td>기회 발굴가</td><td>AI 적용 유스케이스 발굴 및 우선순위</td></tr>
                            <tr><td><strong>Strategy Architect</strong></td><td>전략 설계사</td><td>3 시나리오 ROI/리스크 분석</td></tr>
                            <tr><td><strong>Report Writer</strong></td><td>보고서 작성가</td><td>최종 컨설팅 보고서 생성</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>프로세스 모드</h3>
                <div class="modal-chips">
                    <span class="modal-chip">Sequential Process</span>
                    <span class="modal-chip">Hierarchical Process</span>
                    <span class="modal-chip">5 Agents</span>
                    <span class="modal-chip">6 Tasks</span>
                    <span class="modal-chip">Ollama LLM</span>
                </div>
            `,
            en: `
                <p><strong>CrewAI</strong> enables <strong>5 specialized agents collaborating on 6 tasks through role-based division</strong>. Each agent is assigned a clear Role, Goal, and Backstory, making them operate like industry domain experts.</p>

                <h3>Platform Mission</h3>
                <p><strong>Recreates an AX consulting team with AI</strong>. Industry analyst, maturity assessor, opportunity hunter, strategy architect, and report writer each analyze within their expertise and pass results to the next agent via Sequential/Hierarchical processes.</p>

                <h3>Agent Configuration</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Agent</th><th>Role</th><th>Tasks</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Industry Analyst</strong></td><td>Industry Analysis</td><td>Industry trends, competitive landscape, AI adoption</td></tr>
                            <tr><td><strong>Maturity Assessor</strong></td><td>Maturity Evaluation</td><td>4-dimension AI maturity level assessment</td></tr>
                            <tr><td><strong>Opportunity Hunter</strong></td><td>Opportunity Discovery</td><td>AI use case discovery & prioritization</td></tr>
                            <tr><td><strong>Strategy Architect</strong></td><td>Strategy Design</td><td>3-scenario ROI/risk analysis</td></tr>
                            <tr><td><strong>Report Writer</strong></td><td>Report Generation</td><td>Final consulting report creation</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Process Modes</h3>
                <div class="modal-chips">
                    <span class="modal-chip">Sequential Process</span>
                    <span class="modal-chip">Hierarchical Process</span>
                    <span class="modal-chip">5 Agents</span>
                    <span class="modal-chip">6 Tasks</span>
                    <span class="modal-chip">Ollama LLM</span>
                </div>
            `
        }
    },

    'tech-autogen': {
        icon: '💬',
        title: { ko: 'AutoGen AG2 — 그룹챗 기반 합의 시스템', en: 'AutoGen AG2 — GroupChat Consensus System' },
        body: {
            ko: `
                <p><strong>AutoGen AG2</strong>는 플랫폼에서 <strong>5명의 에이전트가 그룹채팅 형식으로 토론하며 합의에 도달</strong>하는 프레임워크입니다. RoundRobin과 Selector 모드를 지원하며, 각 에이전트가 다른 에이전트의 분석에 대해 피드백하고 보완합니다.</p>

                <h3>플랫폼 전문 임무</h3>
                <p><strong>다각도 관점의 AX 컨설팅 토론을 자동화</strong>합니다. 산업 전문가, 기술 전문가, 전략 전문가가 서로의 분석을 검토하고 보완하여 단일 에이전트보다 더 풍부하고 균형 잡힌 컨설팅 결과를 도출합니다. 합의 기반 의사결정으로 편향을 방지합니다.</p>

                <h3>그룹챗 구성</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>구성 요소</th><th>역할</th><th>상세</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>GroupChat</strong></td><td>대화 관리</td><td>최대 12라운드, 에이전트 간 메시지 교환</td></tr>
                            <tr><td><strong>GroupChatManager</strong></td><td>진행 관리</td><td>발언 순서 제어, 종료 조건 감시</td></tr>
                            <tr><td><strong>RoundRobin</strong></td><td>순차 발언</td><td>모든 에이전트가 순서대로 발언</td></tr>
                            <tr><td><strong>Selector</strong></td><td>선택적 발언</td><td>LLM이 최적 발언자 동적 선택</td></tr>
                            <tr><td><strong>Termination</strong></td><td>종료 조건</td><td>"TERMINATE" 키워드 감지</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>참여 에이전트</h3>
                <div class="modal-chips">
                    <span class="modal-chip">Industry Analyst</span>
                    <span class="modal-chip">Maturity Assessor</span>
                    <span class="modal-chip">Use Case Designer</span>
                    <span class="modal-chip">ROI Analyst</span>
                    <span class="modal-chip">Report Synthesizer</span>
                </div>
            `,
            en: `
                <p><strong>AutoGen AG2</strong> enables <strong>5 agents to discuss and reach consensus through group chat</strong>. Supports RoundRobin and Selector modes, where each agent provides feedback and complements other agents' analyses.</p>

                <h3>Platform Mission</h3>
                <p><strong>Automates multi-perspective AX consulting discussions</strong>. Industry, technology, and strategy experts review and complement each other's analyses, producing richer, more balanced consulting results than single-agent approaches. Consensus-based decision-making prevents bias.</p>

                <h3>GroupChat Configuration</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Component</th><th>Role</th><th>Details</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>GroupChat</strong></td><td>Dialog Management</td><td>Max 12 rounds, inter-agent message exchange</td></tr>
                            <tr><td><strong>GroupChatManager</strong></td><td>Session Control</td><td>Turn order control, termination monitoring</td></tr>
                            <tr><td><strong>RoundRobin</strong></td><td>Sequential Turns</td><td>All agents speak in order</td></tr>
                            <tr><td><strong>Selector</strong></td><td>Dynamic Turns</td><td>LLM dynamically selects optimal speaker</td></tr>
                            <tr><td><strong>Termination</strong></td><td>Exit Condition</td><td>"TERMINATE" keyword detection</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Participating Agents</h3>
                <div class="modal-chips">
                    <span class="modal-chip">Industry Analyst</span>
                    <span class="modal-chip">Maturity Assessor</span>
                    <span class="modal-chip">Use Case Designer</span>
                    <span class="modal-chip">ROI Analyst</span>
                    <span class="modal-chip">Report Synthesizer</span>
                </div>
            `
        }
    },

    'tech-dspy': {
        icon: '⚡',
        title: { ko: 'DSPy — 프롬프트 자동 최적화 엔진', en: 'DSPy — Automatic Prompt Optimization Engine' },
        body: {
            ko: `
                <p><strong>DSPy</strong>는 플랫폼에서 <strong>5개의 Signature와 5개의 Chain of Thought 모듈로 프롬프트를 프로그래밍 방식으로 최적화</strong>합니다. 수작업 프롬프트 엔지니어링 대신 선언적으로 입출력을 정의하면 DSPy가 최적의 프롬프트를 자동 구성합니다.</p>

                <h3>플랫폼 전문 임무</h3>
                <p><strong>AX 컨설팅 분석의 정확도를 프로그래밍 방식으로 극대화</strong>합니다. 산업 분석, 성숙도 평가 등 각 단계에 특화된 Signature를 정의하고, Chain of Thought 추론으로 단계별 논리적 분석을 강제합니다. 프롬프트를 코드처럼 관리하여 재현 가능한 컨설팅 품질을 보장합니다.</p>

                <h3>Signature & Module 구성</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Signature</th><th>입력</th><th>출력</th><th>CoT 모듈</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>IndustryAnalysis</strong></td><td>산업, 규모, 현황</td><td>동향, 경쟁, AI현황</td><td>dspy.ChainOfThought</td></tr>
                            <tr><td><strong>MaturityAssessment</strong></td><td>산업, 현황, 분석</td><td>4차원 점수, 레벨</td><td>dspy.ChainOfThought</td></tr>
                            <tr><td><strong>UseCaseDiscovery</strong></td><td>산업, 성숙도</td><td>기회 목록, Top-3</td><td>dspy.ChainOfThought</td></tr>
                            <tr><td><strong>ROIAnalysis</strong></td><td>유스케이스, 규모</td><td>NPV, IRR, 회수기간</td><td>dspy.ChainOfThought</td></tr>
                            <tr><td><strong>ReportGeneration</strong></td><td>전체 분석 결과</td><td>구조화된 보고서</td><td>dspy.ChainOfThought</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>핵심 특장점</h3>
                <div class="modal-chips">
                    <span class="modal-chip">5 Signatures</span>
                    <span class="modal-chip">5 CoT Modules</span>
                    <span class="modal-chip">선언적 프롬프트</span>
                    <span class="modal-chip">자동 최적화</span>
                    <span class="modal-chip">재현 가능성</span>
                </div>
            `,
            en: `
                <p><strong>DSPy</strong> provides <strong>programmatic prompt optimization with 5 Signatures and 5 Chain of Thought modules</strong>. Instead of manual prompt engineering, you declaratively define inputs/outputs and DSPy automatically constructs optimal prompts.</p>

                <h3>Platform Mission</h3>
                <p><strong>Programmatically maximizes AX consulting analysis accuracy</strong>. Defines specialized Signatures for each stage (industry analysis, maturity assessment, etc.) and enforces step-by-step logical analysis through Chain of Thought reasoning. Manages prompts like code to ensure reproducible consulting quality.</p>

                <h3>Signature & Module Configuration</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Signature</th><th>Input</th><th>Output</th><th>CoT Module</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>IndustryAnalysis</strong></td><td>Industry, size, status</td><td>Trends, competition, AI status</td><td>dspy.ChainOfThought</td></tr>
                            <tr><td><strong>MaturityAssessment</strong></td><td>Industry, status, analysis</td><td>4-dim scores, level</td><td>dspy.ChainOfThought</td></tr>
                            <tr><td><strong>UseCaseDiscovery</strong></td><td>Industry, maturity</td><td>Opportunity list, Top-3</td><td>dspy.ChainOfThought</td></tr>
                            <tr><td><strong>ROIAnalysis</strong></td><td>Use cases, scale</td><td>NPV, IRR, payback</td><td>dspy.ChainOfThought</td></tr>
                            <tr><td><strong>ReportGeneration</strong></td><td>All analysis results</td><td>Structured report</td><td>dspy.ChainOfThought</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Key Advantages</h3>
                <div class="modal-chips">
                    <span class="modal-chip">5 Signatures</span>
                    <span class="modal-chip">5 CoT Modules</span>
                    <span class="modal-chip">Declarative Prompts</span>
                    <span class="modal-chip">Auto-optimization</span>
                    <span class="modal-chip">Reproducibility</span>
                </div>
            `
        }
    },

    'tech-langchain': {
        icon: '🔗',
        title: { ko: 'LangChain — LCEL 체인 파이프라인', en: 'LangChain — LCEL Chain Pipeline' },
        body: {
            ko: `
                <p><strong>LangChain</strong>은 플랫폼에서 <strong>5개의 LCEL(LangChain Expression Language) 체인으로 분석 파이프라인</strong>을 구성합니다. 각 체인은 프롬프트 → LLM → 출력 파서를 연결하며, ChatHistory와 Callbacks 시스템으로 대화 맥락과 실행 추적을 관리합니다.</p>

                <h3>플랫폼 전문 임무</h3>
                <p><strong>AX 컨설팅의 각 분석 단계를 독립적인 체인으로 모듈화</strong>합니다. LCEL의 파이프(|) 연산자로 프롬프트 템플릿 → Ollama LLM → JSON 파서를 깔끔하게 연결하여, 각 체인이 구조화된 분석 결과를 생성합니다. 대화형 컨설팅 세션에서 맥락을 유지합니다.</p>

                <h3>체인 구성</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>체인</th><th>역할</th><th>출력</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Industry Chain</strong></td><td>산업 분석</td><td>산업 동향, AI 적용 현황 JSON</td></tr>
                            <tr><td><strong>Maturity Chain</strong></td><td>성숙도 평가</td><td>4차원 점수, 레벨 JSON</td></tr>
                            <tr><td><strong>UseCase Chain</strong></td><td>유스케이스 발굴</td><td>기회 목록, 우선순위 JSON</td></tr>
                            <tr><td><strong>ROI Chain</strong></td><td>ROI 분석</td><td>NPV, IRR, 시나리오 JSON</td></tr>
                            <tr><td><strong>Report Chain</strong></td><td>보고서 생성</td><td>구조화된 컨설팅 보고서</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>기술 스택</h3>
                <div class="modal-chips">
                    <span class="modal-chip">LCEL Pipeline</span>
                    <span class="modal-chip">ChatPromptTemplate</span>
                    <span class="modal-chip">ChatOllama</span>
                    <span class="modal-chip">StrOutputParser</span>
                    <span class="modal-chip">ChatHistory</span>
                    <span class="modal-chip">Callbacks</span>
                </div>
            `,
            en: `
                <p><strong>LangChain</strong> constructs the platform's <strong>analysis pipeline with 5 LCEL (LangChain Expression Language) chains</strong>. Each chain connects Prompt → LLM → Output Parser, with ChatHistory and Callbacks systems managing conversation context and execution tracking.</p>

                <h3>Platform Mission</h3>
                <p><strong>Modularizes each AX consulting analysis stage as an independent chain</strong>. Uses LCEL's pipe (|) operator to cleanly connect prompt templates → Ollama LLM → JSON parser, with each chain producing structured analysis results. Maintains context across conversational consulting sessions.</p>

                <h3>Chain Configuration</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Chain</th><th>Role</th><th>Output</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Industry Chain</strong></td><td>Industry Analysis</td><td>Industry trends, AI status JSON</td></tr>
                            <tr><td><strong>Maturity Chain</strong></td><td>Maturity Assessment</td><td>4-dimension scores, level JSON</td></tr>
                            <tr><td><strong>UseCase Chain</strong></td><td>Use Case Discovery</td><td>Opportunity list, priorities JSON</td></tr>
                            <tr><td><strong>ROI Chain</strong></td><td>ROI Analysis</td><td>NPV, IRR, scenario JSON</td></tr>
                            <tr><td><strong>Report Chain</strong></td><td>Report Generation</td><td>Structured consulting report</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Tech Stack</h3>
                <div class="modal-chips">
                    <span class="modal-chip">LCEL Pipeline</span>
                    <span class="modal-chip">ChatPromptTemplate</span>
                    <span class="modal-chip">ChatOllama</span>
                    <span class="modal-chip">StrOutputParser</span>
                    <span class="modal-chip">ChatHistory</span>
                    <span class="modal-chip">Callbacks</span>
                </div>
            `
        }
    },

    'tech-llamaindex': {
        icon: '📚',
        title: { ko: 'LlamaIndex — ISO 표준 기반 RAG 시스템', en: 'LlamaIndex — ISO Standards RAG System' },
        body: {
            ko: `
                <p><strong>LlamaIndex</strong>는 플랫폼의 <strong>RAG(Retrieval-Augmented Generation) 시스템</strong>으로, 4개의 ISO 국제 표준 문서를 벡터 인덱싱하여 컨설팅 분석에 표준 기반 근거를 제공합니다.</p>

                <h3>플랫폼 전문 임무</h3>
                <p><strong>AX 컨설팅의 신뢰성과 전문성을 ISO 국제 표준으로 뒷받침</strong>합니다. 성숙도 평가 시 ISO/IEC 42001 기준을, 유스케이스 설계 시 ISO 23894 리스크 프레임워크를, 보고서 작성 시 ISO 표준 포맷을 자동으로 참조하여 국제 기준에 부합하는 컨설팅 결과를 생성합니다.</p>

                <h3>지원 ISO 표준</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>표준</th><th>명칭</th><th>활용 단계</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>ISO/IEC 42001</strong></td><td>AI 관리 시스템</td><td>성숙도 평가, 거버넌스 설계</td></tr>
                            <tr><td><strong>ISO/IEC 23894</strong></td><td>AI 리스크 관리</td><td>리스크 평가, 완화 전략</td></tr>
                            <tr><td><strong>ISO/IEC 25059</strong></td><td>AI 시스템 품질</td><td>품질 검증, 보고서 포맷</td></tr>
                            <tr><td><strong>ISO/IEC 38507</strong></td><td>AI 거버넌스</td><td>전략 제안, 조직 설계</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>RAG 파이프라인</h3>
                <div class="modal-chips">
                    <span class="modal-chip">Document Loader</span>
                    <span class="modal-chip">Text Splitter</span>
                    <span class="modal-chip">Vector Embedding</span>
                    <span class="modal-chip">Index Store</span>
                    <span class="modal-chip">Query Engine</span>
                    <span class="modal-chip">Response Synthesis</span>
                </div>
            `,
            en: `
                <p><strong>LlamaIndex</strong> serves as the platform's <strong>RAG (Retrieval-Augmented Generation) system</strong>, vector-indexing 4 ISO international standard documents to provide standards-based evidence for consulting analyses.</p>

                <h3>Platform Mission</h3>
                <p><strong>Backs AX consulting credibility and expertise with ISO international standards</strong>. Automatically references ISO/IEC 42001 criteria during maturity assessment, ISO 23894 risk framework for use case design, and ISO standard formats for report writing — producing consulting results that comply with international standards.</p>

                <h3>Supported ISO Standards</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Standard</th><th>Title</th><th>Applied Stage</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>ISO/IEC 42001</strong></td><td>AI Management System</td><td>Maturity assessment, governance design</td></tr>
                            <tr><td><strong>ISO/IEC 23894</strong></td><td>AI Risk Management</td><td>Risk assessment, mitigation strategy</td></tr>
                            <tr><td><strong>ISO/IEC 25059</strong></td><td>AI System Quality</td><td>Quality validation, report format</td></tr>
                            <tr><td><strong>ISO/IEC 38507</strong></td><td>AI Governance</td><td>Strategy proposals, org design</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>RAG Pipeline</h3>
                <div class="modal-chips">
                    <span class="modal-chip">Document Loader</span>
                    <span class="modal-chip">Text Splitter</span>
                    <span class="modal-chip">Vector Embedding</span>
                    <span class="modal-chip">Index Store</span>
                    <span class="modal-chip">Query Engine</span>
                    <span class="modal-chip">Response Synthesis</span>
                </div>
            `
        }
    },

    'tech-ollama': {
        icon: '🦙',
        title: { ko: 'Ollama — 로컬 LLM 추론 백본', en: 'Ollama — Local LLM Inference Backbone' },
        body: {
            ko: `
                <p><strong>Ollama</strong>는 플랫폼의 <strong>핵심 LLM 추론 엔진</strong>으로, 모든 7개 멀티에이전트 프레임워크의 기본 언어 모델 백엔드입니다. 클라우드 API 의존 없이 로컬에서 완전한 AI 컨설팅을 실행할 수 있게 합니다.</p>

                <h3>플랫폼 전문 임무</h3>
                <p><strong>데이터 주권과 비용 효율성을 보장하는 로컬 AI 인프라</strong>입니다. 기업의 민감한 산업 데이터와 전략 정보가 외부 서버로 전송되지 않으며, API 호출 비용 없이 무제한 컨설팅 세션을 운영할 수 있습니다. Claude 온라인 API의 폴백으로도 동작하여 하이브리드 LLM 아키텍처를 구성합니다.</p>

                <h3>플랫폼 내 활용</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>프레임워크</th><th>Ollama 활용 방식</th><th>모델</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>LangGraph</strong></td><td>각 노드의 LLM 호출</td><td>llama3.1 / mistral</td></tr>
                            <tr><td><strong>CrewAI</strong></td><td>에이전트별 LLM 백엔드</td><td>llama3.1</td></tr>
                            <tr><td><strong>AutoGen AG2</strong></td><td>그룹챗 에이전트 추론</td><td>llama3.1</td></tr>
                            <tr><td><strong>DSPy</strong></td><td>CoT 모듈 실행</td><td>llama3.1</td></tr>
                            <tr><td><strong>LangChain</strong></td><td>ChatOllama 체인</td><td>llama3.1</td></tr>
                            <tr><td><strong>LlamaIndex</strong></td><td>RAG 응답 생성</td><td>llama3.1</td></tr>
                            <tr><td><strong>Native</strong></td><td>순차 에이전트 추론</td><td>llama3.1</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>핵심 장점</h3>
                <div class="modal-chips">
                    <span class="modal-chip">데이터 주권 보장</span>
                    <span class="modal-chip">API 비용 Zero</span>
                    <span class="modal-chip">오프라인 동작</span>
                    <span class="modal-chip">Hybrid LLM 폴백</span>
                    <span class="modal-chip">무제한 추론</span>
                </div>
            `,
            en: `
                <p><strong>Ollama</strong> is the platform's <strong>core LLM inference engine</strong>, serving as the default language model backend for all 7 multi-agent frameworks. Enables complete AI consulting execution locally without cloud API dependency.</p>

                <h3>Platform Mission</h3>
                <p><strong>Local AI infrastructure ensuring data sovereignty and cost efficiency</strong>. Sensitive industry data and strategic information never leave the local server, and unlimited consulting sessions run without API call costs. Also functions as a fallback for Claude online API, forming a hybrid LLM architecture.</p>

                <h3>Platform Integration</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Framework</th><th>Ollama Usage</th><th>Model</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>LangGraph</strong></td><td>LLM calls per node</td><td>llama3.1 / mistral</td></tr>
                            <tr><td><strong>CrewAI</strong></td><td>Per-agent LLM backend</td><td>llama3.1</td></tr>
                            <tr><td><strong>AutoGen AG2</strong></td><td>GroupChat agent inference</td><td>llama3.1</td></tr>
                            <tr><td><strong>DSPy</strong></td><td>CoT module execution</td><td>llama3.1</td></tr>
                            <tr><td><strong>LangChain</strong></td><td>ChatOllama chains</td><td>llama3.1</td></tr>
                            <tr><td><strong>LlamaIndex</strong></td><td>RAG response generation</td><td>llama3.1</td></tr>
                            <tr><td><strong>Native</strong></td><td>Sequential agent inference</td><td>llama3.1</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Key Advantages</h3>
                <div class="modal-chips">
                    <span class="modal-chip">Data Sovereignty</span>
                    <span class="modal-chip">Zero API Cost</span>
                    <span class="modal-chip">Offline Operation</span>
                    <span class="modal-chip">Hybrid LLM Fallback</span>
                    <span class="modal-chip">Unlimited Inference</span>
                </div>
            `
        }
    },

    'tech-fastapi': {
        icon: '🚀',
        title: { ko: 'FastAPI — 비동기 REST API 게이트웨이', en: 'FastAPI — Async REST API Gateway' },
        body: {
            ko: `
                <p><strong>FastAPI</strong>는 플랫폼의 <strong>REST API 게이트웨이</strong>로, 171개의 엔드포인트를 통해 모든 멀티에이전트 프레임워크와 서비스를 통합 제공합니다. 비동기(async/await) 처리로 동시 다중 컨설팅 세션을 효율적으로 관리합니다.</p>

                <h3>플랫폼 전문 임무</h3>
                <p><strong>7개 멀티에이전트 프레임워크의 통합 접근점</strong>입니다. 프론트엔드 애플리케이션, 외부 시스템, API 클라이언트가 단일 REST API를 통해 모든 AX 컨설팅 기능에 접근합니다. 자동 OpenAPI(Swagger) 문서 생성, Pydantic 기반 요청/응답 검증, 미들웨어 기반 인증과 로깅을 제공합니다.</p>

                <h3>라우터 그룹</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>라우터</th><th>엔드포인트 수</th><th>주요 기능</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Consulting</strong></td><td>핵심 API</td><td>컨설팅 세션 생성, 실행, 결과 조회</td></tr>
                            <tr><td><strong>Frameworks</strong></td><td>7개 프레임워크</td><td>LangGraph/CrewAI/AutoGen/DSPy/LangChain/LlamaIndex/Native</td></tr>
                            <tr><td><strong>Reports</strong></td><td>보고서 API</td><td>보고서 생성, 다운로드 (DOCX/PDF/PPTX)</td></tr>
                            <tr><td><strong>Standards</strong></td><td>ISO 표준</td><td>ISO 문서 검색, RAG 질의</td></tr>
                            <tr><td><strong>Analytics</strong></td><td>분석 API</td><td>ROI 계산, 성숙도 평가, 리스크 분석</td></tr>
                            <tr><td><strong>System</strong></td><td>시스템</td><td>헬스체크, 설정, 모니터링</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>기술 특장점</h3>
                <div class="modal-chips">
                    <span class="modal-chip">171 Endpoints</span>
                    <span class="modal-chip">Async/Await</span>
                    <span class="modal-chip">Pydantic Validation</span>
                    <span class="modal-chip">Auto Swagger Docs</span>
                    <span class="modal-chip">CORS Middleware</span>
                    <span class="modal-chip">JWT Authentication</span>
                </div>
            `,
            en: `
                <p><strong>FastAPI</strong> serves as the platform's <strong>REST API gateway</strong>, providing unified access to all multi-agent frameworks and services through 171 endpoints. Async/await processing efficiently manages concurrent multi-session consulting.</p>

                <h3>Platform Mission</h3>
                <p><strong>Unified access point for all 7 multi-agent frameworks</strong>. Frontend applications, external systems, and API clients access all AX consulting capabilities through a single REST API. Provides automatic OpenAPI (Swagger) documentation, Pydantic-based request/response validation, and middleware-based authentication and logging.</p>

                <h3>Router Groups</h3>
                <div class="modal-table-wrap">
                    <table class="modal-table">
                        <thead>
                            <tr><th>Router</th><th>Endpoints</th><th>Key Functions</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Consulting</strong></td><td>Core API</td><td>Session creation, execution, result retrieval</td></tr>
                            <tr><td><strong>Frameworks</strong></td><td>7 Frameworks</td><td>LangGraph/CrewAI/AutoGen/DSPy/LangChain/LlamaIndex/Native</td></tr>
                            <tr><td><strong>Reports</strong></td><td>Report API</td><td>Report generation, download (DOCX/PDF/PPTX)</td></tr>
                            <tr><td><strong>Standards</strong></td><td>ISO Standards</td><td>ISO document search, RAG queries</td></tr>
                            <tr><td><strong>Analytics</strong></td><td>Analytics API</td><td>ROI calculation, maturity, risk analysis</td></tr>
                            <tr><td><strong>System</strong></td><td>System</td><td>Health check, config, monitoring</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>Technical Highlights</h3>
                <div class="modal-chips">
                    <span class="modal-chip">171 Endpoints</span>
                    <span class="modal-chip">Async/Await</span>
                    <span class="modal-chip">Pydantic Validation</span>
                    <span class="modal-chip">Auto Swagger Docs</span>
                    <span class="modal-chip">CORS Middleware</span>
                    <span class="modal-chip">JWT Authentication</span>
                </div>
            `
        }
    }
};