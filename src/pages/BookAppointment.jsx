// import AppointmentHero from "../components/Appointment/AppointmentHero";
// import BookingSteps from "../components/Appointment/BookingSteps";
import DoctorSelector from "../components/Appointment/DoctorSelector";
import DateTimeSelector from "../components/Appointment/DateTimeSelector";
// import PatientDetailsForm from "../components/Appointment/PatientDetailsForm";
// import AppointmentSummary from "../components/Appointment/AppointmentSummary";

const BookAppointment = () => {
  return (
    <>
      {/* <AppointmentHero />
      <BookingSteps /> */}
      <DoctorSelector />
          <DateTimeSelector />
          {/* <PatientDetailsForm />
          <AppointmentSummary /> */}
    </>
  );
};

export default BookAppointment;