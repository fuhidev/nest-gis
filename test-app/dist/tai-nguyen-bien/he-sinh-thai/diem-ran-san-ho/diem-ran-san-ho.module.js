"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiemRanSanHoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const diem_ran_san_ho_controller_1 = require("./diem-ran-san-ho.controller");
const diem_ran_san_ho_entity_1 = require("./diem-ran-san-ho.entity");
const diem_ran_san_ho_service_1 = require("./diem-ran-san-ho.service");
let DiemRanSanHoModule = class DiemRanSanHoModule {
};
DiemRanSanHoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([diem_ran_san_ho_entity_1.DiemRanSanHoEntity])],
        providers: [diem_ran_san_ho_service_1.DiemRanSanHoService],
        controllers: [diem_ran_san_ho_controller_1.DiemRanSanHoController],
    })
], DiemRanSanHoModule);
exports.DiemRanSanHoModule = DiemRanSanHoModule;
//# sourceMappingURL=diem-ran-san-ho.module.js.map