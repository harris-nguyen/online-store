import React from 'react';

export default class GreetingLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      S: '',
      t: '',
      a: '',
      y: '',
      A: '',
      m: '',
      b: '',
      i: '',
      T: '',
      I: '',
      o: '',
      u: '',
      s: '',
      byHarris: ''
    };
    this.methodS = this.methodS.bind(this);
    this.methodt = this.methodt.bind(this);
    this.methoda = this.methoda.bind(this);
    this.methody = this.methody.bind(this);
    this.methodA = this.methodA.bind(this);
    this.methodM = this.methodM.bind(this);
    this.methodB = this.methodB.bind(this);
    this.methodi = this.methodi.bind(this);
    this.methodT = this.methodT.bind(this);
    this.methodI = this.methodI.bind(this);
    this.methodo = this.methodo.bind(this);
    this.methodu = this.methodu.bind(this);
    this.methods = this.methods.bind(this);
    this.methodPeriod = this.methodPeriod.bind(this);
    this.methodCopyRight = this.methodCopyRight.bind(this);
    this.byHarris = this.byHarris.bind(this);

    this.stopTimer = this.stopTimer.bind(this);
  }

  componentDidMount() {
    this.methodS();
    this.methodt();
    this.methoda();
    this.methody();
    this.methodA();
    this.methodM();
    this.methodB();
    this.methodi();
    this.methodT();
    this.methodI();
    this.methodo();
    this.methodu();
    this.methods();
    this.methodPeriod();
    this.methodCopyRight();
    this.byHarris();
  }

  methodS() {
    this.timer = setInterval(
      () =>
        this.setState({
          S: 'S'
        }),
      1000
    );
  }

  methodt() {
    this.timer = setInterval(
      () =>
        this.setState({
          t: 't'
        }),
      1200
    );
  }

  methoda() {
    this.timer = setInterval(
      () =>
        this.setState({
          a: 'a'
        }),
      1400
    );
  }

  methody() {
    this.timer = setInterval(
      () =>
        this.setState({
          y: 'y'
        }),
      1600
    );
  }

  methodA() {
    this.timer = setInterval(
      () =>
        this.setState({
          A: 'a'
        }),
      1900
    );
  }

  methodM() {
    this.timer = setInterval(
      () =>
        this.setState({
          m: 'm'
        }),
      2200
    );
  }

  methodB() {
    this.timer = setInterval(
      () =>
        this.setState({
          b: 'b'
        }),
      2400
    );
  }

  methodi() {
    this.timer = setInterval(
      () =>
        this.setState({
          i: 'i'
        }),
      2600
    );
  }

  methodT() {
    this.timer = setInterval(
      () =>
        this.setState({
          T: 't'
        }),
      2800
    );
  }

  methodI() {
    this.timer = setInterval(
      () =>
        this.setState({
          I: 'i'
        }),
      3000
    );
  }

  methodo() {
    this.timer = setInterval(
      () =>
        this.setState({
          o: 'o'
        }),
      3200
    );
  }

  methodu() {
    this.timer = setInterval(
      () =>
        this.setState({
          u: 'u'
        }),
      3400
    );
  }

  methods() {
    this.timer = setInterval(
      () =>
        this.setState({
          s: 's'
        }),
      3600
    );
  }

  methodPeriod() {
    this.timer = setInterval(
      () =>
        this.setState({
          period: '.'
        }),
      4400
    );
  }

  methodCopyRight() {
    this.timer = setInterval(
      () =>
        this.setState({
          copyRight: (
            <span className="numberOfDays ">
              {' '}&reg;
            </span>
          )
        }),
      5300
    );
  }

  byHarris() {
    this.timer = setInterval(
      () =>
        this.setState({
          byHarris: <span>{'by Harris Nguyen'} &copy; 2020</span>
        }),
      5300
    );
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="container text-center">
        <div className="">
          <div className="cardPadding">{''}</div>
          <div className="cardPadding">{''}</div>
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
            <div className="w-100">
              <div className="text-center align-items-center fontstyle">
                {this.state.S}
                {this.state.t}
                {this.state.a}
                {this.state.y} {this.state.A}
                {this.state.m}
                {this.state.b}
                {this.state.i}
                {this.state.T}
                {this.state.I}
                {this.state.o}
                {this.state.u}
                {this.state.s}
                {this.state.copyRight}
              </div>
            </div>
          </div>
        </div>
        <div className="text-center align-items-center byHarrisFontSize">
          <p> </p>
          {this.state.byHarris}
        </div>
        <div className="cardPadding">{''}</div>
        <div className="cardPadding">{''}</div>
        <div className="cardPadding">{''}</div>
        <div className="cardPadding">{''}</div>
        <div className="cardPadding">{''}</div>
        <div className="cardPadding">{''}</div>
      </div>
    );
  }
}
