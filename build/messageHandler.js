"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configReader_1 = require("./configReader");
const SteamTotp = require('steam-totp');
const handler = async (text, userid) => {
    if (!text || !userid)
        return (await (0, configReader_1.getMessages)()).noAccessMessage;
    const config = await (0, configReader_1.getConfig)();
    const users = config.users;
    if (!users[userid])
        return (await (0, configReader_1.getMessages)()).noAccessMessage;
    const accounts = users[userid];
    switch (text) {
        case "/accounts":
            if (accounts.length === 0)
                return (await (0, configReader_1.getMessages)()).noAccountsMessage;
            return accounts.map((a, index) => `\n#${index + 1}\nlogin: ${a.login}\npassword: ${a.password}\nguard:${SteamTotp.generateAuthCode(a.shared_secret)}`).join('\n');
        case "/help":
            return (await (0, configReader_1.getMessages)()).helpMessage;
        default:
            return (await (0, configReader_1.getMessages)()).unknownMessage;
    }
};
exports.default = handler;
