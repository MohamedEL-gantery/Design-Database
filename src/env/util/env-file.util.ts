import { resolve } from "path";
import * as dotenv from "dotenv";

export class EnvFileUtil {
	/**
	 * Returns the path to the environment-specific .env file, verifying its existence.
	 *
	 * @returns The file path as a string.
	 * @throws Error if the file does not exist.
	 */
	public static getEnvFilePath(): string {
		const env = process.env.NODE_ENV;

		if (!env) {
			throw new Error("Environment is not defined!");
		}

		const filePath = resolve(process.cwd(), `.env.${env}`);

		return filePath;
	}
}

dotenv.config({ path: EnvFileUtil.getEnvFilePath() });