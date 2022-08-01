"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DauKhiBienModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dau_khi_bien_controller_1 = require("./dau-khi-bien.controller");
const dau_khi_bien_entity_1 = require("./dau-khi-bien.entity");
const dau_khi_bien_service_1 = require("./dau-khi-bien.service");
let DauKhiBienModule = class DauKhiBienModule {
};
DauKhiBienModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([dau_khi_bien_entity_1.DauKhiBienEntity])],
        providers: [dau_khi_bien_service_1.DauKhiBienService],
        controllers: [dau_khi_bien_controller_1.DauKhiBienController],
    })
], DauKhiBienModule);
exports.DauKhiBienModule = DauKhiBienModule;
//# sourceMappingURL=dau-khi-bien.module.js.map