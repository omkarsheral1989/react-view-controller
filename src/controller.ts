import RVC_Component from './component';

export default class RVC_Controller<
  IProps,
  IState,
  Component extends RVC_Component<IProps, IState, RVC_Controller<IProps, IState, Component>>
> {

  public readonly component: Component;

  public constructor(component: Component) {
    this.component = component;
    component.state = this.getInitialState();
  }

  // noinspection JSMethodCanBeStatic
  public getInitialState(): IState {
    throw new Error('Override getInitialState()');
  }
  
  public get state(): Readonly<IState> {
    return this.component.state;
  }

  // TODO implement other overloads
  public setState<K extends keyof IState>(
    state: ((Pick<IState, K> | IState | null)) | (Pick<IState, K> | IState | null)
  ) {
    this.component.setState(state);
  }
  
  public get props(): Readonly<IProps> {
    return this.component.props;
  }

  public componentWillMount() {
  }

  public componentDidMount() {
  }


  public componentWillReceiveProps(nextProps: Readonly<IProps>) {
  }

  // noinspection JSMethodCanBeStatic
  public shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>) {
    return true;
  }

  public componentWillUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>) {
  }

  public componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>) {
  }

  public componentWillUnmount() {
  }
}
