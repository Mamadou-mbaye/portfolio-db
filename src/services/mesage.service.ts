import { AppDataSource } from "../data-source";
import { Message } from "../entity/Message";
const msgRepository = AppDataSource.getRepository(Message);

export const registerMessage = async (
  fullName: string,
  email: string,
  message: string
) => {
  const msg = new Message();
  msg.fullName = fullName;
  msg.email = email;
  msg.message = message;
  await msgRepository.save(msg);
};
