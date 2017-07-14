const blur = {}

function setBlur (el, binding) {
  if (!binding.value) {
    el.style.filter = 'blur(3px)'
    el.style.cursor = 'not-allowed'
    el.querySelectorAll('button').forEach(button => {
      button.setAttribute('disabled', true)
    })
  }
}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding) {
      setBlur(el, binding)
    }
  })
}

export default blur
