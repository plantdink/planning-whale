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
import {
  displayPercentage,
  hsDisplay,
  millisecondsToSeconds,
  humanReadableNumber,
} from '../lib/displayNumbers';
import HeadSEO from './HeadSEO';
import { deAbbreviate } from '../lib/abbreviationsDictionary';

export default function SingleAverageWeapon({ weapon }) {
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
      // legend: {
      //   position: 'top',
      // },
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
              `${humanReadableNumber(weapon.damageWT5) || 0}`,
              `${humanReadableNumber(weapon.damageLevel40)}`,
            ];

            let labelValues = [];

            if (context.dataset.label === weapon.class)
              labelValues = weaponDataSet;
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
    (weapon.accuracy / weapon.accuracy) * 100,
    (weapon.stability / weapon.stability) * 100,
    (weapon.magazineSize / weapon.magazineSize) * 100,
    (weapon.rpm / weapon.rpm) * 100,
    (weapon.optimalRange / weapon.optimalRange) * 100,
    (weapon.maxRange / weapon.maxRange) * 100,
    (weapon.modSlots / weapon.modSlots) * 100,
    (weapon.reloadSpeed / weapon.reloadSpeed) * 100,
    (weapon.reloadSpeedFromEmpty / weapon.reloadSpeedFromEmpty) * 100,
    (weapon.damageWT5 / weapon.damageWT5) * 100,
    (weapon.damageLevel40 / weapon.damageLevel40) * 100,
  ];

  const backgroundColorComputed = 'rgba(255, 109, 16, 0.6)';
  const borderColorComputed = 'rgba(255, 109, 16, 1)';

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: `${weapon.class}`,
        data: weaponDatasetComputed,
        backgroundColor: backgroundColorComputed,
        borderColor: borderColorComputed,
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <HeadSEO seoTag={weapon.model} />
      <div className="single-weapon__content">
        <div className="single-weapon__details">
          <div className="single-weapon__title-bar">
            <h1 className="single-weapon__heading">{weapon.class}</h1>
          </div>
          {weapon.flavourText !== '' && (
            <blockquote>{weapon.flavourText}</blockquote>
          )}

          <div className="single-weapon__title-bar">
            <h3 className="single-weapon__subheading">Base Damage</h3>
          </div>
          <p>{humanReadableNumber(weapon.damageLevel40)} (Level 40)</p>
          <p>{humanReadableNumber(weapon.damageWT5)} (World Tier 5)</p>
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
          <p> {weapon.magazineSize} round magazine</p>
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
