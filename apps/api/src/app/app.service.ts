import { Injectable } from '@nestjs/common';
import { IMusic, Message } from '@existek/api-interfaces';
import { IUser } from '@existek/api-interfaces';

@Injectable()
export class AppService {
  idCoutner = 2;
  private readonly Users: IUser[] = [
    { id: 0, name: 'Vlad', email: 'sampleuser1@mail.com', password: '1' },
    { id: 1, name: 'Max', email: 'sampleuser2@mail.com', password: '2' },
  ];
  private readonly Music: IMusic[] = [
    {
      id: 0,
      title: 'Heart Attack',
      year: 2016,
      author: 'Scarlxrd',
      genre: 'Heavy Metal',
      album: 'Chaxsthexry',
    },
    {
      id: 1,
      title: 'DeathPunch',
      year: 2016,
      author: 'Scarlxrd',
      genre: 'Heavy Metal',
      album: 'Chaxsthexry',
    },
    {
      id: 2,
      title: 'Swear to God',
      year: 2019,
      author: 'Convolk',
      genre: 'Hyperpop',
      album: 'ANTIHERO',
    },
    {
      id: 3,
      title: 'Devil Eyes',
      year: 2012,
      author: 'Hippie Sabotage',
      genre: 'House',
      album: 'Providence',
    },
    {
      id: 4,
      title: 'Monday',
      year: 2020,
      author: 'Rocket',
      genre: 'Rap',
      album: 'Monday',
    },
    {
      id: 5,
      title: 'Hells Bells',
      year: 1991,
      author: 'AC/DC',
      genre: 'Rock',
      album: 'Back In Black',
    },
    {
      id: 6,
      title: 'SSC Tuatara',
      year: 2018,
      author: 'Link',
      genre: 'Phonk',
      album: 'SSC Tuatara',
    },
    {
      id: 7,
      title: 'Shoot to Thrill',
      year: 1991,
      author: 'AC/DC',
      genre: 'Rock',
      album: 'Back In Black',
    },
    {
      id: 8,
      title: 'Back In Black',
      year: 1991,
      author: 'AC/DC',
      genre: 'Rock',
      album: 'Back In Black',
    },
    {
      id: 9,
      title: 'Million',
      year: 2021,
      author: 'Kizaru',
      genre: 'Rap',
      album: 'Bandana',
    },
    {
      id: 10,
      title: 'Bon Voyage',
      year: 2021,
      author: 'Kizaru',
      genre: 'Rap',
      album: 'Bandana',
    },
    {
      id: 11,
      title: 'Not Enough',
      year: 2012,
      author: 'Hippie Sabotage',
      genre: 'House',
      album: 'Providence',
    },
  ];
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
  getUsers(): IUser[] {
    return this.Users;
  }
  getSongs(): IMusic[] {
    return this.Music;
  }
  addUser(userObj) {
    const newUserObj: IUser = {
      id: this.idCoutner,
      name: userObj.name,
      email: userObj.email,
      password: userObj.password,
    };
    this.idCoutner++;
    this.Users.push(newUserObj);
    return this.Users;
  }
}
