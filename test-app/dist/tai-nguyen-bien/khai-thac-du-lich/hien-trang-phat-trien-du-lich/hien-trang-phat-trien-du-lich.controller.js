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
exports.HienTrangPhatTrienDuLichController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const hien_trang_phat_trien_du_lich_service_1 = require("./hien-trang-phat-trien-du-lich.service");
const hien_trang_phat_trien_du_lich_entity_1 = require("./hien-trang-phat-trien-du-lich.entity");
const nestjs_gis_1 = require("../../../../../dist");
let HienTrangPhatTrienDuLichController = class HienTrangPhatTrienDuLichController {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() { }
};
HienTrangPhatTrienDuLichController = __decorate([
    (0, nestjs_gis_1.RouteMetadata)(),
    (0, nestjs_gis_1.GISCrud)(),
    (0, crud_1.Crud)({
        model: { type: hien_trang_phat_trien_du_lich_entity_1.HienTrangPhatTrienDuLichEntity },
        params: {
            objectId: {
                primary: true,
                field: 'objectId',
                type: 'number',
            },
        },
    }),
    (0, common_1.Controller)('rest/hien-trang-phat-trien-du-lich'),
    __metadata("design:paramtypes", [hien_trang_phat_trien_du_lich_service_1.HienTrangPhatTrienDuLichService])
], HienTrangPhatTrienDuLichController);
exports.HienTrangPhatTrienDuLichController = HienTrangPhatTrienDuLichController;
//# sourceMappingURL=hien-trang-phat-trien-du-lich.controller.js.map