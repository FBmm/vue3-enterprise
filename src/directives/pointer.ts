import debounce from "lodash/debounce";
import { DirectiveBinding } from 'vue'

let pointerEl: HTMLDivElement

const movedPointerMounted = (el, binding) => {
  el.addEventListener('mouseenter', (e) => {
    console.log('来了', e)
    pointerEl = document.createElement('div')
    pointerEl.className = 'custom-pointer'
    document.body.appendChild(pointerEl)
    pointerEl.style.top = e.clientY + 'px'
    pointerEl.style.left = e.clientX + 'px'
  })
  el.addEventListener('mousemove', debounce((e) => {
    pointerEl.style.top = e.clientY + 10+ 'px'
    pointerEl.style.left = e.clientX + 10 + 'px'
  }, 1))
  el.addEventListener('mouseleave', (e) => {
    console.log('走了')
    pointerEl.className = ''
  })
}

const fixedPointerMounted = (el, binding: DirectiveBinding) => {
  const { value } = binding || {}
  const top = value?.top || '70'
  const left = value?.left || '70'
  el.addEventListener('mouseenter', (e) => {
    console.log('来了', e)
    pointerEl.className = 'custom-pointer'
    pointerEl.style.position = 'absolute'
    el.appendChild(pointerEl)
    pointerEl.style.top = top + 'px'
    pointerEl.style.left = left + 'px'
  })
  el.addEventListener('mouseleave', (e) => {
    console.log('走了')
    pointerEl.className = ''
  })
}

const setPointerBg = (el, url?: string) => {
  // el.style.background = `url(${require(url || '../assets/pointer.gif')}) center/cover`
}

const isShow = (bindingValue) => {
  if (bindingValue?.hasOwnProperty('show')) {
    return bindingValue.show
  } else {
    return bindingValue
  }
}

export default {
  install(app: any) {
    app.directive('pointer', {
      // 指令的定义
      mounted: function (el, binding: DirectiveBinding) {
        const { modifiers } = binding || {}
        pointerEl = document.createElement('div')
        setPointerBg(pointerEl)
        if (modifiers?.fixed) {
          fixedPointerMounted(el, binding)
        } else {
          el.style.cursor = 'none'
          movedPointerMounted(el, binding)
        }
      },
      updated(el, binding) {
        if (!pointerEl) return
        if (isShow(binding?.value)) {
          pointerEl.style.display = 'inline-block'
        } else {
          pointerEl.style.display = 'none'
        }
      }
    })
  }
}