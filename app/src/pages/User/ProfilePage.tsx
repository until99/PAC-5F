import React from "react";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import ProfileForm from "@/components/ProfileForm";

const ProfilePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="profile mt-24">
        <ProfileForm />
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
