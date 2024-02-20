import React, { useContext } from 'react';
import { CVInfoContext } from '../contexts/CVInfoContext';
import EducationInfo from './EducationInfo';

const EducationList = () => {
    const { qualifications } = useContext(CVInfoContext);
    return ( 
        <div id="education-list">
            <h3>Diplôme Obtenue</h3>
            {qualifications.map(certificate => {
            return (<EducationInfo certificate={certificate} key={certificate.id} />)
            })}
        <hr />
        </div>
     );
}
 
export default EducationList;