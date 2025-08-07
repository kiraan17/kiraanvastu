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
  if (!room) return { score: 0, status: 'unknown' };
  
  const isIdeal = room.idealZones.includes(currentZone.id);
  
  if (isIdeal) {
    return { score: 100, status: 'excellent' };
  }
  
  const compatibleElements = getCompatibleElements(currentZone.element);
  const roomElement = getElementForRoom(roomType);
  
  if (compatibleElements.includes(roomElement)) {
    return { score: 70, status: 'good' };
  }
  
  return { score: 30, status: 'needs_improvement' };
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
  if (!zone) return [];
  
  const baseRemedies = [...zone.remedies];
  
  const roomSpecificRemedies = {
    'kitchen': ['Place stove in SE corner', 'Use red/orange colors'],
    'bedroom': ['Place bed in SW corner', 'Use earth tones'],
    'study': ['Face North while studying', 'Use blue/green colors'],
    'prayer': ['Face East while praying', 'Use yellow/white colors']
  };
  
  if (roomSpecificRemedies[roomType]) {
    baseRemedies.push(...roomSpecificRemedies[roomType]);
  }
  
  return baseRemedies;
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
