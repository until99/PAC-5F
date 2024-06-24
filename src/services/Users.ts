import { pb } from "@/lib/pocketbase";
import { IUser, IUserUpdate } from "@/interfaces/User";

export const getEvents = async (): Promise<IUser[]> => {
  try {
    const res = await pb.collection("TB_USERS").getList<IUser>(1, 10);
    const users = res.items.map((item: any) => ({
      id: item.id,
      username: item.username,
      verified: item.verified,
      email: item.email,
      created: item.created,
      updated: item.updated,
      avatar: item.avatar,
    }));
    
    return users;
        
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const getUserById = async (id: string): Promise<IUser> => {
  try {
    const res = await pb.collection("TB_USERS").getOne<IUser>(id);

    const user = {
      id: res.id,
      username: res.username,
      verified: res.verified,
      email: res.email,
      created: res.created,
      updated: res.updated,
      avatar: res.avatar,
    };

    console.log(user);
    

    return user;

      } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export const updateProfile = async (id: string, data: IUserUpdate) => {
  const formData = new FormData();
  formData.append('username', data.username);
  formData.append('avatar', data.avatar);
  formData.append('password', data.password);
  formData.append('passwordConfirm', data.passwordConfirm);

  try {
    await pb.collection('TB_USERS').update(id, formData);
    return true;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};
