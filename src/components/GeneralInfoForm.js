import React, { useState, useContext } from "react"
import { CVInfoContext } from "../contexts/CVInfoContext";

function GeneralInfoForm() {
    const { addContact } = useContext(CVInfoContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(firstName, lastName, phone, email, jobTitle);
    }
    return(
        <div>
            <form id="general-info-form" onSubmit={handleSubmit}>
            <label>Informations Personnelles</label>
            <br />
                <input
                    type="text"
                    value={firstName}
                    placeholder="First name"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <br />
                <input
                    type="text"
                    value={lastName}
                    placeholder="Last name"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <br />
                <input
                    type="text"
                    value={phone}
                    placeholder="Phone number"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <br />
                <input
                    type="text"
                    value={email}
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br />
                <input
                    type="text"
                    value={jobTitle}
                    placeholder="Job title"
                    onChange={(e) => setJobTitle(e.target.value)}
                    required
                />
                <br />
                <button>Sauvegarder</button>
            </form>
        </div>
    )
}

export default GeneralInfoForm