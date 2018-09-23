const LeftArrowKeyCode = 37
const RightArrowKeyCode = 39

const imagesCount = 19

const imageStaticPathList = Array.from(
  new Array(imagesCount),
  (_, i) => `/assets/${String(i + 1).padStart(2, '0')}.jpg`
)

export default {
  name: 'Carousel',
  data() {
    return {
      focusIndex: 0,
      images: imageStaticPathList
    }
  },

  methods: {
    handleKeyDown(event) {
      const { keyCode } = event
      if (keyCode === LeftArrowKeyCode) {
        this.moveLeft()
      } else if (keyCode === RightArrowKeyCode) {
        this.moveRight()
      }
    },
    moveLeft() {
      this.focusIndex = Math.max(this.focusIndex - 1, 0)
    },
    moveRight() {
      this.focusIndex = Math.min(this.focusIndex + 1, imagesCount - 1)
    }
  },
  computed: {
    isLeftArrowPresent() {
      return this.focusIndex > 0
    },
    isRightArrowPresent() {
      return this.focusIndex < imagesCount - 1
    },
    prevImage() {
      if (this.focusIndex === 0) return null
      return this.images[this.focusIndex - 1]
    },
    currentImage() {
      return this.images[this.focusIndex]
    },
    nextImage() {
      if (this.focusIndex === imagesCount + 1) return null
      return this.images[this.focusIndex + 1]
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeyDown)
  },
  destroyed() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }
}
