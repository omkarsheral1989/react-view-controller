import {Component} from 'react';
import RVC_Controller from './controller';

export default class RVC_Component<
  IProps,
  IState,
  Controller extends RVC_Controller<IProps, IState, RVC_Component<IProps, IState, Controller>>
> extends Component<IProps, IState> {

  public readonly controller: Controller;

  constructor(props: Partial<Readonly<IProps>>) {
    // noinspection JSCheckFunctionSignatures
    super(props as IProps);
    const viewControllerClass = this.getViewControllerClass();
    this.controller = new viewControllerClass(this);
  }

  // noinspection JSMethodCanBeStatic
  public getViewControllerClass(): new (component: any) => Controller {
    throw new Error('Override getViewControllerClass()');
  }

  public componentWillMount() {
    this.controller.componentWillMount();
  }

  public componentDidMount() {
    this.controller.componentDidMount();
  }

  public componentWillReceiveProps(nextProps: Readonly<IProps>) {
    this.controller.componentWillReceiveProps(nextProps);
  }

  public shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>) {
    return this.controller.shouldComponentUpdate(nextProps, nextState);
  }

  public componentWillUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>) {
    this.controller.componentWillUpdate(nextProps, nextState);
  }

  public componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>) {
    this.controller.componentDidUpdate(prevProps, prevState);
  }

  public componentWillUnmount() {
    this.controller.componentWillUnmount();
  }
}
