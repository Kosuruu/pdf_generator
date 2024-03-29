import React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export const CVInfoContext = createContext();

const CVInfoContextProvider = (props) => {

    const [ contactInfo, setContactInfo ] = useState([]);

    const [ experience, setExperience ] = useState([
        { position: "Developer", 
        company: "We Develop Ltd", 
        city: "Atlantis", 
        jobStart: "23/09/2013", 
        jobEnd: "01/05/2021",
        id: 1 }
    ])

    const [ qualifications, setQualifications ] = useState([
        { qualification: "BA (Hons) - Surf Science", 
        institution: "University of Atlantis", 
        location: "Atlantis", 
        finished: "17/07/2013",
        id: 1 }
    ])

    const [ skills, setSkills ] = useState([
        { skill: "HTML/CSS", id: 1}
    ]);

    const addContact = ( firstName, lastName, phone, email, jobTitle ) => {
        setContactInfo({ firstName, lastName, phone, email, jobTitle, id: uuid()})
    }

    const addJob =  ( position, company, city, jobStart, jobEnd ) => {
        setExperience([...experience, {position, company, city, jobStart, jobEnd, id: uuid()}])
    }

    const addQualification = ( qualification, institution, location, finished ) => {
        setQualifications([...qualifications, {qualification, institution, location, finished, id: uuid()}])
    }

    const addSkill = ( skill ) => {
        setSkills([...skills, {skill, id: uuid()}]);
    }

    const removeJob = (id) => {
        setExperience(experience.filter(job => job.id !== id))
    }

    const removeQualification = (id) => {
        setQualifications(qualifications.filter(certificate => certificate.id !== id))
    }

    const clearSkills = () => {
        setSkills([]);
    }

    const editJob = ( position, company, city, jobStart, jobEnd, id ) => {
        const newState = experience.map(job => {
            if (job.id === id) {
                return {position, company, city, jobStart, jobEnd, id}
            } else {
                return job
            }
        })
        return (
            setExperience(newState)
        )
    }

    const editQualification = ( qualification, institution, location, finished, id ) => {
        const newState = experience.map(certificate => {
            if (certificate.id === id) {
                return {qualification, institution, location, finished, id}
            } else {
                return certificate
            }
        })
        return (
            setQualifications(newState)
        )
    }

    return ( 
        <CVInfoContext.Provider value={{ contactInfo, experience, qualifications, skills, 
        addContact, addJob, removeJob, addQualification, removeQualification, editJob, editQualification, addSkill, clearSkills }}>
            {props.children}
        </CVInfoContext.Provider>
     );
}
 
export default CVInfoContextProvider;