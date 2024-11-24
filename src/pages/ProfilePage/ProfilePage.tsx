import Header from "../../components/Header/Header";
import { Container, Text, Button } from "../../theme/styledcomponents";
import { useSelector } from "react-redux";
import { AppState } from "../../types/stateType";
import './ProfilePage.css';

const ProfilePage = () => {
  const user = useSelector((state: AppState) => state.user);


  const headerImageUrl =
    "https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Header%20Images/pokemon-101-1280x960.webp";

  return (
    <div className="profile-page">
      <Header backgroundImageUrl={headerImageUrl} />

      <Container variant="small" className="profile-settings-container">
        <div className="profile-image-section">
          <img src={user.picture} alt="Profile" className="profile-image" />
        </div>
        <div className="profile-info-section">
          <Text variant="white">Username: {user.username}</Text>
          <Text variant="purple">Level: {user.level.toString().padStart(2, '0')}</Text>
        </div>
        <div className="profile-actions">
          <Button variant="purple">Change Profile Picture</Button>
          <Button variant="gray">Edit Profile Details</Button>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;

