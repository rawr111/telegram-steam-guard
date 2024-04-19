import { getConfig, getMessages } from "./configReader";
const SteamTotp = require("steam-totp");

const handler = async (text?: string, userid?: number) => {
  if (!text || !userid) return (await getMessages()).noAccessMessage;
  console.log("random");
  const config = await getConfig();
  const users = config.users;
  if (!users[userid]) return (await getMessages()).noAccessMessage;
  const accounts = users[userid];

  switch (text) {
    case "/accounts":
      if (accounts.length === 0) return (await getMessages()).noAccountsMessage;
      return accounts
        .map(
          (a, index) =>
            `\n#${index + 1}\nlogin: ${a.login}\npassword: ${
              a.password
            }\nguard:${SteamTotp.generateAuthCode(a.shared_secret)}`,
        )
        .join("\n");
    case "/help":
      return (await getMessages()).helpMessage;
    default:
      return (await getMessages()).unknownMessage;
  }
};

export default handler;
