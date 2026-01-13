import { Layout } from "@/components/layout/Layout";
import medicalLaptop from "@/assets/medical-banner-with-doctor-working-laptop.png";
import discussingReports from "@/assets/discussing-financial-reports.png";
import medicalTablet from "@/assets/medical-banner-with-doctor-holding-tablet.png";

export function HealthcareLeads() {
  return (
    <Layout>
      <div className="section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Harness Intelligence, Elevate Strategies</h1>
          <p className="text-lg text-muted-foreground mb-4 max-w-3xl">
            Fast-track your Healthcare Sales Cycles with quick access to over 2M profiles of physicians, nurses, and allied health professionals
          </p>
          <p className="text-lg text-muted-foreground mb-16 max-w-3xl">
            Transform conversations, elevate pitches, and drive conversions using invaluable information from thousands of hospitals and Integrated Delivery Networks (IDNs)
          </p>

          {/* Section 1: Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src={medicalLaptop}
                alt="Healthcare dashboard"
                className="w-full rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Reach Top Healthcare Decision-makers Globally
              </h2>
              <p className="text-muted-foreground mb-4">
                Cut the lengthening Sales Cycles with readily accessible information for 110+ intelligence fields including social profile, geographic location, medical practice, sub specialties, and more.
              </p>
              <p className="text-muted-foreground">
                Increase your healthcare campaign efficiency with a deliverability rate as high as 90%, easily one of the best in the industry
              </p>
            </div>
          </div>

          {/* Section 2: Content Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Avoid frequent funnel churn with proper alignment
              </h2>
              <p className="text-muted-foreground mb-4">
                Minimize deal abandonment and mitigate informational gaps through a qualification process driven by high-quality SQL data
              </p>
              <p className="text-muted-foreground">
                Double your convertibility and position your brand meaningfully with pre-qualified sales leads across the healthcare spectrum
              </p>
            </div>
            <div>
              <img
                src={discussingReports}
                alt="Healthcare professionals discussing"
                className="w-full rounded-2xl"
              />
            </div>
          </div>

          {/* Section 3: Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={medicalTablet}
                alt="Healthcare professional with tablet"
                className="w-full rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sell Smarter, Not Harder with Cross-Channel Campaigning
              </h2>
              <p className="text-muted-foreground mb-4">
                Never miss out on a sales opportunity by staying on top of our market intelligence on ever-evolving healthcare trends and dynamics
              </p>
              <p className="text-muted-foreground">
                Utilize our expertise to understand the inner workings of a clinician or admin-led selection committee across microsegments and verticals
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
