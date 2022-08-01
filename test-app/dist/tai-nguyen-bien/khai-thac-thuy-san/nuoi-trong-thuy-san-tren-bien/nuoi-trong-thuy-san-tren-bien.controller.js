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
exports.NuoiTrongThuySanTrenBienController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const nuoi_trong_thuy_san_tren_bien_service_1 = require("./nuoi-trong-thuy-san-tren-bien.service");
const nuoi_trong_thuy_san_tren_bien_entity_1 = require("./nuoi-trong-thuy-san-tren-bien.entity");
const nestjs_gis_1 = require("../../../../../dist");
let NuoiTrongThuySanTrenBienController = class NuoiTrongThuySanTrenBienController {
    constructor(service) {
        this.service = service;
    }
};
NuoiTrongThuySanTrenBienController = __decorate([
    (0, nestjs_gis_1.RouteMetadata)(),
    (0, nestjs_gis_1.GISCrud)(),
    (0, crud_1.Crud)({
        model: { type: nuoi_trong_thuy_san_tren_bien_entity_1.NuoiTrongThuySanTrenBienEntity },
        params: {
            objectId: {
                field: 'objectId',
                type: 'number',
                primary: true,
            },
        },
    }),
    (0, common_1.Controller)('rest/nuoi-trong-thuy-san-tren-bien'),
    __metadata("design:paramtypes", [nuoi_trong_thuy_san_tren_bien_service_1.NuoiTrongThuySanTrenBienService])
], NuoiTrongThuySanTrenBienController);
exports.NuoiTrongThuySanTrenBienController = NuoiTrongThuySanTrenBienController;
//# sourceMappingURL=nuoi-trong-thuy-san-tren-bien.controller.js.map