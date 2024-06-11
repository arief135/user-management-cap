using {managed} from '@sap/cds/common';

namespace id.apnv.usermanagement;

entity Users : managed {
  key username     : String;
      email        : String;
      password     : String;
      active       : Boolean;
      lastLoggedIn : DateTime;
}
