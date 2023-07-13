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
import { AssignmentModule } from './app-modules/assignment/assignment.module';
import { Assignment } from './entities/assignment.entity';
import { Assignment1686793631648 } from './migrations/1686793631648-assignment';
import { Stop } from './entities/stops.entity';
import { Stop1686798635890 } from './migrations/1686798635890-stops';
import { StopModule } from './app-modules/stops/stops.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TruckDriver, Truck, Schedule, Assignment, Stop]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      synchronize: false,
      entities: [TruckDriver, Truck, Schedule, Assignment, Stop],
      migrations: [
        TruckDriver1686511615395,
        Truck1686544948606,
        Schedule1686782510996,
        Assignment1686793631648,
        Stop1686798635890,
      ],
      migrationsTableName: 'migrations',
      migrationsRun: true,
    }),
    TruckDriverModule,
    TruckModule,
    ScheduleModule,
    AssignmentModule,
    StopModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
