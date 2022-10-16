import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';
import { Theme } from '@hom/theme'

const Burger = (props: SvgProps) => {
  const burgerFill = props.fill || Theme.colors.davysGrey;
  return (
    <Svg
      data-name="010---Burger"
      xmlns="http://www.w3.org/2000/svg"
      width={80.004}
      height={80}
      {...props}
    >
      <Path
        d="M0 72a8 8 0 0 0 8 8h64a8 8 0 0 0 3.347-15.267 6.667 6.667 0 0 0-.68-10.067 6.587 6.587 0 0 0 .213-10.493c5.973-2.813 7.64-10.827 0-16.853-8.213-6.427-19.467-9.773-33.547-9.987v-4H56a2.667 2.667 0 0 0 2.667-2.667v-8A2.667 2.667 0 0 0 56 0H40a1.333 1.333 0 0 0-1.333 1.333v16c-14.08.2-25.333 3.547-33.493 9.973-7.64 6.027-5.987 14.027-.013 16.867a6.667 6.667 0 0 0 .173 10.493 6.667 6.667 0 0 0-.72 10.067A8 8 0 0 0 0 72ZM41.333 2.667H56v8H41.333Zm-23.587 64 .347.48a4 4 0 0 0 6.48 0l.347-.48c50.667 0 47.307 0 48.067.093a5.053 5.053 0 0 1-4.733 2.573 11.373 11.373 0 0 0-6.227 1.773 6 6 0 0 1-6.227 0 12.173 12.173 0 0 0-12.693 0 5.92 5.92 0 0 1-6.213 0 12.173 12.173 0 0 0-12.693 0 6.04 6.04 0 0 1-6.227 0 11.413 11.413 0 0 0-6.267-1.773 5.053 5.053 0 0 1-4.694-2.573c.707-.093.2-.093 10.733-.093Zm4.667-1.08a1.333 1.333 0 0 1-2.16 0L13.333 56h16ZM74.667 60a4 4 0 0 1-4 4h-43.8l5.813-8h22.4l.347.48a4 4 0 0 0 6.48 0l.347-.48h8.413a4 4 0 0 1 4 4Zm-14.92-5.08a1.333 1.333 0 0 1-2.16 0l-6.92-9.587h16Zm13.76-2.76a4 4 0 0 1-2.84 1.173H64.2l5.813-8h.653a4 4 0 0 1 2.84 6.827ZM6.84 29.413c7.667-6.04 18.387-9.2 31.84-9.333v6.667a1.333 1.333 0 0 0 2.667 0V20c13.453.2 24.173 3.36 31.84 9.333 7.373 5.907 4.147 13.333-3.853 13.333H10.667c-8 0-11.187-7.467-3.84-13.253Zm-1.507 19.92a4 4 0 0 1 4-4H47.32l5.813 8h-43.8a4 4 0 0 1-4-4Zm1.16 7.84A4 4 0 0 1 9.333 56h.653l5.814 8H9.333a4 4 0 0 1-2.84-6.827ZM4.613 67.84A7.747 7.747 0 0 0 11.68 72a8.547 8.547 0 0 1 4.84 1.333 8.733 8.733 0 0 0 9.133 0 9.507 9.507 0 0 1 9.773 0 8.693 8.693 0 0 0 9.147 0 9.547 9.547 0 0 1 9.773 0 8.56 8.56 0 0 0 9.133 0A8.747 8.747 0 0 1 68.307 72a7.8 7.8 0 0 0 7.08-4.12A5.333 5.333 0 0 1 72 77.333H8a5.333 5.333 0 0 1-3.387-9.427Z"
        fill={burgerFill}
      />
      <Circle
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(6.667 34.667)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(13.333 37.333)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(12 29.333)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(29.333 24)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(25.333 30.667)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(18.667 33.333)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(32 34.667)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(38.667 37.333)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(38.667 30.667)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(24 37.333)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(33.333 28)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(20 26.667)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(70.667 34.667)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(64 37.333)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(65.333 29.333)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(48 24)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(52 30.667)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(58.667 33.333)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(45.333 34.667)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(53.333 37.333)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(44 28)"
        fill={burgerFill}
      />
      <Circle
        data-name="Oval"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(57.333 26.667)"
        fill={burgerFill}
      />
    </Svg>
  );
}

export {Burger};
