import React from 'react';

import PatternTop from '../svg/patternTop';

export default function Promotion({children}) {
    return (
        <aside className="promotion">
          <div className='pattern-container'>
            <PatternTop />
          </div>
          {children}
        </aside>
    )
}