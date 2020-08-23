import React, { createContext, useState, useCallback, useContext } from 'react';

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

export { AccessProvider as default, useAccess };
