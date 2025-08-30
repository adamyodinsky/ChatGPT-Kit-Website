import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Check,
  FolderOpen,
  Star,
  GripVertical,
  ArrowRight,
  Sparkles,
  Download,
  Shield,
  Rocket,
  // X,
} from "lucide-react";
import { Link } from "react-router-dom";
// Using image from public folder for GitHub Pages compatibility
const chatgptKitLogo = "/chatgpt-kit.png";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 pb-24 text-center">
        <div className="flex justify-center mb-8">
          <img
            src={chatgptKitLogo}
            alt="ChatGPT Kit"
            className="w-32 h-32 logo-animate hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer"
          />
        </div>

        <h1 className="font-patua text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-emerald-600 to-slate-700 bg-clip-text text-transparent mb-6 leading-tight animate-fade-in-up delay-200">
          ChatGPT Kit
        </h1>

        <p className="font-inter text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400">
          Transform your chaotic ChatGPT history into a{" "}
          <span className="text-emerald-600 font-semibold">
            clean, organized workspace
          </span>
          . No more lost conversations. No more endless scrolling.
        </p>

        {/* Demo Video - Hero Section */}
        <div className="flex justify-center mb-12 animate-fade-in-scale delay-500">
          <div className="relative w-full max-w-sm">
            {/* YouTube Embed Container with 1:1 aspect ratio */}
            <div className="relative w-full pb-[100%] h-0 overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group">
              <iframe
                src="https://www.youtube.com/embed/-HnK7Sn7FB8?autoplay=1&mute=1&rel=0&modestbranding=1&showinfo=0&controls=1&enablejsapi=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                title="ChatGPT Kit Demo - Organize Your AI Conversations"
                className="absolute top-0 left-0 w-full h-full rounded-2xl group-hover:scale-[1.02] transition-transform duration-300"
                style={{ backgroundColor: "#000" }}
              />
            </div>

            {/* Decorative elements - positioned to avoid video controls */}
            <div className="absolute -top-6 -left-6 w-8 h-8 bg-emerald-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -top-4 -right-8 w-6 h-6 bg-purple-200 rounded-full opacity-50 animate-bounce delay-500"></div>
            <div className="absolute top-1/4 -left-8 w-6 h-6 bg-blue-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 mb-12 animate-fade-in-up delay-700">
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            <Badge
              variant="secondary"
              className="font-sans bg-emerald-100 text-emerald-700 hover:bg-emerald-200 hover:scale-102 transition-all duration-300 cursor-pointer"
            >
              <Download className="mr-1 h-3 w-3" />
              30-Day Free Trial
            </Badge>
            <Badge
              variant="secondary"
              className="font-sans bg-blue-100 text-blue-700 hover:bg-blue-200 hover:scale-102 transition-all duration-300 cursor-pointer delay-100"
            >
              <Shield className="mr-1 h-3 w-3" />
              No Signup to Try
            </Badge>
            <Badge
              variant="secondary"
              className="font-sans bg-purple-100 text-purple-700 hover:bg-purple-200 hover:scale-102 transition-all duration-300 cursor-pointer delay-200"
            >
              <Rocket className="mr-1 h-3 w-3" />
              Instant Setup
            </Badge>
          </div>

          <Button
            size="lg"
            className="font-inter bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-102 group"
            asChild
          >
            <a
              href="https://chromewebstore.google.com/detail/chatgpt-kit/fodhnilpmmmojhjbcpdpkgeclcakpdia?authuser=5&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-6 group-hover:scale-105 transition-all duration-300" />
              Install Free Extension
            </a>
          </Button>

          <div className="font-sans flex items-center text-sm text-slate-500">
            <div className="flex space-x-1 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            Try risk-free for 30 days
          </div>
        </div>

        {/* Problem Statement */}
        <div className="bg-slate-100 rounded-2xl p-8 max-w-4xl mx-auto animate-fade-in-scale delay-300 hover:shadow-md transition-all duration-300">
          <p className="font-sans text-slate-700 text-lg leading-relaxed">
            <strong className="text-slate-900">
              Tired of losing important ChatGPT conversations?
              <br />
            </strong>
            Hundreds of chats, zero organization, endless frustration. Your
            brilliant ideas buried in digital chaos.
            <br />
            <strong className="text-slate-900">
              ChatGPT-Kit is the solution.
              <br />
            </strong>
          </p>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-quicksand text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Everything You Need to Stay Organized
          </h2>
          <p className="font-sans text-xl text-slate-600 max-w-2xl mx-auto">
            Powerful features that make ChatGPT feel like it was always meant to
            be organized
          </p>
        </div>

        <Tabs
          defaultValue="drag-drop"
          className="w-full max-w-4xl mx-auto mb-16 animate-fade-in-scale delay-200"
        >
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="drag-drop" className="flex items-center gap-2">
              <GripVertical className="h-4 w-4" />
              Drag & Drop
            </TabsTrigger>
            <TabsTrigger value="native" className="flex items-center gap-2">
              <FolderOpen className="h-4 w-4" />
              Native Feel
            </TabsTrigger>
          </TabsList>

          <TabsContent value="drag-drop">
            <Card className="border-emerald-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-emerald-200 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 group-hover:scale-105 transition-all duration-300">
                  <GripVertical className="h-8 w-8 text-emerald-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                </div>
                <CardTitle className="font-quicksand text-2xl text-emerald-700">
                  Drag & Drop Magic
                </CardTitle>
                <CardDescription className="font-sans text-lg">
                  Intuitively organize your chats with smooth drag-and-drop.
                  Create folders, move conversations, and build your perfect
                  structure in seconds. No learning curve, just natural
                  interaction.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-emerald-600" />
                      <span className="font-sans text-slate-700">
                        Smooth, responsive drag interactions
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-emerald-600" />
                      <span className="font-sans text-slate-700">
                        Create nested folder structures
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-emerald-600" />
                      <span className="font-sans text-slate-700">
                        Batch move multiple conversations
                      </span>
                    </div>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-6 text-center">
                    <p className="text-emerald-700 font-semibold mb-2">
                      ⚡ Lightning Fast
                    </p>
                    <p className="font-sans text-sm text-emerald-600">
                      Organize 100+ chats in under 2 minutes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="native">
            <Card className="border-purple-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-purple-200 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 group-hover:scale-105 transition-all duration-300">
                  <FolderOpen className="h-8 w-8 text-purple-600 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300" />
                </div>
                <CardTitle className="font-quicksand text-2xl text-purple-700">
                  Native Experience
                </CardTitle>
                <CardDescription className="font-sans text-lg">
                  Works seamlessly within ChatGPT. No external apps, no context
                  switching. It feels like a built-in feature that should have
                  always existed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-purple-600" />
                      <span className="font-sans text-slate-700">
                        Seamless ChatGPT integration
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-purple-600" />
                      <span className="font-sans text-slate-700">
                        Matches ChatGPT's design language
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-purple-600" />
                      <span className="font-sans text-slate-700">
                        Zero learning curve
                      </span>
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6 text-center">
                    <p className="text-purple-700 font-semibold mb-2">
                      🎨 Native Feel
                    </p>
                    <p className="font-sans text-sm text-purple-600">
                      Feels like it's built into ChatGPT
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Benefits Grid */}
        {/* <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up delay-400">
          <div>
            <h3 className="font-quicksand text-3xl font-bold text-slate-900 mb-6">
              What You'll Love
            </h3>
            <div className="space-y-4">
              {[
                "Find any conversation in seconds, exactly where you left it",
                "Organize thoughts, ideas & long-term projects with ease",
                "Stay in flow — no mess, no distractions",
                "Smoother & more productive ChatGPT experience",
                "Works with all your existing conversations",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <p className="font-sans text-slate-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:shadow-lg hover:scale-102 transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="font-quicksand text-4xl font-bold text-blue-600 mb-2">
                FREE TRIAL
              </div>
              <CardTitle className="font-quicksand text-xl text-slate-700">
                30 Days Trial
              </CardTitle>
              <CardDescription className="font-sans text-slate-600">
                No signup required to start. Upgrade anytime to keep your
                organization.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Trial Features (30 days)
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span className="font-sans text-sm text-blue-700">
                        Drag & drop organization
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span className="font-sans text-sm text-blue-700">
                        Native ChatGPT integration
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <X className="h-4 w-4 text-blue-600" />
                      <span className="font-sans text-sm text-blue-700">
                        Cloud storage (only with pro)
                      </span>
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm border">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-sans text-sm text-slate-500">
                        Monthly Plan
                      </p>
                      <Badge className="font-sans bg-gradient-to-r from-purple-500 to-pink-500">
                        Pro
                      </Badge>
                    </div>
                    <p className="font-sans text-2xl font-bold text-slate-900 mb-1">
                      $3/month
                    </p>
                    <p className="font-sans text-sm text-slate-600">
                      Flexible monthly billing
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm border relative overflow-hidden">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-sans text-sm text-slate-500">
                        Yearly Plan
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge className="font-sans bg-emerald-500">
                          Save 45%
                        </Badge>
                        <Badge className="font-sans bg-gradient-to-r from-purple-500 to-pink-500">
                          Pro
                        </Badge>
                      </div>
                    </div>
                    <p className="font-sans text-2xl font-bold text-slate-900 mb-1">
                      $20/year
                    </p>
                    <p className="font-sans text-sm text-slate-600">
                      Best value, save 45% annually
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </section>

      <Separator className="container mx-auto" />

      {/* Social Proof */}
      <section className="bg-slate-50 py-20 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-quicksand text-3xl font-bold text-slate-900 mb-4">
              Join Thousands of Happy Users
            </h2>
            <p className="font-inter text-lg text-slate-600">
              ChatGPT power users are already transforming their workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-scale delay-300">
            <Card className="bg-white hover:shadow-lg hover:-translate-y-1 hover:scale-102 transition-all duration-300 group animate-slide-in-left delay-100">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-all duration-300"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
                <p className="font-sans text-slate-700 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                  "Finally! This is exactly what ChatGPT was missing. My
                  conversations are actually organized now and I can find
                  everything instantly."
                </p>
                <p className="font-sans text-sm text-slate-500 font-semibold group-hover:text-slate-600 transition-colors duration-300">
                  — Sarah, Product Manager
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg hover:-translate-y-1 hover:scale-102 transition-all duration-300 group animate-fade-in-up delay-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-all duration-300"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
                <p className="font-sans text-slate-700 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                  "As someone with 500+ ChatGPT conversations, this extension is
                  a lifesaver. The drag-and-drop is so intuitive."
                </p>
                <p className="font-sans text-sm text-slate-500 font-semibold group-hover:text-slate-600 transition-colors duration-300">
                  — Mike, Developer
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg hover:-translate-y-1 hover:scale-102 transition-all duration-300 group animate-slide-in-right delay-500">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-all duration-300"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
                <p className="font-sans text-slate-700 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                  "I was skeptical about another browser extension, but this
                  feels like it's part of ChatGPT itself. Seamless!"
                </p>
                <p className="font-sans text-sm text-slate-500 font-semibold group-hover:text-slate-600 transition-colors duration-300">
                  — Alex, Writer
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-20 text-center animate-fade-in-up">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-quicksand text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Transform Your ChatGPT Experience?
          </h2>
          <p className="font-sans text-xl text-slate-600 mb-8">
            Join thousands of users who've already organized their AI
            conversations. Install in seconds, organize in minutes.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="font-sans bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-6 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-102 group"
              asChild
            >
              <a
                href="https://chromewebstore.google.com/detail/chatgpt-kit/fodhnilpmmmojhjbcpdpkgeclcakpdia?authuser=5&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Install ChatGPT Kit Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:scale-105 transition-all duration-300" />
              </a>
            </Button>

            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="outline" className="font-sans bg-white">
                <Check className="mr-1 h-3 w-3 text-green-600" />
                30-day free trial
              </Badge>
              <Badge variant="outline" className="font-sans bg-white">
                <Check className="mr-1 h-3 w-3 text-green-600" />
                No signup to try
              </Badge>
              <Badge variant="outline" className="font-sans bg-white">
                <Check className="mr-1 h-3 w-3 text-green-600" />
                Works instantly
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0 hover:scale-102 transition-all duration-300 cursor-pointer">
              <img
                src={chatgptKitLogo}
                alt="ChatGPT Kit"
                className="w-8 h-8 hover:rotate-12 transition-all duration-300"
              />
              <span className="font-semibold">ChatGPT Kit</span>
            </div>

            <div className="font-sans flex items-center space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-slate-300 hover:text-white hover:scale-105 transition-all duration-300"
              >
                Privacy Policy
              </Link>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">
                Made with ❤️ by{" "}
                <a
                  href="https://adam-solutions.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white hover:scale-102 transition-all duration-300 underline hover:no-underline"
                >
                  Adam Solutions
                </a>
              </span>
            </div>
          </div>

          <div className="font-sans mt-8 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
            <p>© 2024 ChatGPT Kit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
