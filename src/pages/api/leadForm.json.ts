import type { APIRoute } from "astro";
import { Resend } from "resend";
import SalesLeadEmail, { type SalesLeadEmailProps } from "../../emails/dataInc";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
export const prerender = false;
export const POST: APIRoute = async ({ params, request }) => {
  try {
    const body = await request.json();
    console.log("Received request body:", body);

    const {
      companyName,
      contactName,
      jobTitle,
      emailAddress,
      phoneNumber,
      industry,
      businessRegistrationNumber,
      numberOfEmployees,
      location,
      challengesWithConnectivity,
      briefDescriptionOfNeeds,
    } = body;

    if (
      !companyName ||
      !contactName ||
      !jobTitle ||
      !emailAddress ||
      !phoneNumber ||
      !industry ||
      !businessRegistrationNumber ||
      !numberOfEmployees ||
      !location ||
      !challengesWithConnectivity ||
      !briefDescriptionOfNeeds
    ) {
      console.error("Bad Request: Missing required fields");
      return new Response(null, {
        status: 400,
        statusText: "Bad Request: Missing required fields",
      });
    }

    await sendLeadForm({
      companyName,
      contactName,
      jobTitle,
      emailAddress,
      phoneNumber,
      industry,
      businessRegistrationNumber,
      numberOfEmployees,
      location,
      challengesWithConnectivity,
      briefDescriptionOfNeeds,
    });

    console.log("Lead form submitted successfully");
    return new Response(JSON.stringify({ message: "Lead form submitted" }), {
      status: 200,
      statusText: "OK",
    });
  } catch (error) {
    console.error("Error submitting lead form:", error);
    return new Response(
      JSON.stringify({ message: "Error submitting lead form" }),
      {
        status: 500,
        statusText: "Internal Server Error",
      }
    );
  }
};

async function sendLeadForm({
  companyName,
  contactName,
  jobTitle,
  emailAddress,
  phoneNumber,
  industry,
  businessRegistrationNumber,
  numberOfEmployees,
  location,
  challengesWithConnectivity,
  briefDescriptionOfNeeds,
}: SalesLeadEmailProps) {
  try {
    await resend.emails.send({
      from: "leads@data-inc.co.za",
      to: emailAddress,
      subject: "Lead Form",
      text: "Lead Form",
      react: SalesLeadEmail({
        companyName,
        contactName,
        jobTitle,
        emailAddress,
        phoneNumber,
        industry,
        businessRegistrationNumber,
        numberOfEmployees,
        location,
        challengesWithConnectivity,
        briefDescriptionOfNeeds,
      }),
    });
  } catch (error) {
    console.error("Error sending lead form email:", error);
    throw error; // Rethrow the error to be caught and handled in the POST function
  }
}
