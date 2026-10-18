export interface House {
  id: string;
  name: string;
  mascot: string;
  accentColor: string;
  description: string;
}

export const HOUSES: House[] = [
  { id: 'saranda', name: 'Saranda', mascot: 'The Forest Tiger', accentColor: 'from-orange-500 to-amber-600', description: 'Rugged terrain, deep jungle exploration, and fierce community resilience.' },
  { id: 'nallamala', name: 'Nallamala', mascot: 'The Eastern Panther', accentColor: 'from-emerald-500 to-teal-700', description: 'Ancient hills, hidden trails, and technical mastery.' },
  { id: 'pichavaram', name: 'Pichavaram', mascot: 'The Mangrove Heron', accentColor: 'from-cyan-500 to-blue-600', description: 'Winding waterways, tactical strategy, and adaptive problem-solving.' },
  { id: 'sundarbans', name: 'Sundarbans', mascot: 'The Delta Tiger', accentColor: 'from-amber-600 to-yellow-600', description: 'Tidal rivers, survival instincts, and elite competitive spirit.' },
  { id: 'wayanad', name: 'Wayanad', mascot: 'The Western Elephant', accentColor: 'from-green-600 to-emerald-800', description: 'Mist-clad mountains, steady collaboration, and enduring strength.' },
  { id: 'namdapha', name: 'Namdapha', mascot: 'The Clouded Leopard', accentColor: 'from-indigo-500 to-purple-700', description: 'High-altitude peaks, stealthy innovation, and swift execution.' },
  { id: 'gir', name: 'Gir', mascot: 'The Asiatic Lion', accentColor: 'from-yellow-500 to-amber-700', description: 'Dry deciduous forests, regal leadership, and bold cultural showcases.' },
  { id: 'kanha', name: 'Kanha', mascot: 'The Barasingha Deer', accentColor: 'from-red-500 to-orange-600', description: 'Expansive meadows, harmonious teamwork, and vibrant traditions.' },
  { id: 'bandipur', name: 'Bandipur', mascot: 'The Jungle Elephant', accentColor: 'from-emerald-600 to-green-900', description: 'Protected sanctuaries, synchronized planning, and steady growth.' },
  { id: 'corbett', name: 'Corbett', mascot: 'The River Otter', accentColor: 'from-blue-600 to-indigo-800', description: 'Rapid river currents, quick adaptability, and sharp technical skills.' },
  { id: 'nilgiri', name: 'Nilgiri', mascot: 'The Blue Mountain Tahr', accentColor: 'from-sky-500 to-blue-700', description: 'Steep blue cliffs, endurance, and high-altitude achievements.' },
  { id: 'kaziranga', name: 'Kaziranga', mascot: 'The One-Horned Rhino', accentColor: 'from-amber-500 to-red-700', description: 'Tall grass wetlands, unstoppable momentum, and fierce defense.' },
];