import * as dotenv from 'dotenv';
import { EnvironmentTypeEnum } from '../enum';
import { EnvFileUtil } from './env-file.util';

dotenv.config({ path: EnvFileUtil.getEnvFilePath() });

export class EnvironmentUtil {
  /**
   * Checks if the current environment is local.
   * @returns {boolean} True if the environment is local, false otherwise.
   */
  static isLocalEnv(): boolean {
    return process.env.NODE_ENV === EnvironmentTypeEnum.Local;
  }

  /**
   * Checks if the current environment is development.
   * @returns {boolean} True if the environment is development, false otherwise.
   */
  static isDevelopmentEnv(): boolean {
    return process.env.NODE_ENV === EnvironmentTypeEnum.Development;
  }

  /**
   * Checks if the current environment is production.
   * @returns {boolean} True if the environment is production, false otherwise.
   */
  static isProductionEnv(): boolean {
    return process.env.NODE_ENV === EnvironmentTypeEnum.Production;
  }

  /**
   * Checks if the current environment is not production.
   * @returns {boolean} True if the environment is not production, false otherwise.
   */
  static isNonProdEnv(): boolean {
    return !this.isProductionEnv();
  }

  /**
   * Checks if the current environment matches the provided environment value.
   * @param {EnvironmentTypeEnum} env - The environment value to check.
   * @returns {boolean} True if the current environment matches the provided value, false otherwise.
   */
  static isEnvironment(env: EnvironmentTypeEnum): boolean {
    return process.env.NODE_ENV === env;
  }

  /**
   * Gets the current environment value.
   * @returns {string} The current environment value.
   */
  static getCurrentEnvironment(): string {
    return process.env.NODE_ENV || 'unknown';
  }
}
