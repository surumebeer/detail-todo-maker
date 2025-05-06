import { openDB } from "./openDB";
import { DB_SCHEMA_NAME } from "./constants";

export async function saveDBData(key: string, value: unknown): Promise<void> {
  const db = await openDB();
  const tx = db.transaction(DB_SCHEMA_NAME, "readwrite");
  const store = tx.objectStore(DB_SCHEMA_NAME);
  store.put(value, key);

  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
