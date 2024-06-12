using {id.apnv.usermanagement as my} from '../db/schema';

service UserService @(requires: 'Admin') {
  entity Users as projection on my.Users;
}

annotate UserService.Users with @odata.draft.enabled;
