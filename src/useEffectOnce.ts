import { EffectCallback, useEffect, useRef } from 'react';

const useEffectOnce = (callback: EffectCallback) => {
  const hasExecuted = useRef(false);

  useEffect(() => {
    if (hasExecuted.current) return;

    callback();
    hasExecuted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useEffectOnce;
