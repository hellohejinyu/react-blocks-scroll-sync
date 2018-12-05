# react-blocks-scroll-sync

Synchronously scrolling multiple blocks.

## Install

``` shell
npm i --save react-blocks-scroll-sync
```

## Quick Overview
``` jsx
import Container from "react-blocks-scroll-sync";
const Block = Container.Block;

class Demo extends React.PureComponent {
  renderBox() {
    return new Array(100).fill(1).map((v, k) => {
      return (
        <div
          key={k}
          style={{
            width: 200,
            backgroundColor: '#'+ (Math.random() * 0xffffff << 0).toString(16),
            height: Math.floor(Math.random() * 300) + 200
          }}
        >
          {k}
        </div>
      );
    })
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Container>
          <Block>{this.renderBox()}</Block>
          <Block>{this.renderBox()}</Block>
          <Block>{this.renderBox()}</Block>
        </Container>
      </div>
    );
  }
}
```

<p align="center">
  <img src="./docs/images/example1.gif" style="border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, .2)" />
</p>

## Tips

⚠️ The number of child elements of each `<Block />` component need to be same.

