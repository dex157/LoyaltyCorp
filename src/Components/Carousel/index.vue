<template>
  <div class='carousel'>
    <img
      :class="{'carousel-icon--present': isLeftArrowPresent}"
      src='./assets/left-arrow.svg'
      class="carousel-icon carousel-icon--left"
      @click="moveLeft"
    >
    <img
      :class="{'carousel-icon--present': isRightArrowPresent}"
      src='./assets/right-arrow.svg'
      class="carousel-icon carousel-icon--right"
      @click="moveRight"
    >

    <div
      :class="{'carousel__item--hide': !isLeftArrowPresent}"
      class="carousel__item carousel__item--prev"
    >
      <div
        :style="{backgroundImage: 'url(' + prevImage + ')'}"
        class="carousel-image"
      />
    </div>

    <div
      class="carousel__item carousel__item--current"
    >
      <div
        :style="{backgroundImage: 'url(' + currentImage + ')'}"
        class="carousel-image"
      />
    </div>

    <div
      :class="{'carousel__item--hide': !isRightArrowPresent}"
      class="carousel__item carousel__item--next"
    >
      <div
        :style="{backgroundImage: 'url(' + nextImage + ')'}"
        class="carousel-image"
      />
    </div>


  </div>
</template>


<script src="./Carousel.js" />
<style lang="scss" src="./Carousel.scss" />
