import { useEffect, useState } from "react";
import { Text } from "../../theme/styledcomponents";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../types/stateType";
import { updateUser } from "../../features/auth/userSlice";
import Footer from "../../components/Footer/Footer";
import { updateUserSupa } from "../../services/databaseService";
import HeaderImageUploader from "../../components/HeaderImageUploader/HeaderImageUploader";
import ProfileImageUploader from "../../components/ProfileImageUploader/ProfileImageUploader";
import ProfileInfoForm from "../../components/ProfileInfoForm/ProfileInfoForm";
import Notification from "../../components/Notification/Notification";
import ActionButtons from "../../components/ActionButtons/ActionButtons";
import countries from "../../utils/countries";
import months from "../../utils/months";
import "./ProfilePage.css";

const ProfilePage = () => {
  const user = useSelector((state: AppState) => state.user || {});
  const dispatch = useDispatch();
  const cart = useSelector((state: AppState) => state.cart);

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
    setUsername(user.username);
    setGender(user.gender || "");
    setCountry(user.country || "");
    setBirthDate({
      day: user.birthDate?.split("/")[0] || "",
      month: user.birthDate?.split("/")[1] || "",
      year: user.birthDate?.split("/")[2] || "",
    });
    setProfilePicture(user.picture);
    setHeaderImage(user.header);
  }, [user]);

  const handleCancel = () => {
    setUsername(user.username);
    setGender(user.gender || "");
    setCountry(user.country || "");
    setBirthDate({
      day: user.birthDate?.split("/")[0] || "",
      month: user.birthDate?.split("/")[1] || "",
      year: user.birthDate?.split("/")[2] || "",
    });
    setProfilePicture(user.picture);
    setHeaderImage(user.header);
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
      cart: cart,
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
      <HeaderImageUploader headerImage={headerImage} handleImageChange={handleImageChange} />

      <div className="profile-image-section">
        <ProfileImageUploader profilePicture={profilePicture} handleImageChange={handleImageChange} />
        <Text variant="purple">Level: {user.level.toString().padStart(2, "0")}</Text>

        <Notification message={notification.message} type={notification.type as "success" | "error"} />
      </div>

      <ActionButtons handleSave={handleSave} handleCancel={handleCancel} />

      <ProfileInfoForm
        username={username}
        setUsername={setUsername}
        gender={gender}
        setGender={setGender}
        country={country}
        setCountry={setCountry}
        birthDate={birthDate}
        handleBirthDateChange={handleBirthDateChange}
        countries={countries.countries}
        months={months.months}
      />

      <Footer />
    </div>
  );
};

export default ProfilePage;

