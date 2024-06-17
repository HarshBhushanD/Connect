import React, { useState, useEffect } from 'react';
import Login from './Login';
import ProjectSubmission from './ProjectSubmission';
import AdminPanel from './AdminPanel';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const storedProjects = localStorage.getItem('projects');
        if (storedProjects) {
            setProjects(JSON.parse(storedProjects));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

    const addProject = (project) => {
        setProjects([...projects, project]);
    };

    const acceptProject = (index) => {
        const newProjects = projects.map((project, i) => 
            i === index ? { ...project, accepted: true } : project
        );
        setProjects(newProjects);
    };

    return (
        <div>
            {loggedIn ? (
                <>
                    <ProjectSubmission addProject={addProject} />
                    <AdminPanel projects={projects} acceptProject={acceptProject} />
                </>
            ) : (
                <Login setLoggedIn={setLoggedIn} />
            )}
        </div>
    );
};

export default App;
