import React, { forwardRef } from "react";
import PropTypes from 'prop-types';

import SuggestList from "./components/SuggestList";
import SuggestTextBox from "./components/SuggestTextBox";
import { WrapperStyle } from "./components/SuggestTextStyles";

import useSuggestTextController from "./services/suggestText.controller";
import { listClassDef } from "./services/suggestText.custom"

const SuggestText = forwardRef(function SuggestText({
  list = [], placeholder, className, listClasses = listClassDef, onChange, onSubmit, isHidden, children
}, ref) {

  const { boxProps, listProps, showList } = useSuggestTextController(list, isHidden, onChange, onSubmit, ref)

  return (
    <WrapperStyle className={listClasses.main ?? ""}>
      <SuggestTextBox
        className={className ?? listClasses.textbox ?? listClassDef.textbox}
        isHidden={isHidden} placeholder={placeholder} {...boxProps}
      />
      
      { showList && <SuggestList classes={listClasses} {...listProps} /> }

      { children }

    </WrapperStyle>
  )
})

SuggestText.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  listClass: PropTypes.objectOf(PropTypes.string),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  isHidden: PropTypes.bool,
}

export default SuggestText;