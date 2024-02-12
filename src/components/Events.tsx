import React from 'react';

export function Events(props: { events: string[] }) {
  return (
    <ul>
    {
      props.events.map((event, index) =>
        <li key={ index }>{ event }</li>
      )
    }
    </ul>
  );
}