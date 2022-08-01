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
exports.DmLoaiDamPhaController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const dm_loai_dam_pha_service_1 = require("./dm-loai-dam-pha.service");
const nestjs_gis_1 = require("../../../../../../../dist");
const dm_loai_dam_pha_entity_1 = require("./dm-loai-dam-pha.entity");
let DmLoaiDamPhaController = class DmLoaiDamPhaController {
    constructor(service) {
        this.service = service;
    }
};
DmLoaiDamPhaController = __decorate([
    (0, nestjs_gis_1.RouteMetadata)(),
    (0, crud_1.Crud)({
        model: { type: dm_loai_dam_pha_entity_1.DMLoaiDamPhaEntity },
        params: {
            code: {
                field: 'code',
                primary: true,
                type: 'number',
            },
        }
    }),
    (0, common_1.Controller)('rest/dm-loai-dam-pha'),
    __metadata("design:paramtypes", [dm_loai_dam_pha_service_1.DmLoaiDamPhaService])
], DmLoaiDamPhaController);
exports.DmLoaiDamPhaController = DmLoaiDamPhaController;
//# sourceMappingURL=dm-loai-dam-pha.controller.js.map