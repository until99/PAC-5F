import { ChangeEvent, useEffect, useState } from 'react';
import { pb } from '@/lib/pocketbase';
import { getUserById } from '@/services/Users';

const UpdateProfile = () => {
  const [uploading, setUploading] = useState<boolean>(false);

  const [username, setUsername] = useState<string>('');
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState<string>('');

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUserById(pb.authStore.model?.id);
        setUsername(res.username || '');
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (newPassword !== newPasswordConfirm) {
      alert('Passwords do not match');
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append('username', username);
    if (oldPassword && newPassword) {
      formData.append('oldPassword', oldPassword);
      formData.append('password', newPassword);
      formData.append('passwordConfirm', newPasswordConfirm);
    }

    if (selectedFile) {
      formData.append('avatar', selectedFile);
    }

    try {
      await pb.collection('TB_USERS').update(pb.authStore.model?.id, formData);
      window.location.reload();
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex px-12">
      <div className="bg-white p-6 rounded shadow-md flex flex-col">
        <h1 className="text-2xl mb-4">Update Profile</h1>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="mb-4"
        />
        <input
          type="password"
          name="oldPassword"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          placeholder="Old Password"
          className="mb-4"
        />
        <input
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          className="mb-4"
        />
        <input
          type="password"
          name="newPasswordConfirm"
          value={newPasswordConfirm}
          onChange={(e) => setNewPasswordConfirm(e.target.value)}
          placeholder="Confirm New Password"
          className="mb-4"
        />
        <label htmlFor="avatar">Avatar</label>
        <input
          id="avatar"
          type="file"
          onChange={handleFileChange}
          className="mb-4"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {uploading ? 'Uploading...' : 'Update Profile'}
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
