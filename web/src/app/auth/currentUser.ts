import { Role } from './role';

export class CurrentUser {
  id: number;
  username: String;
  password: String;
  jwtToken: String;
  role: Role[];
}
