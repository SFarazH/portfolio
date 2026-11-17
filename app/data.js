// Content for the home page, ported from the v2 static page.
export const JOBS=[
 {role:"Frontend Engineer",co:"Joveo",when:"May 2026 to present",nums:["Frontend"],
  top:["Joined Joveo as a frontend engineer in May 2026."],more:[]},
 {role:"Founder",co:"CliniSync",when:"Oct 2025 to present",nums:["3 live clinics","100+ patients","254k-medicine search","Next.js 16 + MongoDB"],
  top:["Built a multi-tenant clinic management platform for Indian outpatient clinics. Each clinic gets its own database and switches features on or off.",
       "Calendar booking with conflict checks, configurable slot lengths, patient records, doctors, procedures, lab work and invoices, with a separate dashboard for each of five roles.",
       "Prescriptions with a typeahead over 254k medicines that prefills what each doctor usually prescribes, plus printing on the clinic's own pad."],
  more:["WhatsApp reminders on booking and before the visit, sent by a scheduled job, with delivery tracking.",
        "Analytics for clinics and for the platform owner, with period-over-period change on every KPI.",
        "Subscription plans with usage limits, per-clinic S3 storage for attachments, and password reset by email.",
        "Public landing page with a live demo calendar, and a full UI redesign built to WCAG AA with mobile and tablet layouts."]},
 {role:"Software Engineer",co:"Pertinent Healthcare / USA Dental Solutions",when:"Sep 2024 to May 2026",nums:["~100 bank accounts","team of 4","up to 50% faster","50+ charts"],
  top:["Integrated the Plaid API to link bank accounts securely, with webhooks that keep around 100 accounts in sync instantly.",
       "Led a team of four developers: code quality, merge conflicts, mentoring.",
       "Built and tuned admin features for flagship products, reducing response time by up to 50%."],
  more:["Implemented payments with Worldpay and Prahsys, including tracking.",
        "Created and managed more than 50 MongoDB Charts for real-time visual analytics.",
        "Wrote cron jobs that automate claim attachment workflows and integrated third-party software."]},
 {role:"Full Stack Intern",co:"OneBigBit Technologies",when:"Jan 2024 to Jun 2024",nums:["React","Firebase","Auth0","ChartJS"],
  top:["Designed and deployed full stack apps with React, Bootstrap, Firebase and Auth0 for secure sign-in and role-based access.",
       "Built a finance dashboard with interactive ChartJS views of profits, expenses and payments.",
       "Shipped features and bug fixes on live projects, frontend and backend."],more:[]}
];
export const SKILLS=[
 ["Frontend",[["JavaScript","JavaScript"],["TypeScript","TypeScript"],["React","React"],["Next.js","nextjs"],["NestJS","Nestjs"],["Tailwind","Tailwind"],["Bootstrap","Bootstrap"]]],
 ["Backend / Database",[["Node.js","Node"],["Express","Express"],["Java","Java"],["Spring","Spring"],["Django","Django"],["MongoDB","MongoDB"],["MySQL","MySQL"],["Apache Solr","Solr"]]],
 ["Machine Learning / Data",[["Python","Python"],["R","R"],["Jupyter","Jupyter"],["PyTorch","PyTorch"]]],
 ["DevOps / Tools",[["Git","Git"],["Docker","Docker"],["AWS","AWS"],["Postman","Postman"],["Jira","Jira"],["Vercel","Vercel"]]]
];
export const PROJECTS=[
 {t:"Application Tracker",d:"Keeps every job application in one place: company, role and status. Notes for the important bits and a shelf for role-specific resumes.",tech:["React","Express","Node.js","MongoDB"],img:"apt",gh:"https://github.com/SFarazH/application-tracker",live:"https://application-tracker-sable.vercel.app/"},
 {t:"DOI Management System",d:"Spring Boot service for managing DOIs of research articles under verified journals and publishers. Full-text search through Apache Solr, shipped in Docker.",tech:["Java","Spring","Docker","Solr","MongoDB"],art:'<div>GET /doi/10.1000/xyz123<br>→ 200 OK<br>{ "journal": "verified",<br>&nbsp;&nbsp;"indexed": true }</div>',cls:"b"},
 {t:"Algorithmic Trading",d:"A model that picks the top stocks in each sector from price change across windows from one month to three years.",tech:["Python","Jupyter"],gh:"https://github.com/SFarazH/algoritmic_trading",art:'<svg viewBox="0 0 200 80" width="100%" height="100%" preserveAspectRatio="none"><polyline points="0,62 22,54 40,60 60,40 82,46 104,28 124,36 146,18 168,24 200,6" fill="none" stroke="#1C1848" stroke-width="4" stroke-linejoin="round"/><circle cx="200" cy="6" r="5" fill="#D6245F"/></svg>'},
 {t:"Company Finances Manager",d:"One screen for a company's money: clients, projects, employees and payments, plus a KPI dashboard to see where it all goes.",tech:["React","Tailwind","Node.js","Express","MongoDB"],img:"companyFinance",gh:"https://github.com/SFarazH/company-finances",live:"https://company-finance.vercel.app/"},
 {t:"AttendEase",d:"Lets RCOEM students check their attendance in a friendly interface, in less than half the usual time.",tech:["Python","Django","AWS"],img:"attendease",gh:"https://github.com/SFarazH/attendease",live:"https://attendease.hopto.org/"},
 {t:"Bingo player!",d:"Generates bingo cards, checks completed lines and tells you when you've won. There's a small surprise at BINGO. (Sound familiar? Scroll down.)",tech:["React"],img:"bingo",gh:"https://github.com/SFarazH/bingo",live:"http://bingo-beta-ten.vercel.app/"},
 {t:"Portfolio v1",d:"The previous version of this site, built with Next.js and Tailwind CSS.",tech:["Next.js","Tailwind"],img:"portfolio",gh:"https://github.com/SFarazH/portfolio",live:"https://faraz-three.vercel.app/"},
 {t:"OTP Verification API",d:"Registers and verifies users by one-time password, then lets them update their data. Nodemailer and JWT underneath.",tech:["Node.js","Express","MongoDB","AWS"],gh:"https://github.com/SFarazH/otp-verify-api",art:'<div class="otp"><b>4</b><b>8</b><b>1</b><b>5</b></div>',cls:"c"}
];
export const FILTERS=["All","React","Node.js","MongoDB","Python","Java","AWS"];
export const BINGO=["Led a team of 4","Plaid + webhooks","Founded a product","Cut response time 50%",
           "React + Next.js","Runs on chai","Payments: Worldpay, Prahsys","Multi-tenant + RBAC",
           "AWS: S3, EC2, Lambda","50+ MongoDB Charts","2 published papers","Java, Spring, Docker",
           "9.05 CGPA, DS Honors","SIH 2022 finalist","Cron job automation","Student body president"];
export const FREE=5;
export const TICK=["frontend engineer, Joveo","Plaid × 100 bank accounts","team lead","founder, CliniSync","50% faster responses","50+ MongoDB charts","SIH 2022 finalist","2 research papers","chai enthusiast;"];
