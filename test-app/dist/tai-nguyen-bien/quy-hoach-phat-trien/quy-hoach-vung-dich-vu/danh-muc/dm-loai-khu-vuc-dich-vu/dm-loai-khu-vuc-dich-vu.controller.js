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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DMLoaiKhuVucDichVuController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const nestjs_gis_1 = require("../../../../../../../dist");
const dm_loai_khu_vuc_dich_vu_entity_1 = require("./dm-loai-khu-vuc-dich-vu.entity");
const dm_loai_khu_vuc_dich_vu_service_1 = require("./dm-loai-khu-vuc-dich-vu.service");
let DMLoaiKhuVucDichVuController = class DMLoaiKhuVucDichVuController {
    constructor(service) {
        this.service = service;
    }
};
DMLoaiKhuVucDichVuController = __decorate([
    (0, nestjs_gis_1.RouteMetadata)(),
    (0, crud_1.Crud)({
        model: { type: dm_loai_khu_vuc_dich_vu_entity_1.DMLoaiKhuVucDichVuEntity },
        params: {
            code: {
                field: 'code',
                primary: true,
                type: 'string',
            },
        },
    }),
    (0, common_1.Controller)('rest/dm-loai-khu-vuc-dich-vu'),
    __metadata("design:paramtypes", [dm_loai_khu_vuc_dich_vu_service_1.DMLoaiKhuVucDichVuService])
], DMLoaiKhuVucDichVuController);
exports.DMLoaiKhuVucDichVuController = DMLoaiKhuVucDichVuController;
//# sourceMappingURL=dm-loai-khu-vuc-dich-vu.controller.js.map