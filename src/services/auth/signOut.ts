import { pb } from "@/lib/pocketbase";

export function signout() {
  pb.authStore.clear();
  window.location.replace("/");
}