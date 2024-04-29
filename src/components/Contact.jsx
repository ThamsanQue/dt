import { motion } from "framer-motion";
import contact from "../assets/icons/contactIcon.png";
import email from "../assets/icons/emailIcon.png";
import { useState } from "react";

export const prerender = false;
export const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    jobTitle: "",
    emailAddress: "",
    phoneNumber: "",
    industry: "",
    businessRegistrationNumber: "",
    numberOfEmployees: "",
    location: "",
    challengesWithConnectivity: "",
    briefDescriptionOfNeeds: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch("/api/leadForm.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(response);
        console.log("Lead form submitted successfully");
        // Optionally, reset the form fields here
        setFormData({
          companyName: "",
          contactName: "",
          jobTitle: "",
          emailAddress: "",
          phoneNumber: "",
          industry: "",
          businessRegistrationNumber: "",
          numberOfEmployees: "",
          location: "",
          challengesWithConnectivity: "",
          briefDescriptionOfNeeds: "",
        });
      } else {
        console.error("Failed to submit lead form");
      }
    } catch (error) {
      console.error("Error submitting lead form:", error);
    }
  };

  return (
    <section
      className="py-12 sm:py-24 text-white w-full bg-customDarkBg1"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
          <div className="flex flex-col items-center -mx-4 justify-center lg:text-left text-center">
            <div className="text-center mb-10 p-4">
              <h2 className=" text-4xl font-bold mb-4">
                <span className="text-customPrimary">Contact</span> {"  "}a
                Specialist
              </h2>
              <p className="justify-center p-">
                A dedicated account manager will be in touch Estimated takes
                less than 1 min to complete.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
              <div className="w-full lg:w-3/4 px-4 mb-12 lg:mb-0 justify-center">
                <div className="space-y-4 justify-center">
                  <h1 className="text-3xl font-bold">
                    Speak with a specialist.
                  </h1>
                  <div className="flex space-x-4 items-center">
                    <img src={contact.src} alt="" />
                    <h2 className="text-xl">(079) 490-9584</h2>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <img src={email.src} alt="" />
                    <h2 className="text-xl">connectme@data-inc.co.za</h2>
                  </div>
                  <hr className="h-px w-1/2 bg-customPrimary border-0" />
                  <p className="text-xl justify-start">Mon-Fri 8AM-5PM CST</p>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="bg-customCard p-4 rounded-xl">
                  <div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                      <div class="space-y-2">
                        <label
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="first-name"
                        >
                          Company Name
                        </label>
                        <input
                          className="flex text-black/50 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Company Name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="contactName"
                        >
                          Contact Name
                        </label>
                        <input
                          className="flex text-black/50 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="contactName"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleChange}
                          placeholder="Contact Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="jobTitle"
                        >
                          Job Title
                        </label>
                        <input
                          className="flex text-black/50 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="jobTitle"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          placeholder="Job Title"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="emailAddress"
                        >
                          Email Address
                        </label>
                        <input
                          className="flex text-black/50 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="emailAddress"
                          name="emailAddress"
                          value={formData.emailAddress}
                          onChange={handleChange}
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="phoneNumber"
                        >
                          Phone Number
                        </label>
                        <input
                          className="flex text-black/50 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="industry"
                        >
                          Industry
                        </label>
                        <input
                          className="flex text-black/50 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          placeholder="Industry"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="businessRegistrationNumber"
                        >
                          Registration Number
                        </label>
                        <input
                          className="flex text-black/50 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="businessRegistrationNumber"
                          name="businessRegistrationNumber"
                          value={formData.businessRegistrationNumber}
                          onChange={handleChange}
                          placeholder="Business Registration Number"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="numberOfEmployees"
                        >
                          Number of Employees
                        </label>
                        <input
                          className="flex text-black/50 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="numberOfEmployees"
                          name="numberOfEmployees"
                          value={formData.numberOfEmployees}
                          onChange={handleChange}
                          placeholder="Number of Employees"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="location"
                        >
                          Business Address
                        </label>
                        <input
                          className="flex text-black/50 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="Location"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="challengesWithConnectivity"
                        >
                          Challenges with Connectivity
                        </label>
                        <input
                          className="flex text-black/50 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="challengesWithConnectivity"
                          name="challengesWithConnectivity"
                          value={formData.challengesWithConnectivity}
                          onChange={handleChange}
                          placeholder="Challenges with Connectivity"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="briefDescriptionOfNeeds"
                      >
                        Brief Description of Needs
                      </label>
                      <textarea
                        className="flex text-black/50 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                        id="briefDescriptionOfNeeds"
                        name="briefDescriptionOfNeeds"
                        value={formData.briefDescriptionOfNeeds}
                        onChange={handleChange}
                        placeholder="Brief Description of Needs"
                        required
                      ></textarea>
                    </div>
                    <button
                      className="inline-flex items-center w-full bg-customPrimary justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                      type="submit"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
