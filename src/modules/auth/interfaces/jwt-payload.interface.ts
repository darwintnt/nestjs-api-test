export interface JwtPayloadI {
  first_name: string;
  last_name: string;
  email: string;
  token: string;
  iat?: Date;
}
