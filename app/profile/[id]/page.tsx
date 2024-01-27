import React from "react";
import { User } from "@/types";
import ProfileHeader from "@/components/profile/profile-header";

const user: User = {
  name: "John Doe",
  id:'223m213',
  email: "john@example.com",
  books: [],
  favorites: [],
  bio: "I am a passionate writer who loves to explore various genres.",
  joined: new Date("2022-01-01"),
  urls: { value: "https://shadcn.com" },
  photoUrl: "",
};

function page() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <ProfileHeader
        headerInfo={{
          name: user.name,
          photoUrl: user.photoUrl,
          joined: user.joined,
          bio: user.bio,
        }}
      />
    </div>
  );
}

export default page;
