import React from 'react'
import Image from 'next/image'
import Table from './Table'

const table_data = {
    keys : [0, 1, 2, 3, 4],
    headers : ['Skills', 'Mechanical Eng', 'Software Eng', 'Tools', 'DevOps'],
    rows: [
        ['Spanish', 'Technical Presentations', 'Customer Interfacing', 'Requirement Definition', 'Prototyping', 'Product Development'],
        ['GD&T', 'Tolerance Analysis', 'FEA/CFD', 'Mechatronics'],
        ['Fullstack Development', 'CI/CD Cloud Deployment', 'API Design', 'Database Management'],
        ['SOLIDWORKS/PDM', 'NX/Teamcenter', 'MATLAB/Simulink', 'Python', 'C', 'JavaScript', 'HTML', 'CSS', 'SQL', 'MS Office Suite'],
        ['NextJS', 'Flask', 'MSSQL', 'Linux', 'AWS EC2', 'AWS RDS','AWS CodeDeploy','AWS CodePipeline', 'Apache', 'SSL', 'DNS', 'Git']
    ]
}

const Skills = () => {
  return (
    <div className="card card-side h-96 bg-base-100 shadow-xl">
        <figure className='w-1/2 md:w-3/5'>
            <Image src='/headshot.jpg' width={1500} height={1500} alt='headshot' className=''></Image>
        </figure>
        <div className="card-body p-0 w-1/2 h-full">
            <Table table_data={table_data} />
        </div>
    </div>
  )
}

export default Skills