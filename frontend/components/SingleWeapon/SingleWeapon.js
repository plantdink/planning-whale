import React from 'react';
import { gql } from '@apollo/client';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import styled from 'styled-components';
import {
  displayPercentage,
  hsDisplay,
  millisecondsToSeconds,
  humanReadableNumber,
} from '../../lib/displayNumbers';
import HeadSEO from '../HeadSEO';
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
    display: grid;
    grid-auto-columns: 1fr 3fr;
    grid-auto-flow: column;
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

  .single-weapon__details {
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
        class
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
        damageLevel40
        damageWT5
      }
    }
  }
`;

export default function SingleWeapon({ weapon, avgWeapon }) {
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  // this sets the default size for the whole chart & tooltips, doesn't affect the individual point labels
  ChartJS.defaults.font.size = 14;

  const options = {
    responsive: true,
    scales: {
      r: {
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label(context) {
            const weaponDataSet = [
              `${displayPercentage(weapon.accuracy)}%`,
              `${displayPercentage(weapon.stability)}%`,
              weapon.magazineSize,
              weapon.rpm,
              `${weapon.optimalRange}m`,
              `${weapon.maxRange}m`,
              weapon.modSlots,
              `${millisecondsToSeconds(weapon.reloadSpeed)} sec`,
              `${millisecondsToSeconds(weapon.reloadSpeedFromEmpty)} sec`,
              `${humanReadableNumber(weapon.damageWt5) || 0}`,
              `${humanReadableNumber(weapon.damageLevel40)}`,
            ];

            const AverageWeaponDataSet = [
              `${displayPercentage(avgWeapon.accuracy)}%`,
              `${displayPercentage(avgWeapon.stability)}%`,
              avgWeapon.magazineSize,
              avgWeapon.rpm,
              `${avgWeapon.optimalRange}m`,
              `${avgWeapon.maxRange}m`,
              avgWeapon.modSlots,
              `${millisecondsToSeconds(avgWeapon.reloadSpeed)} sec`,
              `${millisecondsToSeconds(avgWeapon.reloadSpeedFromEmpty)} sec`,
              `${humanReadableNumber(avgWeapon.damageWT5)}`,
              `${humanReadableNumber(avgWeapon.damageLevel40)}`,
            ];

            let labelValues = [];

            if (context.dataset.label === weapon.model)
              labelValues = weaponDataSet;
            if (
              context.dataset.label === `Average ${titleCase(avgWeapon.class)}`
            )
              labelValues = AverageWeaponDataSet;
            const label = labelValues[context.dataIndex];
            return label;
          },
          beforeTitle(context) {
            return context[0].dataset.label;
          },
        },
      },
    },
  };

  const chartLabels = [
    'Accuracy',
    'Stability',
    'Magazine Size',
    'RPM',
    'Optimal Range',
    'Max Range',
    'Mod Slots',
    'Reload Speed',
    'Reload from empty',
    'Damage (World Tier 5)',
    'Damage (Level 40)',
  ];

  const weaponDatasetComputed = [
    (weapon.accuracy / avgWeapon.accuracy) * 100,
    (weapon.stability / avgWeapon.stability) * 100,
    (weapon.magazineSize / avgWeapon.magazineSize) * 100,
    (weapon.rpm / avgWeapon.rpm) * 100,
    (weapon.optimalRange / avgWeapon.optimalRange) * 100,
    (weapon.maxRange / avgWeapon.maxRange) * 100,
    (weapon.modSlots / avgWeapon.modSlots) * 100,
    (weapon.reloadSpeed / avgWeapon.reloadSpeed) * 100,
    (weapon.reloadSpeedFromEmpty / avgWeapon.reloadSpeedFromEmpty) * 100,
    (weapon.damageWt5 / avgWeapon.damageWT5) * 100,
    (weapon.damageLevel40 / avgWeapon.damageLevel40) * 100,
  ];

  const averageWeaponDatasetComputed = [
    (avgWeapon.accuracy / avgWeapon.accuracy) * 100,
    (avgWeapon.stability / avgWeapon.stability) * 100,
    (avgWeapon.magazineSize / avgWeapon.magazineSize) * 100,
    (avgWeapon.rpm / avgWeapon.rpm) * 100,
    (avgWeapon.optimalRange / avgWeapon.optimalRange) * 100,
    (avgWeapon.maxRange / avgWeapon.maxRange) * 100,
    (avgWeapon.modSlots / avgWeapon.modSlots) * 100,
    (avgWeapon.reloadSpeed / avgWeapon.reloadSpeed) * 100,
    (avgWeapon.reloadSpeedFromEmpty / avgWeapon.reloadSpeedFromEmpty) * 100,
    (avgWeapon.damageWT5 / avgWeapon.damageWT5) * 100,
    (avgWeapon.damageLevel40 / avgWeapon.damageLevel40) * 100,
  ];

  // change the background colour of the chart dataset fill depending on weapon type
  let backgroundColorComputed = 'rgba(255, 109, 16, 0.6)';
  if (weapon.isExotic === 'YES')
    backgroundColorComputed = 'rgba(255, 111, 54, 0.6)';
  if (weapon.isNamed === 'YES')
    backgroundColorComputed = 'rgba(234, 162, 19, 0.6';

  // change the colour of the chart dataset border line depending on weapon type
  let borderColorComputed = 'rgba(255, 109, 16, 1)';
  if (weapon.isExotic === 'YES') borderColorComputed = 'rgba(255, 111, 54, 1)';
  if (weapon.isNamed === 'YES') borderColorComputed = 'rgba(234, 162, 19, 1)';

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: `${weapon.model}`,
        data: weaponDatasetComputed,
        backgroundColor: backgroundColorComputed,
        borderColor: borderColorComputed,
        borderWidth: 2,
      },
      {
        label: `Average ${titleCase(avgWeapon.class)}`,
        data: averageWeaponDatasetComputed,
        backgroundColor: 'rgba(58, 58, 58, 0.3)',
        borderColor: 'rgba(58, 58, 58, 0.8)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <HeadSEO seoTag={weapon.model} />
      <div className="single-weapon__content">
        <div className="single-weapon__details">
          <div className="single-weapon__title-bar">
            <h1 className="single-weapon__heading">{weapon.model}</h1>
          </div>
          {(weapon.flavourText !== '' || null) && (
            <blockquote>{weapon.flavourText}</blockquote>
          )}

          <p>
            {titleCase(weapon.class)} {weapon.family}
          </p>
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
        <div className="single-weapon__details">
          <div className="single-weapon__title-bar">
            <h3 className="single-weapon__subheading">Stats Comparison</h3>
          </div>

          <Radar data={chartData} options={options} />
        </div>
      </div>
    </>
  );
}
