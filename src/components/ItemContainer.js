import React from 'react';
import Buttons from './Buttons';
import Radios from './Radios';

class ItemContainer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data : [],
        number : ''
      };
      this.reset = this.reset.bind(this);
      this.bubble = this.bubble.bind(this);
      this.wait = this.wait.bind(this);
      this.num = this.num.bind(this)
    }
    
    componentDidMount() {
      this.reset()
    }

    num(e) {
      let value = parseInt(e.target.value);
      this.setState({number : value})
      // this.reset()
    }

    reset() {
      const array = [];
      const num = this.state.number;
      console.log(num)
      let height = 0;

      if(window.innerWidth <= 400) {
        height = 270
      } else {
        height = 380;
      }


      for(let i = 0; i < num; i++) {
        const rando = Math.floor(Math.random() * height) + 1;
        array.push(rando);
      }

      this.setState({data: array});
    }

    wait(ms) {
      return new Promise(resolve => {
        setTimeout(() => { resolve('') }, ms)
      })
    }

    async bubble() {
      let i = 0
      const state = [...this.state.data]  
      while (i < state.length) {
        await this.wait(10)

        for (let b = 0; b < (state.length - i - 1); b++) {
          if (state[b] > state[b + 1]) {          

            [state[b], state[b + 1]] = [state[b + 1], state[b]]
          }
        }
        i += 1 
      this.setState({...this.state, data: state}) 
      }

    }

  
  render() {
    
    const array = this.state.data;

    return (
      <div>
        <div className='item-container'>
             {array.map((value, idx) => {
              return <div className='item' key={idx} style={{height: `${value}px`}}></div>
             })}
        </div>
        <Radios num={this.num}/>
        <Buttons reset={this.reset} bubble={this.bubble}/>
        {/* <Sort/> */}
      </div>
    )
  }
}

export default ItemContainer