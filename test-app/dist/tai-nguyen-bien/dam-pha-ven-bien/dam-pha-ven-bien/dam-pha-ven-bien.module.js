"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DamPhaVenBienModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dam_pha_ven_bien_controller_1 = require("./dam-pha-ven-bien.controller");
const dam_pha_ven_bien_entity_1 = require("./dam-pha-ven-bien.entity");
const dam_pha_ven_bien_service_1 = require("./dam-pha-ven-bien.service");
const dm_loai_dam_pha_module_1 = require("./danh-muc/dm-loai-dam-pha/dm-loai-dam-pha.module");
let DamPhaVenBienModule = class DamPhaVenBienModule {
};
DamPhaVenBienModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([dam_pha_ven_bien_entity_1.DamPhaVenBienEntity]),
            dm_loai_dam_pha_module_1.DmLoaiDamPhaModule,
        ],
        providers: [dam_pha_ven_bien_service_1.DamPhaVenBienService],
        controllers: [dam_pha_ven_bien_controller_1.DamPhaVenBienController],
    })
], DamPhaVenBienModule);
exports.DamPhaVenBienModule = DamPhaVenBienModule;
//# sourceMappingURL=dam-pha-ven-bien.module.js.map