import {EnvironmentTypeEnum } from "../enum"
import { AppConfigInterface } from "./app-config.interface";
import { EnvValidator } from "../util";


export default (): AppConfigInterface  => ({
  environment:{
    host:EnvValidator.getStringOrThrow("HOST"),
    env: EnvValidator.getEnumOrThrow("NODE_ENV", EnvironmentTypeEnum)
  },
  noSqlDb:{
    host:EnvValidator.getStringOrThrow("DB_HOST"),
    port:EnvValidator.getNumberOrThrow("DB_PORT"),
    username:EnvValidator.getStringOrThrow("DB_USER"),
    password:EnvValidator.getStringOrThrow("DB_PASSWORD"),
    dbName:EnvValidator.getStringOrThrow("DB_NAME"),
  },
  baseUrl:{
    baseUrl:EnvValidator.getStringOrThrow("BASE_URL"),
  }
})
