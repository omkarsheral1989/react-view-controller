import * as React from 'react';
import RVC_Component from '../src/component';

import ControllerDemo from './controller-demo';

export interface IProps {
  p: number;
}

export interface IState {
  s1: number;
  s2: string;
}

export default class ComponentDemo extends RVC_Component<IProps, IState, ControllerDemo> {

  public getViewControllerClass() {
    return ControllerDemo;
  }

  public render() {
    console.log('props', this.props);
    console.log('state', this.state);

    return (
      <div>
        {JSON.stringify(this.state)}
        {JSON.stringify(this.props)}
      </div>
    );
  }
}
