import { useState } from "react";

const PatientInfo = ({ patientData, setPatientData, setHasStarted }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear any existing error for the field
    setHasStarted(false);
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
    <div className="f shadow-md my-auto bg-gray-100 p-5 md:p-8 lg:p-10 max-w-lg mx-auto rounded-lg">
      <h1 className="text-2xl font-bold text-[#1D126C] bg-gray-100 mb-6  text-center ">
        Neurodivergent Workplace Inclusion Test
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={patientData.name}
            placeholder="Enter your name"
            onChange={handleChange}
            className={`w-full p-2 focus:outline-blue-500 ${
              errors.name ? "border-red-600" : "border-gray-300"
            } rounded`}
            required
          />
          {errors.name && <p className="text-red-600">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={patientData.email}
            placeholder="Enter your email address"
            onChange={handleChange}
            className={`w-full p-2  focus:outline-blue-500 ${
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
