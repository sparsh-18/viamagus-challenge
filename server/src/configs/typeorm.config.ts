import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Task } from 'src/modules/tasks/tasks.entity';
import { Team } from 'src/modules/team/entities/team.entity';
import { TeamMember } from 'src/modules/team/entities/teamMembers.entity';

// export default class TypeOrmConfig {
//     static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
//         // console.log(configService.get('DB_HOST'));
        
//         return 
//     }
// }

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory:
        async (configService: ConfigService): Promise<TypeOrmModuleOptions> =>
            ({
                type: 'mysql',
                host: configService.get('DB_HOST'),
                port: configService.get('DB_PORT'),
                username: configService.get('DB_USER'),
                password: '',
                database: configService.get('DB_NAME'),
                entities: [Team, TeamMember, Task],
                synchronize: true,
            })
};