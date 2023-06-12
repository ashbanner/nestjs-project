import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TruckDriver } from 'src/entities/truck-driver.entity';
import { Repository } from 'typeorm';
import { TruckDriverDto } from './truck-driver.types';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class TruckDriverRepository {
  constructor(
    @InjectRepository(TruckDriver)
    private truckDriverRepository: Repository<TruckDriver>,
  ) {}

  async getAll(): Promise<TruckDriver[]> {
    return await this.truckDriverRepository.find();
  }

  async get(id: string): Promise<TruckDriver> {
    return await this.truckDriverRepository.findOneBy({
      id,
    });
  }

  async upsert(data: TruckDriverDto): Promise<TruckDriver> {
    return await this.truckDriverRepository.save({
      ...data,
      id: data.id ? data.id : uuidv4(),
    });
  }

  async delete(id: string): Promise<boolean> {
    const deleteSuccess = await this.truckDriverRepository.delete(id);
    return deleteSuccess.affected > 0 ? true : false;
  }
}
