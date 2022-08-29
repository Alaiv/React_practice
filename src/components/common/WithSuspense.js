import React, {Suspense} from 'react';

export const WithSuspense = (Component) => {
    const componentWithSuspense = props => {
        return (
            <Suspense fallback={'...Loading...'}>
                <Component {...props}/>
            </Suspense>
        )
    }
    return componentWithSuspense
}