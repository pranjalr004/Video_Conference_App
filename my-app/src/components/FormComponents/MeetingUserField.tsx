import { EuiComboBox, EuiFormRow } from '@elastic/eui'
import React from 'react'

function MeetingUserField({
    label,options,onChange,selectedOptions,isClearable,placeholder,singleSelection=false,isInvalid,error
}:{
    label:string;
    options:any;
    onChange:any;
    selectedOptions:any;
    singleSelection?: { asPlainText:boolean} | boolean
    isClearable:boolean;
    placeholder:string;
    isInvalid:boolean,
    error:Array<string>

}) {

  return (

      <EuiFormRow label={label} isInvalid={isInvalid} error={error} >
        <EuiComboBox 
        options={options}
        onChange={onChange}
        selectedOptions={selectedOptions}
        isClearable={isClearable}
        placeholder={placeholder}
        singleSelection={singleSelection}
        isInvalid={isInvalid}
        />
  </EuiFormRow>
  )
}

export default MeetingUserField