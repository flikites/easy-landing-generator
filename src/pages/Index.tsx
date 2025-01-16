import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Wand2, Zap, Code2, Check } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <main className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6 pt-12">
          <div className="inline-block">
            <div className="relative">
              <h1 className="text-6xl font-bold tracking-tight leading-[1.2] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                Prism Pages
              </h1>
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full blur-xl" />
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform one design into infinite possibilities. Generate multiple unique, 
            conversion-optimized landing pages powered by AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              asChild
            >
              <Link to="/generator">Start Generating Now</Link>
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-16">
          {/* Core Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 px-4">
          <Card className="p-6 border-2 hover:border-indigo-600/20 transition-all">
            <div className="h-12 w-12 rounded-lg bg-indigo-600/10 flex items-center justify-center mb-4">
              <Wand2 className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Multiple Variations</h3>
            <p className="text-gray-600">Generate up to 5 unique landing page designs from a single input. Each variation is distinct and conversion-optimized.</p>
          </Card>
          <Card className="p-6 border-2 hover:border-purple-600/20 transition-all">
            <div className="h-12 w-12 rounded-lg bg-purple-600/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Get your landing pages in seconds, not hours. Rapid generation powered by advanced AI models.</p>
          </Card>
          <Card className="p-6 border-2 hover:border-pink-600/20 transition-all">
            <div className="h-12 w-12 rounded-lg bg-pink-600/10 flex items-center justify-center mb-4">
              <Code2 className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Production Ready</h3>
            <p className="text-gray-600">Clean, semantic HTML and modern CSS. Every page is responsive and ready for deployment.</p>
          </Card>
        </div>

          {/* Interactive Demo Section */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 p-8">
            <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
            <div className="relative z-10 text-center space-y-8">
              <h2 className="text-4xl font-bold text-white">See It in Action</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-left">
                  <h3 className="text-2xl font-semibold text-white">Watch the Magic Happen</h3>
                  <p className="text-gray-300">See how Prism Pages transforms your designs into fully functional landing pages in seconds. Our AI understands design patterns and creates optimized variations that convert.</p>
                  <div className="flex gap-4">
                    <Button variant="secondary">View Demo</Button>
                    <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">Learn More</Button>
                  </div>
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 via-purple-500/30 to-pink-500/30 animate-gradient-x"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 bg-black/50 backdrop-blur-sm rounded-lg text-white">
                      Demo Video Placeholder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Perfect For Every Need</h2>
              <p className="text-xl text-gray-600">Discover how different industries leverage Prism Pages</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "E-commerce",
                  description: "Create product landing pages that drive conversions with compelling layouts and clear CTAs.",
                  icon: "🛍️"
                },
                {
                  title: "SaaS",
                  description: "Generate feature-focused pages that highlight your software's unique value proposition.",
                  icon: "💻"
                },
                {
                  title: "Startups",
                  description: "Launch and test multiple landing page variations to find what resonates with your audience.",
                  icon: "🚀"
                }
              ].map((useCase) => (
                <Card key={useCase.title} className="p-6 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Loved by Teams Worldwide</h2>
              <p className="text-xl text-gray-600">See what our customers have to say</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Prism Pages has revolutionized how we create landing pages. What used to take days now takes minutes.",
                  author: "Sarah Johnson",
                  role: "Marketing Director",
                  company: "TechCorp"
                },
                {
                  quote: "The AI-generated variations helped us increase our conversion rate by 47%. It's like having a team of designers on demand.",
                  author: "Michael Chen",
                  role: "Growth Lead",
                  company: "StartupX"
                },
                {
                  quote: "The quality of the generated pages is impressive. Each variation maintains our brand identity while offering unique layouts.",
                  author: "Emma Davis",
                  role: "Creative Director",
                  company: "DesignCo"
                }
              ].map((testimonial) => (
                <Card key={testimonial.author} className="p-6 relative">
                  <div className="absolute -top-4 -left-2 text-6xl text-indigo-200 opacity-50">"</div>
                  <blockquote className="relative z-10">
                    <p className="text-lg text-gray-700 mb-4">{testimonial.quote}</p>
                    <footer>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</div>
                    </footer>
                  </blockquote>
                </Card>
              ))}
            </div>
          </div>

          {/* Feature Comparison */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Why Choose Prism Pages?</h2>
              <p className="text-xl text-gray-600">See how we compare to traditional methods</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">Prism Pages</th>
                    <th className="p-4 text-center">Traditional Design</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Design Time", "Minutes", "Days or Weeks"],
                    ["Multiple Variations", "Unlimited", "Limited by Resources"],
                    ["Cost per Page", "Included in Plan", "$500-$5000+"],
                    ["A/B Testing Ready", "✅", "❌"],
                    ["AI-Powered Optimization", "✅", "❌"],
                    ["Brand Consistency", "✅", "✅"],
                  ].map(([feature, prism, traditional], index) => (
                    <tr key={index} className="border-t">
                      <td className="p-4 font-medium">{feature}</td>
                      <td className="p-4 text-center bg-indigo-50">{prism}</td>
                      <td className="p-4 text-center">{traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that works best for you</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 px-4">
            <Card className="p-6 border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <div className="text-3xl font-bold">$29<span className="text-lg text-gray-500">/mo</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>50 generations per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>3 variations per generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Basic support</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/generator">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-indigo-600 hover:shadow-xl transition-all relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <div className="text-3xl font-bold">$79<span className="text-lg text-gray-500">/mo</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>200 generations per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>5 variations per generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Custom CSS export</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                  asChild
                >
                  <Link to="/generator">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <div className="text-3xl font-bold">$199<span className="text-lg text-gray-500">/mo</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Unlimited generations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Unlimited variations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>24/7 priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>API access</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 py-12">
          <h2 className="text-4xl font-bold">Ready to Transform Your Landing Pages?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of marketers and businesses using Prism Pages to create 
            high-converting landing pages in minutes.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            asChild
          >
            <Link to="/generator">Start Your Free Trial</Link>
          </Button>
        </div>
        
      </main>

      {/* Modern Footer */}
      <footer className="w-full bg-black text-white overflow-hidden mt-16 relative shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.3)]">
        {/* Glowing Edge Line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
        
        {/* Decorative Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent transform -skew-x-12"></div>
          <div className="absolute -right-1/4 top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-purple-500/5 to-transparent transform skew-x-12"></div>
        </div>

        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30 opacity-30 animate-gradient-x"></div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 overflow-hidden mix-blend-overlay opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="absolute inset-0 rotate-45 scale-150 bg-[repeating-linear-gradient(45deg,transparent,transparent_35px,rgba(255,255,255,0.1)_35px,rgba(255,255,255,0.1)_70px)]"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute h-2 w-2 rounded-full bg-indigo-500/30 blur-sm top-20 left-[20%] animate-float-slow"></div>
          <div className="absolute h-3 w-3 rounded-full bg-purple-500/30 blur-sm top-40 left-[60%] animate-float-medium"></div>
          <div className="absolute h-2 w-2 rounded-full bg-pink-500/30 blur-sm top-60 left-[80%] animate-float-fast"></div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-48 w-64 h-64 bg-pink-600/20 rounded-full blur-[80px] animate-pulse delay-500"></div>
        <div className="absolute top-1/2 -translate-y-1/2 -left-48 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px] animate-pulse delay-700"></div>

        {/* Interactive Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 opacity-20 animate-gradient-x"></div>
          
          {/* Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-rotate-slow"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-rotate-slow-reverse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-20">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
              {/* Brand Section */}
              <div className="md:col-span-4 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text inline-block">
                    Prism Pages
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Transform your designs into infinite possibilities with AI-powered landing pages. Join the future of web design.
                  </p>
                </div>
                
                {/* Newsletter */}
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md text-sm font-medium hover:from-indigo-700 hover:to-purple-700 transition-all">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white/90">Product</h4>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Enterprise</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white/90">Company</h4>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white/90">Resources</h4>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white/90">Legal</h4>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-6">
                  <p className="text-sm text-gray-400">© 2024 Prism Pages. All rights reserved.</p>
                  <div className="h-4 w-px bg-white/10 hidden md:block"></div>
                  <p className="text-sm text-gray-400 hidden md:block">Made with ❤️ globally</p>
                </div>
                
                <div className="flex items-center gap-6">
                  <a href="#" className="group">
                    <span className="sr-only">Twitter</span>
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                      <svg className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="group">
                    <span className="sr-only">GitHub</span>
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                      <svg className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="group">
                    <span className="sr-only">Discord</span>
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                      <svg className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;