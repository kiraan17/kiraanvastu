export const VASTU_ZONES = [
  {
    id: 'N',
    name: 'North',
    degrees: { start: 337.5, end: 22.5 },
    element: 'Water',
    rulingPlanet: 'Mercury',
    color: '#0066CC',
    idealUsage: ['Study Room', 'Treasury', 'Cash Counter'],
    dosDonts: {
      dos: ['Keep this area clean', 'Place water features', 'Use blue/green colors'],
      donts: ['Avoid heavy furniture', 'No toilets', 'Avoid red colors']
    },
    remedies: ['Blue color tape', 'Crystal pyramid', 'Water fountain', 'Mercury yantra']
  },
  {
    id: 'NNE',
    name: 'North-North-East',
    degrees: { start: 22.5, end: 45 },
    element: 'Water-Air',
    rulingPlanet: 'Mercury-Jupiter',
    color: '#4D79A4',
    idealUsage: ['Study', 'Meditation', 'Library'],
    dosDonts: {
      dos: ['Keep light and airy', 'Place books', 'Use light blue colors'],
      donts: ['Avoid heavy storage', 'No kitchen', 'Avoid dark colors']
    },
    remedies: ['Light blue tape', 'Crystal', 'Wind chimes', 'Study table']
  },
  {
    id: 'NE',
    name: 'North-East',
    degrees: { start: 45, end: 67.5 },
    element: 'Air',
    rulingPlanet: 'Jupiter',
    color: '#FFD700',
    idealUsage: ['Prayer Room', 'Meditation', 'Study', 'Main Entrance'],
    dosDonts: {
      dos: ['Keep highest and cleanest', 'Place deity/spiritual items', 'Use yellow/white'],
      donts: ['No toilets/kitchen', 'No heavy items', 'No dark colors']
    },
    remedies: ['Yellow tape', 'Crystal pyramid', 'Om symbol', 'Jupiter yantra']
  },
  {
    id: 'ENE',
    name: 'East-North-East',
    degrees: { start: 67.5, end: 90 },
    element: 'Air-Fire',
    rulingPlanet: 'Jupiter-Sun',
    color: '#FFA500',
    idealUsage: ['Study', 'Office', 'Living Room'],
    dosDonts: {
      dos: ['Good for mental work', 'Place study materials', 'Use orange/yellow'],
      donts: ['Avoid water features', 'No storage', 'Avoid blue colors']
    },
    remedies: ['Orange tape', 'Pyramid', 'Study lamp', 'Books']
  },
  {
    id: 'E',
    name: 'East',
    degrees: { start: 90, end: 112.5 },
    element: 'Fire',
    rulingPlanet: 'Sun',
    color: '#FF6600',
    idealUsage: ['Living Room', 'Drawing Room', 'Main Door'],
    dosDonts: {
      dos: ['Keep open and bright', 'Place windows', 'Use orange/red colors'],
      donts: ['No toilets', 'Avoid water storage', 'No dark areas']
    },
    remedies: ['Red tape', 'Sun yantra', 'Bright lights', 'Orange flowers']
  },
  {
    id: 'ESE',
    name: 'East-South-East',
    degrees: { start: 112.5, end: 135 },
    element: 'Fire-Earth',
    rulingPlanet: 'Sun-Venus',
    color: '#FF3300',
    idealUsage: ['Kitchen', 'Dining', 'Fire Activities'],
    dosDonts: {
      dos: ['Good for cooking', 'Place kitchen appliances', 'Use red colors'],
      donts: ['No water storage', 'Avoid blue/black', 'No toilets']
    },
    remedies: ['Red tape', 'Kitchen items', 'Fire element', 'Venus yantra']
  },
  {
    id: 'SE',
    name: 'South-East',
    degrees: { start: 135, end: 157.5 },
    element: 'Earth',
    rulingPlanet: 'Venus',
    color: '#FF0066',
    idealUsage: ['Kitchen', 'Electrical Room', 'Generator'],
    dosDonts: {
      dos: ['Perfect for fire element', 'Place electrical items', 'Use pink/red'],
      donts: ['No water features', 'Avoid heavy storage', 'No blue items']
    },
    remedies: ['Pink tape', 'Venus yantra', 'Rose flowers', 'Electrical items']
  },
  {
    id: 'SSE',
    name: 'South-South-East',
    degrees: { start: 157.5, end: 180 },
    element: 'Earth-Metal',
    rulingPlanet: 'Venus-Mars',
    color: '#CC0066',
    idealUsage: ['Storage', 'Heavy Items', 'Machinery'],
    dosDonts: {
      dos: ['Good for heavy storage', 'Place machinery', 'Use deep red'],
      donts: ['No main entrance', 'Avoid water', 'No light colors']
    },
    remedies: ['Deep red tape', 'Heavy items', 'Metal objects', 'Mars symbol']
  },
  {
    id: 'S',
    name: 'South',
    degrees: { start: 180, end: 202.5 },
    element: 'Metal',
    rulingPlanet: 'Mars',
    color: '#990033',
    idealUsage: ['Master Bedroom', 'Heavy Storage', 'Staircase'],
    dosDonts: {
      dos: ['Good for rest', 'Place heavy furniture', 'Use maroon/red'],
      donts: ['No main entrance', 'Avoid water features', 'No light colors']
    },
    remedies: ['Maroon tape', 'Mars yantra', 'Heavy furniture', 'Red coral']
  },
  {
    id: 'SSW',
    name: 'South-South-West',
    degrees: { start: 202.5, end: 225 },
    element: 'Metal-Earth',
    rulingPlanet: 'Mars-Rahu',
    color: '#660033',
    idealUsage: ['Master Bedroom', 'Storage', 'Safe'],
    dosDonts: {
      dos: ['Ideal for master bedroom', 'Place valuables', 'Use dark colors'],
      donts: ['No kitchen', 'Avoid bright lights', 'No water storage']
    },
    remedies: ['Dark red tape', 'Safe/locker', 'Heavy bed', 'Rahu yantra']
  },
  {
    id: 'SW',
    name: 'South-West',
    degrees: { start: 225, end: 247.5 },
    element: 'Earth',
    rulingPlanet: 'Rahu',
    color: '#330066',
    idealUsage: ['Master Bedroom', 'Head of Family Room', 'Storage'],
    dosDonts: {
      dos: ['Highest and heaviest area', 'Place master bed', 'Use dark colors'],
      donts: ['No toilets', 'No main entrance', 'Avoid light colors']
    },
    remedies: ['Purple tape', 'Heavy furniture', 'Dark curtains', 'Rahu yantra']
  },
  {
    id: 'WSW',
    name: 'West-South-West',
    degrees: { start: 247.5, end: 270 },
    element: 'Earth-Air',
    rulingPlanet: 'Rahu-Saturn',
    color: '#663399',
    idealUsage: ['Bedroom', 'Storage', 'Study'],
    dosDonts: {
      dos: ['Good for rest', 'Place storage', 'Use purple colors'],
      donts: ['No kitchen', 'Avoid water', 'No bright lights']
    },
    remedies: ['Purple tape', 'Storage items', 'Saturn yantra', 'Dark furniture']
  },
  {
    id: 'W',
    name: 'West',
    degrees: { start: 270, end: 292.5 },
    element: 'Air',
    rulingPlanet: 'Saturn',
    color: '#0066FF',
    idealUsage: ['Dining Room', 'Living Room', 'Children Room'],
    dosDonts: {
      dos: ['Good for social activities', 'Place dining table', 'Use blue colors'],
      donts: ['No toilets', 'Avoid heavy storage', 'No red colors']
    },
    remedies: ['Blue tape', 'Saturn yantra', 'Dining furniture', 'Social items']
  },
  {
    id: 'WNW',
    name: 'West-North-West',
    degrees: { start: 292.5, end: 315 },
    element: 'Air-Water',
    rulingPlanet: 'Saturn-Moon',
    color: '#3366FF',
    idealUsage: ['Guest Room', 'Children Room', 'Storage'],
    dosDonts: {
      dos: ['Good for guests', 'Place guest bed', 'Use light blue'],
      donts: ['No main bedroom', 'Avoid heavy items', 'No dark colors']
    },
    remedies: ['Light blue tape', 'Guest furniture', 'Moon yantra', 'Silver items']
  },
  {
    id: 'NW',
    name: 'North-West',
    degrees: { start: 315, end: 337.5 },
    element: 'Water',
    rulingPlanet: 'Moon',
    color: '#66CCFF',
    idealUsage: ['Guest Room', 'Children Room', 'Bathroom'],
    dosDonts: {
      dos: ['Good for movement', 'Place guest items', 'Use white/silver'],
      donts: ['No heavy storage', 'Avoid dark colors', 'No main bedroom']
    },
    remedies: ['White tape', 'Moon yantra', 'Silver items', 'Light furniture']
  },
  {
    id: 'NNW',
    name: 'North-North-West',
    degrees: { start: 337.5, end: 360 },
    element: 'Water-Air',
    rulingPlanet: 'Moon-Mercury',
    color: '#99DDFF',
    idealUsage: ['Guest Room', 'Storage', 'Bathroom'],
    dosDonts: {
      dos: ['Good for temporary stay', 'Place light items', 'Use light colors'],
      donts: ['No main bedroom', 'Avoid heavy furniture', 'No dark colors']
    },
    remedies: ['Light blue tape', 'Light furniture', 'Mercury items', 'Air plants']
  }
];

