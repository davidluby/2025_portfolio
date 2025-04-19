import React from 'react'

const Professional = () => {
  return (
    <div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className='collapse-title font-semibold flex flex-col'>
          <div className='flex flex-col md:flex-row justify-between'>
            <div>Design Engineer</div>
            <div>Mar 2024 - Present</div>
          </div>
          <div className='text-sm italic'>Belcan - Lynn, MA</div>
        </div>
        <ul className="collapse-content text-sm list-disc list-inside">
          <li> Liaised customer-supplier interactions to ensure on-time delivery of 100’s of nonconforming MRB case records</li>
          <li> Saved customer over $80,000 using RSS tolerance analyses to substantiate acceptance of 3 manufacturing errors on a rotating part while ensuring interchangeability and safety in assembly of any engine</li>
          <li> Analyzed effect of thermally-induced hoop stress on nonconforming rabbet feature due to casting defect and accepted nonconformance based on an expected 3% stress increase</li>
          <li> Streamlined evaluation of nonconforming bolt hole circles using Python to automatically process CMM data and determine fit between mating parts for any 2 unique hole patterns 360 degrees around a flange</li>
          <li> Led digitization effort in engineering change orders for 5 glass master models to eliminate risk of breaking and to update according to GE best practices and ASME Y14.5</li>
          <li> Created machined equivalents to 7 cast parts using NX and Teamcenter to interface with a team of engineers</li>
          <li> Analyzed supplier data from inspectability requirements to validate fulfillment of critical manufacturing requirements</li>
        </ul>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className='collapse-title font-semibold flex flex-col'>
          <div className='flex flex-col md:flex-row justify-between'>
            <div>Mechanical Engineering Intern</div>
            <div>May 2022 - Aug 2022</div>
          </div>
          <div className='text-sm italic'>Lake Shore Cryotronics - Woburn, MA</div>
        </div>
        <ul className="collapse-content text-sm list-disc list-inside">
          <li> Defined universal sample holder requirements for ST-500 Cryostat, specifying a 3.5 K - 475 K temperature range, an adjustable vertical platform position, and the elimination of circular manufacturing processes</li>
          <li> Held design reviews and manufactured prototypes to verify sample holder components aligned with requirements</li>
          <li> Integrated sample holder prototypes in ST-500 system to validate product performance using analyses of test data</li>
          <li> Reduced worst-case tolerance stackup of ST-500 Cryostat platform by 67% with negligible cost increase</li>
          <li> Processed over 50 engineering change orders to update legacy drawings according to ASME Y14.5</li>
        </ul>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className='collapse-title font-semibold flex flex-col'>
          <div className='flex flex-col md:flex-row justify-between'>
            <div>Systems Engineering Intern</div>
            <div>Jun 2021 - Aug 2021</div>
          </div>
          <div className='text-sm italic'>Federal Aviation Administration - Washington, DC</div>
        </div>
        <ul className="collapse-content text-sm list-disc list-inside">
          <li> Defined .999 inherent availability requirement for non-Federal Remote Air Traffic Control Towers to ensure all Remote Tower (RT) systems in National Airspace System met Federal minimum performance and safety requirements</li>
          <li> Used existing specifications for RT systems in European standard  EUROCAE ED-240A  to justify 2 hour mean time  to repair and 2222 hour mean time between critical failure for calculation of inherent availability requirement</li>
          <li> Substantiated Federal authority to regulate non-Federal RT Systems to ensure safety of National Airspace System</li>
        </ul>
      </div>
    </div>
  )
}

export default Professional