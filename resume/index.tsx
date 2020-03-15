import React from 'react';
import moment from 'moment';

import { resumeContent } from './content';

const Resume: React.FC = () => {
    return (
        <>
            <section id="header" className="page-header">
                <div className="name">
                    <h1>Benjamin McKinney</h1>
                </div>
                <div id="contact-info" className="contact">
                    <p>{`${resumeContent.contact.location.city}, ${resumeContent.contact.location.state}`}</p>
                    <p>{resumeContent.contact.phone}</p>
                    <p>
                        <a href={`mailto:${resumeContent.contact.email}`}>
                            {resumeContent.contact.email}
                        </a>
                    </p>
                </div>
            </section>
            <section id="summary">
                <div className="section-header noprint">
                    <h2>Summary</h2>
                </div>
                <div className="section-content">{resumeContent.intro}</div>
            </section>
            <section id="experience">
                <div className="section-header">
                    <h2>Experience</h2>
                </div>
                <div id="employment-history" className="section-content">
                    {resumeContent.jobs.map(job => (
                        <div
                            id={job.organization.toLowerCase()}
                            className="job"
                            key={job.organization.toLowerCase()}
                        >
                            <h3>
                                {job.organization}
                                <span className="location">{`${job.location.city}, ${job.location.state}`}</span>
                            </h3>
                            {job.positions.map(position => (
                                <>
                                    <h4>{position.title}</h4>
                                    <h5>{`${moment(position.dates.start).format(
                                        'MMMM YYYY',
                                    )} - ${moment(position.dates.end).format(
                                        'MMMM YYYY',
                                    ) || 'present'}`}</h5>
                                    <ul>
                                        {position.highlights.map(highlight => (
                                            <li>{highlight}</li>
                                        ))}
                                    </ul>
                                </>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
            <section id="volunteer">
                <div className="section-header">
                    <h2>Volunteerism</h2>
                </div>
                <div id="volunteer-history" className="section-content">
                    {resumeContent.volunteer.map(job => (
                        <div
                            id={job.organization.toLowerCase()}
                            className="job"
                            key={job.organization.toLowerCase()}
                        >
                            <h3>
                                {job.organization}
                                <span className="location">{`${job.location.city}, ${job.location.state}`}</span>
                            </h3>
                            {job.positions.map(position => (
                                <>
                                    <h4>{position.title}</h4>
                                    <h5>{`${moment(position.dates.start).format(
                                        'MMMM YYYY',
                                    )} - ${moment(position.dates.end).format(
                                        'MMMM YYYY',
                                    ) || 'present'}`}</h5>
                                    <ul>
                                        {position.highlights.map(highlight => (
                                            <li>{highlight}</li>
                                        ))}
                                    </ul>
                                </>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
            <section id="education">
                <div className="section-header">
                    <h2>Education</h2>
                </div>
                <div id="education-history" className="section-content">
                    {resumeContent.education.map(school => (
                        <div
                            key={school.school.toLowerCase()}
                            id={school.school.toLowerCase()}
                        >
                            <h3>
                                {school.school}
                                <span className="location">{`${school.location.city}, ${school.location.state}`}</span>
                            </h3>
                            <h5>{`Class of ${moment(school.graduation).format(
                                'YYYY',
                            )}`}</h5>
                            <ul>
                                {school.highlights.map(highlight => (
                                    <li>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
            <section id="skills">
                <div className="section-header">
                    <h2>Skills</h2>
                </div>
                <div id="skills-sections" className="section-content">
                    <div id="technologies">
                        <ul>
                            {resumeContent.skills.relevant.map(skill => (
                                <li>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="other-skills">
                        <ul className="full-width">
                            {resumeContent.skills.general.map(skill => (
                                <li>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section id="references">
                <div className="section-header">
                    <h2>References</h2>
                </div>
                <div id="references-list" className="section-content">
                    <ul className="full-width">
                        <li>Available upon request.</li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Resume;
