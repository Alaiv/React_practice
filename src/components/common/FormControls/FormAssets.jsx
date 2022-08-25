import cl from './FormAssets.module.css'
import React from 'react';


const SuperForm = ({input, meta, ...props}) => {
    const error = meta.touched && meta.error
    return (
        <div className={cl.area + ' '  + (error ? cl.error : '')}>
            {props.children}
            {error && <span>{meta.error}</span>}
        </div>
    )
}


export const ultimateForm = (props, Component) => {
   const {input, meta, ...restProps} = props;
   return <SuperForm {...props}><Component {...input} {...restProps}/></SuperForm>
}