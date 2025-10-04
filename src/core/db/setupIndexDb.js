import { openDB } from 'idb';
import { LOG_DATABASE, LOG_STORE } from '../../constants/dbConstants';

export const initDb = async () => {
    return openDB(LOG_DATABASE, 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(LOG_STORE)) {
                db.createObjectStore(LOG_STORE, {
                    keyPath: 'id',
                    autoIncrement: true,
                });
            }
        },
    });
};
