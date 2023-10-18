import React, { ComponentType, useEffect } from 'react';

const withLogName = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithLogName = (props: P) => {
    useEffect(() => {
      console.log(`Mounted component: ${WrappedComponent.displayName || WrappedComponent.name}`);
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithLogName;
};

export default withLogName;
