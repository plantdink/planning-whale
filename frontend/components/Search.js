import { gql, useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import { useRouter } from 'next/dist/client/router';
import debounce from 'lodash.debounce';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';
import lowerCaseFirstLetter from '../lib/lowerCaseFirstLetter';

const SEARCH_MANUAL_QUERY = gql`
  query SEARCH_MANUAL_QUERY($searchTerm: String!) {
    allBrands(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { setBonusOne_contains_i: $searchTerm }
          { setBonusTwo_contains_i: $searchTerm }
          { setBonusThree_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
    }
    allWeapons(
      where: {
        OR: [
          { model_contains_i: $searchTerm }
          { family_contains_i: $searchTerm }
          { class_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      class
      model
    }
    allGearsets(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { setBonusOne_contains_i: $searchTerm }
          { setBonusTwo_contains_i: $searchTerm }
          { setBonusThree_contains_i: $searchTerm }
          { setChestTalent_contains_i: $searchTerm }
          { setBackpackTalent_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
    }
    allArmourTypes(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { piece_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
    }
    allArmourTalents(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { piece_contains_i: $searchTerm }
          { type_contains_i: $searchTerm }
          { descriptionPVE_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
    }
    allWeaponTalents(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { type_contains_i: $searchTerm }
          { descriptionPVE_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
    }
    allExoticArmourPieces(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { piece_contains_i: $searchTerm }
          { coreOne_contains_i: $searchTerm }
          { coreTwo_contains_i: $searchTerm }
          { coreThree_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
    }
  }
`;

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
