"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThuyLoiModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const thuy_loi_controller_1 = require("./thuy-loi.controller");
const thuy_loi_entity_1 = require("./thuy-loi.entity");
const thuy_loi_service_1 = require("./thuy-loi.service");
let ThuyLoiModule = class ThuyLoiModule {
};
ThuyLoiModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([thuy_loi_entity_1.ThuyLoiEntity])],
        providers: [thuy_loi_service_1.ThuyLoiService],
        controllers: [thuy_loi_controller_1.ThuyLoiController],
    })
], ThuyLoiModule);
exports.ThuyLoiModule = ThuyLoiModule;
//# sourceMappingURL=thuy-loi.module.js.map