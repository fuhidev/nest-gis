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
exports.KhaiThacDuLichController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const khai_thac_du_lich_service_1 = require("./khai-thac-du-lich.service");
const khai_thac_du_lich_entity_1 = require("./khai-thac-du-lich.entity");
const nestjs_gis_1 = require("../../../../../dist");
let KhaiThacDuLichController = class KhaiThacDuLichController {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() { }
};
KhaiThacDuLichController = __decorate([
    (0, nestjs_gis_1.RouteMetadata)(),
    (0, nestjs_gis_1.GISCrud)(),
    (0, crud_1.Crud)({
        model: { type: khai_thac_du_lich_entity_1.KhaiThacDuLichEntity },
        params: {
            objectId: {
                primary: true,
                field: 'objectId',
                type: 'number',
            },
        },
    }),
    (0, common_1.Controller)('rest/khai-thac-du-lich'),
    __metadata("design:paramtypes", [khai_thac_du_lich_service_1.KhaiThacDuLichService])
], KhaiThacDuLichController);
exports.KhaiThacDuLichController = KhaiThacDuLichController;
//# sourceMappingURL=khai-thac-du-lich.controller.js.map