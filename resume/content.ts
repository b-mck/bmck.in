interface Location {
    address1?: string;
    address2?: string;
    address3?: string;
    city: string;
    state: string;
    country: string;
    postalcode?: string;
}

interface HistoryItem {
    highlights: string[];
}

interface EmploymentHistoryPosition extends HistoryItem {
    title: string;
    dates: { start: string; end?: string };
}

interface EmploymentHistory {
    organization: string;
    location: Location;
    positions: EmploymentHistoryPosition[];
}

interface EducationHistory extends HistoryItem {
    school: string;
    location: Location;
    graduation: string;
    gpa: string;
}

interface Skills {
    relevant: string[];
    general: string[];
}

interface ResumeContent {
    contact: {
        phone: string;
        email: string;
        location: Location;
    };
    intro: string;
    jobs: EmploymentHistory[];
    volunteer: EmploymentHistory[];
    education: EducationHistory[];
    skills: Skills;
}

export const resumeContent: ResumeContent = {
    contact: {
        phone: '8475718817',
        email: 'ben@bmck.in',
        location: {
            city: 'Bellingham',
            state: 'WA',
            country: 'USA',
        },
    },
    intro: `Web application developer currently fluent in JS-based languages, Node and React. Flexible, adaptable critical thinker and quick study. Passionate about quality, maintainability, and reusability of code, bicycles, electronics, clothing, and everything else I own, use, or make; sustainability; the outdoors; music; cycling; the pursuit and advancement of knowledge.`,
    jobs: [
        {
            organization: 'PriceWaiter',
            location: {
                city: 'Bellingham',
                state: 'WA',
                country: 'USA',
            },
            positions: [
                {
                    title: 'Developer',
                    dates: {
                        start: '2014-09-22',
                    },
                    highlights: [
                        'Researched and incorporated emerging web technologies and contributed ideas, architecture and strategy, as well as implementation, testing and support, to features across the full stack.',
                        'Shipped complete features that led to immediate conversions for existing customers and expanded our platform offering into new markets.',
                        'Researched, developed, delivered and maintained integrations with major online ERP and eCommerce systems.',
                    ],
                },
            ],
        },
        {
            organization: 'SpringCM',
            location: {
                city: 'Chicago',
                state: 'IL',
                country: 'USA',
            },
            positions: [
                {
                    title: 'Solutions Software Engineer',
                    dates: { start: '2010-07-16', end: '2013-09-20' },
                    highlights: [
                        'Developed customizations and SpringCM features from design through to training of our support team.',
                        'Identified and implemented features to fill gaps in the SpringCM platform based on first-hand experience with client workflows.',
                        "Designed and implemented a standardized, repeatable process and framework for building complex workflows on SpringCM's Advanced Workflow engine.",
                        'Wrote developer docs, code samples in various languages, and provided advanced support to client technical personnel.',
                    ],
                },
                {
                    title: 'Technical Support Representative',
                    dates: { start: '2008-07-16', end: '2010-07-15' },
                    highlights: [
                        'Served as the first technical point of contact for new customers, managing new implementations of SpringCM.',
                        'Guided customers through basic best practices and developed solutions using advanced features.',
                        'Assisted in advanced training sessions for customers, partners, and new hires.',
                    ],
                },
                {
                    title: 'Salesforce.com Administrator',
                    dates: { start: '2008-02-04', end: '2008-07-15' },
                    highlights: [
                        'Immediately took over a customer billing system implemented in Excel; mastered it, then converted it to an app using the Salesforce API.',
                        'Designed and implemented a Salesforce organization, covering lead generation through billing, that saw continuous use through years of growth and movement upmarket.',
                        'Hired full-time after five months, despite starting in a contract position with no Salesforce experience.',
                    ],
                },
            ],
        },
        {
            organization:
                'Northwestern University Advanced Media Production Studio',
            location: { city: 'Evanston', state: 'IL', country: 'USA' },
            positions: [
                {
                    title: 'Audio Recordist',
                    dates: { start: '2005-02-15', end: '2008-05-31' },
                    highlights: [
                        "Operated multi-channel Pro Tools recording setup for Northwestern's internal videography team, capturing School of Music opera and symphony performances.",
                        'Attended dress rehearsals to place microphones and set up sessions and operated recording equipment during performances.',
                        'In addition to providing audio for the video production team, recorded all performances for the School of Music archives.',
                    ],
                },
            ],
        },
        {
            organization: 'Big House Casting & Audio',
            location: { city: 'Chicago', state: 'IL', country: 'USA' },
            positions: [
                {
                    title: 'Studio Engineer',
                    dates: { start: '2006-06-15', end: '2007-11-19' },
                    highlights: [
                        'Oversaw all technical aspects of voiceover recording sessions.',
                        'Edited, mixed and produced radio commercials and voiceover demos.',
                        'Specified and built two recording studios on a comically tight budget.',
                        'Maintained network, file storage and backup, studio and office computers, and Web presence for the studio and its clients.',
                    ],
                },
            ],
        },
        {
            organization: 'Northwestern University Information Technology',
            location: { city: 'Evanston', state: 'IL', country: 'USA' },
            positions: [
                {
                    title: 'Residential Network Connector (ResCon)',
                    dates: { start: '2004-09-15', end: '2006-06-15' },
                    highlights: [
                        'Responded to support tickets submitted by students with computer problems, ranging from networking issues to severe malware infections.',
                        'Eradicated viruses and installed university-recommended malware protection before signing off on the computer to allow it back on the network.',
                        'Became intimate with the Windows XP registry and Safe Mode and developed a reputation with my supervisors for cleaning out infections while preserving user data when others would have given up.',
                    ],
                },
            ],
        },
    ],
    volunteer: [
        {
            organization: 'FIRST Robotics Team 2605 "Seamonsters Robotics"',
            location: {
                city: 'Bellingham',
                state: 'WA',
                country: 'USA',
            },
            positions: [
                {
                    title: 'Mentor, Programming Team',
                    dates: {
                        start: '2014-08-15',
                        end: '2017-06-30',
                    },
                    highlights: [
                        'Worked with the team to convert the program from C++ to Python, lowering the barrier for new programmers and enabling students to contribute to and benefit from a nationwide developer community.',
                        'Fostered an open-source, collaborative spirit in a team that had previously been dominated by the individual knowledge and efforts of a few students.',
                        'Worked with the team to choose new student leaders each year and wrote awards recommendations for exceptional team members.',
                    ],
                },
            ],
        },
        {
            organization: 'FIRST Robotics Team 3711 "Iron Mustangs"',
            location: {
                city: 'Trout Lake',
                state: 'WA',
                country: 'USA',
            },
            positions: [
                {
                    title: 'Mentor',
                    dates: { start: '2013-09-15', end: '2014-06-30' },
                    highlights: [
                        'Mentored high school students at a tiny rural school (my alma mater) that has fielded nationally competitive robotics teams.',
                        'Challenged myself by dusting off my C++ as well as in teaching coding to high schoolers at widely varied skill levels.',
                        'Supported and guided students on all aspects of the robot project: coding, design, strategy, time management and prioritization.',
                    ],
                },
            ],
        },
    ],
    education: [
        {
            school: 'Northwestern University',
            location: {
                city: 'Evanston',
                state: 'IL',
                country: 'USA',
            },
            graduation: '2006-06-10',
            gpa: '3.6',
            highlights: [
                'Studied and practiced film production with an emphasis on sound design.',
                'Oversaw sound recording, design, and mixing for student films ranging from four minutes to feature length.',
                'Began exploring code through computer science and music technology courses as well as work in the IT department.',
                'Served as producer for the electronic music format at WNUR-FM.',
            ],
        },
    ],
    skills: {
        relevant: [
            'TypeScript',
            'JavaScript',
            'Node.js',
            'React.js',
            'HTML and CSS',
            'GraphQL and REST API design',
            'SQL',
            'Docker',
            'Git',
            'Linux/UNIX',
        ],
        general: [
            'SOLO Wilderness First Aid 16hr/BCLL WFA for Mountain Bikers 30hr certifications',
            'Drums, bass and guitar',
            'Recording and audio production',
            'Bicycle assembly and maintenance',
        ],
    },
};
