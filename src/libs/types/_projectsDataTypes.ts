// project-data/types.ts

export interface Project {
  name: string;
  team: string[] | string;
  role: string;
  period: string;
  address: string;
  gitRepo: string;
  skills: string[];
  pointDescriptions: string[];
  logo: string;
  textLogo?: string;
  troubleShootings?: Troubleshooting[];
  myJobs?: MyJob[];
}

export interface Troubleshooting {
  title: string;
  problemSituation: string;
  process: {
    littleTitle: string;
    text: string;
    more?: string;
  }[];
  result: string[];
}

export interface MyJob {
  description: string;
  img?: string;
}
