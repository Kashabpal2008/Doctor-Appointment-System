import { useLocation } from "react-router-dom";

const SelectDateTime = () => {
  const location = useLocation();

  const selectedDoctor = location.state?.selectedDoctor;

  return (
    <div>
      <h1>Select Date & Time</h1>

      {selectedDoctor && (
        <h2>Doctor: {selectedDoctor.name}</h2>
      )}
    </div>
  );
};

export default SelectDateTime;