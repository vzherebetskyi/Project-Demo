import React from 'react';

const Title = (props) => {
    return (
      <div>
      <div className = 'betaNotice'>Ви користуєтеся бета-версією програми. Просимо вибачення за незручності в разі їх виникнення.</div>
      <div className = 'brandName'>
        <h1 className = 'brandName__title'>{props.title}</h1>
      </div>
      </div>
    );
  };

  export default Title;