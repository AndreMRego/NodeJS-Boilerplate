import { Request, Response } from "express";
import { GamesRepository } from "../repositories/GamesRepository";


class CreateGameController {
  private gamesRepository: GamesRepository;

  constructor(){
    this.gamesRepository = new GamesRepository();
  }

  async handle(request:Request, response: Response): Promise<Response> {
    const { title, category_id } = request.body;

    await this.gamesRepository.create({ title, category_id  });

    return response.status(201).send();
  }
}

export { CreateGameController }