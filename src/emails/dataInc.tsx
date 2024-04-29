import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  // Img,
  Preview,
  Section,
  Text,
  Row,
} from "@react-email/components";
import * as React from "react";

export interface SalesLeadEmailProps {
  companyName: string;
  contactName: string;
  jobTitle: string;
  emailAddress: string;
  phoneNumber: string;
  industry: string;
  businessRegistrationNumber: string;
  numberOfEmployees: string;
  location: string;
  challengesWithConnectivity: string;
  briefDescriptionOfNeeds: string;
}

export const SalesLeadEmail: React.FC<Readonly<SalesLeadEmailProps>> = ({
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
}) => (
  <Html>
    <Head />
    <Preview>Sales Lead Information</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ ...logo, backgroundColor: "rgba(25, 25, 25, 1)" }}>
          {/* <Img src="../assets/logos/dataInc.png" alt="DataInc Logo" /> */}
          <Heading as="h2" style={title}>
            Data Inc
          </Heading>
        </Section>

        <Section style={header}>
          <Row>
            <Column style={headerContent}>
              <Heading style={headerContentTitle}>
                New Sales Lead Information
              </Heading>
              <Text style={headerContentSubtitle}>
                Details of a potential customer from data-inc.co.za
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={content}>
          <Heading as="h2" style={title}>
            Contact Information
          </Heading>
          <Text style={paragraph}>
            <strong>Company Name:</strong> {companyName}
          </Text>
          <Text style={paragraph}>
            <strong>Contact Name:</strong> {contactName}
          </Text>
          <Text style={paragraph}>
            <strong>Job Title:</strong> {jobTitle}
          </Text>
          <Text style={paragraph}>
            <strong>Email Address:</strong> {emailAddress}
          </Text>
          <Text style={paragraph}>
            <strong>Phone Number:</strong> {phoneNumber}
          </Text>
          <Text style={paragraph}>
            <strong>Industry:</strong> {industry}
          </Text>
          <Text style={paragraph}>
            <strong>Business Registration Number:</strong>{" "}
            {businessRegistrationNumber}
          </Text>

          <Hr style={divider} />

          <Heading as="h2" style={title}>
            Company Details
          </Heading>
          <Text style={paragraph}>
            <strong>Number of Employees:</strong> {numberOfEmployees}
          </Text>
          <Text style={paragraph}>
            <strong>Location:</strong> {location}
          </Text>

          <Hr style={divider} />

          <Heading as="h2" style={title}>
            Needs and Challenges
          </Heading>
          <Text style={paragraph}>
            <strong>Challenges with Connectivity:</strong>{" "}
            {challengesWithConnectivity}
          </Text>
          <Text style={paragraph}>
            <strong>Brief Description of Needs:</strong>{" "}
            {briefDescriptionOfNeeds}
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default SalesLeadEmail;

const main = {
  backgroundColor: "#f3f3f5",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const headerContent = { padding: "20px 30px 15px" };

const headerContentTitle = {
  color: "#ffffff",
  fontSize: "27px",
  fontWeight: "bold",
  lineHeight: "27px",
};

const headerContentSubtitle = {
  color: "#ffffff",
  fontSize: "17px",
};

const title = {
  margin: "0 0 15px",
  fontWeight: "bold",
  fontSize: "21px",
  lineHeight: "21px",
  color: "#0c0d0e",
};

const paragraph = {
  fontSize: "15px",
  lineHeight: "21px",
  color: "#3c3f44",
};

const divider = {
  margin: "30px 0",
};

const container = {
  width: "680px",
  maxWidth: "100%",
  margin: "0 auto",
  backgroundColor: "#ffffff",
};

const logo = {
  display: "flex",
  padding: "20px 30px",
};

const header = {
  borderRadius: "5px 5px 0 0",
  display: "flex",
  flexDireciont: "column",
  backgroundColor: "rgb(0, 111, 238)",
};

const content = {
  padding: "30px",
};
