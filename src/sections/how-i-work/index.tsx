import { Methodology } from './methodology'
import { Focus } from './focus'
import { Capabilities } from './capabilities'
import { ResponseTime } from './response-time'
import { Contact } from './contact'
import { Services } from './services'

export function HowIWork() {
  return (
    <section 
      id="how-i-work" 
      className="py-20 px-6 md:px-12 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto">

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {/* Methodology */}
          <div className="bento-square">
            <Methodology />
          </div>

          {/* Focus */}
          <div className="bento-square">
            <Focus />
          </div>

          {/* Capabilities */}
          <div className="bento-square">
            <Capabilities />
          </div>

          {/* Response Time */}
          <div className="bento-square">
            <ResponseTime />
          </div>

          {/* Contact */}
          <div className="bento-square">
            <Contact />
          </div>

          {/* Services */}
          <div className="bento-square">
            <Services />
          </div>
        </div>
      </div>
    </section>
  )
}