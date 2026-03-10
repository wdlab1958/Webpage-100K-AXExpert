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
    }
};