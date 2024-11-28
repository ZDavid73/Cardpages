interface NotificationProps {
    message: string;
    type: "success" | "error";
  }
  
  const Notification: React.FC<NotificationProps> = ({ message, type }) => {
    if (!message) return null;
  
    return <div className={`notification ${type}`}>{message}</div>;
  };
  
  export default Notification;
  