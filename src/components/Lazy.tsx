import { ButtonProps } from './MyButton'
import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./MyButton'));

export const EnhancedLazy:React.FC<ButtonProps> = (props) => {
    return <>
        <Suspense fallback={<p>loading</p>}>
            <LazyComponent {...props}></LazyComponent>
        </Suspense>
    </>
}