import React from 'react';
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
import { gql, useQuery } from '@apollo/client';
import DisplayError from './ErrorMessage';
import {
  displayPercentage,
  hsDisplay,
  millisecondsToSeconds,
  humanReadableNumber,
} from '../lib/displayNumbers';
import HeadSEO from './HeadSEO';
import { titleCase } from '../lib/displayStrings';
import { deAbbreviate } from '../lib/abbreviationsDictionary';
import SingleWeaponStyles from './styles/SingleWeaponStyles';
import LinkSmallWeaponTalent from './LinkSmallWeaponTalent';

export const SINGLE_WEAPON_QUERY = gql`
  query SINGLE_WEAPON_QUERY($id: ID!) {
    allWeapons(where: { id: $id }) {
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

export default function SingleWeapon({ id }) {
  const { data, loading, error } = useQuery(SINGLE_WEAPON_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const weapon = data.allWeapons[0];
  const avgWeapon = weapon.averageWeapon;

  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

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
      title: {
        display: true,
        text: `${weapon.model} stats compared to the average ${titleCase(
          avgWeapon.class
        )}`,
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

  // change the background colour of the chart dataset depending on weapon type
  let backgroundColorComputed = 'rgba(255, 175, 16, 0.6)';
  if (weapon.isExotic === 'YES')
    backgroundColorComputed = 'rgba(255, 111, 54, 0.6)';
  if (weapon.isNamed === 'YES')
    backgroundColorComputed = 'rgba(234, 162, 19, 0.6';

  // change the colour of the chart dataset border depending on weapon type
  let borderColorComputed = 'rgba(255, 175, 16, 1)';
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
        borderWidth: 1,
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
      <SingleWeaponStyles>
        <div className="single-weapon__title-bar">
          <h1
            className={`single-weapon__heading ${
              weapon.isNamed === 'YES' ? 'named-weapon' : null
            } ${weapon.isExotic === 'YES' ? 'exotic-weapon' : null}`}
          >
            {weapon.model}
          </h1>
        </div>
        <div className="single-weapon__content">
          <div className="single-weapon__details">
            {weapon.flavourText !== '' && (
              <blockquote>{weapon.flavourText}</blockquote>
            )}

            <p>
              {titleCase(weapon.class)} {weapon.family}
            </p>
            <h3 className="single-weapon__subheading">Base Damage</h3>
            <p>{humanReadableNumber(weapon.damageLevel40)} (Level 40)</p>
            <p>
              {humanReadableNumber(weapon.damageWt5) || 'N/A'} (World Tier 5)
            </p>
            <h3 className="single-weapon__subheading">Specifications</h3>
            {weapon.maxBonusValue > 1 && (
              <p>
                {weapon.maxBonusValue}% {deAbbreviate(weapon.weaponBonusType)}
              </p>
            )}
            <p>{hsDisplay(weapon.headshotMultiplier)} x Headshot Multiplier</p>
            <p>{weapon.rpm} rounds per minute rate of fire</p>
            <p> {weapon.magazineSize} round magazine</p>
            <p>{weapon.modSlots} modification slots</p>
            <p>{displayPercentage(weapon.accuracy)}% accuracy</p>
            <p>{displayPercentage(weapon.stability)}% stability</p>
            <p>{weapon.optimalRange}m optimal range</p>
            <p>{weapon.maxRange}m max range</p>
            <p>
              {millisecondsToSeconds(weapon.reloadSpeed)} seconds reload speed
            </p>
            <p>
              {millisecondsToSeconds(weapon.reloadSpeedFromEmpty)} seconds
              reload speed (empty magazine)
            </p>
          </div>
          <div>
            <Radar data={chartData} options={options} />
          </div>
        </div>
        <div className="single-weapon__title-bar">
          <h1 className="single-weapon__heading">Compatible Weapon Talents</h1>
          <LinkSmallWeaponTalent weapon={weapon} />
        </div>
      </SingleWeaponStyles>
    </>
  );
}
