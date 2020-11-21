import { Injectable } from '@angular/core';
import { IAdmin } from '../model/admin';

@Injectable()
export class AdminService {

  constructor() { }

  adminList: Array<IAdmin> = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      emailAddress: "johndoe@gmail.com"
    },
    {
      id: 2,
      firstName: "Anna",
      lastName: "Marie",
      emailAddress: "annamarie@gmail.com"
    },
    {
      id: 3,
      firstName: "Sebastien",
      lastName: "M",
      emailAddress: "sebastien@gmail.com"
    }
  ];

}
