import {  getRepository, Repository } from 'typeorm'

import { Game } from '../entities/Game';

interface ICreateGameDTO {
  title: string;
  category_id: string;
};

interface IFindAllByCategoryDTO {
  category_id: string;
}
class GamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async create({ title, category_id }: ICreateGameDTO): Promise<void>{
    const game = this.repository.create({ title, category_id });

    await this.repository.save(game);
  }

  async list(): Promise<Game[]>{
    const games = await this.repository.find();

    return games;
  }


  async findAllByCategory({ category_id }: IFindAllByCategoryDTO): Promise<Game[]>{
    /* const games = await this.repository.find({ where: {
      category_id
    }}); */

    /* const games = await this.repository
      .createQueryBuilder("game")
      .where("game.category_id = :id", { id: category_id})
      .getMany(); */

    const games = await this.repository
      .query("SELECT * FROM games WHERE games.category_id = $1",
      [category_id]);

    return games;
  }
}

export { GamesRepository }