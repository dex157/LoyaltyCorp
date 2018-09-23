<template>
  <div class="layout-base">

    <header class="layout-base__header">
      <slot name="header" />
    </header>

    <main class="layout-base__main">
      <slot><router-view /></slot>
    </main>

    <footer class="layout-base__footer">
      <slot name="footer" />
    </footer>

  </div>
</template>

<style lang="scss" src="./Base.scss"/>
