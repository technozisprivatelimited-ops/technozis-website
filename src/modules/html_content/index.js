export default function TermsOfService() {
  const termsHTML = `
  <div style="background-color: #ededed">
    <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #4B5563; max-width: 1100px; margin: 0 auto; padding: 20px; margin-top: 72px">

      <!-- Title -->
      <h1 style="color: #000; text-align: center; font-size: 2rem; font-weight: bold; margin-bottom: 20px;">
        Terms of Service
      </h1>
      <p style="text-align: center; color: #6B7280; font-size: 1rem; margin-bottom: 40px;">
        Last updated: <strong>March 14th, 2024</strong>
      </p>

      <!-- Section 1 -->
      <h2 style="color: #1F2937; font-size: 1.5rem; font-weight: bold; margin-top: 30px;">
        1. Right to Use
      </h2>
      <p style="font-size: 1rem; margin-bottom: 20px;">
        Subject to these Terms, we grant you a non-exclusive, non-transferable, limited, and revocable license to access the Services in accordance with these Terms.
      </p>

      <!-- Section 2 -->
      <h2 style="color: #1F2937; font-size: 1.5rem; font-weight: bold; margin-top: 30px;">
        2. Accounts
      </h2>
      <p style="font-size: 1rem; margin-bottom: 20px;">
        When you create an account, you agree to provide accurate and up-to-date information. You are responsible for maintaining the confidentiality of your account and password.
      </p>

      <!-- Section 3 -->
      <h2 style="color: #1F2937; font-size: 1.5rem; font-weight: bold; margin-top: 30px;">
        3. User Content
      </h2>
      <p style="font-size: 1rem; margin-bottom: 20px;">
        You retain ownership of your User Content, but you grant us rights to use, display, and modify your content as necessary for our Services.
      </p>

      <!-- Section 4 -->
      <h2 style="color: #1F2937; font-size: 1.5rem; font-weight: bold; margin-top: 30px;">
        4. Termination
      </h2>
      <p style="font-size: 1rem; margin-bottom: 20px;">
        We reserve the right to suspend or terminate your access to the Services if you breach these Terms.
      </p>

      <!-- Footer -->
      <p style="text-align: center; margin-top: 50px; font-size: 0.9rem; color: #9CA3AF;">
        If you have any questions, please contact us at 
        <a href="mailto:support@turing.com" style="color: #2563EB; text-decoration: none; font-weight: bold;">
          support@turing.com
        </a>.
      </p>
    </div>
    </div>
  `;

  return <div dangerouslySetInnerHTML={{ __html: termsHTML }} />;
}
