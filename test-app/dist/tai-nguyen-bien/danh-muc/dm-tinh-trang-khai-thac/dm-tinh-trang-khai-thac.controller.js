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
exports.DMTinhTrangKhaiThacController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const dm_tinh_trang_khai_thac_service_1 = require("./dm-tinh-trang-khai-thac.service");
const nestjs_gis_1 = require("../../../../../dist");
const dm_tinh_trang_khai_thac_entity_1 = require("./dm-tinh-trang-khai-thac.entity");
let DMTinhTrangKhaiThacController = class DMTinhTrangKhaiThacController {
    constructor(service) {
        this.service = service;
    }
};
DMTinhTrangKhaiThacController = __decorate([
    (0, nestjs_gis_1.RouteMetadata)(),
    (0, crud_1.Crud)({
        model: { type: dm_tinh_trang_khai_thac_entity_1.DMTinhTrangKhaiThacEntity },
        params: {
            code: {
                field: 'code',
                primary: true,
                type: 'number',
            },
        },
    }),
    (0, common_1.Controller)('rest/dm-tinh-trang-khai-thac'),
    __metadata("design:paramtypes", [dm_tinh_trang_khai_thac_service_1.DMTinhTrangKhaiThacService])
], DMTinhTrangKhaiThacController);
exports.DMTinhTrangKhaiThacController = DMTinhTrangKhaiThacController;
//# sourceMappingURL=dm-tinh-trang-khai-thac.controller.js.map