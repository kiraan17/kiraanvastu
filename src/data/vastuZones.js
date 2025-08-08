export const VASTU_ZONES = [
  {
    id: 'N',
    name: 'North',
    degrees: { start: 348.75, end: 11.25 },
    element: 'Water',
    rulingPlanet: 'Mercury (Budha)',
    deity: 'Kubera (wealth)',
    purpose: 'Wealth, career growth, opportunities',
    color: '#E3F2FD',
    ui_color_hex: ['#E3F2FD', '#BBDEFB', '#90CAF9'],
    idealUsage: ['Study Room', 'Treasury', 'Cash Counter', 'Home Office'],
    avoid: ['Toilet', 'Kitchen', 'Heavy Storage'],
    dosDonts: {
      dos: [
        'Keep this area clean and clutter-free',
        'Place water features like small fountain',
        'Use blue/green colors for prosperity',
        'Face North while working for career growth',
        'Keep cash/valuables in North safe'
      ],
      donts: [
        'Avoid heavy furniture blocking energy flow',
        'No toilets in North direction',
        'Avoid red/orange dominant colors',
        'No broken items or clutter',
        'Avoid blocking with tall furniture'
      ]
    },
    color_therapy: ['Light Blue', 'White', 'Silver'],
    aroma_therapy: ['Jasmine', 'Rose'],
    metals_stones: ['Silver', 'Pearl', 'Moonstone'],
    plants: ['Money Plant', 'Bamboo'],
    favorable_weekdays: ['Wednesday', 'Monday'],
    remedies: {
      quick: [
        'BLUE tape line along North wall for wealth activation',
        'Place small water bowl with floating candle',
        'Keep workspace/study table facing North',
        'Add silver-framed mirror on North wall'
      ],
      moderate: [
        'Install small water fountain in North corner',
        'Relocate cash storage/safe to North zone',
        'Paint North wall in light blue or white'
      ],
      structural: [
        'Create window opening in North for natural light',
        'Ensure North area has lower floor level than South'
      ]
    },
    mantras: ['Om Shreem Hreem Kleem Maha Lakshmyai Namah'],
    practical_examples: [
      'Moved study desk to face North; got promotion within 3 months',
      'Placed money plant in North corner; business income increased 40%',
      'Added small fountain in North; received unexpected financial opportunities'
    ]
  },
  {
    id: 'NNE',
    name: 'North-Northeast',
    degrees: { start: 11.25, end: 33.75 },
    element: 'Water/Air',
    rulingPlanet: 'Mercury/Jupiter',
    deity: 'Soma (wisdom)',
    purpose: 'Learning, wisdom, mental clarity',
    color: '#F3E5F5',
    ui_color_hex: ['#F3E5F5', '#E1BEE7', '#CE93D8'],
    idealUsage: ['Study', 'Library', 'Reading Corner', 'Meditation'],
    avoid: ['Kitchen', 'Toilet', 'Heavy Storage'],
    dosDonts: {
      dos: [
        'Keep light and airy for mental clarity',
        'Place books and study materials here',
        'Use light purple/blue colors',
        'Maintain good lighting for reading',
        'Keep inspirational quotes/images'
      ],
      donts: [
        'Avoid heavy storage that blocks energy',
        'No kitchen activities in this zone',
        'Avoid dark or heavy colors',
        'No electronic distractions during study',
        'Avoid clutter on study surfaces'
      ]
    },
    color_therapy: ['Light Purple', 'Lavender', 'Light Blue'],
    aroma_therapy: ['Lavender', 'Sandalwood'],
    metals_stones: ['Amethyst', 'Clear Quartz'],
    plants: ['Tulsi', 'Small flowering plants'],
    favorable_weekdays: ['Wednesday', 'Thursday'],
    remedies: {
      quick: [
        'LAVENDER tape accent for mental peace',
        'Place amethyst crystal on study desk',
        'Add soft reading lamp with warm light',
        'Keep fresh flowers weekly'
      ],
      moderate: [
        'Create dedicated reading nook with comfortable seating',
        'Install adjustable lighting for different times',
        'Add bookshelf with organized study materials'
      ],
      structural: [
        'Ensure adequate natural light from windows',
        'Create quiet zone away from household noise'
      ]
    },
    mantras: ['Om Gam Ganapataye Namah', 'Saraswati Vandana'],
    practical_examples: [
      'Created study corner in NNE; children\'s grades improved significantly',
      'Added lavender diffuser; reduced study stress and improved focus',
      'Organized bookshelf in NNE; family reading habits increased'
    ]
  },
  {
    id: 'NE',
    name: 'Northeast',
    degrees: { start: 33.75, end: 56.25 },
    element: 'Air',
    rulingPlanet: 'Jupiter (Brihaspati)',
    deity: 'Ishana (divine knowledge)',
    purpose: 'Spirituality, divine connection, highest energy',
    color: '#FFF9C4',
    ui_color_hex: ['#FFF9C4', '#FFF59D', '#FFF176'],
    idealUsage: ['Prayer Room', 'Meditation', 'Main Entrance', 'Study'],
    avoid: ['Toilet', 'Kitchen', 'Heavy Storage', 'Clutter'],
    dosDonts: {
      dos: [
        'Keep highest, cleanest, and most sacred',
        'Place deity/spiritual items with respect',
        'Use yellow/white colors for purity',
        'Maintain as lightest area of home',
        'Keep fresh flowers and incense'
      ],
      donts: [
        'Never place toilets or kitchen here',
        'No heavy items or furniture',
        'Avoid dark colors or heavy curtains',
        'No shoes or dirty items',
        'Avoid loud noises or disturbances'
      ]
    },
    color_therapy: ['Yellow', 'White', 'Light Gold'],
    aroma_therapy: ['Sandalwood', 'Jasmine', 'Rose'],
    metals_stones: ['Gold', 'Yellow Sapphire', 'Citrine'],
    plants: ['Tulsi', 'Lotus (if water feature)', 'Marigold'],
    favorable_weekdays: ['Thursday', 'Sunday'],
    remedies: {
      quick: [
        'YELLOW tape border for divine energy activation',
        'Place crystal pyramid for energy amplification',
        'Light incense daily for purification',
        'Keep fresh yellow flowers'
      ],
      moderate: [
        'Create dedicated prayer/meditation space',
        'Install soft lighting for evening prayers',
        'Add spiritual artwork or symbols'
      ],
      structural: [
        'Ensure NE is physically highest point if possible',
        'Create skylight or large window for natural light',
        'Keep this area most spacious and open'
      ]
    },
    mantras: ['Om Namah Shivaya', 'Gayatri Mantra', 'Om Gam Ganapataye Namah'],
    practical_examples: [
      'Converted NE room to prayer space; family harmony improved dramatically',
      'Placed Ganesha idol in NE; obstacles in life started clearing',
      'Daily meditation in NE corner; mental peace and clarity increased'
    ]
  },
  {
    id: 'ENE',
    name: 'East-Northeast',
    degrees: { start: 56.25, end: 78.75 },
    element: 'Air/Fire',
    rulingPlanet: 'Jupiter/Sun',
    deity: 'Indra (power)',
    purpose: 'Knowledge application, morning energy, fresh starts',
    color: '#FFE0B2',
    ui_color_hex: ['#FFE0B2', '#FFCC80', '#FFB74D'],
    idealUsage: ['Study', 'Office', 'Living Room', 'Morning Activities'],
    avoid: ['Toilet', 'Heavy Storage', 'Dark Rooms'],
    dosDonts: {
      dos: [
        'Excellent for mental work and planning',
        'Place study materials and work desk',
        'Use orange/yellow colors for energy',
        'Keep morning routine activities here',
        'Maintain good ventilation'
      ],
      donts: [
        'Avoid water features in this fire-air zone',
        'No heavy storage blocking energy',
        'Avoid blue/black dominant colors',
        'No stagnant or unused spaces',
        'Avoid evening-only activities'
      ]
    },
    color_therapy: ['Orange', 'Light Yellow', 'Peach'],
    aroma_therapy: ['Orange', 'Lemon', 'Eucalyptus'],
    metals_stones: ['Copper', 'Sunstone', 'Carnelian'],
    plants: ['Marigold', 'Sunflower', 'Morning Glory'],
    favorable_weekdays: ['Sunday', 'Thursday'],
    remedies: {
      quick: [
        'ORANGE tape accent for morning energy boost',
        'Place pyramid crystal for focus enhancement',
        'Add bright study lamp for clarity',
        'Keep inspirational books visible'
      ],
      moderate: [
        'Create morning routine space (exercise/planning)',
        'Install east-facing window for sunrise energy',
        'Add energizing artwork or motivational quotes'
      ],
      structural: [
        'Ensure good cross-ventilation for air flow',
        'Create connection to outdoor morning light'
      ]
    },
    mantras: ['Surya Mantra', 'Om Hreem Shreem Kleem'],
    practical_examples: [
      'Moved morning planning session to ENE; daily productivity increased',
      'Added orange accents in ENE office corner; creative ideas flowed better',
      'Placed study desk in ENE; exam performance improved consistently'
    ]
  },
  {
    id: 'E',
    name: 'East',
    degrees: { start: 78.75, end: 101.25 },
    element: 'Fire',
    rulingPlanet: 'Sun (Surya)',
    deity: 'Surya (vitality)',
    purpose: 'Health, vitality, new beginnings, social recognition',
    color: '#FFCDD2',
    ui_color_hex: ['#FFCDD2', '#EF9A9A', '#E57373'],
    idealUsage: ['Living Room', 'Drawing Room', 'Main Door', 'Social Areas'],
    avoid: ['Toilet', 'Water Storage', 'Dark Closed Rooms'],
    dosDonts: {
      dos: [
        'Keep open and bright for vitality',
        'Place windows for morning sunlight',
        'Use orange/red colors for energy',
        'Welcome guests and social activities',
        'Display achievements and recognition'
      ],
      donts: [
        'No toilets in this auspicious direction',
        'Avoid water storage tanks',
        'No dark or closed areas',
        'Avoid blocking with heavy furniture',
        'No negative or depressing imagery'
      ]
    },
    color_therapy: ['Orange', 'Red', 'Golden Yellow'],
    aroma_therapy: ['Orange', 'Cinnamon', 'Ginger'],
    metals_stones: ['Gold', 'Ruby', 'Red Coral'],
    plants: ['Marigold', 'Hibiscus', 'Rose'],
    favorable_weekdays: ['Sunday', 'Tuesday'],
    remedies: {
      quick: [
        'RED tape line at threshold for energy activation',
        'Place Sun yantra for vitality boost',
        'Add bright lights for evening energy',
        'Display fresh orange flowers daily'
      ],
      moderate: [
        'Create welcoming entrance with good lighting',
        'Add mirrors to reflect and amplify morning light',
        'Install large windows for maximum sunlight'
      ],
      structural: [
        'Ensure main entrance faces East if possible',
        'Create open floor plan for energy flow'
      ]
    },
    mantras: ['Om Suryaya Namah', 'Aditya Hridayam'],
    practical_examples: [
      'Opened East wall with large window; family health improved noticeably',
      'Created welcoming East entrance; social connections and opportunities increased',
      'Added morning sunlight routine in East room; energy levels boosted significantly'
    ]
  },
  {
    id: 'ESE',
    name: 'East-Southeast',
    degrees: { start: 101.25, end: 123.75 },
    element: 'Fire/Air',
    rulingPlanet: 'Venus (Shukra)',
    deity: 'Agni',
    purpose: 'Ideas into action, creative execution',
    color: '#FFB74D',
    ui_color_hex: ['#FFB74D', '#FFCC80', '#FFE0B2'],
    idealUsage: ['Work Nook', 'Appliance Zone (non-stove)', 'Coffee Station'],
    avoid: ['Toilet'],
    dosDonts: {
      dos: [
        'Blend airflow with task lighting',
        'Maintain charged but not hectic vibe',
        'Good for creative project execution',
        'Place action-oriented work tools'
      ],
      donts: [
        'Avoid water leaks',
        'No excessive noise from appliances',
        'Avoid stagnant or unused corners',
        'No conflicting activities'
      ]
    },
    color_therapy: ['Orange', 'Light Orange', 'Peach'],
    aroma_therapy: ['Orange', 'Cinnamon (mild)'],
    metals_stones: ['Citrine', 'Copper'],
    plants: ['Pothos', 'Spider Plant'],
    favorable_weekdays: ['Friday', 'Tuesday'],
    remedies: {
      quick: [
        'ORANGE tape accent for activation',
        'Keep action list/kanban board here',
        'Add small citrine on desk',
        'Maintain organized tool storage'
      ],
      moderate: [
        'Move printer/UPS here; separate from main stove zone',
        'Cable-manage to reduce visual noise',
        'Create efficient workflow setup'
      ],
      structural: [
        'Provide separate circuit for appliances to avoid overload'
      ]
    },
    mantras: ['Om Agnaye Namah'],
    practical_examples: [
      'Shifted kettle/coffee maker to ESE to prep mornings efficiently',
      'Weekly plan board improved task completion rate',
      'Created project workspace in ESE; creative output increased'
    ]
  },
  {
    id: 'SE',
    name: 'Southeast',
    degrees: { start: 123.75, end: 146.25 },
    element: 'Fire',
    rulingPlanet: 'Venus (Shukra)',
    deity: 'Agni',
    purpose: 'Action, metabolism, transactions',
    color: '#F44336',
    ui_color_hex: ['#F44336', '#EF5350', '#FF7043'],
    idealUsage: ['Kitchen', 'Electrical Panel'],
    avoid: ['Bedroom', 'Toilet'],
    dosDonts: {
      dos: [
        'Place stove in SE; cook facing East',
        'Keep fire/water apart (≥45 cm distance)',
        'Use for all fire-related activities',
        'Maintain electrical safety'
      ],
      donts: [
        'No sink/aquarium adjacent to stove',
        'Avoid black/blue dominance',
        'No bedroom in this high-energy zone',
        'Avoid water storage near fire'
      ]
    },
    color_therapy: ['Red', 'Orange', 'Pink'],
    aroma_therapy: ['Clove', 'Bay Leaf'],
    metals_stones: ['Copper', 'Red Jasper'],
    plants: ['None (avoid over-watering)'],
    favorable_weekdays: ['Tuesday', 'Friday'],
    remedies: {
      quick: [
        'RED tape to mark fire boundary',
        'Keep copper utensil dry and clean',
        'Salt bowl to absorb negativity/odors',
        'Maintain stove cleanliness daily'
      ],
      moderate: [
        'Relocate sink/fridge to E/NE if too close to stove',
        'Add heat-resistant backsplash and good chimney ventilation',
        'Organize kitchen for efficient cooking flow'
      ],
      structural: [
        'Re-route plumbing away from immediate stove line if currently adjacent'
      ]
    },
    mantras: ['Om Agnaye Swaha'],
    practical_examples: [
      'Moved sink 60 cm away; reduced simmering conflicts',
      'Introduced weekly deep-clean schedule for chimney/hood',
      'Reorganized SE kitchen; cooking became more enjoyable and efficient'
    ]
  },
  {
    id: 'SSE',
    name: 'South-Southeast',
    degrees: { start: 146.25, end: 168.75 },
    element: 'Fire/Earth',
    rulingPlanet: 'Mars (Mangal)',
    deity: 'Skanda/Kartikeya',
    purpose: 'Courage, fitness, sustained momentum',
    color: '#FF7043',
    ui_color_hex: ['#FF7043', '#F57C00', '#E64A19'],
    idealUsage: ['Workout Corner', 'Pantry (dry)', 'Server/UPS niche (cooling ensured)'],
    avoid: ['Toilet'],
    dosDonts: {
      dos: [
        'Keep active gear accessible',
        'Good ventilation to dissipate heat',
        'Use for physical activities',
        'Maintain equipment properly'
      ],
      donts: [
        'Avoid damp storage',
        'No stagnant heavy trunks',
        'Avoid water-sensitive items',
        'No inactive or unused spaces'
      ]
    },
    color_therapy: ['Deep Orange', 'Red-Orange', 'Terracotta'],
    aroma_therapy: ['Camphor (mild)', 'Clove'],
    metals_stones: ['Red Coral (optional)', 'Hematite'],
    plants: ['Low-water succulents'],
    favorable_weekdays: ['Tuesday', 'Saturday'],
    remedies: {
      quick: [
        'DEEP ORANGE tape stripe to cue action',
        'Set up 10-minute daily workout ritual here',
        'Camphor cleanse weekly',
        'Keep motivational fitness reminders'
      ],
      moderate: [
        'Move idle trunks to W/SSW; free SSE',
        'Install exhaust/vent if heat builds up',
        'Create organized fitness equipment storage'
      ],
      structural: [
        'Provide cross-ventilation to avoid heat pockets'
      ]
    },
    mantras: ['Om Skandaya Namah'],
    practical_examples: [
      'Created a compact mat + dumbbell station; consistency improved',
      'Shifted pantry liquids out; kept dry goods only',
      'Daily 10-minute SSE workout routine; fitness goals achieved faster'
    ]
  },
  {
    id: 'S',
    name: 'South',
    degrees: { start: 168.75, end: 191.25 },
    element: 'Fire',
    rulingPlanet: 'Mars (Mangal)',
    deity: 'Yama (discipline)',
    purpose: 'Fame, discipline, boundaries',
    color: '#C62828',
    ui_color_hex: ['#C62828', '#B71C1C', '#D32F2F'],
    idealUsage: ['Staircase', 'Closets (organized)', 'Wall of achievements'],
    avoid: ['Main Entrance (if avoidable)'],
    dosDonts: {
      dos: [
        'Keep walls solid and well-painted; display achievements in order',
        'Use warm, steady lighting',
        'Maintain organized storage',
        'Display recognition and awards'
      ],
      donts: [
        'Avoid mirrors facing bed',
        'No broken frames or peeling paint',
        'Avoid main entrance if possible',
        'No clutter or disorganization'
      ]
    },
    color_therapy: ['Maroon', 'Deep Red', 'Burgundy'],
    aroma_therapy: ['Cedarwood', 'Clove'],
    metals_stones: ['Ruby (optional)', 'Bloodstone'],
    plants: ['None near stairs for safety'],
    favorable_weekdays: ['Tuesday', 'Saturday'],
    remedies: {
      quick: [
        'MAROON tape accent for steadiness',
        'Reframe achievements in neat grid',
        'Weekly cleaning checklist',
        'Organize awards and certificates'
      ],
      moderate: [
        'Fix paint chips/cracks promptly',
        'Install stair nosing/handrail if missing',
        'Create proper lighting for achievements display'
      ],
      structural: [
        'Ensure staircase has uniform risers/treads; fix squeaks'
      ]
    },
    mantras: ['Om Ram'],
    practical_examples: [
      'Organized award wall improved \'professional self-cue\'',
      'Repaired stair sounds; household reported calmer nights',
      'Created achievement gallery in South; motivation and confidence increased'
    ]
  },
  {
    id: 'SSW',
    name: 'South-Southwest',
    degrees: { start: 191.25, end: 213.75 },
    element: 'Earth/Fire',
    rulingPlanet: 'Rahu (node)',
    deity: 'Nirrti (protector)',
    purpose: 'Savings protection, insurance, buffers',
    color: '#8D6E63',
    ui_color_hex: ['#8D6E63', '#A1887F', '#6D4C41'],
    idealUsage: ['Safe/Locker Niche', 'Organized Store'],
    avoid: ['Toilet'],
    dosDonts: {
      dos: [
        'Keep valuables arranged, hidden, and logged',
        'Earthy tones and neat labels',
        'Maintain security and privacy',
        'Organize important documents'
      ],
      donts: [
        'Avoid leaking pipes and dampness',
        'No scattered paperwork',
        'Avoid easy visibility of valuables',
        'No disorganized storage'
      ]
    },
    color_therapy: ['Brown', 'Ochre', 'Earth Tones'],
    aroma_therapy: ['Myrrh', 'Patchouli (light)'],
    metals_stones: ['Pyrite', 'Citrine', 'Steel'],
    plants: ['None (keep dry)'],
    favorable_weekdays: ['Saturday', 'Friday'],
    remedies: {
      quick: [
        'OCHRE/BROWN tape band for grounding',
        'Safe door opens to North/East for easier access',
        'Place small pyrite/citrine in safe (non-religious cue)',
        'Label storage systematically'
      ],
      moderate: [
        'Use file organizers; monthly audit of bills',
        'Dehumidifier if humidity > 60%',
        'Create secure document storage system'
      ],
      structural: [
        'Waterproof and ventilate store niches; avoid floor contact for boxes'
      ]
    },
    mantras: ['Om Shreem', 'Om Namo Bhagavate Vasudevaya'],
    practical_examples: [
      'Moved petty cash to SSW safe; fewer \'lost receipt\' incidents',
      'Labeled file bins reduced search time by 70%',
      'Organized important documents in SSW; financial planning improved'
    ]
  },
  {
    id: 'SW',
    name: 'Southwest',
    degrees: { start: 213.75, end: 236.25 },
    element: 'Earth',
    rulingPlanet: 'Rahu/Ketu context; Saturn stability',
    deity: 'Nairritya',
    purpose: 'Authority, anchoring, long-term stability',
    color: '#6D4C41',
    ui_color_hex: ['#6D4C41', '#5D4037', '#795548'],
    idealUsage: ['Master Bedroom', 'Heavy Storage (stable)'],
    avoid: ['Kitchen', 'Toilet (ideally)', 'Aquarium/Water Feature'],
    dosDonts: {
      dos: [
        'Use solid headboard; bed head to South/West',
        'Keep heavy, stable furniture',
        'Maintain as highest and heaviest area',
        'Use for authority and decision-making'
      ],
      donts: [
        'Avoid mirrors facing bed',
        'No water bodies or drains',
        'Avoid light or unstable furniture',
        'No excessive movement or activity'
      ]
    },
    color_therapy: ['Brown', 'Dark Brown', 'Earth Brown'],
    aroma_therapy: ['Vetiver', 'Sage'],
    metals_stones: ['Yellow Jasper', 'Hematite', 'Shungite'],
    plants: ['None water-heavy'],
    favorable_weekdays: ['Saturday', 'Thursday'],
    remedies: {
      quick: [
        'EARTH-BROWN tape at baseboard to anchor',
        'Himalayan salt lamp in evening',
        'Add a sturdy chest/cabinet in SW',
        'Place heavy, stable furniture'
      ],
      moderate: [
        'Relocate fish tank/water from SW to N/NE',
        'Replace flimsy furniture with stable pieces',
        'Create master bedroom with solid bed placement'
      ],
      structural: [
        'If toilet exists, prioritize odor/water-seal integrity and powerful exhaust; add earthing remedies elsewhere'
      ]
    },
    mantras: ['Om Shreem Brzee (prosperity)', 'Shani mantra (discipline)'],
    practical_examples: [
      'Shifted bed head to West; sleep quality improved',
      'Moved aquarium from SW to North; fewer moisture issues',
      'Created stable SW master bedroom; relationship stability increased'
    ]
  },
  {
    id: 'WSW',
    name: 'West-Southwest',
    degrees: { start: 236.25, end: 258.75 },
    element: 'Space/Earth',
    rulingPlanet: 'Saturn (Shani)',
    deity: 'Varuna/Pushan',
    purpose: 'Retention, outcomes, discipline in learning',
    color: '#BCAAA4',
    ui_color_hex: ['#BCAAA4', '#A1887F', '#BDBDBD'],
    idealUsage: ['Study Storage', 'Bookshelves', 'Records'],
    avoid: ['Toilet (prefer elsewhere)'],
    dosDonts: {
      dos: [
        'Catalog and label; weekly tidy-up',
        'Use neutral tones; task lighting',
        'Maintain organized learning materials',
        'Create systematic storage'
      ],
      donts: [
        'Avoid \'dumping ground\' behavior',
        'No broken shelves',
        'Avoid disorganized piles',
        'No neglected or forgotten items'
      ]
    },
    color_therapy: ['Beige', 'Grey-Beige', 'Neutral Grey'],
    aroma_therapy: ['Lavender (light)', 'Rosemary'],
    metals_stones: ['Blue Sapphire (avoid unless astrologically advised)', 'Lapis Lazuli'],
    plants: ['Pothos (controlled)'],
    favorable_weekdays: ['Saturday', 'Thursday'],
    remedies: {
      quick: [
        'BEIGE/GREIGE tape to signal order',
        'Label shelves A–Z or by subject',
        'Hourglass/timer as focus cue',
        'Weekly organization routine'
      ],
      moderate: [
        'Fix/replace sagging shelves',
        'Introduce closed cabinets for seldom-used items',
        'Create systematic filing system'
      ],
      structural: [
        'Ensure wall is dry and load-bearing before installing heavy shelving'
      ]
    },
    mantras: ['Om Sham Shanaye Namah'],
    practical_examples: [
      'Reorganized kids\' materials; exam prep felt calmer',
      'Closed cabinets reduced visual clutter',
      'Systematic WSW storage; study efficiency improved 50%'
    ]
  },
  {
    id: 'W',
    name: 'West',
    degrees: { start: 258.75, end: 281.25 },
    element: 'Space',
    rulingPlanet: 'Saturn (results)',
    deity: 'Varuna',
    purpose: 'Gains, fulfillment, balanced storage',
    color: '#9E9E9E',
    ui_color_hex: ['#9E9E9E', '#BDBDBD', '#EEEEEE'],
    idealUsage: ['Dining', 'Children Bedroom', 'Balanced Storage'],
    avoid: ['Primary Kitchen'],
    dosDonts: {
      dos: [
        'Keep storage balanced—not empty, not overstuffed',
        'Warm lighting over dining',
        'Use for social and family activities',
        'Maintain comfortable gathering spaces'
      ],
      donts: [
        'Avoid damp/mold in cabinets',
        'No sharp handles in walkways',
        'Avoid primary kitchen placement',
        'No excessive clutter'
      ]
    },
    color_therapy: ['Light Grey', 'White', 'Silver'],
    aroma_therapy: ['Vanilla (light)', 'Cardamom'],
    metals_stones: ['Steel', 'Moonstone'],
    plants: ['Fruit bowl (symbolic)'],
    favorable_weekdays: ['Saturday', 'Monday'],
    remedies: {
      quick: [
        'LIGHT GREY/WHITE tape for balance marker',
        'Keep fresh fruit bowl on dining table',
        'Soft-close hinges to reduce noise',
        'Balanced storage organization'
      ],
      moderate: [
        'Install dehumidifier sachets in cabinets',
        'Reorganize dining layout for better circulation',
        'Create comfortable family gathering space'
      ],
      structural: [
        'Consider sideboard height/placement to avoid blocking pathways'
      ]
    },
    mantras: ['Om Purnamadah Purnamidam'],
    practical_examples: [
      'Added soft-close hinges; calmer dining experience',
      'Balanced cabinet load; fewer warped shelves',
      'Created cozy West dining area; family bonding time increased'
    ]
  },
  {
    id: 'WNW',
    name: 'West-Northwest',
    degrees: { start: 281.25, end: 303.75 },
    element: 'Air/Space',
    rulingPlanet: 'Moon (connections)',
    deity: 'Vayu/Mitra',
    purpose: 'Networking, helpful contacts, guests',
    color: '#CFD8DC',
    ui_color_hex: ['#CFD8DC', '#ECEFF1', '#B0BEC5'],
    idealUsage: ['Guest Room', 'Networking/Call Corner'],
    avoid: ['Toilet (if avoidable)'],
    dosDonts: {
      dos: [
        'Keep guest items fresh and ready',
        'Maintain a tidy contact board/CRM',
        'Create welcoming atmosphere',
        'Good for communication activities'
      ],
      donts: [
        'Avoid junk piles',
        'No dark closed windows',
        'Avoid neglected guest preparations',
        'No stagnant or unused spaces'
      ]
    },
    color_therapy: ['Off-White', 'Light Blue-Grey', 'Silver'],
    aroma_therapy: ['Citrus', 'Lavender'],
    metals_stones: ['Silver', 'Aquamarine'],
    plants: ['Indoor Palm'],
    favorable_weekdays: ['Monday', 'Friday'],
    remedies: {
      quick: [
        'OFF-WHITE tape and a clean pinboard',
        'Diffuse mild citrus weekly',
        'Air guest bedding monthly',
        'Maintain contact organization system'
      ],
      moderate: [
        'Declutter suitcases; assign storage',
        'Add comfortable seating for calls',
        'Create welcoming guest preparation area'
      ],
      structural: [
        'Ensure guest room ventilation and adequate window size'
      ]
    },
    mantras: ['Om Mitraya Namah'],
    practical_examples: [
      'Scheduled weekly networking slot; improved follow-ups',
      'Freshened guest linens; better hospitality feedback',
      'Created WNW communication corner; professional relationships improved'
    ]
  },
  {
    id: 'NW',
    name: 'Northwest',
    degrees: { start: 303.75, end: 326.25 },
    element: 'Air',
    rulingPlanet: 'Moon (movement)',
    deity: 'Vayu',
    purpose: 'Movement, travel, deals, transitions',
    color: '#ECEFF1',
    ui_color_hex: ['#ECEFF1', '#F5F5F5', '#E0E0E0'],
    idealUsage: ['Guest Room', 'Travel Gear Closet'],
    avoid: ['Master Bedroom (restlessness)'],
    dosDonts: {
      dos: [
        'Use light fabrics; encourage airflow',
        'Organize travel items/documents',
        'Good for temporary stays',
        'Maintain movement and flexibility'
      ],
      donts: [
        'Avoid blocked vents or wobbling furniture',
        'No heavy trunks causing stagnation',
        'Avoid master bedroom placement',
        'No permanent heavy installations'
      ]
    },
    color_therapy: ['Silver', 'White', 'Light Grey'],
    aroma_therapy: ['Jasmine (light)', 'Lemon'],
    metals_stones: ['Silver', 'Selenite'],
    plants: ['Light foliage plants'],
    favorable_weekdays: ['Monday', 'Wednesday'],
    remedies: {
      quick: [
        'SILVER/WHITE tape hint for lightness',
        'Create a tidy luggage corner with labels',
        'Wind décor (gentle, non-noisy)',
        'Organize travel documents systematically'
      ],
      moderate: [
        'Service windows/vents',
        'Replace wobbly furniture',
        'Create efficient travel preparation area'
      ],
      structural: [
        'Consider louvered doors for closets to maintain airflow'
      ]
    },
    mantras: ['Om Vayave Namah'],
    practical_examples: [
      'Filed passports/visas in labeled folder; reduced last-minute stress',
      'Replaced wobbly side table; safer guest sleep',
      'Organized NW travel corner; trip planning became more efficient'
    ]
  },
  {
    id: 'NNW',
    name: 'North-Northwest',
    degrees: { start: 326.25, end: 348.75 },
    element: 'Air/Water',
    rulingPlanet: 'Venus/Mercury',
    deity: 'Rudra (contracts)',
    purpose: 'Analysis, contracts, closing cycles',
    color: '#90A4AE',
    ui_color_hex: ['#90A4AE', '#B0BEC5', '#607D8B'],
    idealUsage: ['Home Office (analysis)', 'Filing/Agreements'],
    avoid: ['Toilet'],
    dosDonts: {
      dos: [
        'Keep desk neat; face North/East',
        'Maintain labeled contract files',
        'Good for analytical work',
        'Organize legal and business documents'
      ],
      donts: [
        'Avoid chaotic paperwork',
        'No red-dominant palette',
        'Avoid disorganized filing',
        'No neglected contracts or agreements'
      ]
    },
    color_therapy: ['Cool Blue-Grey', 'Steel Blue', 'Light Blue'],
    aroma_therapy: ['Peppermint', 'Rosemary'],
    metals_stones: ['Steel', 'Fluorite'],
    plants: ['Small desk plant'],
    favorable_weekdays: ['Friday', 'Wednesday'],
    remedies: {
      quick: [
        'COOL BLUE-GREY tape to cue focus',
        'Metal desk organizer',
        'Desk plant for balance',
        'Systematic filing system'
      ],
      moderate: [
        'Digitize archives; keep essentials within reach',
        'Task lamp with neutral white',
        'Create efficient document workflow'
      ],
      structural: [
        'Acoustic treatment if calls cause echo'
      ]
    },
    mantras: ['Om Shukraya Namah', 'Budha Beej Mantra'],
    practical_examples: [
      'Created A–Z filing; faster retrieval',
      'Daily 15-minute admin cleanup ritual maintained',
      'Organized NNW office; contract management became systematic and efficient'
    ]
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
