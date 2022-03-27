import styled from 'styled-components';

const ItemColourStyles = styled.div`
  .gear-color {
    display: inline-block;
    height: 20px;
    width: 40px;
  }

  .high-end {
    background-color: var(--highEndGold);
  }

  .superior {
    background-color: var(--superior);
  }

  .specialized {
    background-color: var(--specialized);
  }

  .standard {
    background-color: var(--standard);
  }

  .gear-set {
    background-color: var(--gearsetGreen);
  }

  .exotic {
    background-color: var(--exoticOrange);
  }

  .named-item {
    background-color: var(--namedGold);
  }

  .weapon-damage {
    background-color: var(--damageRed);
  }

  .armour {
    background-color: var(--armorBlue);
  }

  .skill-tier {
    background-color: var(--skillYellow);
  }
`;

export default ItemColourStyles;
