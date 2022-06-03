import React from 'react';

import { ArrowRight } from '@/assets/svg/arrow-right';
import { DoneIconBlue } from '@/assets/svg/done-icon-blue';

import { DivContent, DivHeading, DivIcon, DivLabel, DivStep, DivStepLayout } from './StepsLayout.style';
import { StepsLayoutProps } from './StepsLayout.types';

function StepLayout({ step, content, isDisabled = false, heading, rightIcon, onClick }: StepsLayoutProps) {
  return (
    <DivStepLayout disabled={isDisabled} onClick={onClick}>
      <div className=" d-flex">
        <div className="col-11">
          <DivLabel>
            <DivStep>{step}</DivStep>
          </DivLabel>
          <DivHeading>{heading}</DivHeading>
          <DivContent>{content}</DivContent>
        </div>
        <DivIcon>
          <div className="col-1 divIcon">{rightIcon === 'done' ? <DoneIconBlue /> : <ArrowRight />}</div>
        </DivIcon>
      </div>
    </DivStepLayout>
  );
}

export default StepLayout;