export const ROOM_TYPES = [
  { id: 'kitchen', name: 'Kitchen', idealZones: ['SE', 'ESE'], color: '#FF6600' },
  { id: 'bedroom', name: 'Master Bedroom', idealZones: ['SW', 'SSW', 'S'], color: '#990033' },
  { id: 'guest_bedroom', name: 'Guest Bedroom', idealZones: ['NW', 'WNW', 'W'], color: '#66CCFF' },
  { id: 'living_room', name: 'Living Room', idealZones: ['E', 'N', 'W'], color: '#FFD700' },
  { id: 'study', name: 'Study Room', idealZones: ['NE', 'N', 'ENE'], color: '#0066CC' },
  { id: 'prayer', name: 'Prayer Room', idealZones: ['NE'], color: '#FFD700' },
  { id: 'bathroom', name: 'Bathroom', idealZones: ['NW', 'W', 'S'], color: '#66CCFF' },
  { id: 'storage', name: 'Storage', idealZones: ['SW', 'S', 'W'], color: '#330066' },
  { id: 'dining', name: 'Dining Room', idealZones: ['W', 'E', 'N'], color: '#0066FF' },
  { id: 'entrance', name: 'Main Entrance', idealZones: ['NE', 'N', 'E'], color: '#FFD700' }
];

export const VASTU_TIPS = [
  "Keep the North-East corner clean and clutter-free for positive energy flow",
  "Place a water feature in the North for wealth and prosperity",
  "Cook facing East in the kitchen for good health and nutrition",
  "Sleep with your head towards South or West for better rest",
  "Keep heavy furniture in the South-West corner for stability",
  "Place mirrors on North or East walls to enhance positive energy",
  "Use light colors in the North-East and dark colors in the South-West",
  "Keep the center of your home (Brahmasthan) open and light",
  "Place plants in the East or North for growth and prosperity",
  "Avoid clutter in any corner, especially North-East"
];
