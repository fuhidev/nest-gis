"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuyHoachAnNinhQuocPhongModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const quy_hoach_an_ninh_quoc_phong_controller_1 = require("./quy-hoach-an-ninh-quoc-phong.controller");
const quy_hoach_an_ninh_quoc_phong_entity_1 = require("./quy-hoach-an-ninh-quoc-phong.entity");
const quy_hoach_an_ninh_quoc_phong_service_1 = require("./quy-hoach-an-ninh-quoc-phong.service");
let QuyHoachAnNinhQuocPhongModule = class QuyHoachAnNinhQuocPhongModule {
};
QuyHoachAnNinhQuocPhongModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([quy_hoach_an_ninh_quoc_phong_entity_1.QuyHoachAnNinhQuocPhongEntity])],
        providers: [quy_hoach_an_ninh_quoc_phong_service_1.QuyHoachAnNinhQuocPhongService],
        controllers: [quy_hoach_an_ninh_quoc_phong_controller_1.QuyHoachAnNinhQuocPhongController],
    })
], QuyHoachAnNinhQuocPhongModule);
exports.QuyHoachAnNinhQuocPhongModule = QuyHoachAnNinhQuocPhongModule;
//# sourceMappingURL=quy-hoach-an-ninh-quoc-phong.module.js.map