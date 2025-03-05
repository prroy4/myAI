import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="w-full flex justify-center p-10">
      <div className="w-full max-w-screen-md space-y-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700 underline"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Chatbot
        </Link>
        <h1 className="text-3xl font-bold">Marketing Research Assistant Chatbot</h1>
        <h2 className="text-2xl font-semibold">
          Terms of Use and Disclaimer
        </h2>
        <ol className="list-decimal list-inside space-y-4">
          <li className="text-gray-700">
            <span className="font-semibold">Acceptance of Terms:</span> By
            accessing and using the Marketing Research Assistant Chatbot
            ("Chatbot") provided by Prithika ("Provider"), you acknowledge that
            you have read, understood, and agreed to be bound by these Terms of
            Use. If you do not agree with these terms, do not use the Chatbot.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">No Warranties:</span> The Chatbot is
            provided "as is" and "as available" without any warranties, express
            or implied. Prithika makes no representations or warranties regarding
            the accuracy, reliability, completeness, or suitability of the
            Chatbot for conducting marketing research. All information provided
            should be independently verified before use.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">
              No Guarantees on Availability or Support:
            </span>{" "}
            Prithika does not guarantee that the Chatbot will be available at all
            times, be uninterrupted, secure, or error-free. Technical support,
            maintenance, or updates are not guaranteed.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Limitation of Liability:</span> To the fullest extent permitted by applicable law, Prithika shall not be liable for any direct, indirect, incidental, consequential, special, exemplary, or punitive damages arising from or related to your use of or inability to use the Chatbot. This includes but is not limited to incorrect research
            insights, business losses, or decisions based on the Chatbot's
            output.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">
              No Legal, Financial, or Professional Advice:
            </span>{" "}
            The Chatbot is designed to assist in marketing research but does not
            provide legal, financial, or business consulting advice. Users
            should consult professional experts before making critical business
            decisions. Any reliance on the information provided by the Chatbot is at your own risk.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">User Responsibility:</span> Users are
            responsible for ensuring that research conducted using the Chatbot
            adheres to ethical and legal standards, including data privacy and
            consumer research regulations. You are solely responsible for your use of the Chatbot and any actions or decisions made based on its output.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Data Security and Privacy:</span>{" "}
            You acknowledge that any data transmitted to or through the Chatbot is not secured and may be processed by third parties. Do not upload, share, or transmit any sensitive, confidential, or personal information. All conversations conducted through the Chatbot are considered equivalent to public postings, and Prithika does not guarantee the confidentiality or security of any data shared.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Indemnification:</span> UYou agree to indemnify, defend, and hold harmless Prithika from any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising from your use of the Chatbot or violation of these Terms of Use.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Modifications to Terms:</span> Prithika
            reserves the right to modify these Terms of Use at any time without
            prior notice. Continued use of the Chatbot constitutes acceptance of
            the modified terms.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Governing Law:</span> These Terms of
            Use shall be governed by and construed in accordance with the laws of
            the applicable jurisdiction without regard to its conflict of law
            provisions.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Contact Information:</span> If you
            have any questions or concerns regarding these Terms of Use, please
            contact Prithika at prroy@unc.edu.
          </li>
        </ol>
      </div>
    </div>
  );
}
