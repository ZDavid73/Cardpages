import { Button } from "../../theme/styledcomponents";

interface ActionButtonsProps {
  handleSave: () => void;
  handleCancel: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ handleSave, handleCancel }) => {
  return (
    <div className="profile-actions">
      <Button variant="purple" onClick={handleSave}>
        Save
      </Button>
      <Button variant="gray" onClick={handleCancel}>
        Cancel
      </Button>
    </div>
  );
};

export default ActionButtons;
