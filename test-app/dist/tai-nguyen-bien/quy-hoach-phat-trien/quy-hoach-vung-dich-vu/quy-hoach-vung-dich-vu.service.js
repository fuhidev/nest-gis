"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuyHoachVungDichVuService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const quy_hoach_vung_dich_vu_entity_1 = require("./quy-hoach-vung-dich-vu.entity");
const nestjs_gis_1 = require("../../../../../dist");
let QuyHoachVungDichVuService = class QuyHoachVungDichVuService extends nestjs_gis_1.GISTypeOrmCrudService {
    constructor(repo) {
        super(repo);
    }
};
QuyHoachVungDichVuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(quy_hoach_vung_dich_vu_entity_1.QuyHoachAnNinhQuocPhongEntity)),
    __metadata("design:paramtypes", [Object])
], QuyHoachVungDichVuService);
exports.QuyHoachVungDichVuService = QuyHoachVungDichVuService;
//# sourceMappingURL=quy-hoach-vung-dich-vu.service.js.map