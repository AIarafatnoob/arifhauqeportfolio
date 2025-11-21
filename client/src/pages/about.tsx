export default function About() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
            About Me
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img 
              src="/assets/hero2.png" 
              alt="Arif Haque portrait" 
              className="w-full h-96 object-cover pill"
              data-testid="artist-portrait"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-6">
              The Designer Behind the Brand
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Born and raised in Bangladesh, my design journey began with a passion for visual storytelling and brand identity. I believe design should create meaningful connections between brands and their audiences.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With 8+ years of experience working with international clients from Germany, Malaysia, China, Canada, the UK, and the USA, I've developed expertise in creating visually stunning designs that effectively communicate brand messages.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not designing, you'll find me exploring new design trends, mentoring junior designers, or working on innovative branding solutions for emerging businesses.
            </p>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6">Education & Certifications</h3>
            <div className="space-y-6">
              <div data-testid="education-typography">
                <h4 className="text-lg font-semibold">Essential Typography Principles</h4>
                <p className="text-muted-foreground">ALISON, 2025</p>
              </div>
              <div data-testid="education-graphic-design">
                <h4 className="text-lg font-semibold">Graphic Design Course</h4>
                <p className="text-muted-foreground">ALISON, 2025</p>
              </div>
              <div data-testid="education-ai">
                <h4 className="text-lg font-semibold">AI for Beginners</h4>
                <p className="text-muted-foreground">HP LIFE Foundation, 2025</p>
              </div>
              <div data-testid="education-branding">
                <h4 className="text-lg font-semibold">Logo & Branding Identity</h4>
                <p className="text-muted-foreground">Domestika (Mentor: Sagi Haviv), 2020-2021</p>
              </div>
              <div data-testid="education-visual">
                <h4 className="text-lg font-semibold">Graphic & Visual Identity Design</h4>
                <p className="text-muted-foreground">DPTI Dhaka, 2013-2015</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6">Professional Experience</h3>
            <div className="space-y-6">
              <div data-testid="experience-independent">
                <h4 className="text-lg font-semibold">Independent Graphic Designer</h4>
                <p className="text-muted-foreground">December 2021 - Present</p>
                <p className="text-sm text-muted-foreground mt-1">15+ international branding projects, 95% on-time delivery</p>
              </div>
              <div data-testid="experience-senior">
                <h4 className="text-lg font-semibold">Senior Graphic Designer</h4>
                <p className="text-muted-foreground">Design Bari, Jashore | March 2018 - Nov 2021</p>
                <p className="text-sm text-muted-foreground mt-1">Led team of 6 designers, 35% increase in client retention</p>
              </div>
              <div data-testid="experience-compass">
                <h4 className="text-lg font-semibold">Graphic Designer</h4>
                <p className="text-muted-foreground">Compass Communication, Dhaka | 2015 - 2017</p>
                <p className="text-sm text-muted-foreground mt-1">25% increase in user engagement through design</p>
              </div>
              <div data-testid="experience-entry">
                <h4 className="text-lg font-semibold">Entry-Level Designer</h4>
                <p className="text-muted-foreground">Zeronlab IT Solution, Dhaka | 2014</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center mb-20">
          <h3 className="text-2xl font-serif font-semibold mb-8">Let's Connect</h3>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <a 
              href="mailto:arifhaque.zeronlab@gmail.com" 
              className="bg-red-600 text-white pill p-6 hover:scale-105 transition-transform duration-300"
              data-testid="social-email-prominent"
            >
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v9.273L12 8.183l6.545 4.91V3.82h3.819c.904 0 1.636.733 1.636 1.637z"/>
                </svg>
                <div className="text-left">
                  <div className="font-semibold">Email</div>
                  <div className="text-sm opacity-90">arifhaque.zeronlab@gmail.com</div>
                </div>
              </div>
            </a>

            <a 
              href="tel:+8801712773855" 
              className="bg-green-600 text-white pill p-6 hover:scale-105 transition-transform duration-300"
              data-testid="social-phone-prominent"
            >
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div className="text-left">
                  <div className="font-semibold">Phone</div>
                  <div className="text-sm opacity-90">+88 01712773855</div>
                </div>
              </div>
            </a>

            <a 
              href="https://dribbble.com/arif_haque" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white pill p-6 hover:scale-105 transition-transform duration-300"
              data-testid="social-dribbble-prominent"
            >
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.5 2.252 3.5 2.273 5.698-.653-.126-2.194-.26-3.742-.16-.1-.246-.2-.49-.32-.73-.32-.77-.67-1.52-1.03-2.26 1.34-.55 2.478-1.228 2.818-1.548zM12 2.275c2.245 0 4.315.855 5.876 2.256-.2.2-1.26.748-2.56 1.17-1.27-2.295-2.646-4.16-2.848-4.426A9.725 9.725 0 0112 2.275zM9.7 1.9c.22.27 1.6 2.14 2.87 4.42C10.18 7.69 7.9 8.35 5.27 8.35c-.27 0-.54 0-.81-.02C5.11 6.06 7.03 3.42 9.7 1.9zm-7.15 10.25c.3.01.61.01.91.01 3.36 0 6.17-.85 7.97-2.22.32.62.6 1.26.85 1.9-.14.04-.27.09-.4.15-2.1.82-3.97 2.38-5.26 4.56A9.7 9.7 0 012.55 12.15zm1.9 6.62c1.1-1.94 2.69-3.24 4.45-3.95.37-.15.75-.27 1.14-.36.2.52.38 1.04.54 1.57.48 1.62.73 3.17.8 4.6-2.44-.49-4.47-2.04-5.93-3.86zm7.33 2.9c-.1-1.32-.35-2.72-.8-4.26-.14-.48-.3-.95-.48-1.4 1.4-.18 2.9-.12 4.54.18-.18 2.23-1.04 4.25-2.42 5.7-.84-.14-1.68-.22-2.84-.22z"/>
                </svg>
                <div className="text-left">
                  <div className="font-semibold">Dribbble</div>
                  <div className="text-sm opacity-90">arif_haque</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-muted p-12 pill">
          <h3 className="text-2xl font-serif font-semibold mb-6 text-center">
            Design Philosophy
          </h3>
          <blockquote className="text-xl text-center italic text-muted-foreground leading-relaxed" data-testid="artistic-philosophy">
            "I am passionate about combining aesthetics with functionality to drive brand success. My systematic approach to design ensures that every project not only looks exceptional but also effectively communicates the brand's message and values."
          </blockquote>
        </div>
      </div>
    </div>
  );
}