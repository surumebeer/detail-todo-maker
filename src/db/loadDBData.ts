import { openDB } from "./openDB";
import { DB_SCHEMA_NAME } from "./constants";

export async function loadDBData<T = unknown>(
  key: string
): Promise<T | undefined> {
  const db = await openDB();
  const tx = db.transaction(DB_SCHEMA_NAME, "readonly");
  const store = tx.objectStore(DB_SCHEMA_NAME);
  const request = store.get(key);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result as T);
    request.onerror = () => reject(request.error);
  });
}
