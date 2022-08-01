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
exports.DMLoaiKhuVucDichVuService = void 0;
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dm_loai_khu_vuc_dich_vu_entity_1 = require("./dm-loai-khu-vuc-dich-vu.entity");
let DMLoaiKhuVucDichVuService = class DMLoaiKhuVucDichVuService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(repo) {
        super(repo);
    }
};
DMLoaiKhuVucDichVuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(dm_loai_khu_vuc_dich_vu_entity_1.DMLoaiKhuVucDichVuEntity)),
    __metadata("design:paramtypes", [Object])
], DMLoaiKhuVucDichVuService);
exports.DMLoaiKhuVucDichVuService = DMLoaiKhuVucDichVuService;
//# sourceMappingURL=dm-loai-khu-vuc-dich-vu.service.js.map