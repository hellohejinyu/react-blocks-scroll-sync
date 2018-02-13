# react-blocks-scroll-sync

## Usage
``` js
import Container from "react-blocks-scroll-sync";
const Block = Container.Block;
```

``` jsx
// example
// write the following code in the render method

renderBox() {
    return new Array(100).fill(1).map((v, k) => {
        return <div key={k} style={{
            width: 200,
            height: Math.floor(Math.random() * 300) + 200
        }}>{k}</div>
    })
}

<Container>
    <Block>{this.renderBox()}</Block>
    <Block>{this.renderBox()}</Block>
    <Block>{this.renderBox()}</Block>
</Container>
```

![example](./docs/images/example1.gif)

### important: every Block component children's count should be same!

