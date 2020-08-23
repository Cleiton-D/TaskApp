import React, { useMemo } from 'react';
import {
  Route as ReactRoute,
  RouteProps as ReactRouteProps,
} from 'react-router-dom';

import { useAccess } from '../hooks/access';
import NoAccess from '../pages/NoAccess';

type RouteProps = ReactRouteProps & {
  accessCode?: string;
};

const Route: React.FC<RouteProps> = ({
  accessCode,
  component: Component,
  ...rest
}) => {
  const { hasAccess } = useAccess();

  const access = useMemo(() => {
    if (!accessCode) return true;

    return hasAccess(accessCode);
  }, [hasAccess, accessCode]);

  return access ? (
    <ReactRoute component={Component} {...rest} />
  ) : (
    <ReactRoute component={NoAccess} {...rest} />
  );
};

export default Route;
