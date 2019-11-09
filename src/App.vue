<template>
  <div id="app">
      <router-view/>
      <flash-message transitionName="flash" class="flashpool"></flash-message>
  </div>
</template>

<style lang="scss">
  body {
    background-color: #fcfbfe;
  }
</style>

<style lang="scss">
  .flashpool {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: fixed;
    top: 20px;
    right: 20px;
    max-height: 400px;
    width: 260px;
    -webkit-perspective: 400px;
    perspective: 400px;
  }

  .flashpool .flash__message {
    width: 260px;
    -webkit-transition: all 500ms;
    -o-transition: all 500ms;
    transition: all 500ms;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-family: 'Oxygen', sans-serif;
    font-size: 13px;
    line-height: 130%;
  }

  .flash-enter, .flash-leave-to {
    opacity: 0;
    -webkit-transform: rotateX(-30deg) scale(.88) translateY(-30px);
    transform: rotateX(-30deg) scale(.88) translateY(-30px);
  }

  .flash-leave-active {
    position: absolute;
  }
</style>
