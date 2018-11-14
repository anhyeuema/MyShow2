import { AsyncStorage } from 'react-native';
const getToken = async (token) => {
    try {
        const value = await AsyncStorage.getItem('@token');
        if (token !== null) {
            return value;
        }
        return '';
    } catch (e) {
        return e;
    }
};
export default getToken;