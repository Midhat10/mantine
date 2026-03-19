import React, { useEffect, useRef } from 'react';

function useEffectSkipMount(cb, deps) {
  const mounted = useRef(true);

  useEffect(() => {
    if (!mounted.current) {
      return cb();
    }

    mounted.current = false;
  }, deps);
  return <div>useEffectSkipMount</div>;
}

export default useEffectSkipMount;
