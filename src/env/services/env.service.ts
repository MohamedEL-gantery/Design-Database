import {
  AppEnvironmentConfig,
  BaseUrlConfig,
  NoSqlDbConfig,
  AppPortConfig,
} from '../interfaces';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvService {
  constructor(private readonly configService: ConfigService) {}

  /**
   * Retrieve a configuration value from the environment or throw an error if not found.
   *
   * @param propertyPath The path to the configuration property.
   * @returns The configuration value.
   */
  private getOrThrow<T>(propertyPath: string): T {
    return this.configService.getOrThrow<T>(propertyPath);
  }

  /**
   * Retrieve the application environment configuration.
   *
   * @returns The application environment configuration.
   */
  public getAppEnvironmentConfig(): AppEnvironmentConfig {
    return this.getOrThrow<AppEnvironmentConfig>('environment');
  }

  /**
   * Retrieve the application port configuration.
   *
   * @returns  The application port configuration.
   */
  public getAppPortConfig(): AppPortConfig {
    return this.getOrThrow<AppPortConfig>('port');
  }

  /**
   * Retrieve the NoSQL database configuration.
   *
   * @returns The NoSQL database configuration.
   */
  public getNoSqlDbConfig(): NoSqlDbConfig {
    return this.getOrThrow<NoSqlDbConfig>('noSqlDb');
  }

  /**
   * Retrieve the base urls configuration.
   *
   * @returns The base urls configuration.
   */
  public getBaseUrlConfig(): BaseUrlConfig {
    return this.getOrThrow<BaseUrlConfig>('baseUrl');
  }
}
