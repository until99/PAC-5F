import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileInput from "./ProfileInput";

const ProfileForm: React.FC = () => {
  const [profile, setProfile] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    profile_url_image: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/users/665c3c35e10537f0a3679fba"
        );

        const data = response.data;
        setProfile({
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          password: data.password,
          profile_url_image: data.profile_url_image,
        });
      } catch (error) {
        console.error(error);
        alert("Error fetching profile");
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.put(
        "http://localhost:8080/users/665c3c35e10537f0a3679fba",
        profile
      );

      alert("Profile updated successfully");
    } catch (error) {
      console.error(error);
      alert("Error updating profile");
    }
  };

  return (
    <div className="flex flex-col items-center gap-12">
      <img
        className="w-64 rounded-full"
        src={profile.profile_url_image}
        alt="profile icon"
      />
      <ProfileInput
        label="Nome"
        type="text"
        name="first_name"
        value={profile.first_name}
        onChange={handleChange}
      />
      <ProfileInput
        label="Sobrenome"
        type="text"
        name="last_name"
        value={profile.last_name}
        onChange={handleChange}
      />
      <ProfileInput
        label="Email"
        type="email"
        name="email"
        value={profile.email}
        onChange={handleChange}
      />
      <ProfileInput
        label="Password"
        type="password"
        name="password"
        value={profile.password}
        onChange={handleChange}
      />
      <ProfileInput
        label="Profile Url Image"
        type="text"
        name="profile_url_image"
        value={profile.profile_url_image}
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        className="rounded-full bg-black px-8 py-3 font-bold text-white hover:shadow-md"
      >
        Atualizar
      </button>
    </div>
  );
};

export default ProfileForm;
