<template>
  <nav class="top-navigation">
    <ul
      :class="{'nav-list--folded': isFolded}"
      class="top-navigation__content nav-list"
      @click="foldNav"
    >

      <li
        v-for="link in links"
        :key="link.url"
        class="nav-list__element"
      >
        <router-link
          :to="link.url"
          class="link"
        >
          {{ link.title }}
        </router-link>
      </li>

    </ul>
    <img
      :src="iconPath"
      class="top-navigation__button navigation-button"
      @click.self="toggleFold"
    >
  </nav>
</template>

<script src="./TopNav.js" />
<style lang="scss" src="./TopNav.scss" />
