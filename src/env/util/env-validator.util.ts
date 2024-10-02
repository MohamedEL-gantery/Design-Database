import * as dotenv from 'dotenv';
import { EnvFileUtil } from './env-file.util';

dotenv.config({ path: EnvFileUtil.getEnvFilePath() });

export class EnvValidator {
  public static getStringOrThrow(name: string): string {
    const value = process.env[name];
    if (!value) {
      throw new Error(`Environment variable "${name}" is not defined`);
    }
    return value;
  }

  static getNumberOrThrow(name: string): number {
    const value = process.env[name];
    if (value === undefined) {
      throw new Error(`Environment variable "${name}" is not defined`);
    }

    const parsedValue = Number(value);
    if (isNaN(parsedValue)) {
      throw new Error(`Environment variable "${name}" is not a valid number`);
    }

    return parsedValue;
  }

  public static getBooleanOrThrow(name: string): boolean {
    const value = process.env[name];
    if (value === undefined) {
      throw new Error(`Environment variable "${name}" is not defined`);
    }
    return value.toLowerCase() === 'true';
  }

  public static getEnumOrThrow<T>(name: string, enumType: T): T[keyof T] {
    const value = this.getStringOrThrow(name);
    if (!Object.values(enumType).includes(value as T[keyof T])) {
      throw new Error(
        `Environment variable "${name}" has an invalid value: "${value}"`,
      );
    }
    return value as T[keyof T];
  }
}
