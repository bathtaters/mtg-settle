import Downshift from 'downshift'
import { BoxWrapperStyle, InputBoxStyle, ListStyle, listItemClass } from "./styles/autoCompleteStyles"
import { itemDisplay, buildList } from "../services/autocomplete.services"


const ListItem = ({ item, index, isSelected, getItemProps }) => (
  <li {...getItemProps({ className: listItemClass(isSelected), item, index })}>
    {itemDisplay(item)}
  </li>
)


export default function AutoCompleteBox({ list, onChange, value, disabled }) {
  return (
    <Downshift onInputValueChange={onChange} inputValue={value} itemToString={itemDisplay}>
      {({
        getRootProps, getInputProps, getItemProps, getMenuProps,
        inputValue, isOpen,  highlightedIndex,
      }) => (

        <BoxWrapperStyle>

          <div {...getRootProps({}, {suppressRefError: true})}>
            <InputBoxStyle {...getInputProps()} disabled={disabled} />
          </div>

          <ListStyle getProps={getMenuProps}>
            { buildList(isOpen, list, inputValue)
                .map((item, index) => (
                  <ListItem isSelected={index === highlightedIndex} getItemProps={getItemProps} item={item} index={index} key={item.code} />
                ))
            }
          </ListStyle>

        </BoxWrapperStyle>
      )}
    </Downshift>
  )
}