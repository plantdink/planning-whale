import React from 'react';
import { gql } from '@apollo/client';
import {
  displayPercentage,
  hsDisplay,
  millisecondsToSeconds,
  humanReadableNumber,
} from '../../lib/displayNumbers';
import { deAbbreviate } from '../../lib/abbreviationsDictionary';

export const SINGLE_AVERAGE_WEAPON_QUERY = gql`
  query SINGLE_AVERAGE_WEAPONS_QUERY($id: ID!) {
    allAverageWeapons(where: { id: $id }) {
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
      image {
        image {
          publicUrlTransformed
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
`;

export default function SingleAverageWeapon({ weapon }) {
  return (
    <>
      <div className="single-weapon__details">
        {weapon.flavourText && <blockquote>{weapon.flavourText}</blockquote>}

        <div className="single-weapon__title-bar">
          <h3 className="single-weapon__subheading">Base Damage</h3>
        </div>
        <ul>
          <li>{humanReadableNumber(weapon.damageLevel40)} (Level 40)</li>
          <li>{humanReadableNumber(weapon.damageWT5)} (World Tier 5)</li>
        </ul>
        <div className="single-weapon__title-bar">
          <h3 className="single-weapon__subheading">Specifications</h3>
        </div>
        <ul>
          {weapon.maxClassBonusValue > 1 && (
            <li>
              {weapon.maxClassBonusValue}% {deAbbreviate(weapon.classBonusType)}
            </li>
          )}
          <li>{hsDisplay(weapon.headshotMultiplier)} x Headshot Multiplier</li>
          <li>{weapon.rpm} rounds per minute rate of fire</li>
          <li> {weapon.magazineSize} round magazine</li>
          {weapon.modSlots === 0 && <li>No adjustable modification slots</li>}
          {weapon.modSlots > 0 && <li>{weapon.modSlots} modification slots</li>}
          <li>{displayPercentage(weapon.accuracy)}% accuracy</li>
          <li>{displayPercentage(weapon.stability)}% stability</li>
          <li>{weapon.optimalRange}m optimal range</li>
          <li>{weapon.maxRange}m max range</li>
          <li>
            {millisecondsToSeconds(weapon.reloadSpeed)} seconds reload speed
          </li>
          <li>
            {millisecondsToSeconds(weapon.reloadSpeedFromEmpty)} seconds reload
            speed (empty magazine)
          </li>
        </ul>
        {(!weapon.accuracy || !weapon.stability) && (
          <>
            <small>Note: 0 indicates no value available</small>
          </>
        )}
      </div>
    </>
  );
}
