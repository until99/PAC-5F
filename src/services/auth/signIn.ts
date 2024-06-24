import { pb, isUserValid } from "@/lib/pocketbase";

export async function signIn(username: string, password: string) {
  await pb.collection("TB_USERS").authWithPassword(username, password);
  
  console.log(isUserValid);

  if (!isUserValid) {
    window.location.replace("/register");
  }
  window.location.replace("/");
}