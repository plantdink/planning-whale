import { useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import { useRouter } from 'next/dist/client/router';
import debounce from 'lodash.debounce';
import { SEARCH_MANUAL_QUERY } from '../queries/SearchBarQueries';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';
import { lowerCaseFirstLetter } from '../lib/displayStrings';

export default function Search() {
  const router = useRouter();
  const [findItems, { loading, data, error }] = useLazyQuery(
    SEARCH_MANUAL_QUERY,
    {
      fetchPolicy: 'no-cache',
    }
  );

  if (error) console.log(error);
  const searchResult = data ? Object.values(data) : [];
  const items = [];
  searchResult.forEach((element) => items.push(...element));

  const findItemsDebounced = debounce(findItems, 500);
  resetIdCounter();

  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items,
    onInputValueChange({ inputValue: currentInputValue }) {
      findItemsDebounced({
        variables: {
          searchTerm: currentInputValue || '',
        },
      });
    },
    onSelectedItemChange({ selectedItem }) {
      let path = '';
      if (selectedItem?.__typename === 'Brand')
        path = `/gear/brand/${selectedItem.id}`;
      if (selectedItem?.__typename === 'Gearset')
        path = `/gear/gearset/${selectedItem.id}`;
      if (selectedItem?.__typename === 'ArmourType')
        path = `/gear/armourType/${selectedItem.id}`;
      if (selectedItem?.__typename === 'ArmourTalent')
        path = `/talents/armourTalent/${selectedItem.id}`;
      if (selectedItem?.__typename === 'WeaponTalent')
        path = `/talents/weaponTalent/${selectedItem.id}`;
      if (selectedItem?.__typename === 'ExoticArmourPiece')
        path = `/exotics/exoticArmourPiece/${selectedItem.id}`;
      if (selectedItem?.__typename === 'Weapon')
        path = `/weapons/${lowerCaseFirstLetter(selectedItem.class)}/${
          selectedItem.id
        }`;
      router.push({
        pathname: path,
      });
    },
    itemToString: (item) => item?.name || item?.model || '',
  });

  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: 'search',
            placeholder: 'Search Field Manual',
            id: 'search',
            className: loading ? 'loading' : null,
          })}
        />
      </div>
      <DropDown {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <DropDownItem
              {...getItemProps({ item, index })}
              key={item.id}
              highlighted={index === highlightedIndex}
            >
              {item.name || item.model}
            </DropDownItem>
          ))}
        {isOpen && !items.length && !loading && (
          <DropDownItem>Sorry, No entries found for {inputValue}</DropDownItem>
        )}
      </DropDown>
    </SearchStyles>
  );
}
