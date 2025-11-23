import { Module } from "@nestjs/common";
import { UdietUplanController } from "./diet-plan.controller";
import { UdietUplanService } from "./diet-plan.service";

@Module({
  controllers: [UdietUplanController],
  providers: [UdietUplanService],
})
export class UdietUplanModule {}
