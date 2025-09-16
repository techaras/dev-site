import { Methodology } from '../how-i-work/methodology'
import { Focus } from '../how-i-work/focus'
import { Capabilities } from '../how-i-work/capabilities'

export function HowIWorkMobile() {
  return (
    <section 
      id="how-i-work-mobile" 
      className="w-full px-2.5 mt-12"
    >
      <div className="bento-square w-full">
        <Methodology />
      </div>
      
      <div className="w-full mt-6">
        <Focus />
      </div>

      <div className="bento-square w-full mt-6">
        <Capabilities />
      </div>
    </section>
  )
}