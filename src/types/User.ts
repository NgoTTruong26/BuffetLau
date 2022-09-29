export interface User {
  id: string;
  dateOfBirth: string;
  email: string;
  gender: boolean;
  phoneNumber: string;
  address: string;
  firstName: string;
  lastName: string;
  avatar: string;
  username: string;
  token: string;
  position: {
    position: string;
  };
  createdDate?: string;
  updatedDate?: string;
  deletedDate?: string;
}
