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
exports.DMLoaiMatGiaoThongController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const nestjs_gis_1 = require("../../../../../../../dist");
const dm_loai_mat_giao_thong_entity_1 = require("./dm-loai-mat-giao-thong.entity");
const dm_loai_mat_giao_thong_service_1 = require("./dm-loai-mat-giao-thong.service");
let DMLoaiMatGiaoThongController = class DMLoaiMatGiaoThongController {
    constructor(service) {
        this.service = service;
    }
};
DMLoaiMatGiaoThongController = __decorate([
    (0, nestjs_gis_1.RouteMetadata)(),
    (0, crud_1.Crud)({
        model: { type: dm_loai_mat_giao_thong_entity_1.DMLoaiMatGiaoThongEntity },
        params: {
            code: {
                field: 'code',
                primary: true,
                type: 'number',
            },
        },
    }),
    (0, common_1.Controller)('rest/dm-loai-mat-giao-thong'),
    __metadata("design:paramtypes", [dm_loai_mat_giao_thong_service_1.DMLoaiMatGiaoThongService])
], DMLoaiMatGiaoThongController);
exports.DMLoaiMatGiaoThongController = DMLoaiMatGiaoThongController;
//# sourceMappingURL=dm-loai-mat-giao-thong.controller.js.map