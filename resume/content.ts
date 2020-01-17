interface Location {
    address1?: string;
    address2?: string;
    address3?: string;
    city: string;
    state: string;
    country: string;
    postalcode?: string;
}

interface EmploymentHistoryPosition {
    title: string;
    dates: { start: string; end?: string };
    highlights: string[];
}

interface EmploymentHistory {
    company: string;
    location: Location;
    positions: EmploymentHistoryPosition[];
}

interface ResumeContent {
    contact: {
        phone: string;
        email: string;
        location: Location;
    };
    intro: string;
    jobs: EmploymentHistory[];
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
            company: 'PriceWaiter',
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
            company: 'SpringCM',
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
                        'Responsible for developing and maintaining customizations for major customers.',
                        "Designed and implemented a standardized, repeatable process and framework for building complex workflows on SpringCM's Advanced Workflow engine.",
                        'Based on experience with these monolithic apps and extensive use of SpringCM, identified missing features in the platform.',
                        'Developed customizations and SpringCM features from design through to training of our support team.',
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
            company: 'Big House Casting & Audio',
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
    ],
};
