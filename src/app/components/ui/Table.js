import React from 'react'

const Table = ({ table_data }) => {

    const keys = table_data.keys
    const headers = table_data.headers
    const rows = table_data.rows

    const table = headers.map((header) => {
        rows.map((row) => {
            <table className="table table-pin-rows bg-base-200">
                <thead>
                    <th>{header}</th>
                </thead>
                <tbody>
                    <tr><td>{row}</td></tr>
                </tbody>
            </table>
        })
    })



  return (
    <div className="w-full h-full overflow-x-auto">
            {
                keys.map((key) => {
                    return (
                        <table key={key} className="table table-pin-rows bg-base-200 rounded-none">
                            <thead>
                                <tr>
                                    <th className='text-lg'>{headers[key]}</th>
                                </tr>
                            </thead>
                            {rows[key].map((row) => {
                                return (
                                    <tbody key={row}>
                                        <tr className='shadow-2xs'><td>{row}</td></tr>
                                    </tbody>
                                )
                            })}
                        </table>
                    )
                })
            }
    </div>
  )
}

export default Table