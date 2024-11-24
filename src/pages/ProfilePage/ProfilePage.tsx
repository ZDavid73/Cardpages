import { useState } from "react";
import { Text, Button, Tittle } from "../../theme/styledcomponents";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../types/stateType";
import { FaEdit } from "react-icons/fa";
import { updatePicture, updateHeader } from "../../features/auth/userSlice"; 
import "./ProfilePage.css";

const ProfilePage = () => {
  const user = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  const [username, setUsername] = useState(user.username);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "profile" | "header"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (type === "profile") {
          dispatch(updatePicture(reader.result as string));
        } else {
          dispatch(updateHeader(reader.result as string));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      <div
        className="profile-header-image"
        style={{
          backgroundImage: `url('${user.header}')`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "60%",
          height: "50vh",
          borderRadius: "10px",
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

      <div className="profile-image-section">
        <div className="profile-image-wrapper">
          <img src={user.picture} alt="Profile" className="profile-image" />
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
            <Tittle variant="white">Username</Tittle>
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
            <Tittle variant="white">Gender</Tittle>
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
            <Tittle variant="white">Country</Tittle>
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
    </div>
  );
};

export default ProfilePage;


