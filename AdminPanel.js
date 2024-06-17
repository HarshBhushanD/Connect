import React, { useState } from 'react';
import './AdminPanel.css';

const AdminPanel = ({ projects, acceptProject, addCredits, addBadge }) => {
    const [credits, setCredits] = useState({});
    const [badges, setBadges] = useState({});
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCreditsChange = (index, value) => {
        setCredits({
            ...credits,
            [index]: value
        });
    };

    const handleBadgesChange = (index, value) => {
        setBadges({
            ...badges,
            [index]: value
        });
    };

    const handleViewProject = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="admin-panel-container">
            <h2>Admin Panel</h2>
            {projects.map((project, index) => (
                <div key={index} className="project">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {!project.accepted ? (
                        <button onClick={() => acceptProject(index)}>Accept</button>
                    ) : (
                        <>
                            <p>Accepted</p>
                            <div className="credits-section">
                                <input
                                    type="number"
                                    placeholder="Enter credits"
                                    value={credits[index] || ''}
                                    onChange={(e) => handleCreditsChange(index, e.target.value)}
                                />
                                <button onClick={() => addCredits(index, credits[index])}>Add Credits</button>
                            </div>
                            {project.credits && <p>Credits: {project.credits}</p>}
                            <div className="badge-section">
                                <input
                                    type="number"
                                    placeholder="Enter badge"
                                    value={badges[index] || ''}
                                    onChange={(e) => handleBadgesChange(index, e.target.value)}
                                />
                                <button onClick={() => addBadge(index, badges[index])}>Add Badge</button>
                            </div>
                            {project.badges && <p>Badges: {project.badges}</p>}
                        </>
                    )}
                    <button className="view-project-button" onClick={() => handleViewProject(project)}>View Project</button>
                </div>
            ))}
            {selectedProject && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={handleCloseModal}>&times;</span>
                        <h3>{selectedProject.title}</h3>
                        <p>{selectedProject.description}</p>
                        {selectedProject.file && <p>File: {selectedProject.file}</p>}
                        {selectedProject.credits && <p>Credits: {selectedProject.credits}</p>}
                        {selectedProject.badges && <p>Badges: {selectedProject.badges}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPanel;
