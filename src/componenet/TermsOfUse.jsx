import React from "react";

function TermsOfUse() {
  return (
    // Use Bootstrap's background color, flex utilities, and viewport height
    <div className="bg-light col d-flex align-items-center  ">
      <div className="container">
        <div className="row justify-content-center my-5">
          {/* Main content card, centered in an 8-column layout on large screens */}
          <div className=" bg-white shadow-lg rounded-lg p-4 p-md-5">
            {/* Main title using Bootstrap's display and font-weight classes */}
            <h1 className="display-5 fw-bold mb-4 text-center">
              Terms and Conditions
            </h1>

            <section className="mb-4">
              <h2 className="h3 fw-semibold mb-2">Acceptance of Terms</h2>
              <p>
                By accessing our website, you confirm that you accept these
                terms and conditions. If you disagree, please refrain from using
                the site.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-semibold mb-2">Use of Content</h2>
              <p>
                All content, including images, texts, and graphics, is owned or
                licensed by Welnex Automation. You may view, download, or print
                materials for personal use only. Commercial use, copying, or
                redistribution of any content without written permission is
                strictly prohibited.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-semibold mb-2">User Conduct</h2>
              <p>
                You agree to use the site only for lawful purposes. You are
                prohibited from posting or transmitting any material that is
                harmful, offensive, or violates any applicable law.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-semibold mb-2">Account Registration</h2>
              <p>
                For certain services, you may need to register an account. You
                agree to provide accurate and up-to-date information and are
                responsible for maintaining the confidentiality of your login
                details. We reserve the right to terminate accounts if terms are
                violated.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-semibold mb-2">Intellectual Property</h2>
              <p>
                All trademarks, logos, and intellectual property, including but
                not limited to Welnex Automation's branding, belong to us or our
                partners. Any unauthorized use of these is strictly prohibited
                and may lead to legal action.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-semibold mb-2">Disclaimer of Warranties</h2>
              <p>
                The content on our website is provided "as is". We do not
                guarantee the accuracy or reliability of the information. Welnex
                Automation disclaims any warranties related to the operation,
                performance, or fitness of the website for a specific purpose.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-semibold mb-2">Limitation of Liability</h2>
              <p>
                Welnex Automation will not be liable for any damages resulting
                from the use or inability to use the website, including but not
                limited to direct, indirect, incidental, or consequential
                damages.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-semibold mb-2">
                Third-Party Links and Content
              </h2>
              <p>
                Our website may contain links to third-party websites for your
                convenience. We do not endorse or have control over the content
                or services provided by these websites. Welnex Automation is not
                responsible for any issues arising from your use of third-party
                sites.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-semibold mb-2">Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the
                laws of the jurisdiction where Welnex Automation is based. Any
                disputes will be handled in the courts of that jurisdiction.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-semibold mb-2">Changes to Terms</h2>
              <p>
                We reserve the right to update or modify these terms at any time
                without prior notice. Continued use of the website following
                changes indicates acceptance of the revised terms.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-semibold mb-2">Termination</h2>
              <p>
                Welnex Automation reserves the right to suspend or terminate
                access to the website if any user is found to be in violation of
                these terms.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-semibold mb-2">Privacy Policy</h2>
              <p>
                Please refer to our Privacy Policy for details on how we
                collect, use, and protect your personal data.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h3 fw-semibold mb-2">Contact Us</h2>
              <p>
                If you have any questions regarding these terms, feel free to
                contact us at{" "}
                <a href="mailto:team@welnexautomation.com">
                  team@welnexautomation.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUse;
