import React from 'react';
import { gql } from '@apollo/client';
import styled from 'styled-components';
import {
  displayPercentage,
  hsDisplay,
  millisecondsToSeconds,
  humanReadableNumber,
} from '../../lib/displayNumbers';
import { titleCase } from '../../lib/displayStrings';
import { deAbbreviate } from '../../lib/abbreviationsDictionary';

export const SingleWeaponStyles = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  max-width: var(--maxWidth);
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  padding: 2rem;
  margin-bottom: 3rem;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;

  .single-weapon__content {
    display: flex;
    max-width: var(--maxWidth);
    justify-content: center;
    align-items: top;
    gap: 2rem;
    background: white;
    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .single-weapon__sub-content {
    display: flex;
    justify-content: space-between;
  }

  .single-weapon__details {
    flex-direction: column;
    margin-bottom: 2rem;
  }

  .single-weapon__title-bar {
    transform: skew(7deg);
    margin-bottom: 1rem;
  }

  .single-weapon__heading {
    margin: 0 1rem;
    margin-top: -3rem;
    background: var(--orange);
    display: inline;
    line-height: 1.3;
    font-size: clamp(2rem, 5vw, 4rem);
    color: var(--text);
    /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
    padding: 0 1rem;
  }

  .single-weapon__section-heading {
    margin: 0 1rem;
    margin-top: -3rem;
    background: var(--orange);
    display: inline;
    line-height: 1.3;
    font-size: clamp(2rem, 4vw, 3.5rem);
    color: var(--text);
    /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
    padding: 0 1rem;
  }

  .single-weapon__subheading {
    margin: 0 1rem;
    /* margin-top: 0rem; */
    background: var(--orange);
    display: inline;
    line-height: 2;
    font-size: clamp(1rem, 3vw, 2rem);
    font-weight: 600;
    color: var(--text);
    /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
    padding: 0 1rem;
  }

  ul {
    margin: 0;
    color: var(--text);
    font-weight: 400;
    font-size: 1.6rem;
    padding: 0;
    list-style-type: none;
  }

  li {
    margin: 0.75rem 0;
    /* padding: 0.5rem 0 0 1.5rem; */
    padding: 0 2.4rem;
  }

  p {
    color: var(--text);
    margin: 0.75rem 0;
    font-weight: 400;
    padding: 0 2.4rem;
    font-size: 1.6rem;
  }

  blockquote {
    color: var(--text);
    margin: 0.85rem 0;
    padding: 0 2.4rem;
    font-weight: 300;
    font-size: 1.6rem;
  }

  small {
    color: var(--text);
    font-size: 1.2rem;
    padding: 0 2.4rem;
  }

  .named-weapon {
    background: var(--namedGold);
  }

  .exotic-weapon {
    background: var(--exoticOrange);
  }

  @media (max-width: 35em) {
    padding: 0;
    .single-weapon__content {
      padding-top: 1rem;
      padding-bottom: 1rem;
      display: flex;
      flex-direction: column;
    }

    .single-weapon__sub-content {
      flex-direction: column;
    }
  }
`;

export const SINGLE_WEAPON_QUERY = gql`
  query SINGLE_WEAPON_QUERY($id: ID!) {
    allWeapons(where: { id: $id }) {
      id
      class
      model
      family
      magazineSize
      rpm
      modSlots
      reloadSpeed
      reloadSpeedFromEmpty
      accuracy
      stability
      optimalRange
      maxRange
      headshotMultiplier
      weaponBonusType
      maxBonusValue
      damageLevel40
      damageWt5
      flavourText
      isNamed
      isExotic
      weaponTalent {
        id
        name
        image {
          image {
            publicUrlTransformed
          }
        }
      }
      averageWeapon {
        id
        class
        classBonusType
        maxClassBonusValue
        modSlots
        rpm
        magazineSize
        headshotMultiplier
        accuracy
        stability
        optimalRange
        maxRange
        reloadSpeed
        reloadSpeedFromEmpty
        damageLevel40
        damageWT5
        weaponTalent {
          id
          name
          image {
            image {
              publicUrlTransformed
            }
          }
        }
        weaponThirdAttribute {
          id
          attribute
          valueLevel40
          valueWT5
          classARAttribute
          classLMGAttribute
          classMMRAttribute
          classPistolAttribute
          classRifleAttribute
          classShotgunAttribute
          classSMGAttribute
        }
      }
    }
  }
`;

export default function SingleWeapon({ weapon }) {
  return (
    <>
      <div className="single-weapon__content">
        <div className="single-weapon__details">
          <div className="single-weapon__title-bar">
            <h3 className="single-weapon__subheading">Base Damage</h3>
          </div>
          <p>{humanReadableNumber(weapon.damageLevel40)} (Level 40)</p>
          <p>{humanReadableNumber(weapon.damageWt5) || 'N/A'} (World Tier 5)</p>
          <div className="single-weapon__title-bar">
            <h3 className="single-weapon__subheading">Specifications</h3>
          </div>
          {weapon.maxBonusValue > 1 && (
            <p>
              {weapon.maxBonusValue}% {deAbbreviate(weapon.weaponBonusType)}
            </p>
          )}
          <p>{hsDisplay(weapon.headshotMultiplier)} x Headshot Multiplier</p>
          <p>{weapon.rpm} rounds per minute rate of fire</p>
          <p>{weapon.magazineSize} round magazine</p>
          {weapon.modSlots === 0 && <p>No adjustable modification slots</p>}
          {weapon.modSlots > 0 && <p>{weapon.modSlots} modification slots</p>}
          <p>{displayPercentage(weapon.accuracy)}% accuracy</p>
          <p>{displayPercentage(weapon.stability)}% stability</p>
          <p>{weapon.optimalRange}m optimal range</p>
          <p>{weapon.maxRange}m max range</p>
          <p>
            {millisecondsToSeconds(weapon.reloadSpeed)} seconds reload speed
          </p>
          <p>
            {millisecondsToSeconds(weapon.reloadSpeedFromEmpty)} seconds reload
            speed (empty magazine)
          </p>
          {(!weapon.accuracy || !weapon.stability) && (
            <>
              <small>Note: 0 indicates no value available</small>
            </>
          )}
        </div>
      </div>
    </>
  );
}
