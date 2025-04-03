import React from 'react'
import Image from 'next/image'
import Table from './Table'

const table_data = {
    keys : [0, 1, 2, 3],
    headers : ['Aptitudes', 'Softwares', 'Programming', 'DevOps'],
    rows: [
        ['Technical Presentations', 'Customer Interfacing', 'Fullstack Development', 'CI/CD Cloud Deployment', 'API Design', 'Database Management', 'Requirement Definition', 'System Design', 'Prototyping', 'Product Development', 'GD&T', 'Tolerance Analysis', 'CFD', 'FEA', 'Mechatronics'],
        ['SOLIDWORKS', 'PDM', 'NX', 'Teamcenter', 'Simulink', 'MS Office Suite'],
        ['Python', 'MATLAB', 'C', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Spanish'],
        ['NextJS', 'Flask', 'MSSQL', 'Linux', 'AWS EC2', 'AWS RDS','AWS CodeDeploy','AWS CodePipeline', 'Apache', 'SSL', 'DNS', 'Git']
    ]
}

const Skills = () => {
  return (
    <div className="card card-side h-96 bg-base-100 shadow-sm">
        <figure>
            <Image src='/headshot.jpg' width={1500} height={1500} alt='headshot' className=''></Image>
        </figure>
        <div className="card-body p-0 w-1/2 h-full">
            <Table table_data={table_data} />
        </div>
    </div>
  )
}

export default Skills