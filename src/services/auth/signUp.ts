import { pb } from "@/lib/pocketbase";

export async function signup(username: string, email: string, password: string, passwordConfim: string) {
  const data = {
    username: username,
    email: email,
    password: password,
    passwordConfirm: passwordConfim,
  };
  await pb.collection("TB_USERS").create(data);
}