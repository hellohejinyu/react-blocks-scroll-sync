# react-blocks-scroll-sync

## Usage
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

![example](./docs/images/example1.gif)

### important: every Block component children's count should be same!

