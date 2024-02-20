import React from 'react';

const ApplicantTable = ({applicants, index}) => {
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{applicants.name}</td>
        <td>{applicants.email}</td>
        <td>{applicants.department}</td>
        <td>{applicants.session}</td>
      </tr>
    );
};

export default ApplicantTable;