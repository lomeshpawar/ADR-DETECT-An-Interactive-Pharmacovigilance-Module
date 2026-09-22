import { FALLBACK_CASES, FALLBACK_REACTION_TYPES } from '../data/fallbackCases';

export const calculateLocalScore = (caseId, assessmentData) => {
  const c = FALLBACK_CASES.find(item => item.id === Number(caseId)) || FALLBACK_CASES[0];
  const exp = c.expectedAnswers;

  // 1. Suspected Drug (15 pts)
  const drugCorrect = Boolean(assessmentData.suspectedDrug &&
    exp.suspectedDrug.toLowerCase().includes(assessmentData.suspectedDrug.toLowerCase().trim()));
  const drugScore = drugCorrect ? 15 : 0;

  // 2. Reaction (15 pts)
  const reactionCorrect = Boolean(assessmentData.reaction &&
    (exp.reactionName.toLowerCase().includes(assessmentData.reaction.toLowerCase().trim()) ||
     assessmentData.reaction.toLowerCase().includes(exp.reactionName.toLowerCase().trim())));
  const reactionScore = reactionCorrect ? 15 : 0;

  // 3. Reaction Type A-F (20 pts)
  const reactionTypeCorrect = assessmentData.reactionType === exp.reactionType;
  const reactionTypeScore = reactionTypeCorrect ? 20 : 0;

  // 4. Severity (15 pts)
  const severityCorrect = assessmentData.severity === exp.severity;
  const severityScore = severityCorrect ? 15 : 0;

  // 5. Causality (15 pts)
  const causalityCorrect = assessmentData.causality === exp.causality;
  const causalityScore = causalityCorrect ? 15 : 0;

  // 6. Intervention (10 pts)
  const submittedInterventions = assessmentData.interventions || [];
  const correctInterventions = exp.interventions || [];
  let interventionScore = 0;
  let interventionsCorrect = false;

  if (correctInterventions.length > 0 && submittedInterventions.length > 0) {
    const matches = submittedInterventions.filter(i => correctInterventions.includes(i)).length;
    if (matches === correctInterventions.length && submittedInterventions.length === correctInterventions.length) {
      interventionsCorrect = true;
      interventionScore = 10;
    } else if (matches > 0) {
      interventionScore = Math.round((matches / correctInterventions.length) * 10);
    }
  }

  // 7. Reporting (10 pts)
  const reportingScore = 10;

  const totalScore = drugScore + reactionScore + reactionTypeScore + severityScore + causalityScore + interventionScore + reportingScore;
  const maxScore = 100;
  const percentage = (totalScore / maxScore) * 100;

  let stars = 1;
  if (percentage >= 90) stars = 5;
  else if (percentage >= 75) stars = 4;
  else if (percentage >= 60) stars = 3;
  else if (percentage >= 40) stars = 2;

  const typeInfo = FALLBACK_REACTION_TYPES.find(t => t.code === exp.reactionType);
  const typeDef = typeInfo ? `Type ${typeInfo.code} (${typeInfo.name}): ${typeInfo.description}. Mechanism: ${typeInfo.mechanism}` : `Type ${exp.reactionType}`;

  return {
    caseId: c.id,
    caseTitle: c.title,
    suspectedDrugScore: drugScore,
    reactionScore: reactionScore,
    reactionTypeScore: reactionTypeScore,
    severityScore: severityScore,
    causalityScore: causalityScore,
    interventionScore: interventionScore,
    reportingScore: reportingScore,
    totalScore,
    maxScore,
    percentage,
    stars,
    submittedDrug: assessmentData.suspectedDrug,
    correctDrug: exp.suspectedDrug,
    drugCorrect,
    submittedReaction: assessmentData.reaction,
    correctReaction: exp.reactionName,
    reactionCorrect,
    submittedReactionType: assessmentData.reactionType,
    correctReactionType: exp.reactionType,
    reactionTypeCorrect,
    submittedSeverity: assessmentData.severity,
    correctSeverity: exp.severity,
    severityCorrect,
    submittedCausality: assessmentData.causality,
    correctCausality: exp.causality,
    causalityCorrect,
    submittedInterventions,
    correctInterventions,
    interventionsCorrect,
    reactionTypeDefinition: typeDef,
    clinicalExplanation: exp.explanation,
    learningPoints: exp.learningPoints,
    outcome: exp.outcome
  };
};
