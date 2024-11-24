import { useState } from "react";
import { Container, Text, Button } from "../../theme/styledcomponents";
import { useSelector } from "react-redux";
import { AppState } from "../../types/stateType";
import { FaEdit } from "react-icons/fa";
import "./ProfilePage.css";

export const headerImageUrl =
  "https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Header%20Images/pokemon-101-1280x960.webp";

const ProfilePage = () => {
  const user = useSelector((state: AppState) => state.user);

  const [username, setUsername] = useState(user.username);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  const [profileImage, setProfileImage] = useState(user.picture);
  const [headerImage, setHeaderImage] = useState(headerImageUrl);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, type: "profile" | "header") => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (type === "profile") {
          setProfileImage(reader.result as string);
        } else {
          setHeaderImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      {/* Header Image */}
      <div
        className="profile-header-image"
        style={{
          backgroundImage: `url('${headerImageUrl}')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '50vh',
          borderRadius: '10px',
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

      <Container variant="small" className="profile-settings-container">
        <div className="profile-image-section">
          {/* Profile Image */}
          <div className="profile-image-wrapper">
            <img src={profileImage} alt="Profile" className="profile-image" />
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
          <Text variant="purple">Level: {user.level.toString().padStart(2, "0")}</Text>
        </div>

        <div className="profile-info-section">
          <div className="form-group">
            <label htmlFor="username">
              <Text variant="white">Username</Text>
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">
              <Text variant="white">Gender</Text>
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="form-input"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="country">
              <Text variant="white">Country</Text>
            </label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="form-input"
            >
              <option value="">Select country</option>
              <option value="usa">United States</option>
              <option value="mexico">Mexico</option>
              <option value="canada">Canada</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>
        </div>

        <div className="profile-actions">
          <Button variant="purple">Save</Button>
          <Button variant="gray">Cancel</Button>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;

