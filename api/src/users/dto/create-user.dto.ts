export class CreateUserDto {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  street: string;
  city: string;
  state: string;
  jobTitle: string;
  phone: string;
  photo?: string;
}
