import { EnvironmentTypeEnum } from '../enum';
import { AppConfigInterface } from './app-config.interface';
import { EnvValidator } from '../util';
import { EnvFileUtil } from '../util/env-file.util';

const noSqlDbConfig = {
  host: EnvValidator.getStringOrThrow('DB_HOST'),
  username: EnvValidator.getStringOrThrow('DB_USER'),
  password: EnvValidator.getStringOrThrow('DB_PASSWORD'),
  dbName: EnvValidator.getStringOrThrow('DB_NAME'),
  port: EnvFileUtil.getEnvFilePath().includes('local')
    ? EnvValidator.getNumberOrThrow('DB_PORT')
    : undefined,
};

export default (): AppConfigInterface => ({
  environment: {
    host: EnvValidator.getStringOrThrow('HOST'),
    env: EnvValidator.getEnumOrThrow('NODE_ENV', EnvironmentTypeEnum),
  },
  port: { port: EnvValidator.getNumberOrThrow('PORT') },
  noSqlDb: noSqlDbConfig,
  baseUrl: {
    baseUrl: EnvValidator.getStringOrThrow('BASE_URL'),
  },
});
