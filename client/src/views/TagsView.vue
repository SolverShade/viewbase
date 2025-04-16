<template>
  <title>TagsView</title>

  <body>
    <h1>CSS Display Examples</h1>

    <div class="container">
      <h2>Block</h2>
      <div class="block">I am a block element</div>
    </div>

    <div class="container">
      <h2>Inline</h2>
      <span class="inline">I am inline</span>
      <span class="inline">I am also inline</span>
    </div>

    <div class="container">
      <h2>Inline-Block</h2>
      <div class="inline-block">I am inline-block</div>
      <div class="inline-block">I am also inline-block</div>
    </div>

    <div class="container">
      <h2>Flex</h2>
      <div class="flex">
        <div>Flex Item 1</div>
        <div>Flex Item 2</div>
        <div>Flex Item 3</div>
      </div>
    </div>

    <div class="container">
      <h2>Grid</h2>
      <div class="grid">
        <div>Grid Item 1</div>
        <div>Grid Item 2</div>
        <div>Grid Item 3</div>
      </div>
    </div>

    <div class="container">
      <h2>Table</h2>
      <div class="table">
        <div class="table-row">
          <div class="table-cell">Cell 1</div>
          <div class="table-cell">Cell 2</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Cell 3</div>
          <div class="table-cell">Cell 4</div>
        </div>
      </div>
    </div>

    <div class="container">
      <h2>List Item</h2>
      <div class="list-item">I am a list item</div>
    </div>

    <div class="container">
      <h2>None</h2>
      <div class="none">You can't see me!</div>
    </div>

    <div class="container">
      <h2>Positioning</h2>
      <div class="relative">I am relatively positioned</div>
      <div class="absolute-container">
        <div class="absolute">I am absolutely positioned</div>
      </div>
      <div class="fixed">I am fixed to the viewport</div>
    </div>

    <div class="container">
      <h2>Hover Effects</h2>
      <div class="hover-box">Hover over me!</div>
    </div>

    <div class="container">
      <h2>Transitions</h2>
      <div class="transition-box">Hover to see transition</div>
    </div>

    <div class="container">
      <h2>Transformations</h2>
      <div class="transform-box">Hover to transform</div>
    </div>

  </body>
</template>

<script>
</script>

<style scoped>
.container {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
}

.block {
  display: block;
  background: lightblue;
  margin-bottom: 10px;
}

.inline {
  display: inline;
  background: lightgreen;
  margin-right: 10px;
}

.inline-block {
  display: inline-block;
  background: lightcoral;
  width: 100px;
  height: 50px;
  margin-right: 10px;
}

.flex {
  display: flex;
  background: lightgoldenrodyellow;
  gap: 10px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: lightpink;
  gap: 10px;
}

.table {
  display: table;
  background: lightgray;
  width: 100%;
}

.table-row {
  display: table-row;
}

.table-cell {
  display: table-cell;
  border: 1px solid #000;
  padding: 5px;
}

.list-item {
  display: list-item;
  list-style-type: disc;
  margin-left: 20px;
}

.none {
  display: none;
}

.relative {
  position: relative;
  background: lightblue;
  padding: 10px;
  margin-bottom: 10px;
}

.absolute-container {
  position: relative;
  height: 100px;
  background: lightgray;
  margin-bottom: 10px;
}

.absolute {
  position: absolute;
  top: 10px;
  left: 10px;
  background: lightcoral;
  padding: 5px;
}

.fixed {
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: lightgoldenrodyellow;
  padding: 5px;
}

/* Hover Effects */
.hover-box {
  background: lightgreen;
  padding: 10px;
  transition: background 0.3s;
}

.hover-box:hover {
  background: darkgreen;
  color: white;
}

/* Transitions */
.transition-box {
  background: lightpink;
  padding: 10px;
  transition: transform 0.3s, background 0.3s;
}

.transition-box:hover {
  transform: scale(1.2);
  background: hotpink;
}

/* Transformations */
.transform-box {
  background: lightblue;
  padding: 10px;
  transition: transform 0.3s;
}

.transform-box:hover {
  transform: rotate(15deg) translateX(10px);
}
</style>
