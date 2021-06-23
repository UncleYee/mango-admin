import React, { useEffect } from 'react';

import styles from './index.module.scss';

const PageDetail: React.FC = () => {
  useEffect(() => {

  }, []);

  return (
    <div className={styles['page-detail']}>
      <div className="components">
        components
      </div>
      <div className="content">
        <div className="iframe">
          <iframe title="mango-ifram" src="http://localhost:3000/" frameBorder="0" />
        </div>
      </div>
    </div>
  )
};

export default PageDetail;