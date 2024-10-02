import { Global, Module, OnApplicationBootstrap } from '@nestjs/common';
import { EnvironmentUtil } from '../env/util';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { noSqlModels } from './schemas/';
import { EnvService } from '../env/services';
import { EnvModule } from '../env';

@Global()
@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [EnvModule],
      useFactory: async (envService: EnvService) => {
        if (EnvironmentUtil.isLocalEnv()) {
          const { host, password, username, dbName, port } =
            envService.getNoSqlDbConfig();
          const uri = `mongodb://${username}:${password}@${host}:${port}/${dbName}?authSource=admin`;
          return { uri };
        } else {
          const { host, password, username, dbName } =
            envService.getNoSqlDbConfig();
          const uri = `mongodb+srv://${username}:${password}@${host}/?retryWrites=true&w=majority&appName=${dbName}`;
          return { uri };
        }
      },
      inject: [EnvService],
    }),
    MongooseModule.forFeature(noSqlModels),
  ],

  exports: [MongooseModule],
})
export class NoSqlDbModule implements OnApplicationBootstrap {
  constructor(private readonly envService: EnvService) {}

  async onApplicationBootstrap(): Promise<void> {
    try {
      const { host, dbName } = this.envService.getNoSqlDbConfig();
      console.log(
        `[MongoDB] The connection with database "${dbName}" on host "${host}" is done successfully!`,
      );
    } catch (error) {
      const { code, address, port } = error;
      console.error(
        `[MongoDB] Failed to connect to the database. Error: ${code} ${address}:${port}!`,
      );
    }
  }
}
