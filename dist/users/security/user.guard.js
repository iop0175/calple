"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
(0, common_1.Injectable)();
class UserGuard extends (0, passport_1.AuthGuard)('jwt') {
    canActivate(context) {
        return super.canActivate(context);
    }
}
exports.UserGuard = UserGuard;
//# sourceMappingURL=user.guard.js.map