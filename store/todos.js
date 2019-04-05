import axios from 'axios'

export const state = () => ({
  title: false,
  list: [
    {
      title: 'Заголовок статьи 1',
      text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.',
    },
    {
      title: 'Заголовок статьи 2',
      text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.',
    }
  ]
})

export const mutations = {
  add (state, text) {
    
  },
  setTitle (state, text) {
    state.title = text;
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    //todo.done = !todo.done
  }
}