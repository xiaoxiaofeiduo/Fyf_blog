import { useEffect, useState } from 'react';

const STORAGE_KEY = 'hyrule-korok-seeds';
const KOROK_EVENT = 'hyrule-korok-found';

function readFoundKoroks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') as string[];
  } catch {
    return [];
  }
}

export function KorokSpot({ id, label = '发现隐藏的呀哈哈' }: { id: string; label?: string }) {
  const [found, setFound] = useState(() => readFoundKoroks().includes(id));
  const [showMessage, setShowMessage] = useState(false);

  const discover = () => {
    const foundKoroks = readFoundKoroks();
    if (!foundKoroks.includes(id)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...foundKoroks, id]));
      setFound(true);
      window.dispatchEvent(new CustomEvent(KOROK_EVENT));
    }
    setShowMessage(true);
    window.setTimeout(() => setShowMessage(false), 2200);
  };

  return (
    <div className={`korok-spot ${found ? 'korok-spot-found' : ''}`}>
      <button type="button" onClick={discover} aria-label={label}>
        <span className="korok-leaf" aria-hidden="true"><i /><i /><i /></span>
        <span className="korok-body" aria-hidden="true" />
      </button>
      {showMessage && <span className="korok-message" role="status">呀哈哈！你找到我了！</span>}
    </div>
  );
}

export function KorokCounter() {
  const [count, setCount] = useState(() => readFoundKoroks().length);

  useEffect(() => {
    const update = () => setCount(readFoundKoroks().length);
    window.addEventListener(KOROK_EVENT, update);
    window.addEventListener('storage', update);
    return () => {
      window.removeEventListener(KOROK_EVENT, update);
      window.removeEventListener('storage', update);
    };
  }, []);

  return <span className="korok-counter" aria-live="polite">呀哈哈种子 <strong>{count}/4</strong></span>;
}
