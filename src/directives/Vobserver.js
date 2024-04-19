import store from '../store/store'

export default {
  name: 'observer',
  mounted(el, binding) {
    const options = {
      rootMargin: '0px 0px 700px 0px',
      threshold: 0,
    }
    const callback = (entries) => {
      entries.forEach(({ isIntersecting } ) => {
          if (isIntersecting  && !store.state.isAnimsLoading ) 
          {  
            binding.value()
              }
            })
          }
          const observer = new IntersectionObserver(callback, options)
          observer.observe(el)
    }

};