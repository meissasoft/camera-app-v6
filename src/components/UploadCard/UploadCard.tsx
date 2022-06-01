import React from 'react';

import { UploadIcon } from '@/assets/svg/upload';

import { DivContent, DivHeading, DivIcon, DivStepLayout } from './UploadCard.style';

interface Props {
  content: string;
  heading: string;
  onClick: any;
  ref: any;
}

function UploadCard({ content, heading, onClick, ref }: Props) {
  return (
    <DivStepLayout onClick={onClick} ref={ref}>
      <div className="col-9">
        <DivHeading>{heading}</DivHeading>
        <DivContent>{content}</DivContent>
      </div>
      <DivIcon className="col-3">
        <UploadIcon />
      </DivIcon>
    </DivStepLayout>
  );
}

export default UploadCard;
