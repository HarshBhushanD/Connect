import React, { useState } from 'react';
import './ProjectSubmission.css';

const ProjectSubmission = ({ addProject }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProject = { title, description, file: file ? file.name : '', accepted: false };
        addProject(newProject);
        setTitle('');
        setDescription('');
        setFile(null);
        setShowForm(false);
        alert('Project submitted successfully');
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <div className="project-submission-container">
            <h2>Project Submission</h2>
            {!showForm && (
                <button className="add-project-button" onClick={() => setShowForm(true)}>Add Project</button>
            )}
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <label>Project Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    <label>Project Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                    <label>Project File</label>
                    <input type="file" onChange={handleFileChange} />
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default ProjectSubmission;
