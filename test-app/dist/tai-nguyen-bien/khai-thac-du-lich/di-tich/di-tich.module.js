"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiTichModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dm_cap_di_tich_module_1 = require("./danh-muc/dm-cap-di-tich/dm-cap-di-tich.module");
const di_tich_controller_1 = require("./di-tich.controller");
const di_tich_entity_1 = require("./di-tich.entity");
const di_tich_service_1 = require("./di-tich.service");
let DiTichModule = class DiTichModule {
};
DiTichModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([di_tich_entity_1.DiTichEntity]), dm_cap_di_tich_module_1.DmCapDiTichModule],
        providers: [di_tich_service_1.DiTichService],
        controllers: [di_tich_controller_1.DiTichController],
    })
], DiTichModule);
exports.DiTichModule = DiTichModule;
//# sourceMappingURL=di-tich.module.js.map