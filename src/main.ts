import * as dotenv from "dotenv";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvFileUtil } from "./env/util";
import { EnvService } from "./env/services";

async function bootstrap( ): Promise<void> {
  dotenv.config({ path: EnvFileUtil.getEnvFilePath() });
  const app = await NestFactory.create(AppModule);
  
  const envService=app.get(EnvService);

	app.enableCors({
		origin: "*",
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE", 
		preflightContinue: true,
		optionsSuccessStatus: 204,
		credentials: true,
		allowedHeaders: "*"
	});

	await app.listen(Number(envService.getAppPortConfig()),() => {
		console.log(
			`The APP is running on PORT ${envService.getAppPortConfig()} in "${envService.getAppEnvironmentConfig().host}" in "${envService.getAppEnvironmentConfig().env}" environment!`
		);
	});
}
bootstrap();
