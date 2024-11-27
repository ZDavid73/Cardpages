import { FaEdit } from "react-icons/fa";

interface HeaderImageUploaderProps {
  headerImage: string;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>, type: "profile" | "header") => void;
}

const HeaderImageUploader: React.FC<HeaderImageUploaderProps> = ({ headerImage, handleImageChange }) => {
  return (
    <div
      className="profile-header-image"
      style={{
        backgroundImage: `url('${headerImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "60%",
        height: "50vh",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <label htmlFor="header-image-upload" className="edit-icon-wrapper">
        <FaEdit className="edit-icon" />
        <input
          type="file"
          id="header-image-upload"
          accept="image/*"
          onChange={(e) => handleImageChange(e, "header")}
          className="image-upload-input"
        />
      </label>
    </div>
  );
};

export default HeaderImageUploader;
