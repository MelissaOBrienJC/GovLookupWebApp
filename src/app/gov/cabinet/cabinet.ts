

export interface ISchoolDto {
  schoolName: string;
  degree: string;
}

export interface IJobPositionDto {
  startYear: string;
  endYear: string;
  position: string;
}


export interface ICabinetSummaryDto {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  url: string;
  phone: string;
  fax: string;
  detail: ICabinetDetailDto;
}


export interface ICabinetDetailDto {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  party: string;
  title: string;
  formerPosition: string;
  twitterAccount: string;
  facebookAccount: string;
  youtubeAccount: string;
  url: string;
  phone: string;
  assumedOffice: string;
  birthLocation: string;
  twitterFeed: string;
  education: ISchoolDto[];
  jobHistory: IJobPositionDto[];
}
