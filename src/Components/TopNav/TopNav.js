import BurgerIcon from './assets/burger.svg'
import CloseIcon from './assets/close.svg'

export default {
  name: 'TopNav',
  data() {
    return {
      isFolded: true,
      links: [
        {
          title: 'Home',
          url: '/'
        },
        {
          title: 'About us',
          url: '/about-us'
        },
        {
          title: 'Contact us',
          url: '/contact-us'
        }
      ]
    }
  },
  computed: {
    iconPath() {
      return this.isFolded ? BurgerIcon : CloseIcon
    }
  },
  methods: {
    toggleFold() {
      this.isFolded = !this.isFolded
    },
    foldNav() {
      this.isFolded = true
    }
  }
}
