import React, { useCallback } from 'react';
import { Alert, Button, Drawer, Icon } from 'rsuite';
import { useMediaQuery, useModalState } from '../../misc/custom-hooks';
import Dashboard from '.';
import { auth } from '../../misc/firebase';

const DashboardToggle = () => {
  const { isopen, open, close } = useModalState();
  const isMobile = useMediaQuery('(max-width:922px)');

  const onSignout = useCallback(() => {
    auth.signOut();

    Alert.info('Signed out', 4000);
    close();
  }, [close]);

  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" /> Dashboard
      </Button>
      <Drawer full={isMobile} show={isopen} onHide={close} placement="left">
        <Dashboard onSignout={onSignout} />
      </Drawer>
    </>
  );
};

export default DashboardToggle;
