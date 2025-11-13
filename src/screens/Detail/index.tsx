
import { View, Text} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TRouteProps } from '../../Routes';



export const Detail = () => {
  const { params } = useRoute<TRouteProps<'detail'>>();
  return (
    <View >
      <Text>Details {params.rate}</Text>
    </View>
  );
}