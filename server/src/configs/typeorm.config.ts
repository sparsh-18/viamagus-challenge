import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Team } from 'src/modules/team/entities/team.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'viamagus-challenge',
    entities: [Team],
    synchronize: true,
}