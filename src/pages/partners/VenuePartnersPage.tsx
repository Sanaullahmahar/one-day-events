import { partnerTypes } from "@/data/catalog/partners";
import PartnerSignupTemplate from "./PartnerSignupTemplate";

const VenuePartnersPage = () => {
  const partner = partnerTypes.find((item) => item.slug === "venue-partners");

  if (!partner) {
    return null;
  }

  return <PartnerSignupTemplate partner={partner} />;
};

export default VenuePartnersPage;
