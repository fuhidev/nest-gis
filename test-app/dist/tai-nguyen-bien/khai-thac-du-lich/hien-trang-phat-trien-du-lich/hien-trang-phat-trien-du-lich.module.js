"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HienTrangPhatTrienDuLichModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const hien_trang_phat_trien_du_lich_controller_1 = require("./hien-trang-phat-trien-du-lich.controller");
const hien_trang_phat_trien_du_lich_entity_1 = require("./hien-trang-phat-trien-du-lich.entity");
const hien_trang_phat_trien_du_lich_service_1 = require("./hien-trang-phat-trien-du-lich.service");
let HienTrangPhatTrienDuLichModule = class HienTrangPhatTrienDuLichModule {
};
HienTrangPhatTrienDuLichModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([hien_trang_phat_trien_du_lich_entity_1.HienTrangPhatTrienDuLichEntity])],
        providers: [hien_trang_phat_trien_du_lich_service_1.HienTrangPhatTrienDuLichService],
        controllers: [hien_trang_phat_trien_du_lich_controller_1.HienTrangPhatTrienDuLichController],
    })
], HienTrangPhatTrienDuLichModule);
exports.HienTrangPhatTrienDuLichModule = HienTrangPhatTrienDuLichModule;
//# sourceMappingURL=hien-trang-phat-trien-du-lich.module.js.map