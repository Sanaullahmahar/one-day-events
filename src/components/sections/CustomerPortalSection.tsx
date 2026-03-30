import Container from "@/components/layout/Container";
import { CUSTOMER_PORTAL } from "@/lib/constants";
import portalImage from "@/assets/customer-portal.png";

const CustomerPortalSection = () => (
  <section className="ui-section bg-muted">
    <Container>
      <div className="ui-card mx-auto max-w-4xl overflow-hidden p-8 md:p-12">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="flex-1">
            <h2 className="ui-h3 mb-4">{CUSTOMER_PORTAL.heading}</h2>
            <p className="ui-body">{CUSTOMER_PORTAL.description}</p>
          </div>
          <div className="w-48 shrink-0 md:w-56">
            <img src={portalImage} alt="Customer portal illustration" className="w-full" loading="lazy" width={512} height={512} />
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default CustomerPortalSection;
