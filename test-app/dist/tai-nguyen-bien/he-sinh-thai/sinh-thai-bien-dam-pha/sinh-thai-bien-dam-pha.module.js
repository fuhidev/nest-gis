"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinhThaiBienDamPhaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sinh_thai_bien_dam_pha_controller_1 = require("./sinh-thai-bien-dam-pha.controller");
const sinh_thai_bien_dam_pha_entity_1 = require("./sinh-thai-bien-dam-pha.entity");
const sinh_thai_bien_dam_pha_service_1 = require("./sinh-thai-bien-dam-pha.service");
let SinhThaiBienDamPhaModule = class SinhThaiBienDamPhaModule {
};
SinhThaiBienDamPhaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sinh_thai_bien_dam_pha_entity_1.SinhThaiBienDamPhaEntity])],
        providers: [sinh_thai_bien_dam_pha_service_1.SinhThaiBienDamPhaService],
        controllers: [sinh_thai_bien_dam_pha_controller_1.SinhThaiBienDamPhaController],
    })
], SinhThaiBienDamPhaModule);
exports.SinhThaiBienDamPhaModule = SinhThaiBienDamPhaModule;
//# sourceMappingURL=sinh-thai-bien-dam-pha.module.js.map