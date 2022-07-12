# MakeCode bitwise operations
Bitwise integer operations for micro:bit MakeCode.


## Examples
```js

let x = bitwise.and(0x1014, 0x10) // x === 0x10
let y = bitwise.or(0x1000, 0x10) // y === 0x1010
let z = bitwise.xor(0x1014, 0x10) // z === 0x1004
let n = bitwise.not(0x1000) // n === -0x1001
```

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
