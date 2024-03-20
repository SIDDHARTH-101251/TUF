import './form.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [values, setValues] = useState({
        userName: '',
        language: '',
        stdInput: '',
        code: ''
    });
    const [submitted, setSubmitted] = useState(false); // State to track if form submitted
    const navigate = useNavigate();

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/submit', values)
            .then(res => {
                console.log("Inserted Successfully");
                setSubmitted(true); // Set submitted to true when form submitted successfully
            })
            .catch(err => console.log(err));
    };

    const getSubmissions = () => {
        navigate('./submissions')
    };

    return (
        <div className="form-container">
            <form className="form-style" onSubmit={handleSubmit}>
                <div className="user-name-code-lang-container">
                    <div>
                        <label className="label-style">Username : </label>
                        <br />
                        <input type="text" name="userName" className="input-element-style" onChange={handleChange} required /> {/* Added required attribute */}
                    </div>
                    <div>
                        <label htmlFor="language" className="label-style">Choose Code Language : </label>
                        <br />
                        <select id="language" className="input-element-style" onChange={handleChange} name="language" required> {/* Added required attribute */}
                            <option value="">select</option>
                            <option value="C++">C++</option>
                            <option value="Java">Java</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Python">Python</option>
                        </select>
                    </div>
                </div>
                <div className="std-input-container">
                    <div>
                        <label htmlFor="std-input" className="label-style">std input : </label><br />
                        <textarea name="stdInput" className="std-textarea-style" onChange={handleChange} required></textarea> {/* Added required attribute */}
                    </div>
                </div>
                <div className="code-input-container">
                    <div>
                        <label htmlFor="code-input" className="label-style">code : </label><br />
                        <textarea name="code" className="code-textarea-style" onChange={handleChange} required></textarea> {/* Added required attribute */}
                    </div>
                </div>
                <div className="submit-button-container">
                    <button type="submit" className="submit-button-style">Submit</button>
                </div>
                {submitted && ( // Conditionally render inserted text
                    <div className="inserted-text">
                        Code Submitted!
                    </div>
                )}
                <div className="submit-button-container">
                    <button type="button" className="submitted-button-style" onClick={getSubmissions}>Submissions</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
