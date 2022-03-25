import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);

    if(!user.admin) {
      throw new Error('You do not have persmission to list users');
    }

    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
