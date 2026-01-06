import {Job} from '../../models/job.model';
import {Work} from '../../models/work.model';

export interface PortfolioState {

  jobExperiences: Job[],

  works: Work[],

}
