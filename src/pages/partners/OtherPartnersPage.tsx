import { partnerTypes } from "@/data/catalog/partners";
import PartnerSignupTemplate from "./PartnerSignupTemplate";

const OtherPartnersPage = () => {
  const partner = partnerTypes.find((item) => item.slug === "other");

  if (!partner) {
    return null;
  }

  return <PartnerSignupTemplate partner={partner} />;
};

export default OtherPartnersPage;
