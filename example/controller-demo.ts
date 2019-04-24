import RVC_Controller from '../src/controller';

import ComponentDemo, {IProps, IState} from './component-demo';


export default class ControllerDemo extends RVC_Controller<IProps, IState, ComponentDemo> {
  public getInitialState(): IState {
    return {
      s1: 2,
      s2: 'omkar2',
    };
  }

  public componentDidMount() {
    this.setState({
      s1: 4,
      s2: 'omkar3',
    });
  }
}
