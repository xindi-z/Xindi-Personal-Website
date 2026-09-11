export const profile = {
  name: 'Xindi Zheng', title: 'Software Engineer / AI Engineer',
  email: 'xindizheng34@gmail.com', github: 'https://github.com/xindi-z', linkedin: '',
  location: 'Las Cruces, New Mexico', resume: 'Xindi_Zheng_SWE_Resume.pdf',
  intro: 'I build practical software and AI systems, connecting careful investigation with working solutions.',
  availability: 'Open to software engineering, AI engineering, backend, and related technical opportunities.',
  about: 'I’m a Computer Science graduate with an M.S. from New Mexico State University. My work spans AI knowledge retrieval, data analysis, web applications, and hardware-connected games.',
  approach: 'I enjoy building things end to end and understanding what happens between the parts. Whether I’m tracing an embedding issue or connecting a sensor to game logic, I approach problems by breaking them down, testing assumptions, and learning from the results.',
}
export const nav = ['Home', 'Education', 'Skills', 'About', 'Experience', 'Projects', 'Interests', 'Contact']
export const experience = [
  { date: 'Jun — Sep 2025', role: 'Research Assistant', org: 'New Mexico State University', label: 'Digital risk research', bullets: [
    'Contributed to a Sandia-assigned study of TikTok and short-form video platforms, investigating phishing and scam content.',
    'Developed annotation criteria and labeled datasets to identify recurring patterns.',
    'Analyzed cleaned data with Python to examine scam strategies and user engagement behaviors.',
  ], tags: ['Python', 'Data analysis', 'Research'] },
  { date: 'Jan — May 2025', role: 'Research Assistant', org: 'New Mexico State University', label: 'AI & knowledge systems', bullets: [
    'Worked with the University of North Carolina on NAMAC-related AI research for advanced nuclear reactor control.',
    'Developed and tested a Python RAG pipeline connecting technical documents, LLMs, and a Neo4j knowledge graph.',
    'Traced inconsistent embeddings to incorrect documented syntax and mentored an undergraduate researcher in Neo4j and research methods.',
  ], tags: ['Python', 'RAG', 'LLMs', 'Neo4j'] },
]
export type Project = { name: string; subtitle: string; category: string; description: string; detail: string; tech: string[]; flow: string[]; github: string; demo: string }
export const projects: Project[] = [
  { name: 'NAMAC', subtitle: 'RAG & knowledge graph research', category: 'AI & Data', description: 'Connecting technical knowledge to AI retrieval.', detail: 'Developed and tested a Python-based retrieval pipeline integrating technical documents, LLMs, and Neo4j. Investigated inconsistent embedding outputs through targeted debugging.', tech: ['Python', 'RAG', 'LLMs', 'Neo4j'], flow: ['Documents', 'Knowledge graph', 'Retrieval'], github: '', demo: '' },
  { name: 'Rust and Rescue', subtitle: 'Software / hardware integration', category: 'Systems & Games', description: 'A rescue game that reaches beyond the screen.', detail: 'Built an Android game in Godot with GPS-based movement and wildlife rescue events. Connected an Arduino pressure sensor as physical input and debugged hardware-to-game interactions.', tech: ['Godot', 'GDScript', 'Arduino'], flow: ['GPS + sensor', 'Game logic', 'Rescue event'], github: '', demo: '' },
  { name: 'Bartender', subtitle: 'Cocktail recipe web application', category: 'Web', description: 'From ingredients to a recipe worth making.', detail: 'Created a responsive recipe search experience with React and TypeScript. Integrated an external API using Axios and asynchronous requests to find cocktails by name, flavor, and ingredients.', tech: ['React', 'TypeScript', 'Axios', 'Tailwind CSS'], flow: ['Search', 'Recipe API', 'Results'], github: '', demo: '' },
  { name: 'Othello', subtitle: 'Browser-based strategy game', category: 'Systems & Games', description: 'Simple rules. Carefully considered game logic.', detail: 'Implemented legal move validation, directional piece flipping, scoring, turn skipping, valid-move hints, restart, and win or tie detection in a browser-based Reversi game.', tech: ['JavaScript', 'HTML', 'CSS'], flow: ['Validate move', 'Flip pieces', 'Update turn'], github: '', demo: '' },
]
export const skills = [
  { name: 'Programming', note: 'Python is my strongest language.', items: ['Python', 'SQL / MySQL', 'JavaScript', 'TypeScript', 'C', 'C++', 'Java'] },
  { name: 'Data & AI', note: 'Research, retrieval, and analysis.', items: ['Pandas', 'NumPy', 'Matplotlib', 'Neo4j', 'RAG', 'LLMs', 'Data Analysis'] },
  { name: 'Web development', note: 'Interfaces connected to real data.', items: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Axios'] },
  { name: 'Software & tools', note: 'Building, investigating, and iterating.', items: ['Git', 'Linux', 'API Integration', 'Software Debugging', 'Object-Oriented Programming'] },
  { name: 'Game & hardware', note: 'Connecting digital and physical inputs.', items: ['Godot', 'GDScript', 'Arduino'] },
]
export const education = [
  { year: '2025', degree: 'M.S. in Computer Science', school: 'New Mexico State University', gpa: '3.97' },
  { year: '2022 — 2024', degree: 'B.S. in Computer Science', school: 'New Mexico State University', gpa: '3.86' },
  { year: '2020 — 2022', degree: 'Associate of Science', school: 'Doña Ana Community College', gpa: '3.9' },
]
export const highlights = [
  { title: 'AI knowledge retrieval', text: 'Connecting technical documents and LLMs through a tested RAG pipeline.' },
  { title: 'Knowledge graphs', text: 'Working with Neo4j to represent and retrieve structured technical knowledge.' },
  { title: 'Digital risk research', text: 'Using annotation and Python analysis to investigate phishing and scam patterns.' },
  { title: 'Technical investigation', text: 'Isolating unexpected behavior, checking documentation, and testing assumptions.' },
]
// Editable interests selected from the supplied brief; add or remove as your interests evolve.
export const interests = ['Game development', 'AI experimentation', 'Cybersecurity', 'Side projects', 'Gaming', 'Fitness', 'Travel']


