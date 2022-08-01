"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiemXaThaiModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dm_dong_ho_do_module_1 = require("./danh-muc/dm-dong-ho-do/dm-dong-ho-do.module");
const diem_xa_thai_controller_1 = require("./diem-xa-thai.controller");
const diem_xa_thai_entity_1 = require("./diem-xa-thai.entity");
const diem_xa_thai_service_1 = require("./diem-xa-thai.service");
let DiemXaThaiModule = class DiemXaThaiModule {
};
DiemXaThaiModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([diem_xa_thai_entity_1.DiemXaThaiEntity]), dm_dong_ho_do_module_1.DMDongHoDoModule],
        providers: [diem_xa_thai_service_1.DiemXaThaiService],
        controllers: [diem_xa_thai_controller_1.DiemXaThaiController],
    })
], DiemXaThaiModule);
exports.DiemXaThaiModule = DiemXaThaiModule;
//# sourceMappingURL=diem-xa-thai.module.js.map