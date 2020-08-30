
export interface IJudiciarySummaryDto {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  title: string;
  appointedBy: string;
  tenureYears: string;
  tenureMonths: string;
}

export interface IJudiciaryDetailDto {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  title: string;
  appointedBy: string;
  tenureYears: string;
  tenureMonths: string;
  keyDecisions: IKeyDecisionsDto[];
  keyDecisionsOpinions: IKeyDecisionsOpinionsDto[];
}

export interface IKeyDecisionsDto {
  title: string;
  titleDesc: string;
  year: string;
  docket: string;
  description: string;
  outcome: string;
  tally: string;
  voteCast: string;
  rollCallDecision: IRollCallDecisionDto[];

}

export interface IKeyDecisionsOpinionsDto {
  title: string;
  titleDesc: string;
  year: string;
  docket: string;
  description: string;
  outcome: string;
  tally: string;
  voteCast: string;
  type: string;
  quote: string;
  seqNo: number;

}

export interface IRollCallDecisionDto {
 judiciaryId: string;
 lastName: string;
 voteCast: string;
}

