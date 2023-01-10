import fs from "fs/promises";
import syncFs from "fs";

interface ConfigInterface {
  token: string;
  users: { [userid: string]: { login: string; password: string; shared_secret: string }[] };
}
interface MessagesInterface {
    helpMessage: string,
    unknownMessage: string,
    noAccountsMessage: string,
    noAccessMessage: string
}

export const getConfig = async () => {
  const config = JSON.parse(await fs.readFile("./config/config.json", "utf-8"));
  return config as ConfigInterface;
};

export const getConfigSync = () => {
  const config = JSON.parse(syncFs.readFileSync("./config/config.json", "utf-8"));
  return config as ConfigInterface;
};

export const getMessages = async () =>{
    const messages = JSON.parse(await fs.readFile("./config/messages.json", "utf-8"));
    return messages as MessagesInterface;
}