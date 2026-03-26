import React from 'react'
import Table from './Table'

const table_data = {
    keys : [0, 1, 2, 3, 4],
    headers : ['Skills', 'Mechanical Eng', 'Software Eng', 'Tools', 'DevOps'],
    rows: [
        ['Spanish', 'Technical Presentation', 'Project Management', 'Business Case Review', 'Customer Relationships', 'Product Development', 'Requirement Definition', 'Prototyping and Testing', 'Warm Calling'],
        ['Part Defect Evaluation', 'Tolerance Analysis', 'Root Cause Analysis', 'FEA/CFD', 'Drawing Changes', 'GD&T', 'Mechatronics'],
        ['Fullstack Development', 'Data Analysis & Visualization', 'CI/CD Cloud Deployment', 'API Design', 'Database Management'],
        ['SOLIDWORKS/PDM', 'NX/Teamcenter', 'MATLAB/Simulink', 'Python', 'C', 'JavaScript', 'HTML', 'CSS', 'SQL', 'MS Office Suite'],
        ['NextJS', 'Flask', 'MSSQL', 'Linux', 'AWS EC2', 'AWS RDS','AWS CodeDeploy','AWS CodePipeline', 'Apache', 'SSL', 'DNS', 'Git']
    ]
}

const Skills = () => {
  return (
    <div className="h-125 bg-base-100 shadow-xl rounded-lg">
        <Table table_data={table_data} />
    </div>
  )
}

export default Skills