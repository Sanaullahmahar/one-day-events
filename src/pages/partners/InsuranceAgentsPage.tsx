import { partnerTypes } from "@/data/catalog/partners";
import PartnerSignupTemplate from "./PartnerSignupTemplate";

const InsuranceAgentsPage = () => {
  const partner = partnerTypes.find((item) => item.slug === "insurance-agents");

  if (!partner) {
    return null;
  }

  return <PartnerSignupTemplate partner={partner} />;
};

export default InsuranceAgentsPage;
