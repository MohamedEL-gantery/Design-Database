import configTransform from "./interfaces/config-transform.interface";
import { ConfigModule } from "@nestjs/config";
import { Global, Module } from "@nestjs/common";
import { EnvService } from "./services";


const providers = [EnvService];
@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: `.env`,
			isGlobal: true,
			cache: true,
			load: [configTransform]
		})
	],
	providers,
	exports: providers
})
@Global()
export class EnvModule {}