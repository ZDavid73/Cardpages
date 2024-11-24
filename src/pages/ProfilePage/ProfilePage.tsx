import { useState } from "react";
import { Container, Text, Button } from "../../theme/styledcomponents";
import { useSelector } from "react-redux";
import { AppState } from "../../types/stateType";
import "./ProfilePage.css";

// URL de la imagen centralizada
export const headerImageUrl =
  "https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Header%20Images/pokemon-101-1280x960.webp";

const ProfilePage = () => {
  const user = useSelector((state: AppState) => state.user);

  // Estados para los campos del formulario
  const [username, setUsername] = useState(user.username);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="profile-page">
      {/* Imagen del header */}
      <div
        className="profile-header-image"
        style={{
          backgroundImage: `url('${headerImageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "50vh",
          borderRadius: "10px",
        }}
      ></div>

      {/* Contenedor principal */}
      <Container variant="small" className="profile-settings-container">
        <div className="profile-image-section">
          <img src={user.picture} alt="Profile" className="profile-image" />
        </div>
        
        <div className="profile-info-section">
          {/* Input para username */}
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

          {/* Dropdown para género */}
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

          {/* Dropdown para país */}
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
              {/* Puedes agregar más países aquí */}
            </select>
          </div>
        </div>

        {/* Botones */}
        <div className="profile-actions">
          <Button variant="purple">Save</Button>
          <Button variant="gray">Cancel</Button>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;

