export type Roles = 'ADMIN' | 'SUPADMIN' | 'MEDICAL' | 'USER';
export type LoginDto = {
  email: string;
  password: string;
  role: Roles;
};
export type singUpDto = {
  data: {
    email: string;
    password: string;
    name: string;
  };
  role: Roles;
};
