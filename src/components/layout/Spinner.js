import React, { useState, useEffect } from 'react';
import { PropagateLoader } from 'react-spinners';

function Spinner() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <PropagateLoader
      color="#ffb900"
      loading={loading}
      size={30}
    />
  );
}

export default Spinner;
