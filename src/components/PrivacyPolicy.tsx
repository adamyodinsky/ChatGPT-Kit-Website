import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import chatgptKitLogo from "../assets/chatgpt-kit.png";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={chatgptKitLogo} alt="ChatGPT Kit" className="w-8 h-8" />
            <span className="font-semibold text-xl">ChatGPT Kit</span>
          </Link>
          <Button variant="outline" asChild>
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </Button>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p className="text-slate-700 leading-relaxed">
                  ChatGPT Kit is a browser extension designed to help you
                  organize your ChatGPT conversations. We are committed to
                  protecting your privacy and being transparent about how our
                  extension works.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">
                  Data Collection and Usage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Local Data Storage
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    ChatGPT Kit stores your conversation organization data
                    locally in your browser. This includes folder structures,
                    conversation groupings, and organizational preferences. This
                    data remains on your device and is not transmitted to our
                    servers.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Cloud Storage (Premium Feature)
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    If you upgrade to our premium plan, we offer cloud storage
                    to sync your organization across devices. In this case, we
                    store your folder structures and organizational preferences
                    on secure servers. We do not store the actual content of
                    your ChatGPT conversations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Usage Analytics
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    We may collect anonymous usage statistics to improve our
                    extension, such as feature usage patterns and error reports.
                    This data is aggregated and cannot be used to identify you
                    personally.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">
                  What We Don't Do
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>
                      We do not read, store, or transmit your ChatGPT
                      conversation content
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>We do not sell your data to third parties</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>
                      We do not track your browsing activity outside of ChatGPT
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>
                      We do not require personal information for the free trial
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  We implement appropriate security measures to protect your
                  data. For cloud storage, we use industry-standard encryption
                  and secure servers. Your local data is protected by your
                  browser's built-in security features.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">
                  Your Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-2 text-slate-700 ml-4">
                  <li>• Access your stored organizational data</li>
                  <li>• Delete your data at any time</li>
                  <li>• Export your organizational structure</li>
                  <li>• Uninstall the extension and remove all local data</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">
                  Third-Party Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  ChatGPT Kit operates within the ChatGPT interface but is not
                  affiliated with OpenAI. We do not have access to your OpenAI
                  account or ChatGPT data beyond what's necessary for organizing
                  your conversations within the interface.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">
                  Updates to This Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  We may update this privacy policy from time to time. We will
                  notify users of any material changes through the extension or
                  our website. Continued use of the extension after changes
                  constitutes acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  If you have any questions about this privacy policy or our
                  data practices, please contact us at:{" "}
                  <a
                    href="mailto:privacy@chatgptkit.com"
                    className="text-emerald-600 hover:text-emerald-700 underline"
                  >
                    privacy@chatgptkit.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src={chatgptKitLogo} alt="ChatGPT Kit" className="w-8 h-8" />
              <span className="font-semibold">ChatGPT Kit</span>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link
                to="/"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Home
              </Link>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">
                Made with ❤️ by Adam Solutions
              </span>
            </div>
          </div>

          <Separator className="my-8 bg-slate-800" />

          <div className="text-center text-slate-400 text-sm">
            <p>© 2024 ChatGPT Kit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
