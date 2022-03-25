import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userWillTurnAdmin = this.usersRepository.findById(user_id)
    
    if(!userWillTurnAdmin) {
      throw new Error('User not exist')
    }

    const user = this.usersRepository.turnAdmin(userWillTurnAdmin)
    return user;
  }
}

export { TurnUserAdminUseCase };
