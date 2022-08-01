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
exports.DuongTrieuController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const duong_trieu_service_1 = require("./duong-trieu.service");
const duong_trieu_entity_1 = require("./duong-trieu.entity");
const nestjs_gis_1 = require("../../../../../dist");
let DuongTrieuController = class DuongTrieuController {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() { }
};
DuongTrieuController = __decorate([
    (0, nestjs_gis_1.RouteMetadata)(),
    (0, nestjs_gis_1.GISCrud)(),
    (0, crud_1.Crud)({
        model: { type: duong_trieu_entity_1.DuongTrieuEntity },
        params: {
            objectId: {
                primary: true,
                field: 'objectId',
                type: 'number',
            },
        },
        query: {
            join: {
                loaiDuongTrieu: {}
            }
        }
    }),
    (0, common_1.Controller)('rest/duong-trieu'),
    __metadata("design:paramtypes", [duong_trieu_service_1.DuongTrieuService])
], DuongTrieuController);
exports.DuongTrieuController = DuongTrieuController;
//# sourceMappingURL=duong-trieu.controller.js.map