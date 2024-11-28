import { Tittle } from "../../theme/styledcomponents";

interface ProfileInfoFormProps {
  username: string;
  setUsername: (value: string) => void;
  gender: string;
  setGender: (value: string) => void;
  country: string;
  setCountry: (value: string) => void;
  birthDate: { day: string; month: string; year: string };
  handleBirthDateChange: (field: "day" | "month" | "year", value: string) => void;
  countries: { name: string }[];
  months: { number: number; name: string }[];
}

const ProfileInfoForm: React.FC<ProfileInfoFormProps> = ({
  username,
  setUsername,
  gender,
  setGender,
  country,
  setCountry,
  birthDate,
  handleBirthDateChange,
  countries,
  months,
}) => {
  return (
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
          {countries.map((country) => (
            <option value={country.name} key={country.name}>
              {country.name}
            </option>
          ))}
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
            {months.map((month) => (
              <option value={month.number.toString().padStart(2, "0")} key={month.number}>
                {month.name}
              </option>
            ))}
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
  );
};

export default ProfileInfoForm;
