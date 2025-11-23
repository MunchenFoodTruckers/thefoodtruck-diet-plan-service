import { Controller, Get } from "@nestjs/common";

@Controller()
export class UdietUplanController {
  @Get("/api/diet-plan/health")
  health() {
    return { ok: true, service: "diet-plan" };
  }

  @Get("/api/diet-plan")
  findAll() {
    return [];
  }
}
