import { Module} from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DietPlanModule } from "./diet-plan/diet-plan.module";
import { PrismaService } from "./prisma.service";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DietPlanModule],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService]
})
export class AppModule {}
