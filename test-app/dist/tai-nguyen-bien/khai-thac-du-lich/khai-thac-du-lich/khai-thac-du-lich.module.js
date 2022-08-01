"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KhaiThacDuLichModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const khai_thac_du_lich_controller_1 = require("./khai-thac-du-lich.controller");
const khai_thac_du_lich_entity_1 = require("./khai-thac-du-lich.entity");
const khai_thac_du_lich_service_1 = require("./khai-thac-du-lich.service");
let KhaiThacDuLichModule = class KhaiThacDuLichModule {
};
KhaiThacDuLichModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([khai_thac_du_lich_entity_1.KhaiThacDuLichEntity])],
        providers: [khai_thac_du_lich_service_1.KhaiThacDuLichService],
        controllers: [khai_thac_du_lich_controller_1.KhaiThacDuLichController],
    })
], KhaiThacDuLichModule);
exports.KhaiThacDuLichModule = KhaiThacDuLichModule;
//# sourceMappingURL=khai-thac-du-lich.module.js.map