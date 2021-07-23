import React from 'react';
import { Button, Drawer, Icon } from 'rsuite';
import { useMediaQuery, useModalState } from '../../misc/custom-hooks';
import Dashboard from '.';

const DashboardToggle = () => {
  const { isopen, open, close } = useModalState();
  const isMobile = useMediaQuery('(max-width:922px)');

  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" /> Dashboard
      </Button>
      <Drawer full={isMobile} show={isopen} onHide={close} placement="left">
        <Dashboard />
      </Drawer>
    </>
  );
};

export default DashboardToggle;
