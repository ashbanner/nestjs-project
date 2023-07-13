import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TruckDriverModule } from './app-modules/truck-driver/truck-driver.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TruckDriver } from './entities/truck-driver.entity';
import { TruckDriver1686511615395 } from './migrations/1686511615395-truck-driver';
import { TruckModule } from './app-modules/truck/truck.module';
import { Truck1686544948606 } from './migrations/1686544948606-truck';
import { Truck } from './entities/truck.entity';
import { ScheduleModule } from './app-modules/schedule/schedule.module';
import { Schedule } from './entities/schedule.entity';
import { Schedule1686782510996 } from './migrations/1686782510996-schedule';

@Module({
  imports: [
    TypeOrmModule.forFeature([TruckDriver, Truck]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      synchronize: false,
      entities: [TruckDriver, Truck, Schedule],
      migrations: [
        TruckDriver1686511615395,
        Truck1686544948606,
        Schedule1686782510996,
      ],
      migrationsTableName: 'migrations',
      migrationsRun: true,
    }),
    TruckDriverModule,
    TruckModule,
    ScheduleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
