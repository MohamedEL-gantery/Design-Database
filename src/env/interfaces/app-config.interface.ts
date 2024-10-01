import { EnvironmentTypeEnum } from "../enum";

export interface AppEnvironmentConfig {
  host: string;
  env: EnvironmentTypeEnum;
}

export interface NoSqlDbConfig {
	host: string;
	port?: number;
	username: string;
	password: string;
	dbName?: string;
}

export interface BaseUrlConfig {
  baseUrl: string;
}



export interface AppConfigInterface {
  environment: AppEnvironmentConfig;
  noSqlDb: NoSqlDbConfig;
  baseUrl: BaseUrlConfig;
}