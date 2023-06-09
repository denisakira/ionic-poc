import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.street = createUserDto.street;
    user.city = createUserDto.city;
    user.state = createUserDto.state;
    user.jobTitle = createUserDto.jobTitle;
    user.phone = createUserDto.phone;
    user.photo = createUserDto.photo;

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
