export function AboutMe() {
    return (
      <section 
        id="about-me" 
        className="py-20 px-6 md:px-12 lg:px-16"
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* 5x6 Bento Grid */}
          <div className="grid grid-cols-5 gap-4">
            {/* Column 1, Row 1 - Streamline Processes */}
            <div className="bento-no-min flex items-center justify-center">
              <h3 className="font-heading text-2xl text-foreground text-center">
                Streamline Processes
              </h3>
            </div>
  
            {/* Column 2, Rows 1-2 - AI Forge */}
            <div className="bento-no-min row-span-2 flex flex-col justify-between items-center text-center">
                <h3 className="font-heading text-2xl text-foreground">
                AI Forge<br />Cohort 5<br />Alumnus
                </h3>
                <span className="font-body text-sm text-muted-foreground font-light">
                12 out of 500+
                </span>
            </div>

            {/* Column 3, Rows 1-2 - AI Patent */}
            <div className="bento-no-min row-span-2 flex flex-col justify-between items-center text-center">
                <h3 className="font-heading text-2xl text-foreground">
                AI Patent<br />Winner<br />2023
                </h3>
                <span className="font-body text-sm text-muted-foreground font-light">
                IP Hatch Winner 2023
                </span>
            </div>

            {/* Column 4, Rows 1-2 - Sky Labs */}
            <div className="bento-no-min row-span-2 flex flex-col justify-between items-center text-center">
                <h3 className="font-heading text-2xl text-foreground">
                Sky Labs<br />Finalist<br />2022
                </h3>
                <span className="font-body text-sm text-muted-foreground font-light">
                18 out of 250+
                </span>
            </div>
  
            {/* Column 5, Rows 1-3 - Business-First Tech Leader */}
            <div className="bento-no-min row-span-3 flex flex-col">
              <h3 className="font-heading text-lg text-foreground mb-4">
                Business-First Tech Leader
              </h3>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                "From ML research to Co-Founder & CTO, I have learned that brilliant tech means nothing without business impact. Every system I build starts with one question: How will this move the business forward?"
              </p>
            </div>
  
            {/* Column 1, Row 2 - Trusted by AccuraCast */}
            <div className="bento-no-min flex flex-col justify-between items-center text-center">
              <img 
                src="/src/assets/AccuraCast.svg" 
                alt="AccuraCast" 
                className="h-8 w-auto"
              />
              <span className="font-body text-sm text-muted-foreground font-light">
                Trusted by
              </span>
            </div>
  
            {/* Column 1, Rows 3-6 - Experience */}
            <div className="bento-no-min row-span-4 flex flex-col">
              <h3 className="font-heading text-xl text-foreground mb-2">
                Experience
              </h3>
              <p className="font-body text-sm text-muted-foreground font-light mb-4 leading-relaxed">
                From startup MVP to enterprise scale
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="font-body text-muted-foreground">• ML Pipelines</div>
                <div className="font-body text-muted-foreground">• Multi-platform Integrations</div>
                <div className="font-body text-muted-foreground">• RAG Systems</div>
                <div className="font-body text-muted-foreground">• LangChain</div>
                <div className="font-body text-muted-foreground">• Multi-tenant SaaS</div>
                <div className="font-body text-muted-foreground">• Enterprise Data Governance</div>
                <div className="font-body text-muted-foreground">• Full-stack Dev</div>
                <div className="font-body text-muted-foreground">• ML Algorithms</div>
                <div className="font-body text-muted-foreground">• Payment Processing</div>
                <div className="font-body text-muted-foreground">• System Architecture</div>
              </div>
            </div>
  
            {/* Columns 2-4, Rows 3-5 - Image and Bio */}
            <div className="bento-no-min col-span-3 row-span-3 flex items-center gap-6">
                {/* Image placeholder - left side */}
                <div className="w-52 h-52 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="font-body text-sm text-muted-foreground">Image</span>
                </div>
                {/* Text - right side */}
                <div className="flex flex-col">
                <h3 className="font-heading text-2xl text-foreground mb-2">
                    Stavros Symeonidis
                </h3>
                <p className="font-body text-sm font-light text-muted-foreground mb-4">
                    Patent-Winning AI Developer & CTO
                </p>
                {/* Social buttons */}
                <div className="flex gap-3">
                    <button className="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                    <img src="/src/assets/GitHubIcon.svg" alt="GitHub" className="w-6 h-6" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                    <img src="/src/assets/LinkedInIcon.svg" alt="LinkedIn" className="w-6 h-6" />
                    </button>
                </div>
                </div>
            </div>
  
            {/* Column 5, Row 4 - Scalable solutions */}
            <div className="bento-no-min flex flex-col justify-between items-center text-center">
              <span className="text-2xl mb-2">⚡</span>
              <span className="font-body text-sm text-muted-foreground font-light">
                Scalable solutions
              </span>
            </div>
  
            {/* Column 5, Row 5 - Prototype to Production */}
            <div className="bento-no-min flex flex-col justify-between items-center text-center">
              <span className="text-2xl mb-2">🚀</span>
              <span className="font-body text-sm text-muted-foreground font-light">
                Prototype to Production
              </span>
            </div>
  
            {/* Columns 2-4, Row 6 - Accepting 2 new clients */}
            <div className="bento-no-min col-span-3 flex items-center justify-center">
              <h3 className="font-heading text-xl text-foreground text-center">
                Accepting 2 new clients this quarter
              </h3>
            </div>
  
            {/* Column 5, Row 6 - Enterprise Compliance Standards */}
            <div className="bento-no-min flex items-center justify-center">
              <h3 className="font-heading text-2xl text-foreground text-center">
                Enterprise Compliance Standards
              </h3>
            </div>
          </div>
        </div>
      </section>
    )
  }