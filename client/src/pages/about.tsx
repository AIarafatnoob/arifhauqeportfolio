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
