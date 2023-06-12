import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Truck } from 'src/entities/truck.entity';
import { TruckDto } from './truck.types';
@Injectable()
export class TruckRepository {
  constructor(
    @InjectRepository(Truck)
    private truckRepository: Repository<Truck>,
  ) {}

  async getAll(): Promise<Truck[]> {
    return await this.truckRepository.find();
  }

  async get(id: string): Promise<Truck> {
    return await this.truckRepository.findOneBy({
      id,
    });
  }

  async upsert(data: TruckDto): Promise<Truck> {
    return await this.truckRepository.save({
      ...data,
      id: data.id ? data.id : uuidv4(),
    });
  }

  async delete(id: string): Promise<boolean> {
    const deleteSuccess = await this.truckRepository.delete(id);
    return deleteSuccess.affected > 0 ? true : false;
  }
}
