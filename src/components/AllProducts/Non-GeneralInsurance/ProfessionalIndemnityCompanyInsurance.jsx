import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import InsuranceCard from "../GeneralInsurance/RelativeComponents/InsuranceCard";
import { Helmet } from "react-helmet-async";


const ProfessionalIndemnityCompanyInsurance = () => {
  const insuranceOptions = [
    {
      logo: "/assets/images/company/icicibank.jpg", // Replace with actual image URLs
      insurerName: "Professional Indemnity Insurance For Companies ",
      price: "-",
      keyFeatures: ["No Inspection Needed", "Immediate Policy Issurance"],
      link: "/",
    },
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Professional Indemnity Insurance For Companies - NIB</title>
        <meta
          name="description"
          content="Protect your business with Professional Indemnity Insurance for Companies from Notion Insurance Broker Pvt. Ltd. Our policies cover professional negligence, errors, and client financial loss claims, offering comprehensive protection for your organization."
/>
        <meta
          name="keywords"
          content="Professional Indemnity Insurance, PII for Companies, business liability insurance, professional negligence coverage, error and omission insurance, client financial loss protection, legal defense for companies, indemnity insurance for businesses, Notion Insurance Broker professional indemnity"
        />
         <link rel="canonical" href="https://www.notioninsurance.com/professional-indemnity-companies-insurance" />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none md:px-10 bg-white container w-full lg:w-[90%] xl:w-[90%] flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top General Professional Indemnity Insurance For Companies
            </Typography>

            <div className="mt-4 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
              {insuranceOptions.map((option, index) => (
                <InsuranceCard key={index} {...option} />
              ))}
            </div>
            <br />
            <Card className="mt-6 w-full md:text-center md:hover:scale-105 duration-300">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to Professional Indemnity Insurance For Companies
                </Typography>
                <Typography className="md:px-5 text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  Professional Indemnity Insurance (PII) for companies provides
                  critical protection against financial liabilities arising from
                  professional mistakes, negligence, or omissions in the
                  services they offer. This type of insurance safeguards
                  businesses from claims that could result in client financial
                  loss or reputational damage. It covers legal fees,
                  compensation payouts, and defense costs, ensuring that
                  companies remain protected even in the event of professional
                  disputes or errors. Whether it’s an error in advice or a
                  service-related oversight, PII helps maintain business
                  continuity and protect the company&apos;s bottom line.
                </Typography>
              </CardBody>
            </Card>
            <br />
            <br />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default ProfessionalIndemnityCompanyInsurance;
