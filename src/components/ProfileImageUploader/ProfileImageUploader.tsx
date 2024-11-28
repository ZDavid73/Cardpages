import { FaEdit } from "react-icons/fa";

interface ProfileImageUploaderProps {
  profilePicture: string;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>, type: "profile" | "header") => void;
}

const ProfileImageUploader: React.FC<ProfileImageUploaderProps> = ({ profilePicture, handleImageChange }) => {
  return (
    <div className="profile-image-wrapper">
      <img src={profilePicture} alt="Profile" className="profile-image" />
      <label htmlFor="profile-image-upload" className="edit-icon-wrapper">
        <FaEdit className="edit-icon" />
        <input
          type="file"
          id="profile-image-upload"
          accept="image/*"
          onChange={(e) => handleImageChange(e, "profile")}
          className="image-upload-input"
        />
      </label>
    </div>
  );
};

export default ProfileImageUploader;
