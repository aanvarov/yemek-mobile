import styled from 'styled-components';
import { COLORS, STYLE_CONFIGS } from '../constants';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Pressable,
} from 'react-native';
import { Dimensions } from 'react-native';

const S = {};

S.SafeAreaView = styled(SafeAreaView)`
  flex: 1;
  min-height: ${Dimensions.get('window').height - 100}px;};
  background-color: ${COLORS.WHITE};
`;

S.Container = styled(View)`
  padding: 0px ${STYLE_CONFIGS.PAGE.PADDING_HORIZONTAL}px;
  flex: 1;
  background-color: ${COLORS.WHITE};
`;

S.Title = styled(Text)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${props => props.weight || 500};
  font-size: ${props => props.size || '25px'};
  line-height: ${props => props.lineHeight || '33px'};
  color: ${props => props.color || COLORS.TEXT_COLOR};
  margin-bottom: ${props => props.mb || '0px'};
  margin-top: ${props => props.mt || '0px'};
  margin-left: ${props => props.ml || '0px'};
`;

S.Text = styled(Text)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${props => props.weight || 400};
  font-size: ${props => props.size || '15px'};
  line-height: ${props => props.lineHeight || '26px'};
  color: ${props => props.color || COLORS.TEXT_COLOR};
  margin-bottom: ${props => props.mb || '0px'};
  margin-top: ${props => props.mt || '0px'};
  margin-left: ${props => props.ml || '0px'};
  letter-spacing: ${props => props.letterSpacing || '0px'};
`;

S.GreenButton = styled(TouchableOpacity)`
  width: ${props => props.width || '100%'};
  height: 52px;
  background-color: ${props => props.bgColor || COLORS.DARK_GREEN};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.mt || '0px'};
`;

S.Pressable = styled(Pressable)`
  width: ${props => props.width || '100%'};
  height: 52px;
  border-radius: 12px;
  justify-content: center;
  align-items: ${props => props.alignItems || 'center'};
  margin-top: ${props => props.mt || '0px'};
`;

export default S;
