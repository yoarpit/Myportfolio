export const profile = {
  name: 'Arpit Jayshwal',
  role: 'Software Developer · MCA Student',
  location: 'Indore, India',
  email: 'arpitjayshwal707@gmail.com',
  photo: 'public/images/myimage.jpeg', // After adding public/images/profile.jpg, set this to '/images/profile.jpg'.
  github: 'https://github.com/yoarpit',
  linkedin: 'https://www.linkedin.com/in/arpit-jayshwal-288125325', 
  summary: 'I am a postgraduate Computer Applications student who enjoys building practical software—from backend APIs and web applications to low-level Linux systems. I like understanding how things work under the hood and turning ideas into useful, well-structured projects.',
  intro: 'Building useful software, one thoughtful system at a time.',
};

export const skillGroups = [
  { title: 'Languages', items: ['C', 'C++', 'Python', 'Java', 'JavaScript'] },
  { title: 'Backend & Libraries', items: ['FastAPI', 'Flask', 'Spring Boot', 'OpenCV', 'Pandas', 'NumPy'] },
  { title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'] },
  { title: 'Web & Tools', items: ['HTML', 'CSS', 'JSON', 'Git', 'GitHub', 'VS Code'] },
  { title: 'Platforms', items: ['Linux', 'Windows', 'Linux namespaces', 'chroot', 'cgroups v2'] },
];

export const projects = [
  {
    name: 'Kubix', label: 'Systems · C++ · Linux', period: 'Apr 2026 – May 2026',
    description: 'A lightweight Linux container runtime designed to run isolated processes with resource controls.',
    details: ['Process and filesystem isolation using Linux namespaces and chroot.', 'CPU and memory constraints through cgroups v2.', 'Container execution workflow built around low-level Linux system calls and process management.'],
    stack: ['C++', 'Linux', 'Namespaces', 'chroot', 'cgroups v2'],
    featured: true,
  },
  {
    name: 'Socium', label: 'Backend API', period: 'Mar 2025 – Apr 2025',
    description: 'A RESTful social media API for account and profile management, with media upload support.',
    details: ['Create, update, delete, and manage user profiles.', 'Upload and store photos and videos.', 'API built with a Python backend and MongoDB persistence.'],
    stack: ['Python', 'FastAPI', 'MongoDB'],
  },
  {
    name: 'Eliteeditor', label: 'Computer Vision · Web', period: '',
    description: 'A web-based image editor with core editing tools and an OpenCV-powered facial analysis feature.',
    details: ['Crop, resize, and apply filters to images.', 'Facial recognition and real-time facial-expression analysis module.', 'Flask interface for uploading, processing, and storing edited images.'],
    stack: ['Python', 'Flask', 'MySQL', 'OpenCV'],
  },
  {
    name: 'FinWing', label: 'Full-stack · Academic project', period: '',
    description: 'A personal finance management system for tracking transactions, budgets, savings goals, and expenses.',
    details: ['Normalized PostgreSQL schema with six entities.', 'Hibernate ORM and Spring Data JPA for data access.', 'Business logic for transaction categorization, budget alerts, and monthly savings-rate calculations.'],
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Thymeleaf', 'Hibernate'],
  },
  {
    name: 'Discord (Theoretical)', label: 'Requirements & Documentation', period: 'Aug 2025 – Dec 2025',
    description: 'A student-focused application concept documented through requirements analysis and an SRS.',
    details: ['Worked through software development lifecycle analysis and design steps.', 'Documentation-only academic project; no coding or implementation was completed.'],
    stack: ['SRS', 'Requirements Analysis', 'SDLC'],
  },
];

export const education = [
  { degree: 'Master of Computer Applications (MCA)', institution: 'Shri G.S. Institute of Science and Technology (SGSITS), Indore', year: 'Expected 2027', result: 'Currently pursuing' },
  { degree: 'Bachelor of Computer Applications (BCA)', institution: 'Government Holkar (Model, Autonomous) Science College, Indore', year: '2022 – 2025', result: '7.24/10 CGPA' },
  { degree: 'Class XII', institution: 'Shri Garima Vidya Mandir H.S. School, Madhya Pradesh', year: '2022', result: '70.4%' },
  { degree: 'Class X', institution: 'Shri Garima Vidya Mandir H.S. School, Madhya Pradesh', year: '2020', result: '80.4%' },
];

export const achievements = [
  'Studied core subjects including data structures, software engineering, Java, DBMS, operating systems, computer networks, and design and analysis of algorithms.',
  'Participated in debates, group discussions, and mock interviews; developed communication and presentation skills.',
];
