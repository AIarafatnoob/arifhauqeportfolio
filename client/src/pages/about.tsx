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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
              alt="Alex Chen portrait" 
              className="w-full h-96 object-cover pill"
              data-testid="artist-portrait"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-6">
              The Artist Behind the Work
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Born in San Francisco and raised between cultures, my artistic journey began with a fascination for the spaces where traditional and digital media intersect. I believe art should challenge perspectives and create dialogue.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              After completing my MFA at UCLA, I've spent the last five years developing a unique visual language that explores themes of identity, technology, and human connection in our digital age.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not in the studio, you'll find me exploring gallery districts, experimenting with new technologies, or teaching workshops to emerging artists.
            </p>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              <div data-testid="education-mfa">
                <h4 className="text-lg font-semibold">MFA in Fine Arts</h4>
                <p className="text-muted-foreground">UCLA, 2019</p>
              </div>
              <div data-testid="education-bfa">
                <h4 className="text-lg font-semibold">BFA in Digital Media</h4>
                <p className="text-muted-foreground">RISD, 2017</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6">Selected Exhibitions</h3>
            <div className="space-y-6">
              <div data-testid="exhibition-moca">
                <h4 className="text-lg font-semibold">Contemporary Visions</h4>
                <p className="text-muted-foreground">MOCA Los Angeles, 2024</p>
              </div>
              <div data-testid="exhibition-sfmoma">
                <h4 className="text-lg font-semibold">Digital Futures</h4>
                <p className="text-muted-foreground">SF Museum of Modern Art, 2023</p>
              </div>
              <div data-testid="exhibition-whitney">
                <h4 className="text-lg font-semibold">Emerging Artists</h4>
                <p className="text-muted-foreground">Whitney Biennial, 2022</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center mb-20">
          <h3 className="text-2xl font-serif font-semibold mb-8">Follow My Journey</h3>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <a 
              href="#" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white pill p-6 hover:scale-105 transition-transform duration-300"
              data-testid="social-instagram-prominent"
            >
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <div className="text-left">
                  <div className="font-semibold">Instagram</div>
                  <div className="text-sm opacity-90">@alexchen.art</div>
                </div>
              </div>
            </a>

            <a 
              href="#" 
              className="bg-blue-600 text-white pill p-6 hover:scale-105 transition-transform duration-300"
              data-testid="social-behance-prominent"
            >
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.48.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.497 1.19.9.26 1.567.65 2.002 1.17.435.52.652 1.19.652 2.01 0 .75-.13 1.39-.39 1.93-.26.54-.65.99-1.17 1.35-.52.36-1.146.62-1.883.78-.736.16-1.576.24-2.52.24H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.43-.297.71-.687.84-1.17h2.31c-.39 1.39-1.03 2.39-1.91 3.01-.88.62-1.94.93-3.18.93-1.337 0-2.518-.4-3.544-1.2-1.025-.8-1.537-2.19-1.537-4.17 0-1.83.537-3.27 1.61-4.32 1.073-1.05 2.426-1.58 4.06-1.58 1.23 0 2.27.28 3.12.84.85.56 1.525 1.311 2.025 2.254.5.943.75 2.006.75 3.19l-.02.32h-6.95c.02.97.29 1.683.73 2.111z"/>
                </svg>
                <div className="text-left">
                  <div className="font-semibold">Behance</div>
                  <div className="text-sm opacity-90">alexchen_studio</div>
                </div>
              </div>
            </a>

            <a 
              href="#" 
              className="bg-black text-white pill p-6 hover:scale-105 transition-transform duration-300"
              data-testid="social-dribbble-prominent"
            >
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.5 2.252 3.5 2.273 5.698-.653-.126-2.194-.26-3.742-.16-.1-.246-.2-.49-.32-.73-.32-.77-.67-1.52-1.03-2.26 1.34-.55 2.478-1.228 2.818-1.548zM12 2.275c2.245 0 4.315.855 5.876 2.256-.2.2-1.26.748-2.56 1.17-1.27-2.295-2.646-4.16-2.848-4.426A9.725 9.725 0 0112 2.275zM9.7 1.9c.22.27 1.6 2.14 2.87 4.42C10.18 7.69 7.9 8.35 5.27 8.35c-.27 0-.54 0-.81-.02C5.11 6.06 7.03 3.42 9.7 1.9zm-7.15 10.25c.3.01.61.01.91.01 3.36 0 6.17-.85 7.97-2.22.32.62.6 1.26.85 1.9-.14.04-.27.09-.4.15-2.1.82-3.97 2.38-5.26 4.56A9.7 9.7 0 012.55 12.15zm1.9 6.62c1.1-1.94 2.69-3.24 4.45-3.95.37-.15.75-.27 1.14-.36.2.52.38 1.04.54 1.57.48 1.62.73 3.17.8 4.6-2.44-.49-4.47-2.04-5.93-3.86zm7.33 2.9c-.1-1.32-.35-2.72-.8-4.26-.14-.48-.3-.95-.48-1.4 1.4-.18 2.9-.12 4.54.18-.18 2.23-1.04 4.25-2.42 5.7-.84-.14-1.68-.22-2.84-.22z"/>
                </svg>
                <div className="text-left">
                  <div className="font-semibold">Dribbble</div>
                  <div className="text-sm opacity-90">alexchen</div>
                </div>
              </div>
            </a>

            <a 
              href="#" 
              className="bg-blue-700 text-white pill p-6 hover:scale-105 transition-transform duration-300"
              data-testid="social-linkedin-prominent"
            >
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <div className="text-left">
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-sm opacity-90">Alex Chen</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-muted p-12 pill">
          <h3 className="text-2xl font-serif font-semibold mb-6 text-center">
            Artistic Philosophy
          </h3>
          <blockquote className="text-xl text-center italic text-muted-foreground leading-relaxed" data-testid="artistic-philosophy">
            "Art is the bridge between what is and what could be. Through my work, I explore the liminal spaces where tradition meets innovation, where the physical and digital converge, and where individual stories become universal truths."
          </blockquote>
        </div>
      </div>
    </div>
  );
}
