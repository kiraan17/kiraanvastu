import { VASTU_ZONES, ROOM_TYPES } from '../data/vastuZones';

export const normalizeAngle = (angle) => {
  while (angle < 0) angle += 360;
  while (angle >= 360) angle -= 360;
  return angle;
};

export const getZoneFromAngle = (angle) => {
  const normalizedAngle = normalizeAngle(angle);
  
  for (const zone of VASTU_ZONES) {
    const { start, end } = zone.degrees;
    
    if (start > end) {
      if (normalizedAngle >= start || normalizedAngle <= end) {
        return zone;
      }
    } else {
      if (normalizedAngle >= start && normalizedAngle <= end) {
        return zone;
      }
    }
  }
  
  return VASTU_ZONES[0];
};

export const calculateCompliance = (roomType, currentZone) => {
  const room = ROOM_TYPES.find(r => r.id === roomType);
  if (!room) return { score: 0, status: 'unknown', severity: 'high' };
  
  const isIdeal = room.idealZones.includes(currentZone.id);
  
  if (isIdeal) {
    return { score: 100, status: 'excellent', severity: 'low' };
  }
  
  const compatibleElements = getCompatibleElements(currentZone.element);
  const roomElement = getElementForRoom(roomType);
  
  if (compatibleElements.includes(roomElement)) {
    return { score: 70, status: 'good', severity: 'medium' };
  }
  
  const isAvoidZone = currentZone.avoid && currentZone.avoid.some(avoid => 
    avoid.toLowerCase().includes(roomType.toLowerCase()) || 
    room.name.toLowerCase().includes(avoid.toLowerCase())
  );
  
  if (isAvoidZone) {
    return { score: 10, status: 'critical', severity: 'high' };
  }
  
  return { score: 30, status: 'needs_improvement', severity: 'medium' };
};

export const getCompatibleElements = (element) => {
  const compatibility = {
    'Water': ['Water', 'Air'],
    'Air': ['Air', 'Fire'],
    'Fire': ['Fire', 'Earth'],
    'Earth': ['Earth', 'Metal'],
    'Metal': ['Metal', 'Water']
  };
  
  return compatibility[element] || [];
};

export const getElementForRoom = (roomType) => {
  const roomElements = {
    'kitchen': 'Fire',
    'bedroom': 'Earth',
    'guest_bedroom': 'Air',
    'living_room': 'Fire',
    'study': 'Air',
    'prayer': 'Air',
    'bathroom': 'Water',
    'storage': 'Earth',
    'dining': 'Air',
    'entrance': 'Air'
  };
  
  return roomElements[roomType] || 'Air';
};

export const getRemediesForZone = (zoneId, roomType) => {
  const zone = VASTU_ZONES.find(z => z.id === zoneId);
  if (!zone) return { quick: [], moderate: [], structural: [] };
  
  let remedies = { quick: [], moderate: [], structural: [] };
  
  if (zone.remedies) {
    if (zone.remedies.quick) {
      remedies.quick = [...zone.remedies.quick];
    }
    if (zone.remedies.moderate) {
      remedies.moderate = [...zone.remedies.moderate];
    }
    if (zone.remedies.structural) {
      remedies.structural = [...zone.remedies.structural];
    }
    
    if (Array.isArray(zone.remedies)) {
      remedies.quick = [...zone.remedies];
    }
  }
  
  const roomSpecificRemedies = {
    'kitchen': {
      quick: ['Place stove in SE corner', 'Use red/orange colors', 'Keep fire and water separate'],
      moderate: ['Install proper ventilation', 'Use copper utensils'],
      structural: ['Ensure kitchen faces SE direction']
    },
    'bedroom': {
      quick: ['Place bed in SW corner', 'Use earth tones', 'Solid headboard'],
      moderate: ['Remove mirrors facing bed', 'Use heavy furniture'],
      structural: ['Ensure bedroom is in SW zone']
    },
    'study': {
      quick: ['Face North while studying', 'Use blue/green colors', 'Good lighting'],
      moderate: ['Organize books systematically', 'Add plants for freshness'],
      structural: ['Create dedicated study space in NE']
    },
    'prayer': {
      quick: ['Face East while praying', 'Use yellow/white colors', 'Keep area clean'],
      moderate: ['Add spiritual symbols', 'Use natural materials'],
      structural: ['Dedicate NE corner for prayer room']
    }
  };
  
  if (roomSpecificRemedies[roomType]) {
    const roomRemedies = roomSpecificRemedies[roomType];
    remedies.quick.push(...(roomRemedies.quick || []));
    remedies.moderate.push(...(roomRemedies.moderate || []));
    remedies.structural.push(...(roomRemedies.structural || []));
  }
  
  return remedies;
};

export const getBeneficialDirection = () => {
  const today = new Date();
  const directions = ['North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'];
  const directionIndex = today.getDay();
  return directions[directionIndex];
};

export const getDailyTip = (tips) => {
  const today = new Date();
  const tipIndex = today.getDate() % tips.length;
  return tips[tipIndex];
};
