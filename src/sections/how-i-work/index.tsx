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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
          
          {/* Methodology - Row 1 Col 1 (both layouts) */}
          <div className="bento-square">
            <Methodology />
          </div>
          
          {/* Focus - Row 1 Col 2 (under 1390px) / Row 1 Col 2 (over 1390px) */}
          <div className="">
            <Focus />
          </div>
          
          {/* Capabilities - Row 2 Col 2 (under 1390px) / Row 1 Col 3 (over 1390px) */}
          <div className="bento-square md:order-4 xl:order-3">
            <Capabilities />
          </div>

          {/* Response Time + Contact - Row 2 Col 1 (under 1390px) / Row 2 Col 1 (over 1390px) */}
          <div className="flex flex-col gap-6 md:order-3 xl:order-4">
            <div>
              <ResponseTime />
            </div>
            <div className="bento-square">
              <Contact />
            </div>
          </div>

          {/* Services - Row 3 spanning both columns (under 1390px) / Row 2 Col 2-3 (over 1390px) */}
          <div className="bento-square md:col-span-2 xl:col-span-2 md:order-5 xl:order-5">
            <Services />
          </div>
        </div>
      </div>
    </section>
  )
}