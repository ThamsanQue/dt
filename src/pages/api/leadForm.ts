import type { APIRoute } from "astro";
import { Resend } from "resend";
import SalesLeadEmail, { type SalesLeadEmailProps } from "../../emails/dataInc";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();
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
    return new Response(null, {
      status: 400,
      statusText: "Bad Request: Missing required fields",
    });
  }

  try {
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

    return new Response(JSON.stringify({ message: "Lead form submitted" }), {
      status: 200,
      statusText: "OK",
    });
  } catch (error) {
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
}
