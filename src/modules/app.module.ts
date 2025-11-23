import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UdietUplanModule } from "./diet-plan/diet-plan.module";
import { PrismaService } from "./prisma.service";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UdietUplanModule],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService]
})
export class AppModule { }
