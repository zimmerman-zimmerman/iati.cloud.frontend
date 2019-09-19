import { OrganisationTypesInterface } from 'app/state/interfaces/OrganisationTypesInterface';
import { OrganisationsInterface } from 'app/state/interfaces/OrganisationsInterface';
import { SectorsInterface } from 'app/state/interfaces/SectorsInterface';
import { RegionInterface } from 'app/state/interfaces/RegionsInterface';
import { CountryInterface } from 'app/state/interfaces/CountriesInterface';
import { SectorCategoryInterface } from 'app/state/interfaces/SectorCategoryInterface';
import { ActivityScopeInterface } from 'app/state/interfaces/ActivityScopeInterface';
import { ActivityStatusInterface } from 'app/state/interfaces/ActivityStatusInterface';
import { AidTypeInterface } from 'app/state/interfaces/AidTypeInterface';
import { AidTypeVocabularyInterface } from 'app/state/interfaces/AidTypeVocabularyInterface';
import { AidTypeCategoryInterface } from 'app/state/interfaces/AidTypeCategoryInterface';
import { CollaborationTypeInterface} from '../interfaces/CollaborationTypeInterface';
import { DefaultCurrencyInterface } from 'app/state/interfaces/DefaultCurrencyInterface';
import { DefaultFlowTypeInterface} from '../interfaces/DefaultFlowTypeInterface';
import {HierarchyInterface} from '../interfaces/HierarchyInterface';
import {FinanceTypeInterface} from 'app/state/interfaces/FinanceTypeInterface';
import {TiedStatusInterface} from '../interfaces/TiedStatusInterface';
import {TransactionTypeInterface} from 'app/state/interfaces/TransactionTypeInterface';
import { TransactionProviderOrgScope } from 'app/state/interfaces/TransactionProviderOrgsInterface';
import { TransactionReceiverOrgsInterface } from 'app/state/interfaces/TransactionReceiverOrgsInterface';
import { ParticipatingOrgsInterface } from 'app/state/interfaces/ParticipatingOrgsInterface';
// import { BorgCollectiveModel } from 'app/state/models/CyborgModel';
import { QueryModel } from 'app/state/models/QueryModel';

export interface ApplicationStoreModel {
  organisationTypes: OrganisationTypesInterface;
  organisations: OrganisationsInterface;
  sectors: SectorsInterface;
  regions: RegionInterface;
  countries: CountryInterface;
  sectorCategories: SectorCategoryInterface;
  // borgCollective: BorgCollectiveModel;
  query: QueryModel;
  activityStatus: ActivityStatusInterface;
  activityScope: ActivityScopeInterface;
  aidType: AidTypeInterface;
  aidTypeVocabulary: AidTypeVocabularyInterface;
  defaultCurrency: DefaultCurrencyInterface;
  participatingOrgs: ParticipatingOrgsInterface;
  aidTypeCategory: AidTypeCategoryInterface;
  collaborationType: CollaborationTypeInterface;
  defaultFlowType: DefaultFlowTypeInterface;
  hierarchy: HierarchyInterface;
  financeType: FinanceTypeInterface;
  tiedStatus: TiedStatusInterface;
  transactionType: TransactionTypeInterface;
  transactionProviderOrgs: TransactionProviderOrgScope;
  transactionReceiverOrgs: TransactionReceiverOrgsInterface;
}
