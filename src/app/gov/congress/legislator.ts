export interface IKeyVoteDto {
      congress: string;
      issue: string;
      finalTitle: string;
      status: string;
      voteCast: string;
      voteDate_dt: Date;
      synopsis: string;
      congressYear: string;
      session: number;
      voteNumber: number;
      issueNo: string;
}

export interface IBillDto {
      legislatorId: string;
      congress: string;
      billId: string;
      shortTitle: string;
      cosponsoredDate: Date;
      sponsorId: string;
      sponsorName: string;
      sponsorParty: string;
      latestMajorAction_date: Date;
      latestMajorAction: string;
      sponsorType: string;
}
export interface ICommitteeDto {
      name: string;
      title: string;
}

export interface IRatingDto {
      seqNo: number;
      organization: string;
      organizationCode: string;
      type: string;
      rating: string;
      ratingDate: string;
      link: string;
      ratingDescription: string;
}

export interface IIndustryFinanceDto {
      industryName: string;
      total: number;
}

export interface IIndustryFinanceChart {
      labels: string[];
      datasets: IDataset[];
     }

export interface IDataset {
      data: any[];
      backgroundColor: string[];
      hoverBackgroundColor: string[];
}

export interface IPieChartOptions {
      title: IPieChartTitle;
      legend: IPieChartLegend;
}

export interface IPieChartTitle {
      display: boolean;
      text: string;
      fontsize: number;
}
export interface IPieChartLegend {
      position: string ;

}

 export interface  ILegislatorDetailDto {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  party: string;
  stateName: string;
  district: string;
  chamber: string;
  url: string;
  phone: string;
  leadershipRole: string;
  nextElection: string;
  twitterAccount: string;
  facebookAccount: string;
  youtubeAccount: string;
  voteSmartId: string;
  voteStat: IVoteStatDto;
  ratings: IRatingDto[];
  keyVotes: IKeyVoteDto[];
  bills: IBillDto[];
  committees: ICommitteeDto[];
  industryFinance: IIndustryFinanceDto[];
  industryFinanceChart: IIndustryFinanceChart[];
  industryFinanceChartOptions: IPieChartOptions;
}

 export interface  ILegislatorSummaryDto {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  party: string;
  stateName: string;
  district: string;
  chamber: string;
  url: string;
  phone: string;
  detail: ILegislatorDetailDto;
}

export interface IVoteStatDto {
    votesWithPartyPct:  string;
    missedVotesPct:  string;
}
