import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import GovernorsGeneralScreen from './screens/GovernorsGeneralScreen';
import PresidentsScreen from './screens/PresidentsScreen';
import PrimeMinistersScreen from './screens/PrimeMinistersScreen';
import ArmyChiefsScreen from './screens/ArmyChiefsScreen';
import TouristAttractionsScreen from './screens/TouristAttractionsScreen';
import PopulationScreen from './screens/PopulationScreen';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  GovernorsGeneral: { screen: GovernorsGeneralScreen },
  Presidents: { screen: PresidentsScreen },
  PrimeMinisters: { screen: PrimeMinistersScreen },
  ArmyChiefs: { screen: ArmyChiefsScreen },
  TouristAttractions: { screen: TouristAttractionsScreen },
  Population: { screen: PopulationScreen }
});

export default App;