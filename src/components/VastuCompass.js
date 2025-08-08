import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Circle, Path, Text as SvgText, G } from 'react-native-svg';
import { VASTU_ZONES } from '../data/vastuZones';

const { width } = Dimensions.get('window');
const compassSize = width * 0.8;
const radius = compassSize / 2 - 20;
const centerX = compassSize / 2;
const centerY = compassSize / 2;

export default function VastuCompass({ heading = 0, onZonePress }) {
  const createZonePath = (zone) => {
    const { start, end } = zone.degrees;
    const startAngle = (start - 90) * (Math.PI / 180);
    const endAngle = (end - 90) * (Math.PI / 180);
    
    const x1 = centerX + radius * Math.cos(startAngle);
    const y1 = centerY + radius * Math.sin(startAngle);
    const x2 = centerX + radius * Math.cos(endAngle);
    const y2 = centerY + radius * Math.sin(endAngle);
    
    const largeArcFlag = Math.abs(end - start) > 180 ? 1 : 0;
    
    return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  const getZoneLabelPosition = (zone) => {
    const { start, end } = zone.degrees;
    let midAngle = (start + end) / 2;
    
    if (start > end) {
      midAngle = ((start + end + 360) / 2) % 360;
    }
    
    const labelRadius = radius * 0.7;
    const angle = (midAngle - 90) * (Math.PI / 180);
    
    return {
      x: centerX + labelRadius * Math.cos(angle),
      y: centerY + labelRadius * Math.sin(angle)
    };
  };

  const getCompassNeedleRotation = () => {
    return `rotate(${heading} ${centerX} ${centerY})`;
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Svg width={compassSize} height={compassSize}>
        <Circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="#8B4513"
          strokeWidth="2"
        />
        
        {VASTU_ZONES.map((zone, index) => {
          const path = createZonePath(zone);
          const labelPos = getZoneLabelPosition(zone);
          
          return (
            <G key={zone.id}>
              <Path
                d={path}
                fill={zone.color}
                fillOpacity={0.6}
                stroke="#FFF"
                strokeWidth="1"
                onPress={() => onZonePress && onZonePress(zone)}
              />
              <SvgText
                x={labelPos.x}
                y={labelPos.y}
                fontSize="10"
                fill="#FFF"
                textAnchor="middle"
                fontWeight="bold"
              >
                {zone.id}
              </SvgText>
            </G>
          );
        })}
        
        <G transform={getCompassNeedleRotation()}>
          <Path
            d={`M ${centerX} ${centerY - radius * 0.8} L ${centerX - 5} ${centerY + 10} L ${centerX + 5} ${centerY + 10} Z`}
            fill="#FF0000"
            stroke="#FFF"
            strokeWidth="1"
          />
          <Circle
            cx={centerX}
            cy={centerY}
            r="8"
            fill="#8B4513"
            stroke="#FFF"
            strokeWidth="2"
          />
        </G>
        
        <SvgText
          x={centerX}
          y={centerY - radius - 10}
          fontSize="14"
          fill="#8B4513"
          textAnchor="middle"
          fontWeight="bold"
        >
          N
        </SvgText>
        <SvgText
          x={centerX + radius + 10}
          y={centerY + 5}
          fontSize="14"
          fill="#8B4513"
          textAnchor="middle"
          fontWeight="bold"
        >
          E
        </SvgText>
        <SvgText
          x={centerX}
          y={centerY + radius + 20}
          fontSize="14"
          fill="#8B4513"
          textAnchor="middle"
          fontWeight="bold"
        >
          S
        </SvgText>
        <SvgText
          x={centerX - radius - 10}
          y={centerY + 5}
          fontSize="14"
          fill="#8B4513"
          textAnchor="middle"
          fontWeight="bold"
        >
          W
        </SvgText>
      </Svg>
      
      <Text style={{ marginTop: 10, fontSize: 16, color: '#8B4513', fontWeight: 'bold' }}>
        Heading: {Math.round(heading)}°
      </Text>
    </View>
  );
}
