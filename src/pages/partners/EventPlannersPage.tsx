import { partnerTypes } from "@/data/catalog/partners";
import PartnerSignupTemplate from "./PartnerSignupTemplate";

const EventPlannersPage = () => {
  const partner = partnerTypes.find((item) => item.slug === "event-planners");

  if (!partner) {
    return null;
  }

  return <PartnerSignupTemplate partner={partner} />;
};

export default EventPlannersPage;
