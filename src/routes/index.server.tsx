import { useState } from 'react';
import Foo from '../components/Foo.client';

const prices = {
  subscribe: {
    qty: [
    {
      label: 1,
      strikethrough: '39.99',
      price: 34.99,
    },
    {
      label: 2,
      strikethrough: '79.98',
      price: 63.98,
    },
    {
      label: 3,
      strikethrough: '120',
      price: 90,
    },
  ]},
  onetime: {
    qty: [
    {
      label: 1,
      strikethrough: '',
      price: 39.99,
    },
    {
      label: 2,
      price: 69.98,
    },
    {
      label: 3,
      price: 99.00,
    },
  ]}
}



export default function Home() {
  
  return <div>
    <Foo />
  </div>;
}
