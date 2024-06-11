using {id.apnv.usermanagement as my} from '../db/schema';

service UserService {
  entity Users as projection on my.Users;
}
