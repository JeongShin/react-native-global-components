import React from 'react';
import { PortalProps } from '../../types';
import {
  GlobalComponentContext,
  UpdateGlobalComponentContext,
} from '../context';
import PopUpManager from './PopUpManager';
import usePopUp from './usePopUp';

const PopUpPortal: React.FC<PortalProps> = ({ name }) => {
  const { visible, updateState, state } = usePopUp(name);

  if (!visible || !state) return <></>;

  const Component = PopUpManager.getComponent(name);

  if (!Component) return <></>;

  return (
    <GlobalComponentContext.Provider value={state}>
      <UpdateGlobalComponentContext.Provider value={updateState}>
        <Component {...state} />
      </UpdateGlobalComponentContext.Provider>
    </GlobalComponentContext.Provider>
  );
};

export default PopUpPortal;
