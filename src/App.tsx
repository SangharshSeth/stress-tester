import {BarChart2, ChevronRight, Code2, Github, Heart, PlayCircle, Twitter, Zap} from 'lucide-react';

// @ts-expect-error "error"
import '@fontsource-variable/inter';

const App = () => {
    return (
        <div className="min-h-screen bg-[#FFFDF9]" style={{fontFamily: "Inter Variable"}}>
            {/* Navigation */}
            <nav className="border-b-2 border-dashed border-zinc-300 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center space-x-2">
                            <Code2 className="h-6 w-6 text-amber-600 rotate-3"/>
                            <span className="text-xl -rotate-2">APITest</span>
                        </div>
                        <div className="flex space-x-8">
                            {['Docs', 'Pricing', 'Blog'].map(item => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-zinc-700 hover:-rotate-3 transition-transform  relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-amber-400 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
                <div className="relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2  text-zinc-400 rotate-3">
                        &lt;testing made fun&gt;
                    </div>
                    <h1 className="text-6xl font-bold tracking-tight text-zinc-900 mb-6 text-center">
                        <div className="relative inline-block">
                            <span className="inline-block rotate-2 hover:rotate-0 transition-transform">Test</span>
                        </div>
                        {' '}
                        <div className="relative inline-block">
                            <span className="inline-block -rotate-1 hover:rotate-0 transition-transform">Your</span>
                            <div className="absolute -bottom-2 left-0 w-full h-3 bg-amber-300 -rotate-1"></div>
                        </div>
                        {' '}
                        <div className="relative inline-block">
                            <span className="inline-block rotate-1 hover:rotate-0 transition-transform">APIs</span>
                        </div>
                    </h1>
                    <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-12 text-center">
                        because nobody likes slow APIs
                        <span className="block text-sm mt-2">( we made it fun )</span>
                    </p>
                    <div className="flex justify-center space-x-6">
                        <button
                            className="group px-8 py-4 bg-transparent border-2 border-zinc-800 rounded-sm text-zinc-800 hover:bg-zinc-800 hover:text-white transition-all rounded-none relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Start Testing 
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"/>
              </span>
                            <div
                                className="absolute top-0 left-0 w-full h-full bg-amber-300 -translate-x-full group-hover:translate-x-0 transition-transform"></div>
                        </button>
                        <button
                            className="px-8 py-4 bg-transparent text-zinc-600 border-2 rounded-sm border-dashed border-zinc-300 hover:border-amber-400 hover:-translate-y-1 transition-all">
                            <Github className="inline-block mr-2 h-4 w-4 -rotate-3"/>
                            View Source
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <div className="w-16 h-1 bg-amber-400 mb-6 -rotate-3"></div>
                        <h2 className="text-3xl font-bold mb-4">Why developers <br/>love this stuff</h2>
                    </div>

                    <div className="space-y-24">
                        <div className="flex items-center justify-between odd:flex-row-reverse">
                            <div className="w-1/2">
                                <Zap className="h-8 w-8 text-amber-600 rotate-12 mb-4"/>
                                <h3 className="text-2xl font-bold mb-4">Lightning Fast Tests</h3>
                                <p className="text-zinc-600 ">
                                    Run thousands of concurrent tests with minimal overhead.
                                    Your CI/CD pipeline will thank you later.
                                </p>
                            </div>
                            <div className="w-1/3">
                                <div className="aspect-square border-2 border-zinc-800 rotate-3 relative">
                                    <div className="absolute inset-0 bg-amber-100 -rotate-6"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="w-1/2">
                                <PlayCircle className="h-8 w-8 text-amber-600 -rotate-12 mb-4"/>
                                <h3 className="text-2xl font-bold mb-4">Write Tests Like Poetry</h3>
                                <p className="text-zinc-600 ">
                                    Simple, elegant syntax that makes test writing
                                    feel like creating art. Yes, we said that.
                                </p>
                            </div>
                            <div className="w-1/3">
                                <div
                                    className="aspect-square border-2 border-dashed border-zinc-800 -rotate-3 relative">
                                    <div className="absolute inset-0 bg-amber-200 rotate-6"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between odd:flex-row-reverse">
                            <div className="w-1/2">
                                <BarChart2 className="h-8 w-8 text-amber-600 rotate-6 mb-4"/>
                                <h3 className="text-2xl font-bold mb-4">Beautiful Insights</h3>
                                <p className="text-zinc-600 ">
                                    Data visualization that actually makes sense.
                                    Spot issues before they become problems.
                                </p>
                            </div>
                            <div className="w-1/3">
                                <div className="aspect-square border-2 border-zinc-800 rotate-6 relative">
                                    <div className="absolute inset-0 bg-amber-300 -rotate-12"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center relative">
                    <div className="absolute -top-6 right-1/2 translate-x-1/2  text-zinc-400 -rotate-3">
                        &lt;let's do this&gt;
                    </div>
                    <h2 className="text-3xl font-bold mb-6">Ready to write better tests?</h2>
                    <p className="text-lg text-zinc-600  mb-8 max-w-lg mx-auto">
                        Join the cool kids. We promise your tests won't look like they're from 2010.
                    </p>
                    <button
                        className="group px-12 py-6 bg-zinc-800 text-white  hover:translate-x-1 hover:-translate-y-1 transition-transform relative">
                        <span className="relative z-10">Start Testing for Free</span>
                        <div
                            className="absolute inset-0 border-2 border-zinc-800 -translate-x-2 translate-y-2 -z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></div>
                    </button>
                </div>
            </div>
            {/*Footer */}
            <footer className="border-t-2 border-dashed border-zinc-300 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-3 gap-12 mb-12">
                        {/* Brand Column */}
                        <div>
                            <div className="flex items-center space-x-2 mb-6">
                                <Code2 className="h-5 w-5 text-amber-600 rotate-3"/>
                                <span className="font-mono text-lg -rotate-2">APITest</span>
                            </div>
                            <p className="text-zinc-600 font-mono text-sm">
                                Making API testing fun since<br/>
                                <span className="font-bold">yesterday-ish</span>
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="font-mono font-bold mb-4 rotate-1">Quick Links</h3>
                            <div className="grid grid-cols-2 gap-2">
                                <a href="#"
                                   className="text-zinc-600 hover:-rotate-2 inline-block transition-transform  text-sm hover:text-amber-600">
                                    Docs
                                </a>
                                <a href="#"
                                   className="text-zinc-600 hover:-rotate-2 inline-block transition-transform  text-sm hover:text-amber-600">
                                    Examples
                                </a>
                                <a href="#"
                                   className="text-zinc-600 hover:-rotate-2 inline-block transition-transform  text-sm hover:text-amber-600">
                                    GitHub
                                </a>
                                <a href="#"
                                   className="text-zinc-600 hover:-rotate-2 inline-block transition-transform  text-sm hover:text-amber-600">
                                    Discord
                                </a>
                            </div>
                        </div>

                        {/* Connect Column */}
                        <div className="flex flex-col items-end">
                            <button
                                className="px-6 py-3 bg-transparent text-zinc-600  border-2 border-dashed border-zinc-300 hover:border-amber-400 hover:-translate-y-1 transition-all mb-4">
                                Join Discord
                            </button>
                            <div className="flex space-x-4">
                                <a href="#" className="text-zinc-400 hover:text-zinc-600 transition-colors">
                                    <Twitter className="h-5 w-5 hover:-rotate-6 transition-transform"/>
                                </a>
                                <a href="#" className="text-zinc-400 hover:text-zinc-600 transition-colors">
                                    <Github className="h-5 w-5 hover:rotate-6 transition-transform"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-zinc-200">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-1 text-sm text-zinc-500">
                                <span>Built with</span>
                                <Heart className="h-4 w-4 text-amber-500 inline rotate-3"/>
                                <span>by developers who test</span>
                            </div>

                            <div className="text-sm text-zinc-500">
                                MIT Licensed
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;