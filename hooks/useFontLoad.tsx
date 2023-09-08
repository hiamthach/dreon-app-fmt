import { useFonts } from 'expo-font';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const useFontLoad = () => {
  const [loaded, error] = useFonts({
    Inter: require('../assets/fonts/Inter-Regular.ttf'),
    InterMedium: require('../assets/fonts/Inter-Medium.ttf'),
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
    PoppinsBlack: require('../assets/fonts/Poppins-Black.ttf'),
    ...FontAwesome5.font,
  });

  return { loaded, error };
};

export default useFontLoad;
