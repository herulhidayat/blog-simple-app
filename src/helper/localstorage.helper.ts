export function getItem<T = any>(key: string, defaultValue: T | null = null): T | null {
  if (typeof window === "undefined") return defaultValue; // ⬅️ aman untuk SSR

  try {
    const LsData = localStorage.getItem(key);
    if (LsData === null) return defaultValue;

    return isJson(LsData) ? JSON.parse(LsData) : (LsData as T);
  } catch {
    return defaultValue;
  }
}

export function setItem(key: string, value: any) {
  if (typeof window === "undefined") return; // ⬅️ cegah error di server

  try {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  } catch {
    // bisa tambahin log error
  }
}

export function deleteItem(key: string) {
  if (typeof window === "undefined") return;

  localStorage.removeItem(key);
}

export function deleteAll() {
  if (typeof window === "undefined") return;

  localStorage.clear();
}

export function isJson(str: string) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}
