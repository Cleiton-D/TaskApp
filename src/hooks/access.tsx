import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  ComponentType,
  useMemo,
} from 'react';

type AccessContextData = {
  setPermissions(permissions: string[]): void;
  hasAccess(code: string): boolean;
};

const AccessContext = createContext<AccessContextData>({} as AccessContextData);

const AccessProvider: React.FC = ({ children }) => {
  const [codes, setCodes] = useState<string[]>([]);

  const setPermissions = useCallback((permissions: string[]) => {
    setCodes(permissions);
  }, []);

  const hasAccess = useCallback((code: string) => codes.includes(code), [
    codes,
  ]);

  return (
    <AccessContext.Provider value={{ setPermissions, hasAccess }}>
      {children}
    </AccessContext.Provider>
  );
};

function useAccess() {
  const context = useContext(AccessContext);
  return context;
}

type WithAccessProps = {
  accessCode?: string;
};

function withAccess<P>(Component: ComponentType<P>) {
  const WithAccessComp: React.FC<P & WithAccessProps> = ({
    accessCode,
    ...rest
  }) => {
    const { hasAccess } = useAccess();

    const access = useMemo(() => {
      if (!accessCode) return true;

      return hasAccess(accessCode);
    }, [accessCode, hasAccess]);

    return access ? <Component {...(rest as P)} /> : <></>;
  };

  WithAccessComp.displayName = `withPermissions(${
    Component.displayName || Component.name
  })`;
  return WithAccessComp;
}

export { AccessProvider as default, useAccess, withAccess };
