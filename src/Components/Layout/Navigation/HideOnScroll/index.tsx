'use client';

import { Slide } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { ChildrenType } from 'types';

function HideOnScroll(props: ChildrenType) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

export default HideOnScroll;
