import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Stop } from 'src/entities/stops.entity';
import { StopsDto } from './stops.types';
@Injectable()
export class StopsRepository {
  constructor(
    @InjectRepository(Stop)
    private stopsRepository: Repository<Stop>,
  ) {}

  async getAll(): Promise<Stop[]> {
    return await this.stopsRepository.find();
  }

  async get(id: string): Promise<Stop> {
    return await this.stopsRepository.findOneBy({
      id,
    });
  }

  async upsert(data: StopsDto): Promise<Stop> {
    return await this.stopsRepository.save({
      ...data,
      id: data.id ? data.id : uuidv4(),
    });
  }

  async delete(id: string): Promise<boolean> {
    const deleteSuccess = await this.stopsRepository.delete(id);
    return deleteSuccess.affected > 0 ? true : false;
  }
}
