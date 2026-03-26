import React from 'react'

const Professional = () => {
  return (
    <div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className='collapse-title font-semibold flex flex-col'>
          <div className='flex flex-col md:flex-row justify-between'>
            <div>Project Mangement Analyst</div>
            <div>Mar 2025 - Present</div>
          </div>
          <div className='text-sm italic'>Belcan - Lynn, MA</div>
        </div>
        <ul className="collapse-content text-sm list-disc list-inside">
          <li> Developed relationships with GE engineers and manufacturing plant leaders to discuss business cases, technical feasibility, risks, timelines, and new opportunities for hundreds of commercial engine line (LEAP) cost savings projects</li>
          <li> Helped LEAP Operating Expense (OE) Team ideate, prioritize, and manage over 3000 cost savings projects to reduce net LEAP engine line inflation to less than 1% ($24M) through 2025 fiscal year</li>
          <li> Defined cost savings KPI’s and used Smartsheet Python SDK and API to build dashboards, visualizations, and automations to monitor team performance, project anomalies, and overall project pipeline health</li>
          <li> Created Excel models to analyze cost savings project data, identify trends, gather key insights, and drive LEAP OE Team project management operations and actions</li>
          <li> Managed SQDIP Daily Management Dashboard in support of LEAP OE Team weekly operating rhythms and helped plan team building events to drive cohesion</li>
        </ul>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className='collapse-title font-semibold flex flex-col'>
          <div className='flex flex-col md:flex-row justify-between'>
            <div>Design Engineer</div>
            <div>Mar 2024 - Mar 2025</div>
          </div>
          <div className='text-sm italic'>Belcan - Lynn, MA</div>
        </div>
        <ul className="collapse-content text-sm list-disc list-inside">
          <li> Used supplier data to perform tolerance stack ups, analyze stress concentrations, and recommend repairs to close hundreds of Material Review Board (MRB) case records and reduce losses from defective parts</li>
          <li> Resolved MRB case record defects within average quarterly performance KPI (25 hours per resolution)</li>
          <li> Worked with suppliers to propose, analyze, and issue dozens of drawing changes to reduce frequent manufacturing defects, improve part producibility, and save on manufacturing costs</li>
          <li> Modeled design changes and part defects in SOLIDWORKS and NX to evaluate and influence design engineering decisions for several GE Aerospace engine lines and parts</li>
          <li> Assisted suppliers and quality engineers in developing inspection requirements for significant manufacturing processes and gather data to validate results</li>
          <li> Streamlined evaluation of nonconforming bolt hole circles using Python to automatically process CMM data and determine fit between any two mating bolt hole patterns</li>
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
          <li> Designed an adjustable sample holder platform using a collet clamp to secure its vertical position while eliminating circular manufacturing processes and maintaining adequate thermal conductivity</li>
          <li> Held design reviews, manufactured prototypes, gathered test data, and analyzed results to validate sample holder user and thermal performance requirements</li>
          <li> Reduced worst-case tolerance stackup of ST-500 Cryostat platform by 67% with negligible cost increase</li>
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
          <li> Defined uptime requirements for remote air traffic control towers according to minimum federal performance and safety guidelines for the National Airspace System</li>
          <li> Substantiated federal authority to regulate remote air traffic control towers at private, non-federal airports using existing precedent detailed in regulatory documents</li>
        </ul>
      </div>
    </div>
  )
}

export default Professional