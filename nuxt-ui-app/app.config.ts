export default defineAppConfig({
  ui: {
    primary: 'blue-chill',
    gray: 'neutral',
    card: {
      divide: '',
      background: 'bg-transparent dark:bg-transparent'
    },
    icon: {
      dynamic: true
    },
    formGroup: {
      label: {
        base: 'block font-medium text-primary-900 dark:text-primary-50'
      },
      default: {
        size: 'md'
      }
    }
  }
})