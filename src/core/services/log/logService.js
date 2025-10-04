import { LOG_STORE } from '../../../constants/dbConstants';
import { initDb } from '../../db/setupIndexDb';

export const logEvent = async (level, event) => {
    const db = await initDb();
    return db.add(LOG_STORE, {
        level,
        event,
        timestamp: new Date().toISOString(),
    });
};

export const getLogs = async () => {
    const db = await initDb();
    return db.getAll(LOG_STORE);
};
