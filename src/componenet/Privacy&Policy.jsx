import React from "react";

function PrivacyPolicy() {
  return (
    <div className="bg-light col d-flex align-items-center border ">
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className=" bg-white shadow-lg rounded-lg p-4 p-md-5">
            <h1 className="display-5 fw-bold mb-4 text-center">
              Privacy & Security Policy
            </h1>

            <section className="mb-4">
              <h2 className="h3 fw-semibold mb-2">Introduction</h2>
              <p>
                Vionix Care, LLC we values your privacy and is committed to
                protecting the confidentiality, integrity, and security of the
                personal and healthcare-related information we collect.
              </p>
              <p>
                This Privacy & Security Policy explains how we collect, use, and
                safeguard information in connection with our RPA (Robotic
                Process Automation) services, applications, and websites. As a
                healthcare technology company operating in the United States,
                Vionix Care is committed to complying with all applicable
                federal and state privacy laws, including the Health Insurance
                Portability and Accountability Act (HIPAA).
              </p>
              <p>
                If you have any questions about this policy, please contact us.
              </p>
            </section>

            <section className="mb-4">
              {/* Main heading with margin-bottom for spacing */}
              <h2 className="h3 fw-bold mb-1">
                Information Collected and Received
              </h2>

              {/* Paragraph with margin-bottom for spacing */}
              <p className="mb-1">
                Vionix Care may collect and receive the following types of
                information:
              </p>

              <ul className="list-unstyled ms-3 ">
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>
                    <strong>Account Information :</strong> Name, email address,
                    mailing address, phone number, job title, organization name,
                    username, and password.
                  </div>
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <strong>Professional & Demographic Information : </strong>
                  Healthcare provider specialty, industry role, and preferences.
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <strong>Operational Data :</strong>Logs, workflow details, and
                  process metadata required for automation services.
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <strong>Protected Health Information (PHI):</strong> When
                  acting as a HIPAA “Business Associate,” we may process PHI on
                  behalf of covered entities. PHI will only be accessed,
                  processed, and stored in compliance with HIPAA regulations.
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <strong>Technical Information :</strong> IP address, device
                  type, browser type, and session details.
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <strong>Voluntary Information :</strong> Responses to surveys,
                  support tickets, or feedback forms.
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <strong>Location Data :</strong> Only collected when necessary
                  for service delivery and with explicit consent.
                </li>
              </ul>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-bold mb-1">Uses of Information</h2>

              <p className="mb-1">We use collected information to:</p>

              <ul className="list-unstyled ms-3 ">
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>Deliver, manage, and improve our RPA services.</div>
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>
                    Configure automations for healthcare administration tasks
                    (e.g., claims, billing, scheduling).
                  </div>
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>
                    Communicate with you regarding service updates, support
                    requests, and account matters.
                  </div>
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>
                    {" "}
                    Provide training, educational content, and tailored user
                    experiences.
                  </div>
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>Comply with applicable legal obligations.</div>
                </li>
              </ul>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-bold mb-1">
                HIPAA Compliance & PHI Handling
              </h2>

              <p className="mb-1">
                When Vionix Care processes PHI, we act as a{" "}
                <strong> Business Associate</strong>
                under HIPAA. We will:
              </p>

              <ul className="list-unstyled ms-3 ">
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>
                    Use PHI only as permitted by our Business Associate
                    Agreement (BAA) with the covered entity
                  </div>
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>
                    Implement{" "}
                    <strong>
                      {" "}
                      administrative , technical, and physical safeguards
                    </strong>
                    to protect PHI from unauthorized access, use, or disclosure.
                  </div>
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>
                    Report any security incidents or breaches in accordance with
                    HIPAA breach notification requirements.
                  </div>
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>
                    Ensure subcontractors handling PHI agree to the same HIPAA
                    compliance obligations.
                  </div>
                </li>
              </ul>
              <p className="mb-1">
                We will never sell PHI or use it for marketing purposes without
                explicit written authorization.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-bold mb-1">Disclosure of Information</h2>

              <p className="mb-1">
                We do not sell your personal or healthcare information. We may
                share information only in the following cases:
              </p>

              <ul className="list-unstyled ms-3 ">
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>
                    <strong>With Your Consent :</strong> When you explicitly
                    authorize us to share your information.
                  </div>
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <strong>With Service Providers : </strong>
                  Trusted vendors who assist in delivering our services under
                  strict confidentiality and security agreements.
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <strong>As Required by Law :</strong>When compelled by legal
                  process, regulatory authorities, or law enforcement.
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <strong>Aggregate & De-Identified Data :</strong> We may share
                  statistical or aggregated data that cannot identify any
                  individual.
                </li>
              </ul>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-bold mb-1">Security Measures</h2>

              <p className="mb-1">
                Vionix Care uses industry-standard security practices to protect
                information, including:
              </p>

              <ul className="list-unstyled ms-3 ">
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>
                    Encryption of data in transit and at rest (AES-256, TLS
                    1.2+).
                  </div>
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>
                    Regular security audits, vulnerability scans, and
                    penetration testing.
                  </div>
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>
                    Role-based access controls (RBAC) to limit data access.
                  </div>
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>
                    Multi-factor authentication for administrative accounts.
                  </div>
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>
                    Regular data backups stored in secure, HIPAA-compliant
                    facilities.
                  </div>
                </li>
              </ul>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-bold mb-1">
                Cookies & Tracking Technologies
              </h2>

              <p className="mb-1">
                Our website and applications may use cookies, web beacons, and
                other tracking technologies to:
              </p>

              <ul className="list-unstyled ms-3 ">
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>Maintain secure sessions.</div>
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>Personalize user experience.</div>
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>Measure site performance and usage analytics.</div>
                </li>
              </ul>

              <p className="mb-1">
                You can control cookies through your browser settings, but
                disabling them may limit site functionality.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-semibold mb-2">Do Not Track Requests</h2>
              <p>
                Our systems do not currently respond to browser “Do Not Track”
                signals.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-semibold mb-2">Children’s Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of
                18. We do not knowingly collect personal information from
                children. If we learn that we have inadvertently collected such
                data, we will delete it promptly.{" "}
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-semibold mb-2">Links to Other Sites</h2>
              <p>
                Our platforms may contain links to third-party websites. Vionix
                Care is not responsible for the privacy or security practices of
                external sites.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-semibold mb-2">Amendments</h2>
              <p>
                We may update this Privacy & Security Policy from time to time.
                Material changes will be communicated via email or prominent
                notice on our website at least 30 days prior to the change
                taking effect.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-bold mb-1">Your Rights & Choices</h2>

              <p className="mb-1">You have the right to:</p>

              <ul className="list-unstyled ms-3 ">
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>
                    Access and request a copy of your personal information.
                  </div>
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>Request corrections to your information.</div>
                </li>
                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>
                    Request deletion of information (subject to legal and
                    contractual requirements).
                  </div>
                </li>

                <li className=" d-flex align-items-center">
                  <span className="me-2 fs-3 fw-bold">•</span>
                  <div>Opt out of non-essential communications.</div>
                </li>
              </ul>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-semibold mb-2">Contact Us</h2>
              <p>
                For privacy-related questions, requests, or complaints, please
                contact us:
              </p>
              <p className="lh-lg">
                📧 <a href="mailto:team@vionixcare.com">team@vionixcare.com</a>
                <br />
                📍 [Your Company Address]
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
