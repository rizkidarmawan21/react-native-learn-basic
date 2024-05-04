import AsyncStorage from '@react-native-async-storage/async-storage';

// Untuk Menyimpan Data di Local Storage
export const storeData = async (storageKey, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(storageKey, jsonValue);
    } catch (e) {
        alert('Gagal menyimpan data di local storage');
    }
};

// Untuk Mengambil Data di Local Storage
export const getData = async storageKey => {
    try {
        const jsonValue = await AsyncStorage.getItem(storageKey);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        alert('Gagal mengambil data dari local storage');
    }
};

// Untuk Menghapus Data di Local Storage
export const removeData = async storageKey => {
    try {
        await AsyncStorage.removeItem(storageKey);
    } catch (e) {
        alert('Gagal menghapus data dari local storage');
    }
};