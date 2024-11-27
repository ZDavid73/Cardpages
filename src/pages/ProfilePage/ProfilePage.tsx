import { useEffect, useState } from "react";
import { Text, Button, Tittle } from "../../theme/styledcomponents";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../types/stateType";
import { FaEdit } from "react-icons/fa";
import { updateUser } from "../../features/auth/userSlice";
import Footer from "../../components/Footer/Footer";
import { updateUserSupa } from "../../services/databaseService";
import "./ProfilePage.css";
import countries from "../../utils/countries";
import months from "../../utils/months";

const ProfilePage = () => {
  const user = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  const [originalUser, setOriginalUser] = useState(user);
  const [username, setUsername] = useState(user.username);
  const [gender, setGender] = useState(user.gender || "");
  const [country, setCountry] = useState(user.country || "");
  const [birthDate, setBirthDate] = useState({
    day: user.birthDate?.split("/")[0] || "",
    month: user.birthDate?.split("/")[1] || "",
    year: user.birthDate?.split("/")[2] || "",
  });
  const [profilePicture, setProfilePicture] = useState(user.picture);
  const [headerImage, setHeaderImage] = useState(user.header);
  const [notification, setNotification] = useState({ message: "", type: "" });


  useEffect(() => {
    setOriginalUser(user);
  }, [user]);

  const handleCancel = () => {
    setUsername(originalUser.username);
    setGender(originalUser.gender || "");
    setCountry(originalUser.country || "");
    setBirthDate({
      day: originalUser.birthDate?.split("/")[0] || "",
      month: originalUser.birthDate?.split("/")[1] || "",
      year: originalUser.birthDate?.split("/")[2] || "",
    });
    setProfilePicture(originalUser.picture);
    setHeaderImage(originalUser.header);
  };
  
  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "profile" | "header"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (type === "profile") {
          setProfilePicture(reader.result as string); 
        } else {
          setHeaderImage(reader.result as string); 
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBirthDateChange = (field: "day" | "month" | "year", value: string) => {
    setBirthDate({ ...birthDate, [field]: value });
  };

  const handleSave = async () => {
    
    const updatedUser = {
      id: user.id,
      username,
      picture: profilePicture, 
      header: headerImage, 
      level: user.level,
      gender,
      country,
      birthDate: `${birthDate.day}/${birthDate.month}/${birthDate.year}`, 
    };

    try {
      const { error } = await updateUserSupa(updatedUser);
  
      if (error) {
        console.error("Error updating user:", error.message);
        setNotification({ message: "Failed to update profile. Please try again.", type: "error" });
      } else {
        setNotification({ message: "Profile updated successfully!", type: "success" });
        dispatch(updateUser(updatedUser));
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setNotification({ message: "An unexpected error occurred.", type: "error" });
    }
  };

  return (
    <div className="profile-page">
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

      <div className="profile-image-section">
        <div className="profile-image-wrapper">
          <img src={profilePicture} alt="Profile" className="profile-image" /> {/* Imagen temporal */}
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

        {notification.message && (
  <div className={`notification ${notification.type}`}>
    {notification.message}
  </div>
)}

      </div>

      <div className="profile-actions">
        <Button variant="purple" onClick={handleSave}>
          Save
        </Button>
        <Button variant="gray" onClick={handleCancel}>
          Cancel
          </Button>
      </div>

      <div className="profile-info-section">
        <div className="form-datagroup">
          <label htmlFor="username">
            <Tittle variant="white">Username</Tittle>
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-datainput"
          />
        </div>

        <div className="form-datagroup">
          <label htmlFor="gender">
            <Tittle variant="white">Gender</Tittle>
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="form-datainput"
          >
            <option value="">Select gender</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-binary</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-datagroup">
          <label htmlFor="country">
            <Tittle variant="white">Country</Tittle>
          </label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="form-datainput"
          >
           {
            countries.countries.map((country) => ( 
              <option value={country.name}>
                {country.name}
              </option>))
           }
          </select>
        </div>

        <div className="form-datagroup">
          <label htmlFor="birth-date">
            <Tittle variant="white">Birth date</Tittle>
          </label>
          <div className="birth-date-fields">
            <input
              type="text"
              placeholder="Day"
              value={birthDate.day}
              onChange={(e) => handleBirthDateChange("day", e.target.value)}
              className="form-datainput birth-date-input"
            />
            <select
              value={birthDate.month}
              onChange={(e) => handleBirthDateChange("month", e.target.value)}
              className="form-datainput birth-date-input"
            >
              {months.months.map((month) => ( 
                <option value={month.number.toString().padStart(2, "0")}>
                  {month.name}
                </option>)
              )}
            </select>
            <input
              type="text"
              placeholder="Year"
              value={birthDate.year}
              onChange={(e) => handleBirthDateChange("year", e.target.value)}
              className="form-datainput birth-date-input"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
