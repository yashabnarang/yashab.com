export type ExperienceEntry = {
  id: string;
  title: string;
  company: string;
  location: string;
  range: string;
  bullets: string[];
  tech: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "axon",
    title: "Systems Integrations Engineer II",
    company: "Axon Enterprise",
    location: "Remote",
    range: "Nov 2024 — Present",
    bullets: [
      "Develop and maintain data migration helper packages used to migrate digital evidence from legacy systems and third-party vendors into Axon's Evidence.com platform.",
      "Build and enhance data integration and transformation logic for accurate, complete evidence ingestion during customer migrations.",
      "Partner with Data Solutions Engineers to execute migrations, validate results, and prevent data loss or corruption.",
      "Participate in peer code reviews and release workflows using Azure DevOps.",
    ],
    tech: ["C#", "Azure DevOps", "Data Migration", "Evidence.com"],
  },
  {
    id: "yardi-sde",
    title: "Software Development Engineer",
    company: "Yardi Systems",
    location: "Oxnard, CA",
    range: "Jun 2022 — Nov 2024",
    bullets: [
      "Built full-stack invoice and email processing applications with .NET, Angular, and SQL Server.",
      "Reduced invoice processing time 80% with scalable automation and OCR-based data extraction alongside the AI team.",
      "Created and maintained 3+ RESTful APIs for in-house product integrations.",
      "Redesigned front-end architecture and UI using C# and .NET.",
      "Implemented SMTP, AWS S3, and Microsoft Exchange Server integrations.",
    ],
    tech: ["C#", ".NET", "Angular", "MSSQL", "REST", "AWS S3", "SMTP"],
  },
  {
    id: "fractl",
    title: "Freelance Programmer",
    company: "Fractl",
    location: "Remote",
    range: "Nov 2021 — Jun 2022",
    bullets: [
      "Collected, cleaned, and stored data for client projects while building data science fundamentals.",
    ],
    tech: ["Python", "BeautifulSoup", "Pandas", "NumPy"],
  },
  {
    id: "yardi-intern-2018",
    title: "Software Engineer Intern",
    company: "Yardi Systems",
    location: "Oxnard, CA",
    range: "May 2018 — Aug 2018",
    bullets: [
      "Enhanced Vendor Café, a vendor management platform, by building and improving SQL/XML queries for vendor data reporting.",
    ],
    tech: ["SQL", "XML", "JavaScript", "Java"],
  },
  {
    id: "yardi-intern-2017",
    title: "Software Engineer Intern",
    company: "Yardi Systems",
    location: "Santa Barbara, CA",
    range: "May 2017 — Aug 2017",
    bullets: [
      "Contributed to early development of Yardi Marketplace—generating reports with SQL embedded in XML and deploying via JSP.",
      "Optimized data organization and improved data process efficiency 25% with a database web application using Java and MySQL.",
    ],
    tech: ["Java", "MySQL", "SQL", "XML", "JSP"],
  },
];
