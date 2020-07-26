

import * as React from 'react';

import {IInfoIisState, } from '../IInfoIisState';

import { ILink, IUser, } from '../IReUsableInterfaces';

import { IInfoIisProps } from '../IInfoIisProps';

import { Slider, ISliderProps } from 'office-ui-fabric-react/lib/Slider';

import styles from '../InfoIis.module.scss';


export function createSlider(parentProps:IInfoIisProps , parentState: IInfoIisState, _onChange){


  if ( parentState.currentTimePicker !== 'slider') { return ""; }
  let maxTime = parentProps.timeSliderMax;
  return (
    <div style={{minWidth: 400, }}>
      <Slider 
      label={ ((parentState.timeSliderValue < 0)  ? "Start time is in the past" : "End time is Back to the future" ) }
      min={ -1 * maxTime } 
      max={ maxTime } 
      step={ parentProps.timeSliderInc } 
      defaultValue={ 0 } 
      valueFormat={value => `${value} mins`}
      showValue 
      originFromZero
      onChange={_onChange}
     />

    </div>

  );

}

/*
function _onChange(ev: React.FormEvent<HTMLInputElement>, option: IChoiceGroupOption): void {
  console.dir(option);
}
*/