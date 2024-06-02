// components/ProfileForm.tsx
import React, { useState, useEffect } from "react";
import ProfileInput from "./ProfileInput";

const ProfileForm: React.FC = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    password: "",
    profileImageUrl: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/profile/1", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await response.json();
        setProfile({
          firstName: data.firstName,
          lastName: data.lastName,
          password: data.password,
          profileImageUrl: data.profileImageUrl,
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
      const response = await fetch("http://localhost:8080/api/v1/profile", {
        method: "PUT", // Change to PUT method for updating
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

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
        src={profile.profileImageUrl}
        alt="profile icon"
      />
      <ProfileInput
        label="Nome"
        type="text"
        name="firstName"
        value={profile.firstName}
        onChange={handleChange}
      />
      <ProfileInput
        label="Sobrenome"
        type="text"
        name="lastName"
        value={profile.lastName}
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
        name="profileImageUrl"
        value={profile.profileImageUrl}
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
