// 1) Paste your Supabase Project URL and public key (anon / publishable) from Project Settings > API
window.CFG = { supabaseUrl: "https://qfccnlzrkbkulujlsgkc.supabase.co", supabaseKey: "sb_publishable_Q7dC1Vz0rSjToyHE2Ue1EA_VtuG3Ynd" };

// 2) Sections. Add a new one by copying a line: the site AND the admin panel pick it up automatically.
// type: timeline | bars | cards.  field = [key, label, 'area' for multi-line]
window.SECTIONS = [
  { key: 'education', title: 'Education', type: 'timeline', fields: [['title','Degree / Course'],['org','Institution'],['period','Period (e.g. 2026 - 2029)'],['desc','Details','area']] },
  { key: 'experience', title: 'Experience & Internships', type: 'timeline', fields: [['title','Role'],['org','Organization'],['period','Period'],['desc','Details','area']] },
  { key: 'skills', title: 'Skills', type: 'bars', fields: [['title','Skill'],['level','Level (0-100)']] },
  { key: 'projects', title: 'Projects', type: 'cards', fields: [['title','Title'],['desc','Description','area'],['link','Link (https://...)']] },
  { key: 'certs', title: 'Certifications & Achievements', type: 'cards', fields: [['title','Title'],['desc','Details','area'],['link','Certificate link (optional)']] }
];

// 3) Default content (shown until you save from the admin panel)
window.DEFAULT = {
  name: "Your Name", role: "Student • Developer • Creator",
  tagline: "Building the future, one idea at a time.",
  photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230b0f2a'/%3E%3Ccircle cx='50' cy='38' r='18' fill='%2300e5ff'/%3E%3Cellipse cx='50' cy='90' rx='32' ry='26' fill='%2300e5ff'/%3E%3C/svg%3E",
  resume: "", about: "Write a short introduction about yourself here.",
  email: "you@example.com", location: "India",
  socials: "GitHub | https://github.com/\nLinkedIn | https://linkedin.com/",
  education: [{ title: "B.A. (Hons) Your Course", org: "Your University", period: "2026 - 2029", desc: "Key subjects, achievements or grades." }],
  experience: [{ title: "Intern", org: "Organization", period: "2026", desc: "What you worked on." }],
  skills: [{ title: "Research", level: "80" }, { title: "Public Speaking", level: "70" }],
  projects: [{ title: "Project One", desc: "Short description of what you built.", link: "https://github.com/" }],
  certs: [{ title: "Certificate Name", desc: "Issuer and year.", link: "" }]
};

// Converts old data (skills as comma text) to the list format
window.norm = d => {
  if (typeof d.skills === 'string') d.skills = d.skills.split(',').map(s => s.trim()).filter(Boolean).map(t => ({ title: t, level: '80' }));
  return d;
};
