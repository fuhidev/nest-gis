"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NuoiTrongThuySanTrenBienModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nuoi_trong_thuy_san_tren_bien_controller_1 = require("./nuoi-trong-thuy-san-tren-bien.controller");
const nuoi_trong_thuy_san_tren_bien_entity_1 = require("./nuoi-trong-thuy-san-tren-bien.entity");
const nuoi_trong_thuy_san_tren_bien_service_1 = require("./nuoi-trong-thuy-san-tren-bien.service");
let NuoiTrongThuySanTrenBienModule = class NuoiTrongThuySanTrenBienModule {
};
NuoiTrongThuySanTrenBienModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([nuoi_trong_thuy_san_tren_bien_entity_1.NuoiTrongThuySanTrenBienEntity])],
        providers: [nuoi_trong_thuy_san_tren_bien_service_1.NuoiTrongThuySanTrenBienService],
        controllers: [nuoi_trong_thuy_san_tren_bien_controller_1.NuoiTrongThuySanTrenBienController]
    })
], NuoiTrongThuySanTrenBienModule);
exports.NuoiTrongThuySanTrenBienModule = NuoiTrongThuySanTrenBienModule;
//# sourceMappingURL=nuoi-trong-thuy-san-tren-bien.module.js.map