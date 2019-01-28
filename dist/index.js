"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const PORT = process.env.PORT || 5000;
App_1.default.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${PORT}`);
});
//# sourceMappingURL=index.js.map