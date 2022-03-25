import { Request, Response } from "express";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";


class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    // (method) ListAllUsersUseCase.execute({ user_id }: IRequest): User[]
    const {user_id} = request.headers;

    try {
      const users = this.listAllUsersUseCase.execute({user_id: String(user_id)});
      return response.json(users);
    } catch (error) {
      return response.status(400).json({error: 'User not exist'})
    }

  }
}

export { ListAllUsersController };
