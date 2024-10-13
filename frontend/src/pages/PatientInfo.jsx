import { useState } from "react";

const PatientInfo = ({ patientData, setPatientData, setHasStarted }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear any existing error for the field
  };

  const validate = () => {
    const newErrors = {};
    if (!patientData.name) newErrors.name = "Name is required.";
    if (!patientData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(patientData.email))
      newErrors.email = "Email address is invalid.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle the submission (e.g., send data to the server)
      console.log("Patient Data Submitted:", patientData);
      // Optionally reset the form
      //   setPatientData({
      //     name: "",
      //     email: "",
      //   });
      setHasStarted(true);
    }
  };

  return (
    <div className="f shadow-md my-auto bg-gray-100 p-5 md:p-8 lg:p-16 max-w-3xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={patientData.name}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.name ? "border-red-600" : "border-gray-300"
            } rounded`}
            required
          />
          {errors.name && <p className="text-red-600">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={patientData.email}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.email ? "border-red-600" : "border-gray-300"
            } rounded`}
            required
          />
          {errors.email && <p className="text-red-600">{errors.email}</p>}
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-md text-white"
        >
          Start
        </button>
      </form>
    </div>
  );
};

export default PatientInfo;
