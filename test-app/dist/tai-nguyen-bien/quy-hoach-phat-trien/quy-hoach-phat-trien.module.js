"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuyHoachPhatTrienModule = void 0;
const common_1 = require("@nestjs/common");
const quy_hoach_vung_dich_vu_module_1 = require("./quy-hoach-vung-dich-vu/quy-hoach-vung-dich-vu.module");
let QuyHoachPhatTrienModule = class QuyHoachPhatTrienModule {
};
QuyHoachPhatTrienModule = __decorate([
    (0, common_1.Module)({
        imports: [quy_hoach_vung_dich_vu_module_1.QuyHoachVungDichVuModule],
        providers: [],
        controllers: [],
    })
], QuyHoachPhatTrienModule);
exports.QuyHoachPhatTrienModule = QuyHoachPhatTrienModule;
//# sourceMappingURL=quy-hoach-phat-trien.module.js.map