import { Module } from '@nestjs/common';
import { NoSqlDbModule } from "./database"
import { EnvModule } from "./env"

@Module({
  imports: [EnvModule, NoSqlDbModule],
})
export class AppModule {}
